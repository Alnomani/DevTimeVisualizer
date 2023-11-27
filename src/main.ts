import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import GUI, { Controller } from "lil-gui";

import "./style.css";
import * as colors from "./ColorConstants.ts";
import { Vector3, GeoType, AxisSettings } from "./CustomTypes.ts";
import Graph3D from "./Graph3D.ts";

const showDebugGUI: boolean = false;
const zFightingConstant = 0.01;

// Axis length is in world units
const axisInfo: AxisSettings = {
    xAxisLength: 2.5,
    yAxisLength: 2.1,
    zAxisLength: 2.1,
    desiredXAxis: 100,
    desiredYAxis: 20,
    desiredZAxis: 20,
};

const guiSettings = {
    boxInputWidth: Math.round(axisInfo.desiredXAxis / axisInfo.xAxisLength),
    boxInputHeight: Math.round(axisInfo.desiredYAxis / axisInfo.yAxisLength),
    boxInputDepth: Math.round(axisInfo.desiredZAxis / axisInfo.zAxisLength),
    members: 1,
    formula: "",
    months: "",
    boxOpacity: 0.6,
    debug: displayCameraInfo,
    formulaDisplay: () => {},
    monthsDisplay: () => {},
    toggleOrbitButton: toggleOrbitControls,
};

let formulaController: Controller | null = null;
let monthController: Controller | null = null;
updateFormula();

const scene: THREE.Scene = new THREE.Scene();
scene.background = new THREE.Color(colors.white);

const canvas = <HTMLCanvasElement>document.querySelector("#visualizerCanvas");
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

const fov: number = 20;
const aspectRatio: number = canvas.clientWidth / canvas.clientHeight;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);
camera.position.set(7.3, 5.3, -8.3);
camera.rotation.set(-2.58, 0.64, 2.78);

const controls = new OrbitControls(camera, canvas);
controls.update();
controls.enabled = false;

setupGui();

const boxComponents = createBoxGeometry();
const boxOutline = createBoxOutline();

adjustForRoundingErrors();

addAllElementsToScene();
animate();

function toggleOrbitControls() {
    controls.enabled = !controls.enabled;
}

function adjustForRoundingErrors() {
    updateBoxWidth();
    updateBoxHeight();
    updateBoxDepth();
}

function addAllElementsToScene() {
    scene.add(boxOutline);
    boxComponents.forEach((side) => {
        scene.add(side);
    });

    addLightAtVector3([-1, 2, 4]);
    addLightAtVector3([1, -1, -2]);

    const mainGraph: Graph3D = new Graph3D(scene, axisInfo);
    mainGraph.draw();
}

function updateFormula() {
    // The right part of the semicolons are not types but aliases.
    const {
        boxInputWidth: w,
        boxInputHeight: h,
        boxInputDepth: d,
        members,
    } = guiSettings;
    const result: number = (w * h * (d + 1)) / members / 100;
    guiSettings.formula = `${w} x ${h} x (${d} + 1) % ${members} % 100 
    = <b>${result.toFixed(2)} Years</b>`;
    guiSettings.months = `<b>${(result * 12).toFixed(0)} Months</b>`;
    if (formulaController) {
        formulaController.name(guiSettings.formula);
        monthController?.name(guiSettings.months);
    }
}

function updateBoxWidth() {
    boxOutline.scale.x = getWorldUnitWidth();
    adjustPosition(boxOutline);
    updateFormula();
    boxComponents.forEach((side) => {
        side.scale.x = getWorldUnitWidth();
        adjustPosition(side);
    });
}

function updateBoxHeight() {
    boxOutline.scale.y = getWorldUnitHeight();
    adjustPosition(boxOutline);
    updateFormula();
    boxComponents.forEach((side) => {
        side.scale.y = getWorldUnitHeight();
        adjustPosition(side);
    });
}

function updateBoxDepth() {
    boxOutline.scale.z = getWorldUnitDepth();
    adjustPosition(boxOutline);
    updateFormula();
    boxComponents.forEach((side) => {
        side.scale.z = getWorldUnitDepth();
        adjustPosition(side);
    });
}

function setupGui() {
    const gui = new GUI({
        container: <HTMLCanvasElement>document.getElementById("forms"),
        title: "Product Scope",
    });
    setupDevVariablesGui(gui);

    if (showDebugGUI) {
        setupDebugSettingsGUI(gui);
    }
}

function setupDevVariablesGui(gui: GUI) {
    // Slider starting from 5 to desiredXAxis, with 5 step increments
    const { desiredXAxis, desiredYAxis, desiredZAxis } = axisInfo;
    gui.add(guiSettings, "boxInputHeight", 1, desiredYAxis, 1)
        .name("Features")
        .onChange(updateBoxHeight);

    gui.add(guiSettings, "boxInputWidth", 5, desiredXAxis, 1)
        .name("Content")
        .onChange(updateBoxWidth);

    gui.add(guiSettings, "boxInputDepth", 0, desiredZAxis, 1)
        .name("Unexplored Territory")
        .onChange(updateBoxDepth);

    const devFolder = gui.addFolder("Project Scope");
    
    devFolder.add(guiSettings, "members")
        .min(1)
        .step(1)
        .name("Team Size")
        .onChange(updateFormula);
    
    formulaController = devFolder.add(guiSettings, "formulaDisplay");
    formulaController.name(guiSettings.formula).listen().disable();

    monthController = devFolder.add(guiSettings, "monthsDisplay");
    monthController.name(guiSettings.months).listen().disable();
}

function setupDebugSettingsGUI(gui: GUI) {
    const colorFormats = {
        string: "#93c54b",
    };
    const folder = gui.addFolder("Debug Settings");
    folder
        .add(guiSettings, "boxOpacity", 0, 1, 0.01)
        .name("Cuboid Opacity")
        .onChange(updateBoxOpacity);

    folder
        .addColor(colorFormats, "string")
        .name("Cuboid Color")
        .onChange(updateBoxColor);
    folder.add(guiSettings, "debug").name("Camera info in Console");
    folder.add(guiSettings, "toggleOrbitButton").name("Toggle Orbit Controls");
}

function updateBoxOpacity(inputVal: number) {
    boxComponents.forEach((side) => {
        // Typescript types problem. Output is correct.
        // it doesn't know if material is an array or not.
        // Added hack.
        (<any>side.material).transparent = true;
        (<any>side.material).opacity = inputVal;
    });
}

function updateBoxColor(inputVal: number) {
    // Typescript types problem. Output is correct.
    boxComponents.forEach((side) => {
        (<any>side.material).color = new THREE.Color(inputVal);
    });
}

function createBoxGeometry() {
    let boxSides: THREE.Mesh[] = [];
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    console.log(geometry);
    [THREE.BackSide, THREE.FrontSide].forEach((side, i) => {
        const material = new THREE.MeshPhongMaterial({
            color: new THREE.Color(colors.green),
            opacity: guiSettings.boxOpacity,
            transparent: true,
            side,
            depthTest: false,
        });
        const box = new THREE.Mesh(geometry, material);
        box.renderOrder = 2 + i;
        adjustPosition(box);
        boxSides.push(box);
    });
    return boxSides;
}

function adjustPosition(geometry: GeoType) {
    const { w, h, d } = {
        w: getWorldUnitWidth() / 2 + zFightingConstant,
        h: getWorldUnitHeight() / 2,
        d: getWorldUnitDepth() / 2 - zFightingConstant,
    };
    geometry.position.set(w, h, d);
}

function createBoxOutline() {
    var boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    var edgesGeometry = new THREE.EdgesGeometry(boxGeometry);
    const boxOutline = new THREE.LineSegments(
        edgesGeometry,
        new THREE.LineBasicMaterial({
            color: new THREE.Color("black"),
            depthTest: false,
        })
    );
    adjustPosition(boxOutline);
    boxOutline.renderOrder = 4;
    return boxOutline;
}

function addLightAtVector3(loc: Vector3) {
    const light = new THREE.DirectionalLight(colors.white, 6);
    light.position.set(loc[0], loc[1], loc[2]);
    scene.add(light);
}

function getWorldUnitWidth(): number {
    const { xAxisLength, desiredXAxis } = axisInfo;
    return (xAxisLength / desiredXAxis) * guiSettings.boxInputWidth;
}

function getWorldUnitHeight(): number {
    const { yAxisLength, desiredYAxis } = axisInfo;
    return (yAxisLength / desiredYAxis) * guiSettings.boxInputHeight;
}

function getWorldUnitDepth(): number {
    const { zAxisLength, desiredZAxis } = axisInfo;
    return -1 * (zAxisLength / desiredZAxis) * (guiSettings.boxInputDepth + 1);
}

function resizeRendererToDisplaySize() {
    const pixelRatio = window.devicePixelRatio;
    const width = (canvas.clientWidth * pixelRatio) | 0;
    const height = (canvas.clientHeight * pixelRatio) | 0;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
        renderer.setSize(width, height, false);
    }
    return needResize;
}

function animate() {
    requestAnimationFrame(animate);
    if (resizeRendererToDisplaySize()) {
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }
    renderer.render(scene, camera);
}

function displayCameraInfo() {
    console.log("===================================");
    let vector = new THREE.Vector3(0, 0, -1);
    vector.applyQuaternion(camera.quaternion);

    let infoString = "";
    infoString += displayVector("Camera Position", camera.position);
    infoString += displayVector("Lookat", vector);
    infoString += displayVector("Cam Rotation", camera.rotation);
    console.log(infoString);
}

function displayVector(label: string, vector: THREE.Vector3 | THREE.Euler) {
    let { x, y, z } = vector;
    const displayString =
        label + `: ${x.toFixed(2)}, ${y.toFixed(2)}, ${z.toFixed(2)}\n`;
    return displayString;
}
