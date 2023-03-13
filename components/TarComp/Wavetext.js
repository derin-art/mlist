export default function WaveText() {
  return (
    <div>
      <h1 class="wavy-text text-white font-Climate text-4xl">Nina</h1>
      <svg width="100%" height="100%">
        <defs>
          <filter id="wavy" filterUnits="userSpaceOnUse" x="0" y="0">
            <feTurbulence
              id="wave-animation"
              numOctaves="1"
              seed="1"
              baseFrequency="0 0"
            ></feTurbulence>
            <feDisplacementMap
              scale="10"
              in="SourceGraphic"
            ></feDisplacementMap>
          </filter>
          <animate
            attributeName="baseFrequency"
            dur="3s"
            keyTimes="0;0.5;1"
            values="0.0 0.04;0.0 0.07;0.0 0.04"
            repeatCount="indefinite"
          ></animate>
        </defs>
      </svg>
    </div>
  );
}
