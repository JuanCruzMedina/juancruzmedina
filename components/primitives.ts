import { tv } from "tailwind-variants";

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
    size: {
      sm: "text-sm lg:text-base",
      md: "text-medium lg:text-lg",
      lg: "text-lg lg:text-xl",
      xl: "text-xl lg:text-2xl",
      xxl: "text-2xl lg:text-3xl",
    },
  },
  defaultVariants: {
    fullWidth: true,
    size: "lg",
  },
});

export const subtitleMarked = tv({
  base: "inline max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
    color: {
      default: "text-default-600",
      violet:
        "text-violet-600 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-200",
      foreground: "text-foreground-600 hover:text-foreground-800",
    },
    size: {
      sm: "text-sm lg:text-base",
      md: "text-medium lg:text-lg",
      lg: "text-md md:text-lg lg:text-xl",
    },
  },
  defaultVariants: {
    color: "default",
    fullWidth: true,
    size: "lg",
  },
});

export const textLink = tv({
  base: "text-violet-600 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-200",
  variants: {
    size: {
      xs: "text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base",
      sm: "text-xs sm:text-base md:text-md lg:text-md xl:text-md",
      md: "text-xs sm:text-base md:text-md lg:text-lg xl:text-lg",
      onlyIcon: "text-xs lg:text-base",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const textWithColor = tv({
  base: "text-default-600 dark:text-gray-300",
  variants: {
    size: {
      xs: "text-xs lg:text-base",
      md: "text-xs sm:text-base md:text-md lg:text-lg xl:text-lg",
    },
    color: {
      violet: "text-violet-600 dark:text-violet-400",
    },
  },
  defaultVariants: {
    color: "violet",
    size: "md",
  },
});

export const buttonGradient = tv({
  base: "bg-gradient-to-tr from-[#FF1CF7] to-violet-600 text-white shadow-lg",
});

export const name = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      auto: "text-4xl md:text-7xl lg:text-8xl xl:text-[clamp(6rem,30vw,8rem)] leading-none",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "auto",
    color: "violet",
  },
  compoundVariants: [
    {
      color: ["violet", "foreground"],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const simpleTitleResponsive = tv({
  base: "tracking-tight inline",
  variants: {
    font: {
      normal: "font-normal",
      bold: "font-bold",
      semi: "font-semibold",
    },
    color: {
      light: "text-gray-500 dark:text-gray-400",
      violet: "text-violet-600 dark:text-violet-400",
      gradientViolet: "from-[#FF1CF7] to-[#b249f8]",
    },
    size: {
      sm: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
      md: "text-4xl sm:text-7xl md:text-8xl xl:text-[clamp(6rem,30vw,8rem)] leading-none",
    },
    fullWidth: {
      true: "w-full block",
    },
    inline: {
      true: "inline",
    },
  },
  defaultVariants: {
    font: "semi",
    size: "md",
  },
  compoundVariants: [
    {
      color: ["light", "violet", "gradientViolet"],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const simpleSubtitleResponsive = tv({
  base: "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl",
  variants: {
    color: {
      light: "text-gray-500 dark:text-gray-400",
      violet: "text-violet-600 dark:text-violet-400",
    },
    size: {
      sm: "text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl",
      md: "text-base sm:text-sm md:text-xl lg:text-2xl xl:text-3xl",
    },
    defaultVariants: {
      size: "md",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
});

export const sectionTitle = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      sm: "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
      md: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: ["violet", "yellow", "foreground"],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const textParagraph = tv({
  variants: {
    font: {
      normal: "font-normal",
      bold: "font-bold",
      semi: "font-semibold",
    },
    size: {
      md: "text-xs sm:text-base md:text-md lg:text-lg xl:text-lg",
      lg: "text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl",
    },
    color: {
      light: "text-gray-500 dark:text-gray-300",
      violet: "text-violet-600 dark:text-violet-400",
    },
    fullWidth: {
      true: "w-full block",
    },
    isLink: {
      true: "text-violet-600 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-200 inline",
    },
  },
  defaultVariants: {
    font: "normal",
    color: "light",
    size: "md",
  },
});

export const flatProjectCardText = tv({
  variants: {
    type: {
      title:
        "text-sm sm:text-lg md:text-md lg:text-lg xl:text-lg font-bold mb-1 sm:mb-0",
      subtitle:
        "text-xs sm:text-base md:text-md lg:text-lg xl:text-lg font-semibold text-default-600 dark:text-gray-300",
      description:
        "text-xs sm:text-base md:text-md lg:text-lg xl:text-lg text-default-600 dark:text-gray-300 mt-2 sm:mt-0",
    },
  },
});

export const flatProjectCardSpacing = tv({
  variants: {
    type: {
      tagsContainer: "flex flex-wrap gap-1 sm:gap-1.5 py-1 sm:py-2",
      headerContainer:
        "flex flex-col sm:flex-row sm:justify-between sm:items-start",
    },
  },
});

export const ProjectCardTitle = tv({
  base: "font-bold text-sm md:text-lg lg:text-xl",
});

export const educationCard = tv({
  variants: {
    type: {
      title: "text-sm sm:text-large font-semibold mb-1 sm:mb-0",
      subtitle:
        "text-xs sm:text-base md:text-medium lg:text-md xl:text-md  text-default-600 dark:text-gray-300",
      description:
        "text-xs sm:text-base md:text-sm lg:text-md xl:text-medium mt-2 sm:mt-0 text-default-400",
      date: "text-xs sm:text-base md:text-sm lg:text-md xl:text-medium text-default-400",
    },
  },
});

export const languageCard = tv({
  variants: {
    type: {
      name: "text-sm sm:text-large font-semibold mb-1 sm:mb-0",
      level:
        "text-xs sm:text-base md:text-medium lg:text-md xl:text-md  text-default-600 dark:text-gray-300",
    },
  },
});

export const certificationCard = tv({
  variants: {
    type: {
      title: "text-sm sm:text-large font-semibold mb-1 sm:mb-0",
      company:
        "text-xs sm:text-base md:text-medium lg:text-md xl:text-md  text-default-600 dark:text-gray-300",
      description:
        "text-xs sm:text-base md:text-sm lg:text-md xl:text-lg text-default-400 dark:text-gray-300",
    },
    semibold: {
      true: "font-semibold",
    },
  },
});

export const workExperienceCard = tv({
  variants: {
    type: {
      company:
        "text-sm sm:text-large font-medium text-default-800 inline truncate",
      location: "text-xs sm:text-base md:text-sm lg:text-base text-default-600",
      date: "text-xs sm:text-sm lg:text-md text-default-600",
      description: "text-xs sm:text-base md:text-sm lg:text-md xl:text-lg",
      charge:
        "text-sm sm:text-base md:text-md lg:text-lg text-default-700 dark:text-violet-300 truncate font-medium",
    },
  },
});
