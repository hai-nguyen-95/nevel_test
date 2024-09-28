import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { HotCategoryProps } from "@/interfaces";

const HotCategorySection = ({ data }: { data: HotCategoryProps }) => {
  return (
    <Flex
      margin={{base: "auto", md: "unset"}}
      width={{ base: "390.658px", md: "490px" }}
      height={{ base: "291px", md: "365px" }}
      padding={{ base: "15.95px", md: "20px" }}
      backgroundColor={"rgba(0, 0, 0, 0.05)"}
      borderRadius={{ base: "22.323px", md: "28px" }}
      gap={{ base: "23.92px", md: "30px" }}
    >
      <Flex flexFlow={"wrap"} gap={{ base: "15.95px", md: "20px" }}>
        {/* CATEGORY INFO */}
        <Box
          padding={{ base: "15.95px", md: "20px" }}
          width={{ base: "167.425px", md: "210px" }}
          height={{ base: "167.425px", md: "210px" }}
          backgroundColor={"#5C6EFF"}
          borderRadius={{ base: "15.95px", md: "20px" }}
        >
          <Image
            width={{ base: "19.134px", md: "24px" }}
            src={data.icon}
            alt={data.name}
          />
          <Text
            mt={"11.96px"}
            fontSize={{ base: "17.266px", md: "21.656px" }}
            lineHeight={{ base: "12.756px", md: "16px" }}
            color={"#fff"}
          >
            {data.name}
          </Text>
          <Text
            mt={"14.35px"}
            fontSize={{ base: "10.987px", md: "13.781px" }}
            lineHeight={{ base: "15.945px", md: "20px" }}
            color={"#fff"}
            opacity={0.6}
          >
            {data.desc}
          </Text>
        </Box>

        {/* IMAGE TOP RIGHT 1 */}
        <Image
          width={{ base: "75.74px", md: "95px" }}
          height={{ base: "75.74px", md: "95px" }}
          src={data.squareSrc3}
          alt={data.name}
        />

        {/* IMAGE TOP RIGHT 2*/}
        <Image
          width={{ base: "75.74px", md: "95px" }}
          height={{ base: "75.74px", md: "95px" }}
          src={data.squareSrc4}
          alt={data.name}
        />
      </Flex>

      <Flex flexFlow={"wrap"} gap={{ base: "15.95px", md: "20px" }}>

        {/* IMAGE BOTTOM LEFT 1*/}
        <Image
          width={{ base: "75.74px", md: "95px" }}
          height={{ base: "75.74px", md: "95px" }}
          src={data.squareSrc1}
          alt={data.name}
        />

        {/* IMAGE BOTTOM LEFT 2*/}
        <Image
          width={{ base: "75.74px", md: "95px" }}
          height={{ base: "75.74px", md: "95px" }}
          src={data.squareSrc2}
          alt={data.name}
        />

        {/*LARGE IMAGE BOTTOM RIGHT*/}
        <Image
          width={{ base: "167.425px", md: "210px" }}
          height={{ base: "167.425px", md: "210px" }}
          borderRadius={{ base: "15.95px", md: "20px" }}
          src={data.squareSrc5}
          alt={data.name}
        />
      </Flex>
    </Flex>
  );
};

export default HotCategorySection;
