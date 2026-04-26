"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type AnimatedNavLinkProps = {
  href: string;
  text: string;
  className?: string;
};

export function AnimatedNavLink({ href, text, className }: AnimatedNavLinkProps) {
  return (
    <Link href={href} className={className}>
      <motion.span
        className="animated-link"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        {text.split("").map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            className="animated-link-char"
            variants={{
              rest: { y: 0, rotateX: 0, opacity: 0.9 },
              hover: {
                y: -2,
                rotateX: 10,
                opacity: 1,
                transition: {
                  delay: i * 0.01,
                  duration: 0.32,
                  ease: [0.22, 1, 0.36, 1]
                }
              }
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </Link>
  );
}
