export function NoiseTexture() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full">
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves="4"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect
        width="100%"
        height="100%"
        filter="url(#noiseFilter)"
        opacity="0.03"
        className="dark:opacity-[0.02]"
      />
    </svg>
  );
}