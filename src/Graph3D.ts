import { Line2 } from "three/addons/lines/Line2.js";
import { LineMaterial } from "three/addons/lines/LineMaterial.js";
import { LineGeometry } from "three/addons/lines/LineGeometry.js";
// Types not working correcly.
import { Text } from "troika-three-text";
import { TextSettings, LineSettings, AxisSettings } from "./CustomTypes.ts";
import * as colors from "./ColorConstants.ts";
import { Scene } from "three";

export default class Graph3D {
    private axisLineWidth: number = 0.005;
    private gridLineColor: number = 0xd0d0d0;
    private standardFontSize: number = 0.1;
    private boldFontSize: number = 0.11;
    private markerLength: number = 0.03;
    private gridLineWidth: number;
    private axisSettings: AxisSettings;
    private scene: Scene;

    constructor(scene: Scene, axisSettings: AxisSettings) {
        this.scene = scene;
        this.axisSettings = axisSettings;
        this.gridLineWidth = this.axisLineWidth / 10;
    }

    public draw(): void {
        this.drawZAxisMainLine();
        this.drawYAxisMainLine();
        this.drawXAxisMainLine();

        this.drawXAxisLabelText();
        this.drawZAxisLabelText();
        this.drawYAxisLabelText();

        this.drawAxisMarkers();
        this.drawGridLines();
    }

    private drawXAxisMainLine(): void {
        const { xAxisLength } = this.axisSettings;
        this.drawLine({
            fromVector3: [0, 0, 0],
            toVector3: [xAxisLength, 0, 0],
            hexColor: colors.blue,
            lineWidth: this.axisLineWidth,
            renderOrder: 0,
        });
    }

    private drawYAxisMainLine(): void {
        const { zAxisLength } = this.axisSettings;
        this.drawLine({
            fromVector3: [0, 0, 0],
            toVector3: [0, 0, -zAxisLength],
            hexColor: colors.red,
            lineWidth: this.axisLineWidth,
            renderOrder: 0,
        });
    }

    private drawZAxisMainLine(): void {
        const { yAxisLength } = this.axisSettings;
        this.drawLine({
            fromVector3: [0, 0, 0],
            toVector3: [0, yAxisLength, 0],
            hexColor: colors.green,
            lineWidth: this.axisLineWidth,
            renderOrder: 0,
        });
    }

    private drawYAxisLabelText(): void {
        const { yAxisLength } = this.axisSettings;
        this.drawText({
            location: [0.21, yAxisLength / 2, 0],
            text: "Features",
            anchor: "center",
            fontSize: this.boldFontSize,
            fontWeight: "bold",
            rotationVector: [0, Math.PI, Math.PI / 2],
        });
    }

    private drawZAxisLabelText(): void {
        const { zAxisLength } = this.axisSettings;
        this.drawText({
            location: [0, 0.21, -zAxisLength / 2],
            text: "Unexplored Territory",
            anchor: "center",
            fontSize: this.boldFontSize,
            fontWeight: "bold",
            rotationVector: [0, Math.PI / 2, 0],
        });
    }

    private drawXAxisLabelText(): void {
        const { xAxisLength } = this.axisSettings;
        this.drawText({
            location: [xAxisLength / 2, 0.21, 0],
            text: "Content",
            anchor: "center",
            fontSize: this.boldFontSize,
            fontWeight: "bold",
            rotationVector: [0, Math.PI, 0],
        });
    }

    private drawAxisMarkers(): void {
        this.drawZAxisTextNMarker();
        this.drawYAxisTextNMarker();
        this.drawXAxisTextNMarker();
    }

    private drawGridLines(): void {
        const { xAxisLength, yAxisLength, zAxisLength } = this.axisSettings;
        this.drawXAxisGridLines(xAxisLength / 10);
        this.drawYAxisGridLines(yAxisLength / 10);
        this.drawZAxisGridLines(zAxisLength / 10);
    }

    private drawXAxisGridLines(interval: number): void {
        const { xAxisLength, yAxisLength, zAxisLength } = this.axisSettings;
        for (let i = interval; i <= xAxisLength; i += interval) {
            this.drawXtoYGridLine(i, yAxisLength);
            this.drawXToZGridline(i, zAxisLength);
        }
    }

    private drawXToZGridline(i: number, zAxisLength: number) {
        this.drawLine({
            fromVector3: [i, 0, 0],
            toVector3: [i, 0, -zAxisLength],
            hexColor: this.gridLineColor,
            lineWidth: this.gridLineWidth,
            renderOrder: -1,
        });
    }

    private drawXtoYGridLine(i: number, yAxisLength: number) {
        this.drawLine({
            fromVector3: [i, 0, 0],
            toVector3: [i, yAxisLength, 0],
            hexColor: this.gridLineColor,
            lineWidth: this.gridLineWidth,
            renderOrder: -1,
        });
    }

    private drawYAxisGridLines(interval: number): void {
        const { xAxisLength, zAxisLength } = this.axisSettings;
        for (let i = interval; i <= zAxisLength; i += interval) {
            this.drawYtoXGridLine(i, xAxisLength);
            this.drawYToZGridLine(i, zAxisLength);
        }
    }

    private drawYtoXGridLine(i: number, xAxisLength: number) {
        this.drawLine({
            fromVector3: [0, i, 0],
            toVector3: [xAxisLength, i, 0],
            hexColor: this.gridLineColor,
            lineWidth: this.gridLineWidth,
            renderOrder: -1,
        });
    }

    private drawYToZGridLine(i: number, zAxisLength: number) {
        this.drawLine({
            fromVector3: [0, i, 0],
            toVector3: [0, i, -zAxisLength],
            hexColor: this.gridLineColor,
            lineWidth: this.gridLineWidth,
            renderOrder: -1,
        });
    }

    private drawZAxisGridLines(interval: number): void {
        const { xAxisLength, yAxisLength, zAxisLength } = this.axisSettings;
        for (let i = interval; i <= zAxisLength; i += interval) {
            this.drawZtoXGridLine(i, xAxisLength);
            this.drawZtoYGridline(i, yAxisLength);
        }
    }

    private drawZtoXGridLine(i: number, xAxisLength: number) {
        this.drawLine({
            fromVector3: [0, 0, -i],
            toVector3: [xAxisLength, 0, -i],
            hexColor: this.gridLineColor,
            lineWidth: this.gridLineWidth,
            renderOrder: -1,
        });
    }

    private drawZtoYGridline(i: number, yAxisLength: number) {
        this.drawLine({
            fromVector3: [0, 0, -i],
            toVector3: [0, yAxisLength, -i],
            hexColor: this.gridLineColor,
            lineWidth: this.gridLineWidth,
            renderOrder: -1,
        });
    }

    private drawXAxisTextNMarker(): void {
        const { xAxisLength, desiredXAxis } = this.axisSettings;
        const interval: number = xAxisLength / 10;
        const realXInterval: number = desiredXAxis / 10;
        let realX: number = 0;
        for (let i = 0; i <= xAxisLength; i += interval) {
            this.drawXAxisMarker(i);
            this.drawXAxisIncrementText(i, realX);
            realX += realXInterval;
        }
    }

    private drawXAxisMarker(i: number) {
        this.drawLine({
            fromVector3: [i, -this.markerLength, 0],
            toVector3: [i, 0, 0],
            hexColor: colors.blue,
            lineWidth: this.axisLineWidth,
            renderOrder: 0,
        });
    }

    private drawXAxisIncrementText(i: number, realX: number) {
        this.drawText({
            location: [i, -this.markerLength, 0],
            text: realX.toString(),
            anchor: "center",
            fontSize: this.standardFontSize,
            fontWeight: "normal",
            rotationVector: [0, Math.PI, 0],
        });
    }

    private drawYAxisTextNMarker(): void {
        const { yAxisLength, desiredYAxis } = this.axisSettings;
        const interval: number = yAxisLength / 10;
        const realYInterval: number = desiredYAxis / 10;
        let realY: number = 0;
        for (let i = 0; i <= yAxisLength; i += interval) {
            this.drawYAxisMarker(i);
            this.drawYAxisIncrementText(i, realY);
            realY += realYInterval;
        }
    }

    private drawYAxisMarker(i: number) {
        this.drawLine({
            fromVector3: [-this.markerLength, i, 0],
            toVector3: [0, i, 0],
            hexColor: colors.green,
            lineWidth: this.axisLineWidth,
            renderOrder: 0,
        });
    }

    private drawYAxisIncrementText(i: number, realY: number) {
        this.drawText({
            location: [-this.markerLength - 0.12, i + 0.05, 0],
            text: realY.toString(),
            anchor: "center",
            fontSize: this.standardFontSize,
            fontWeight: "normal",
            rotationVector: [0, Math.PI - Math.PI / 4, 0],
        });
    }

    private drawZAxisTextNMarker(): void {
        const { zAxisLength, desiredZAxis } = this.axisSettings;
        const interval: number = zAxisLength / 10;
        const realZInterval: number = desiredZAxis / 10;
        let realZ: number = realZInterval;
        for (let i = interval; i <= zAxisLength; i += interval) {
            this.drawZAxisMarker(i);
            this.drawZAxisIncrementText(i, realZ);
            realZ += realZInterval;
        }
    }

    private drawZAxisMarker(i: number) {
        this.drawLine({
            fromVector3: [0, -this.markerLength, -i],
            toVector3: [0, 0, -i],
            hexColor: colors.red,
            lineWidth: this.axisLineWidth,
            renderOrder: 0,
        });
    }

    private drawZAxisIncrementText(i: number, realZ: number) {
        this.drawText({
            location: [0, -this.markerLength, -i],
            text: realZ.toString(),
            anchor: "center",
            fontSize: this.standardFontSize,
            fontWeight: "normal",
            rotationVector: [0, Math.PI / 2, 0],
        });
    }

    private drawText(textSettings: TextSettings): void {
        const { location, text, anchor, fontSize, fontWeight, rotationVector } =
            textSettings;
        const textObj = new Text(text);
        textObj.text = text;
        textObj.fontSize = fontSize;
        textObj.position.set(location[0], location[1], location[2]);
        textObj.color = colors.black;
        textObj.anchorX = anchor;
        textObj.anchorY = "center";
        textObj.renderOrder = 1;
        textObj.material.depthTest = false;
        textObj.fontWeight = fontWeight;
        textObj.rotation.set(
            rotationVector[0],
            rotationVector[1],
            rotationVector[2]
        );
        this.scene.add(textObj);
        textObj.sync();
    }

    private drawLine(lineSettings: LineSettings): void {
        const { fromVector3, toVector3, hexColor, lineWidth, renderOrder } =
            lineSettings;
        const lineGeo = new LineGeometry();
        lineGeo.setPositions([...fromVector3, ...toVector3]);
        const line_material = new LineMaterial({
            linewidth: lineWidth,
            color: hexColor,
            depthTest: false,
        });
        const line = new Line2(lineGeo, line_material);
        line.renderOrder = renderOrder;
        this.scene.add(line);
    }
}
