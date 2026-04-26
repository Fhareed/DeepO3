"use client";

import React from "react";
import ShapeBlur from "./ShapeBlur";
import TiltedPanel from "./TiltedPanel";

type InfoCardProps = {
  children: React.ReactNode;
  className?: string;
  accent?: string;
  variation?: number;
};

export default function InfoCard({
  children,
  className = "",
  accent,
  variation = 0
}: InfoCardProps) {
  return (
    <TiltedPanel className="info-card-tilt">
      <article
        className={`glass info-card ${className}`}
        style={accent ? { borderLeft: `2px solid ${accent}` } : undefined}
      >
        <ShapeBlur variation={variation} shapeSize={1.05} />
        <div className="info-card-content">{children}</div>
      </article>
    </TiltedPanel>
  );
}
