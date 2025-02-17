interface TypographyProps {
  variant:
    | "h2"
    | "h4"
    | "card-title"
    | "card-title2"
    | "card-desc"
    | "card-desc2"
    | "gradient"
    | "list";
  children: React.ReactNode;
  className?: string;
}

export default function Typography({
  variant,
  children,
  className = "",
}: TypographyProps) {
  let classes =
    variant === "h2"
      ? "text-4xl md:text-5xl font-bold mb-16 text-center"
      : variant === "h4"
      ? "font-bold"
      : variant === "gradient"
      ? "block bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"
      : variant === "card-title"
      ? "text-2xl font-bold"
      : variant === "card-title2"
      ? "text-xl font-bold"
      : variant === "list"
      ? "w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"
      : variant === "card-desc"
      ? "text-gray-400"
      : variant === "card-desc2"
      ? "text-gray-300"
      : "";

  classes = `${classes} ${className}`;

  return (
    <>
      {variant === "h2" ? (
        <h2 className={classes}>{children}</h2>
      ) : variant === "h4" ? (
        <h4 className={classes}>{children}</h4>
      ) : variant === "gradient" ? (
        <span className={classes}>{children}</span>
      ) : variant === "card-title" ? (
        <h3 className={classes}>{children}</h3>
      ) : variant === "list" ? (
        <li className="flex items-center">
          <span className={classes} />
          {children}
        </li>
      ) : (
        <p className={classes}>{children}</p>
      )}
    </>
  );
}
