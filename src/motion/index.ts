export const animation = {
   initial: { y: "100%" },
   enter: () => ({
      y: "0",
      transition: {
         duration: 0.75,
         ease: [0.33, 1, 0.68, 1],
         delay: 0.5,
      },
   }),
};

export const navVarients = {
   initial: { opacity: 0, y: "-100%", transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] } },
   vissible: { opacity: 1, y: "0%", transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] } },
};

export const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.3,
      },
   },
};

export const itemVariants = {
   hidden: { opacity: 0, y: 20 },
   visible: { opacity: 1, y: 0 },
};

export const wrapperVariants = {
   open: {
      scaleY: 1,
      transition: {
         when: "beforeChildren",
         staggerChildren: 0.1,
      },
   },
   closed: {
      scaleY: 0,
      transition: {
         when: "afterChildren",
         staggerChildren: 0.1,
      },
   },
};

export const iconVariants = {
   open: {
      opacity: 1,
      y: 0,
      transition: {
         when: "beforeChildren",
      },
   },
   closed: {
      opacity: 0,
      y: -15,
      transition: {
         when: "afterChildren",
      },
   },
};

export const actionIconVariants = {
   open: { scale: 1, y: 0 },
   closed: { scale: 0, y: -7 },
};