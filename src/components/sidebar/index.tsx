import { Box, Image, Text, Tabs, TabList, Tab } from "@chakra-ui/react";

import useBreakpoint from "@/hook/useBreakpoint";

import { SIDEBAR_LIST, SEARCH, FILTER } from "@/constants";

interface DataProps {
  id: number;
  name: string;
  fullName?: string;
  src: string;
}

const Sidebar = () => {
  const { md }: any = useBreakpoint();

  return (
    <Box width={{ base: "full", md: "120px" }}>
      <Tabs borderColor={"transparent"} variant={"sidebar"}>
        <TabList display={"flex"} flexDirection={{ base: "row", md: "column" }}>
          <Tab
            display={{ base: "none", md: "unset" }}
            borderBottom={"1px solid"}
            _selected={{
              opacity: 1,
              borderBottom: "1px solid rgba(0,0,0,0.2)",
            }}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              rowGap={"6px"}
            >
              <Image src={SEARCH.src} alt={SEARCH.name} />
              <Text
                fontSize={"10px"}
                fontWeight={600}
                lineHeight={"10px"}
                textTransform={"uppercase"}
              >
                {SEARCH.name}
              </Text>
            </Box>
          </Tab>
          {SIDEBAR_LIST?.length > 0 &&
            SIDEBAR_LIST.map((item: DataProps, index: number) => (
              <Tab key={index}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  rowGap={"6px"}
                >
                  <Image src={item.src} alt={item.name} />
                  <Text
                    fontSize={"10px"}
                    fontWeight={600}
                    lineHeight={"10px"}
                    textTransform={"uppercase"}
                  >
                    {md ? item.fullName || item.name : item.name}
                  </Text>
                </Box>
              </Tab>
            ))}
          <Tab display={{ base: "unset", md: "none" }}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              rowGap={"6px"}
            >
              <Image src={SEARCH.src} alt={SEARCH.name} />
              <Text
                fontSize={"10px"}
                fontWeight={600}
                lineHeight={"10px"}
                textTransform={"uppercase"}
              >
                {SEARCH.name}
              </Text>
            </Box>
          </Tab>
          <Tab
            display={{ base: "unset", md: "none" }}
            borderLeft={"1px solid"}
            _selected={{
              opacity: 1,
              borderLeft: "1px solid rgba(0,0,0,0.2)",
            }}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              rowGap={"6px"}
            >
              <Image src={FILTER.src} alt={FILTER.name} />
              <Text
                fontSize={"10px"}
                fontWeight={600}
                lineHeight={"10px"}
                textTransform={"uppercase"}
              >
                {FILTER.name}
              </Text>
            </Box>
          </Tab>
        </TabList>
      </Tabs>
    </Box>
  );
};

export default Sidebar;
