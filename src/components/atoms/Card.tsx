interface CardProps {
  children: React.ReactNode;
  variant?: "grey" | "black";
}

export default function Card({ children, variant = "grey" }: CardProps) {
  let classes =
    "group relative rounded-xl overflow-hidden transition-all duration-300 ";
  if (variant === "grey") {
    classes += "bg-gray-900 hover:bg-gray-800 hover:-translate-y-2";
  }
  if (variant === "black") {
    classes += "bg-black/50 backdrop-blur-lg hover:bg-black/70";
  }
  return <div className={classes}>{children}</div>;
}
