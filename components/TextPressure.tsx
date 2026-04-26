"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./TextPressure.module.css";

type Point = {
  x: number;
  y: number;
};

type Props = {
  text?: string;
  fontFamily?: string;
  fontUrl?: string;
  width?: boolean;
  weight?: boolean;
  italic?: boolean;
  alpha?: boolean;
  flex?: boolean;
  stroke?: boolean;
  scale?: boolean;
  textColor?: string;
  strokeColor?: string;
  className?: string;
  minFontSize?: number;
};

const dist = (a: Point, b: Point) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return Math.sqrt(dx * dx + dy * dy);
};

const getAttr = (distance: number, maxDist: number, minVal: number, maxVal: number) => {
  const val = maxVal - Math.abs((maxVal * distance) / maxDist);
  return Math.max(minVal, val + minVal);
};

const debounce = <T extends (...args: any[]) => void>(func: T, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const TextPressure = ({
  text = "Compressa",
  fontFamily = "Compressa VF",
  fontUrl = "https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2",
  width = true,
  weight = true,
  italic = true,
  alpha = false,
  flex = true,
  stroke = false,
  scale = false,
  textColor = "#FFFFFF",
  strokeColor = "#FF0000",
  className = "",
  minFontSize = 24
}: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);
  const sizeStableRef = useRef(false);

  const mouseRef = useRef<Point>({ x: 0, y: 0 });
  const cursorRef = useRef<Point>({ x: 0, y: 0 });

  const [fontSize, setFontSize] = useState(minFontSize);
  const [scaleY, setScaleY] = useState(1);
  const [lineHeight, setLineHeight] = useState(1);

  const chars = text.split("");

  useEffect(() => {
    const styleId = `tp-font-${fontFamily.replace(/\s+/g, "-").toLowerCase()}`;
    if (document.getElementById(styleId)) return;

    const styleElement = document.createElement("style");
    styleElement.id = styleId;
    styleElement.textContent = `
      @font-face {
        font-family: "${fontFamily}";
        src: url("${fontUrl}");
        font-style: normal;
      }
    `;

    document.head.appendChild(styleElement);
  }, [fontFamily, fontUrl]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      cursorRef.current.x = t.clientX;
      cursorRef.current.y = t.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    if (containerRef.current) {
      const { left, top, width: containerW, height: containerH } = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = left + containerW / 2;
      mouseRef.current.y = top + containerH / 2;
      cursorRef.current.x = mouseRef.current.x;
      cursorRef.current.y = mouseRef.current.y;
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const setSize = useCallback(() => {
    if (!containerRef.current || !titleRef.current) return;
    if (sizeStableRef.current) return;

    const { width: containerW, height: containerH } = containerRef.current.getBoundingClientRect();
    const maxWidth = Math.max(containerW - 2, 1);
    const maxHeight = Math.max(containerH - 2, 1);

    let newFontSize = containerW / (chars.length / 1.8);
    newFontSize = Math.max(newFontSize, minFontSize);

    setFontSize(newFontSize);
    setScaleY(1);
    setLineHeight(1);

    const measureAndAdjust = () => {
      if (!titleRef.current) return;
      const measuredWidth = Math.max(titleRef.current.scrollWidth, 1);
      const measuredHeight = Math.max(titleRef.current.scrollHeight, 1);
      const fitRatio = Math.min(maxWidth / measuredWidth, maxHeight / measuredHeight, 1);
      const safeFitRatio = fitRatio < 1 ? fitRatio * 0.96 : 1;
      const fittedSize = Math.max(minFontSize * 0.9, newFontSize * safeFitRatio);

      if (Math.abs(fittedSize - newFontSize) > 0.1) {
        setFontSize(fittedSize);
      }

      if (scale && measuredHeight > 0) {
        const yRatio = Math.min(maxHeight / measuredHeight, 1);
        setScaleY(yRatio);
        setLineHeight(yRatio > 0 ? yRatio : 1);
      }

      sizeStableRef.current = true;
    };

    requestAnimationFrame(measureAndAdjust);
  }, [chars.length, minFontSize, scale]);

  useEffect(() => {
    const debouncedSetSize = debounce(setSize, 250);
    debouncedSetSize();
    window.addEventListener("resize", debouncedSetSize);
    return () => window.removeEventListener("resize", debouncedSetSize);
  }, [setSize]);

  useEffect(() => {
    if (!containerRef.current) return;
    
    let resizeTimeout: ReturnType<typeof setTimeout>;
    let lastWidth = 0;
    let lastHeight = 0;
    let checkCount = 0;

    const observer = new ResizeObserver(() => {
      if (!containerRef.current || sizeStableRef.current) return;
      
      const { width, height } = containerRef.current.getBoundingClientRect();
      
      // Only update if significant change (>5px) or first few checks
      if (checkCount < 2 || Math.abs(width - lastWidth) > 5 || Math.abs(height - lastHeight) > 5) {
        lastWidth = width;
        lastHeight = height;
        checkCount++;
        
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          sizeStableRef.current = false;
          setSize();
        }, 200);
      }
    });
    
    observer.observe(containerRef.current);
    return () => {
      clearTimeout(resizeTimeout);
      observer.disconnect();
    };
  }, [setSize]);

  useEffect(() => {
    let rafId = 0;
    let frameCount = 0;
    const lastValues = new Map<HTMLSpanElement, string>();

    const animate = () => {
      frameCount++;
      
      // Only update every other frame to reduce layout thrashing
      if (frameCount % 2 === 0) {
        mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
        mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;

        if (titleRef.current) {
          const titleRect = titleRef.current.getBoundingClientRect();
          const maxDist = titleRect.width / 2;

          spansRef.current.forEach((span) => {
            if (!span) return;

            const rect = span.getBoundingClientRect();
            const charCenter = {
              x: rect.x + rect.width / 2,
              y: rect.y + rect.height / 2
            };

            const d = dist(mouseRef.current, charCenter);

            const wdth = width ? Math.floor(getAttr(d, maxDist, 16, 165)) : 100;
            const wght = weight ? Math.floor(getAttr(d, maxDist, 100, 900)) : 400;
            const italVal = italic ? getAttr(d, maxDist, 0, 1).toFixed(2) : "0";
            const alphaVal = alpha ? getAttr(d, maxDist, 0, 1).toFixed(2) : "1";

            const newFontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${italVal}`;
            const prevValue = lastValues.get(span);

            if (prevValue !== newFontVariationSettings) {
              lastValues.set(span, newFontVariationSettings);
              span.style.fontVariationSettings = newFontVariationSettings;
            }
            if (alpha && span.style.opacity !== alphaVal) {
              span.style.opacity = alphaVal;
            }
          });
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, [width, weight, italic, alpha]);

  const dynamicClassName = [className, flex ? styles.flex : "", stroke ? styles.stroke : ""].filter(Boolean).join(" ");

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "transparent",
        overflow: "hidden",
        ["--tp-text-color" as any]: textColor,
        ["--tp-stroke-color" as any]: strokeColor
      }}
    >
      <h1
        ref={titleRef}
        className={`${styles.textPressureTitle} ${dynamicClassName}`}
        style={{
          fontFamily,
          textTransform: "uppercase",
          fontSize,
          lineHeight,
          transform: `scale(1, ${scaleY})`,
          transformOrigin: "left top",
          margin: 0,
          textAlign: "left",
          userSelect: "none",
          whiteSpace: "nowrap",
          fontWeight: 100,
          width: "100%"
        }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            ref={(el) => {
              spansRef.current[i] = el;
            }}
            data-char={char}
            style={{
              display: "inline-block",
              color: stroke ? undefined : textColor
            }}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default TextPressure;
