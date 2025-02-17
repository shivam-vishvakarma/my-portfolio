import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: "filled" | "outlined" | "icon-text";
  arrow?: "right" | "down" | "none";
  leftIcon?: React.ReactNode;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  component?: "button" | "a";
}

export default function Button({
  children,
  arrow = "none",
  href,
  variant = "filled",
  leftIcon,
  className,
  component = "button",
  target = "_self",
  ...props
}: ButtonProps) {
  let classes =
    variant === "filled"
      ? "group flex items-center px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-full text-white transition-all cursor-pointer"
      : variant === "outlined"
      ? "px-6 py-3 border border-purple-500 rounded-full text-purple-400 hover:bg-purple-500 hover:text-white transition-all cursor-pointer"
      : variant === "icon-text"
      ? "flex items-center text-gray-400 hover:text-purple-400 transition-colors cursor-pointer"
      : "";

  classes += ` ${className}`;
  const arrowIcon =
    arrow === "right" ? (
      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
    ) : (
      <ArrowDown className="w-4 h-4 ml-2 transform group-hover:translate-y-1 transition-transform" />
    );

  return (
    <>
      {component === "button" ? (
        <button className={classes} {...props}>
          {leftIcon}
          {children}
          {arrow !== "none" && arrowIcon}
        </button>
      ) : (
        <Link href={href || ""} target={target} className={classes} {...props}>
          {leftIcon}
          {children}
          {arrow !== "none" && arrowIcon}
        </Link>
      )}
    </>
  );
}
