"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface LandingMotionProps {
  children: ReactNode;
  className?: string;
}

export default function LandingMotion({
  children,
  className,
}: LandingMotionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
