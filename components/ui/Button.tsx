import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-display font-medium uppercase tracking-wider transition-all duration-300 rounded-full select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff2d2d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] disabled:opacity-50 disabled:pointer-events-none group";

    const variants = {
      primary:
        "bg-[#ff2d2d] text-white hover:bg-[#e02525] hover:shadow-[0_0_20px_rgba(255,45,45,0.4)] active:scale-[0.98]",
      secondary:
        "bg-white/10 text-[#f5f5f5] backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 active:scale-[0.98]",
      outline:
        "bg-transparent text-[#f5f5f5] border border-white/20 hover:border-[#ff2d2d] hover:text-[#ff2d2d] active:scale-[0.98]",
      ghost:
        "bg-transparent text-[#8a8a8a] hover:text-white hover:bg-white/[0.04]",
      danger:
        "bg-red-600/20 text-red-400 border border-red-500/30 hover:bg-red-600/30",
    };

    const sizes = {
      sm: "text-xs px-4 py-2 gap-1.5",
      md: "text-xs sm:text-sm px-6 py-3 gap-2",
      lg: "text-sm sm:text-base px-8 py-4 gap-2.5",
    };

    const combinedClassName = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClassName}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClassName}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
