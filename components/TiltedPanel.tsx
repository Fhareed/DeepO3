"use client";

import { MouseEvent, ReactNode, RefObject, useRef } from "react";
import { motion, useSpring } from "framer-motion";
import "./TiltedPanel.css";

type TiltedPanelProps = {
  children: ReactNode;
  className?: string;
  rotateAmplitude?: number;
  scaleOnHover?: number;
};

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2
};

export default function TiltedPanel({
  children,
  className = "",
  rotateAmplitude = 8,
  scaleOnHover = 1.02
}: TiltedPanelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, springValues);
  const rotateY = useSpring(0, springValues);
  const scale = useSpring(1, springValues);

  function handleMouse(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;
    rotateX.set(rotationX);
    rotateY.set(rotationY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className={`tilted-panel ${className}`.trim()}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="tilted-panel-inner"
        style={{ rotateX, rotateY, scale }}
      >
        {children}
      </motion.div>
    </div>
  );
}
