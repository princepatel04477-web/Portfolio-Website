import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, type Variant } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  tag?: keyof React.JSX.IntrinsicElements;
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.5,
  tag = 'p'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: { hidden: Variant; visible: Variant } = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const Tag = tag as React.ElementType;

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        aria-hidden="true"
        className="inline-block"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block whitespace-nowrap mr-[0.28em]">
            <motion.span variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
};
