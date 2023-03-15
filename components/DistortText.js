import { DistortionText } from "react-text-fun";

const Distortion = ({ text, id }) => {
  return (
    <>
      <DistortionText
        text={text}
        fontSize={40}
        speed={1.5}
        appendTo={id}
        fill={"white"}
        rotation={45.0}
        fontFamily={"Climate"}
        distortX={0.9}
        distortY={0.5}
        noiseAmplitude={0.5}
        noiseVolatility={0.7}
      />
      <script src="https://unpkg.com/blotterjs-fork@0.1.0/build/blotter.min.js"></script>
    </>
  );
};

export default Distortion;
