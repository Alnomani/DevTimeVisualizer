import "./style.css";
import * as THREE from "three";
import GUI, { Controller } from "lil-gui";
import * as colors from "./ColorConstants.ts";
import { TextSettings, LineSettings, Vector3, GeoType } from "./CustomTypes.ts";

// Types not working correcly.
import { Text } from "troika-three-text";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Line2 } from "three/addons/lines/Line2.js";
import { LineMaterial } from "three/addons/lines/LineMaterial.js";
import { LineGeometry } from "three/addons/lines/LineGeometry.js";

const showDebugGUI: boolean = true;

const axisLineWidth: number = 0.005;
const gridLineWidth: number = axisLineWidth / 10;
const gridLineColor: number = 0xd0d0d0;
const standardFontSize: number = 0.1;

// In world units
const xAxisLength: number = 2.5;
const yAxisLength: number = 2.1;
const zAxisLength: number = 2.1;
const zFightingConstant = 0.01;

const desiredXAxis: number = 200;
const desiredYAxis: number = 20;
const desiredZAxis: number = 20;

const guiSettings = {
    boxInputWidth: Math.round(desiredXAxis / xAxisLength),
    boxInputHeight: Math.round(desiredYAxis / yAxisLength),
    boxInputDepth: Math.round(desiredZAxis / zAxisLength),
    members: 5,
    formula: "",
    boxOpacity: 0.6,
    debug: displayCameraInfo,
    formulaDisplay: emptyFunction,
    toggleOrbitButton: toggleOrbitControls,
};

let formulaController: Controller | null = null;

function emptyFunction() {}
updateFormula();

// fov, aspect, near, far
const fov: number = 20;
const aspectRatio: number = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;

const scene: THREE.Scene = new THREE.Scene();
const canvas = <HTMLCanvasElement>document.querySelector("#c");
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
const camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);
camera.aspect = canvas.clientWidth / canvas.clientHeight;
camera.updateProjectionMatrix();
const controls = new OrbitControls(camera, canvas);
controls.update();
controls.enabled = false;

scene.background = new THREE.Color(colors.white);

// Current camera angle
camera.position.set(7.3, 5.3, -8.3);
camera.rotation.set(-2.58, 0.64, 2.78);

displayCameraInfo();
setupGui();

const boxComponents = createBoxGeometry();
const boxOutline = createBoxOutline();
let boldFontSize = 0.11;
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

function getWorldUnitWidth(): number {
    return (xAxisLength / desiredXAxis) * guiSettings.boxInputWidth;
}

function getWorldUnitHeight(): number {
    return (yAxisLength / desiredYAxis) * guiSettings.boxInputHeight;
}

function getWorldUnitDepth(): number {
    return -1 * (zAxisLength / desiredZAxis) * guiSettings.boxInputDepth;
}

function addAllElementsToScene() {
    scene.add(boxOutline);
    boxComponents.forEach((side) => {
        scene.add(side);
    });

    addLightAtVector3([-1, 2, 4]);
    addLightAtVector3([1, -1, -2]);

    drawZAxisMainLine();
    drawYAxisMainLine();
    drawXAxisMainLine();

    drawXAxisLabelText();
    drawZAxisLabelText();
    drawYAxisLabelText();

    drawAxisMarkers();
    drawGridLines();
}

function drawXAxisMainLine() {
    drawLine({
        sourceVector3: [0, 0, 0],
        destinationVector3: [xAxisLength, 0, 0],
        hexColor: colors.blue,
        lineWidth: axisLineWidth,
        renderOrder: 0,
    });
}

function drawYAxisMainLine() {
    drawLine({
        sourceVector3: [0, 0, 0],
        destinationVector3: [0, 0, -zAxisLength],
        hexColor: colors.red,
        lineWidth: axisLineWidth,
        renderOrder: 0,
    });
}

function drawZAxisMainLine() {
    drawLine({
        sourceVector3: [0, 0, 0],
        destinationVector3: [0, yAxisLength, 0],
        hexColor: colors.green,
        lineWidth: axisLineWidth,
        renderOrder: 0,
    });
}

function drawYAxisLabelText() {
    drawText({
        location: [0.21, yAxisLength / 2, 0],
        text: "Features",
        anchor: "center",
        fontSize: boldFontSize,
        fontWeight: "bold",
        rotationVector: [0, Math.PI, Math.PI / 2],
    });
}

function drawZAxisLabelText() {
    drawText({
        location: [0, 0.21, -zAxisLength / 2],
        text: "Unexplored",
        anchor: "center",
        fontSize: boldFontSize,
        fontWeight: "bold",
        rotationVector: [0, Math.PI / 2, 0],
    });
}

function drawXAxisLabelText() {
    drawText({
        location: [xAxisLength / 2, 0.21, 0],
        text: "Content",
        anchor: "center",
        fontSize: boldFontSize,
        fontWeight: "bold",
        rotationVector: [0, Math.PI, 0],
    });
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

function updateFormula() {
    // The right part of the semicolons are not types but aliases.
    const {
        boxInputWidth: w,
        boxInputHeight: h,
        boxInputDepth: d,
        members,
    } = guiSettings;
    const result: number = (w * h * d) / members / 100;
    guiSettings.formula = `${w} x ${h} x ${d} % ${members} % 100 
    = ${result.toFixed(2)} years`;
    if (formulaController) {
        formulaController.name(guiSettings.formula);
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
        container: <HTMLCanvasElement>document.getElementById("app"),
        title: "Development Time Variables",
    });
    setupDevVariablesGui(gui);

    if (showDebugGUI) {
        setupDebugSettingsGUI(gui);
    }
}

function setupDevVariablesGui(gui: GUI) {
    // Slider starting from 5 to desiredXAxis, with 5 step increments
    gui.add(guiSettings, "boxInputWidth", 5, desiredXAxis, 5)
        .name("Content")
        .onChange(updateBoxWidth);

    gui.add(guiSettings, "boxInputHeight", 1, desiredYAxis, 1)
        .name("Features")
        .onChange(updateBoxHeight);

    gui.add(guiSettings, "boxInputDepth", 1, desiredZAxis, 1)
        .name("Unexplored Territory")
        .onChange(updateBoxDepth);

    gui.add(guiSettings, "members")
        .min(1)
        .step(1)
        .name("Members")
        .onChange(updateFormula);

    const devFolder = gui.addFolder("Development Time");
    formulaController = devFolder.add(guiSettings, "formulaDisplay");
    formulaController.name(guiSettings.formula).listen().disable();
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

function drawAxisMarkers() {
    const markerLength: number = 0.03;
    drawZAxisTextNMarker(markerLength);
    drawYAxisTextNMarker(markerLength);
    drawXAxisTextNMarker(markerLength);
}

function drawGridLines() {
    drawXAxisGridLines(xAxisLength / 10);
    drawYAxisGridLines(yAxisLength / 10);
    drawZAxisGridLines(zAxisLength / 10);
}

function drawXAxisGridLines(interval: number) {
    for (let i = interval; i <= xAxisLength; i += interval) {
        drawLine({
            sourceVector3: [i, 0, 0],
            destinationVector3: [i, yAxisLength, 0],
            hexColor: gridLineColor,
            lineWidth: gridLineWidth,
            renderOrder: -1,
        });
        drawLine({
            sourceVector3: [i, 0, 0],
            destinationVector3: [i, 0, -zAxisLength],
            hexColor: gridLineColor,
            lineWidth: gridLineWidth,
            renderOrder: -1,
        });
    }
}

function drawYAxisGridLines(interval: number) {
    for (let i = interval; i <= zAxisLength; i += interval) {
        drawLine({
            sourceVector3: [0, i, 0],
            destinationVector3: [xAxisLength, i, 0],
            hexColor: gridLineColor,
            lineWidth: gridLineWidth,
            renderOrder: -1,
        });
        drawLine({
            sourceVector3: [0, i, 0],
            destinationVector3: [0, i, -zAxisLength],
            hexColor: gridLineColor,
            lineWidth: gridLineWidth,
            renderOrder: -1,
        });
    }
}

function drawZAxisGridLines(interval: number) {
    for (let i = interval; i <= zAxisLength; i += interval) {
        drawLine({
            sourceVector3: [0, 0, -i],
            destinationVector3: [xAxisLength, 0, -i],
            hexColor: gridLineColor,
            lineWidth: gridLineWidth,
            renderOrder: -1,
        });
        drawLine({
            sourceVector3: [0, 0, -i],
            destinationVector3: [0, yAxisLength, -i],
            hexColor: gridLineColor,
            lineWidth: gridLineWidth,
            renderOrder: -1,
        });
    }
}

function drawXAxisTextNMarker(markerLength: number) {
    const interval: number = xAxisLength / 10;
    const realXInterval: number = desiredXAxis / 10;
    let realX: number = 0;
    for (let i = 0; i <= xAxisLength; i += interval) {
        drawLine({
            sourceVector3: [i, -markerLength, 0],
            destinationVector3: [i, 0, 0],
            hexColor: colors.blue,
            lineWidth: axisLineWidth,
            renderOrder: 0,
        });
        drawText({
            location: [i, -markerLength, 0],
            text: realX.toString(),
            anchor: "center",
            fontSize: standardFontSize,
            fontWeight: "normal",
            rotationVector: [0, Math.PI, 0],
        });
        realX += realXInterval;
    }
}

function drawYAxisTextNMarker(markerLength: number) {
    const interval: number = yAxisLength / 10;
    const realYInterval: number = desiredYAxis / 10;
    let realY: number = 0;
    for (let i = 0; i <= yAxisLength; i += interval) {
        drawLine({
            sourceVector3: [-markerLength, i, 0],
            destinationVector3: [0, i, 0],
            hexColor: colors.green,
            lineWidth: axisLineWidth,
            renderOrder: 0,
        });
        drawText({
            location: [-markerLength - 0.12, i + 0.05, 0],
            text: realY.toString(),
            anchor: "center",
            fontSize: standardFontSize,
            fontWeight: "normal",
            rotationVector: [0, Math.PI - Math.PI / 4, 0],
        });
        realY += realYInterval;
    }
}

function drawZAxisTextNMarker(markerLength: number) {
    const interval: number = zAxisLength / 10;
    const realZInterval: number = desiredZAxis / 10;
    let realZ: number = realZInterval;
    for (let i = interval; i <= zAxisLength; i += interval) {
        drawLine({
            sourceVector3: [0, -markerLength, -i],
            destinationVector3: [0, 0, -i],
            hexColor: colors.red,
            lineWidth: axisLineWidth,
            renderOrder: 0,
        });
        drawText({
            location: [0, -markerLength, -i],
            text: realZ.toString(),
            anchor: "center",
            fontSize: standardFontSize,
            fontWeight: "normal",
            rotationVector: [0, Math.PI / 2, 0],
        });
        realZ += realZInterval;
    }
}

function drawText(textSettings: TextSettings) {
    // console.log(textSettings);
    const { location, text, anchor, fontSize, fontWeight, rotationVector } =
        textSettings;
    const myText = new Text(text);
    myText.text = text;
    myText.fontSize = fontSize;
    myText.position.set(location[0], location[1], location[2]);
    myText.color = colors.black;
    myText.anchorX = anchor;
    myText.anchorY = "center";
    myText.renderOrder = 1;
    myText.material.depthTest = false;
    myText.fontWeight = fontWeight;
    myText.rotation.set(
        rotationVector[0],
        rotationVector[1],
        rotationVector[2]
    );
    scene.add(myText);
    myText.sync();
}

function drawLine(lineSettings: LineSettings) {
    const {
        sourceVector3,
        destinationVector3,
        hexColor,
        lineWidth,
        renderOrder,
    } = lineSettings;
    const lineGeo = new LineGeometry();
    lineGeo.setPositions([...sourceVector3, ...destinationVector3]);
    const line_material = new LineMaterial({
        linewidth: lineWidth,
        color: hexColor,
        depthTest: false,
    });
    const line = new Line2(lineGeo, line_material);
    line.renderOrder = renderOrder;
    scene.add(line);
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
