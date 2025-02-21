import { Game } from "@/hooks/useGames";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card.Root
        width={"700px"}
        height={"500px"}
        borderRadius={10}
        overflow={"hidden"}
      >
        <Image src={game.background_image}></Image>
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>

          <HStack justifyContent={"space-between"}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        </CardBody>
      </Card.Root>
    </>
  );
};

export default GameCard;
