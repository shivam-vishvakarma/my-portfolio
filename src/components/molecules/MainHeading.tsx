import Typography from "../atoms/Typography";

interface MainHeadingProps {
  primary: string;
  secondary: string;
}

export default function MainHeading({ primary, secondary }: MainHeadingProps) {
  return (
    <Typography variant="h2">
      {primary}
      <Typography variant="gradient">{secondary}</Typography>
    </Typography>
  );
}
