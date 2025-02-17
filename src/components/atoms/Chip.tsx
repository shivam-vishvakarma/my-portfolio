interface ChipProps {
  children: React.ReactNode;
}

export default function Chip({ children }: ChipProps) {
  return (
    <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
      {children}
    </span>
  );
}
