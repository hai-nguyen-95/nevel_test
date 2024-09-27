import { Box, Image, Text, Button } from "@chakra-ui/react";

interface DataProps {
  id: number;
  name: string;
  desc: string;
  src: string;
  squareSrc: string;
  volatility: string;
  rpt: string;
  maximumWin: string;
}

const HotGameSectionMB = ({ data }: { data: DataProps }) => {
  return (
    <Box
      margin={"auto"}
      width={"308px"}
      backgroundColor={"#C48F03"}
      borderRadius={"16px"}
    >
      <Image borderRadius={"16px 16px 0 0"} src={data.src} alt={data.name} />
      <Box
        padding={"20px"}
        display={"flex"}
        alignItems={"center"}
        columnGap={"20px"}
      >
        <Image width={"60px"} src={data.squareSrc} alt={data.name} />
        <Box>
          <Text
            fontSize={"16px"}
            fontWeight={600}
            lineHeight={"20px"}
            color={"#fff"}
          >
            {data.name}
          </Text>
          <Text
            mt={"3px"}
            fontSize={"12px"}
            lineHeight={"14px"}
            color={"#fff"}
            opacity={0.5}
          >
            {data.desc}
          </Text>
        </Box>
      </Box>
      <Box
        padding={"8px 20px 27px 20px"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Box>
          <Text fontSize={"14px"} lineHeight={"16px"} color={"#fff"}>
            {data.volatility}
          </Text>
          <Text
            mt={"4px"}
            fontSize={"12px"}
            lineHeight={"12px"}
            color={"#fff"}
            opacity={0.5}
          >
            Volatility
          </Text>
        </Box>
        <Box>
          <Text fontSize={"14px"} lineHeight={"16px"} color={"#fff"}>
            {data.rpt}%
          </Text>
          <Text
            mt={"4px"}
            fontSize={"12px"}
            lineHeight={"12px"}
            color={"#fff"}
            opacity={0.5}
          >
            RTP
          </Text>
        </Box>
        <Box>
          <Text fontSize={"14px"} lineHeight={"16px"} color={"#fff"}>
            x{data.maximumWin}
          </Text>
          <Text
            mt={"4px"}
            fontSize={"12px"}
            color={"#fff"}
            opacity={0.5}
            lineHeight={"12px"}
          >
            Maximum Win
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default HotGameSectionMB;
