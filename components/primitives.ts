import { tv } from "tailwind-variants";

export const name = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      xxs: "text-xl lg:text-2xl",
      xs: "text-2xl lg:text-3xl",
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-4xl lg:text-6xl",
      xl: "text-5xl lg:text-6xl",
      xxl: "text-6xl lg:text-7xl",
      auto: "text-[clamp(6rem,30vw,8rem)] leading-none",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "auto",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      xxs: "text-xl lg:text-2xl",
      xs: "text-2xl lg:text-3xl",
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-4xl lg:text-6xl",
      xl: "text-5xl lg:text-6xl",
      xxl: "text-6xl lg:text-7xl",
      xxxl: "text-7xl lg:text-8xl",
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
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

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
      lg: "text-lg lg:text-xl",
    },
  },
  defaultVariants: {
    color: "default",
    fullWidth: true,
    size: "lg",
  },
});

export const subtitleLink = tv({
  base: "text-lg lg:text-xl text-default-600 inline max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
    color: {
      violet:
        "text-violet-600 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-200",
    },
    size: {
      sm: "text-sm lg:text-base",
      md: "text-medium lg:text-lg",
      lg: "text-lg lg:text-xl",
    },
  },
  defaultVariants: {
    fullWidth: true,
    size: "lg",
  },
});

export const textLink = tv({
  base: "text-violet-600 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-200",
});

export const buttonGradient = tv({
  base: "bg-gradient-to-tr from-[#FF1CF7] to-violet-600 text-white shadow-lg",
});
