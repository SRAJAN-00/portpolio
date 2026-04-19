"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function MotionHoverScale({ children, className, style }: { children: ReactNode, className?: string, style?: React.CSSProperties }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
      style={{ display: "inline-block", ...style } as any}
    >
      {children}
    </motion.div>
  );
}

export function MotionSpanSubtle({ children, className, style }: { children: ReactNode, className?: string, style?: React.CSSProperties }) {
  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={className}
      style={style as any}
      transition={{ type: "spring", stiffness: 500, damping: 15 }}
    >
      {children}
    </motion.span>
  );
}

export function MotionHoverTranslate({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionHoverRotate({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      whileHover={{ rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
