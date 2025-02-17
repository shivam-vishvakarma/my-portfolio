interface CardGradientProps {
  color: string;
}

export default function CardGradient({ color }: CardGradientProps) {
  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 transition-opacity rounded-xl pointer-events-none`}
    />
  );
}
