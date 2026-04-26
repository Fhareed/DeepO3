"use client";

import React, { useId } from "react";

type Props = {
  variation?: number;
  pixelRatioProp?: number;
  shapeSize?: number;
  roundness?: number;
  borderSize?: number;
  circleSize?: number;
  circleEdge?: number;
  className?: string;
};

export default function ShapeBlur({
  variation = 0,
  pixelRatioProp = 1,
  shapeSize = 1,
  roundness = 0.5,
  borderSize = 0.05,
  circleSize = 0.25,
  circleEdge = 1,
  className = ""
}: Props) {
  const uid = useId().replace(/:/g, "");
  const gradAId = `sbGradA-${uid}`;
  const gradBId = `sbGradB-${uid}`;
  const gradCId = `sbGradC-${uid}`;
  const filterId = `sbFilter-${uid}`;

  const variant = variation % 3;
  const alphaA = 0.14 + roundness * 0.08;
  const alphaB = 0.08 + borderSize * 0.2;
  const alphaC = 0.06 + circleSize * 0.12;

  const seeds = [
    { cx: 120, cy: 110, rx: 120, ry: 78 },
    { cx: 310, cy: 250, rx: 130, ry: 90 },
    { cx: 220, cy: 320, rx: 95, ry: 65 }
  ];

  const selected = [
    seeds[variant],
    seeds[(variant + 1) % seeds.length],
    seeds[(variant + 2) % seeds.length]
  ];

  return (
    <div className={`shape-blur ${className}`} aria-hidden>
      <svg className="shape-blur-svg" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id={gradAId} cx="50%" cy="50%">
            <stop offset="0%" stopColor={`rgba(96,165,250,${alphaA})`} />
            <stop offset="100%" stopColor="rgba(88,24,120,0.02)" />
          </radialGradient>
          <radialGradient id={gradBId} cx="50%" cy="50%">
            <stop offset="0%" stopColor={`rgba(77,208,255,${alphaB})`} />
            <stop offset="100%" stopColor="rgba(18,30,66,0.01)" />
          </radialGradient>
          <radialGradient id={gradCId} cx="50%" cy="50%">
            <stop offset="0%" stopColor={`rgba(90,120,255,${alphaC})`} />
            <stop offset="100%" stopColor="rgba(10,12,18,0.01)" />
          </radialGradient>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation={18 * pixelRatioProp * circleEdge} />
          </filter>
        </defs>
        <g filter={`url(#${filterId})`}>
          <ellipse
            cx={selected[0].cx}
            cy={selected[0].cy}
            rx={selected[0].rx * shapeSize}
            ry={selected[0].ry * shapeSize}
            fill={`url(#${gradAId})`}
          />
          <ellipse
            cx={selected[1].cx}
            cy={selected[1].cy}
            rx={selected[1].rx * shapeSize}
            ry={selected[1].ry * shapeSize}
            fill={`url(#${gradBId})`}
          />
          <ellipse
            cx={selected[2].cx}
            cy={selected[2].cy}
            rx={selected[2].rx * shapeSize}
            ry={selected[2].ry * shapeSize}
            fill={`url(#${gradCId})`}
          />
        </g>
      </svg>
    </div>
  );
}
