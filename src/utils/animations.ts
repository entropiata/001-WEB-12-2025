// Animation variants for consistent animations across the site
export const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 }
};

export const slideInFromLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

export const slideInFromRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

export const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
};

// Stagger container for sequential animations
export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

// Card animation on scroll
export const cardScrollAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.5 }
};

// Icon pulse animation
export const iconPulse = {
    scale: [1, 1.1, 1],
    transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

// Hover lift effect for cards
export const hoverLift = {
    whileHover: { y: -8 },
    transition: { duration: 0.3 }
};

// Button hover effect
export const buttonHover = {
    whileHover: {
        scale: 1.05,
        transition: { duration: 0.2 }
    },
    whileTap: { scale: 0.95 }
};

// Dropdown menu animation
export const dropdownAnimation = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.2, ease: "easeOut" }
};

// Stagger children for menu items
export const menuItemStagger = {
    animate: {
        transition: {
            staggerChildren: 0.05
        }
    }
};

export const menuItem = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.2 }
};
