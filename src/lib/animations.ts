/**
 * Premium Animation Variants for Framer Motion
 * 
 * These variants are designed to feel "expensive" - subtle, intentional, and physical.
 * All animations respect reduced-motion preferences and use GPU-friendly properties.
 * 
 * Key principles:
 * - Custom easing curves that feel natural (not default ease)
 * - Staggered entrances for visual rhythm
 * - Blur-to-sharp reveals for modern feel
 * - Scale + fade combinations for depth
 */

import type { Variants } from 'framer-motion';

// Premium easing curves - these make animations feel "expensive"
export const easings = {
  // Smooth, natural deceleration - perfect for entrances
  easeOut: [0.215, 0.61, 0.355, 1] as const,
  // Gentle acceleration then smooth stop - great for exits
  easeIn: [0.55, 0.055, 0.675, 0.19] as const,
  // Natural arc motion - most physically accurate
  easeInOut: [0.645, 0.045, 0.355, 1] as const,
  // Subtle bounce without being cartoonish
  gentleBounce: [0.34, 1.56, 0.64, 1] as const,
  // Quick snap with soft landing
  spring: [0.175, 0.885, 0.32, 1.275] as const,
} as const;

// Default transition settings for consistency
export const defaultTransition = {
  duration: 0.5,
  ease: easings.easeOut,
};

/**
 * Fade Up Variant - The workhorse of scroll animations
 * Combines opacity, Y translation, and blur for modern reveal
 */
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: easings.easeOut,
    },
  },
};

/**
 * Fade Up with Stagger - For lists and grids
 * Use with staggerChildren in parent
 */
export const fadeUpStagger: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: easings.easeOut,
    },
  },
};

/**
 * Scale Pop - For cards and interactive elements
 * Subtle scale with opacity for depth perception
 */
export const scalePop: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easings.spring,
    },
  },
};

/**
 * Slide In from Left/Right - For asymmetric layouts
 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: easings.easeOut,
    },
  },
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: easings.easeOut,
    },
  },
};

/**
 * Text Reveal - Character/word by word stagger
 * Perfect for hero headings
 */
export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(8px)',
  },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: i * 0.08, // Quick stagger for natural reading flow
      duration: 0.5,
      ease: easings.easeOut,
    },
  }),
};

/**
 * Hero Stagger Container - Coordinates hero section entrance
 */
export const heroStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Slower stagger for dramatic effect
      delayChildren: 0.2,
    },
  },
};

/**
 * Float Animation - Continuous subtle motion
 * For badges, decorative elements
 */
export const float: Variants = {
  floating: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1], // Smooth sine-like curve
    },
  },
};

/**
 * Pulse Glow - Subtle attention grabber
 * For availability badges, CTAs
 */
export const pulseGlow: Variants = {
  pulse: {
    boxShadow: [
      '0 0 0 0 rgba(59, 130, 246, 0.4)',
      '0 0 20px 5px rgba(59, 130, 246, 0)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: [0.4, 0, 0.6, 1],
    },
  },
};

/**
 * Card Hover - Premium hover state for project/experience cards
 */
export const cardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: easings.easeOut,
    },
  },
  hover: {
    scale: 1.02,
    y: -8,
    transition: {
      duration: 0.3,
      ease: easings.easeOut,
    },
  },
};

/**
 * Image Zoom on Hover - For project thumbnails
 */
export const imageZoom: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.08,
    transition: {
      duration: 0.6,
      ease: easings.easeOut,
    },
  },
};

/**
 * Timeline Draw - For experience section vertical line
 * Simulates line drawing on scroll
 */
export const timelineDraw: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: '100%',
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: easings.easeInOut,
    },
  },
};

/**
 * Button Spring - Refined button hover with subtle spring
 */
export const buttonSpring: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
      mass: 0.5,
    },
  },
  tap: { scale: 0.95 },
};

/**
 * Modal/Dialog Entrance - Smooth scale + fade
 */
export const modalEntrance: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easings.easeOut,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.3,
      ease: easings.easeIn,
    },
  },
};

/**
 * Navigation Link - Underline animation
 */
export const navLink: Variants = {
  rest: {
    scaleX: 0,
    originX: 0,
  },
  hover: {
    scaleX: 1,
    originX: 0,
    transition: {
      duration: 0.3,
      ease: easings.easeOut,
    },
  },
};

/**
 * Skill Tag - Border fill animation
 */
export const skillTag: Variants = {
  rest: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  hover: {
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    borderColor: 'rgba(59, 130, 246, 0.5)',
    transition: {
      duration: 0.25,
      ease: easings.easeOut,
    },
  },
};

/**
 * Arrow Slide - For "View Details" links
 */
export const arrowSlide: Variants = {
  rest: { x: 0 },
  hover: {
    x: 4,
    transition: {
      duration: 0.2,
      ease: easings.easeOut,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      repeatDelay: 0.3,
    },
  },
};

/**
 * Scroll Progress Indicator Animation
 */
export const scrollProgress: Variants = {
  progress: (progress: number) => ({
    scaleX: progress / 100,
    transition: {
      duration: 0.1,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};
