import Spline from "@splinetool/react-spline";
import { useRef } from "react";

export default function SplineObjectAwards() {
  const cube = useRef();

  function onLoad(spline) {
    const obj = spline.findObjectByName("Cube");
    // or
    // const obj = spline.findObjectById('8E8C2DDD-18B6-4C54-861D-7ED2519DE20E');

    // save it in a ref for later use
    cube.current = obj;
  }
  return (
    <Spline
      onLoad={onLoad}
      scene="https://prod.spline.design/Azbq4MUsoQVY2llG/scene.splinecode"
    />
  );
}
