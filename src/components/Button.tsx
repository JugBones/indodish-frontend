import Link from 'next/link';
import { ReactElement } from 'react';
import { Playfair_Display } from 'next/font/google';
import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import type { VariantLabels, TargetAndTransition } from 'framer-motion';

type ButtonProps = {
  children: string | ReactElement;
  styling: CSSProperties;
  hoverStying: VariantLabels | TargetAndTransition;
};

const playfairDisplay = Playfair_Display({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export default function Button({
  children,
  styling,
  hoverStying,
}: ButtonProps) {
  return (
    <motion.div
      role='button'
      style={styling}
      whileHover={hoverStying}
      className={playfairDisplay.className}
    >
      {children}
    </motion.div>
  );
}
