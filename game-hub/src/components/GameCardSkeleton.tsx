import { Card, CardBody } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "@/components/ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <>
      <Card.Root width={"700px"} height={"500px"}>
        <Skeleton height={"400px"}></Skeleton>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Card.Root>
    </>
  );
};

export default GameCardSkeleton;
