import { DistortionText } from "react-text-fun";

const Distortion = ({ text }) => {
  return (
    <>
      <DistortionText
        text={text}
        fontSize={120}
        speed={1.5}
        fill={"White"}
        rotation={45.0}
        fontFamily={"Climate"}
        distortX={0.9}
        distortY={0.5}
        noiseAmplitude={0.5}
        noiseVolatility={0.7}
      />
    </>
  );
};

export default Distortion;
