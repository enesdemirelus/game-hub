import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red"; // Default to "red"

  return (
    <>
      <Badge color={color} fontSize="lg" px={3} py={2} borderRadius="md">
        {score}
      </Badge>
    </>
  );
};

export default CriticScore;
