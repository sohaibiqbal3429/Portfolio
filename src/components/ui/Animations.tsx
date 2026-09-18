'use client';

import { motion } from 'framer-motion';
import { easings } from '@/lib/animations';
import { useScrollProgress } from '@/hooks/useAnimation';

/**
 * ScrollProgress - Fixed progress bar at top of page
 * Shows reading progress in brand teal/cyan color
 */
export function ScrollProgress() {
  const scrollProgress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-indigo-500 z-[100] origin-left"
      style={{
        scaleX: scrollProgress / 100,
      }}
      aria-label={`Scroll progress: ${Math.round(scrollProgress)}%`}
      role="progressbar"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}

/**
 * BackgroundGradient - Subtle animated gradient orbs
 * Mouse-reactive but very subtle (won't distract)
 */
export function BackgroundGradient() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top-left blue orb */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.2, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1],
        }}
      />
      
      {/* Bottom-right teal orb */}
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1],
          delay: 1,
        }}
      />
      
      {/* Center indigo orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/8 rounded-full blur-3xl"
        animate={{
          x: ['-50%', '-48%', '-50%'],
          y: ['-50%', '-52%', '-50%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1],
        }}
      />
    </div>
  );
}

/**
 * MagneticButton - Button with subtle magnetic pull effect
 * Use for primary CTAs
 */
interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  strength?: number;
}

export function MagneticButton({ 
  children, 
  strength = 0.3, 
  className = '',
  ...props 
}: MagneticButtonProps) {
  return (
    <motion.button
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 10,
        mass: 0.5,
      }}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}

/**
 * FloatingBadge - Continuously floating element
 * For experience/project count badges
 */
interface FloatingBadgeProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FloatingBadge({ children, delay = 0, className = '' }: FloatingBadgeProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: [0.42, 0, 0.58, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * SectionHeading - Reusable animated section heading
 * Fade up with blur effect
 */
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionHeading({ title, subtitle, align = 'center' }: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: easings.easeOut }}
      className={`mb-16 ${alignClasses[align]}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: easings.easeOut }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
