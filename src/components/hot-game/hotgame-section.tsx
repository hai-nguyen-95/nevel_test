import { Box, Image, Text, Button } from "@chakra-ui/react";

interface DataProps {
  id: number;
  name: string;
  desc: string;
  src: string;
  squareSrc: string;
}

const HotGameSection = ({ data }: { data: DataProps }) => {
  return (
    <Box width={"490px"}>
      <Image src={data.src} alt={data.name} />
      <Box
        mt={"30px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Image width={"90px"} src={data.squareSrc} alt={data.name} />
        <Box>
          <Text fontSize={"19.219px"} fontWeight={600} lineHeight={"23px"}>
            {data.name}
          </Text>
          <Text
            mt={"8.5px"}
            width={"270px"}
            fontSize={"13.672px"}
            lineHeight={"18px"}
          >
            {data.desc}
          </Text>
        </Box>
        <Button
          padding={"7px 21.81px"}
          fontSize={"13.781px"}
          fontWeight={600}
          lineHeight={"14px"}
        >
          View
        </Button>
      </Box>
    </Box>
  );
};

export default HotGameSection;
