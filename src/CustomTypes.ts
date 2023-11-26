export type Vector3 = [number, number, number];
export type TextSettings = {
    location: Vector3;
    text: string;
    anchor: string;
    fontSize: number;
    fontWeight: "normal" | "bold";
    rotationVector: Vector3;
};
export type LineSettings = {
    sourceVector3: Vector3;
    destinationVector3: Vector3;
    hexColor: number;
    lineWidth: number;
    renderOrder: number;
};
export type GeoType =
    | THREE.Mesh<
          THREE.BufferGeometry<THREE.NormalBufferAttributes>,
          THREE.Material | THREE.Material[],
          THREE.Object3DEventMap
      >
    | THREE.LineSegments<
          THREE.EdgesGeometry<THREE.BoxGeometry>,
          THREE.LineBasicMaterial
      >;

export type AxisSettings = {
    readonly xAxisLength: number;
    readonly yAxisLength: number;
    readonly zAxisLength: number;
    readonly desiredXAxis: number;
    readonly desiredYAxis: number;
    readonly desiredZAxis: number;
};
