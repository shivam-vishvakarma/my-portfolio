import Chip from "../atoms/Chip";

interface ChipContainerProps {
  chips: string[];
}

export default function ChipContainer({ chips }: ChipContainerProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((chip, i) => (
        <Chip key={i}>{chip}</Chip>
      ))}
    </div>
  );
}
