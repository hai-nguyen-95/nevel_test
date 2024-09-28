import { Image, Text, Tabs, TabList, Tab } from "@chakra-ui/react";

import useBreakpoint from "@/hook/useBreakpoint";

import { SIDEBAR_LIST, SEARCH, FILTER } from "@/constants";

import { SideBarProps } from "@/interfaces"

import { BreakpointType } from "@/interfaces";

const Sidebar = () => {
  const { md }: BreakpointType = useBreakpoint();

  return (
    <Tabs borderColor={"transparent"} variant={"sidebar"}>
      <TabList
        display={"flex"}
        flexDirection={{ base: "row", md: "column" }}
        rowGap={"15px"}
      >
        {/* SEARCH MD */}
        <Tab
          padding={{ base: "21px", md: "0 0 21px 0" }}
          borderBottom={"1px solid"}
          display={{ base: "none", md: "flex" }}
          flexDirection={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={"5px"}
          _selected={{
            opacity: 1,
            borderBottom: "1px solid rgba(0,0,0,0.2)",
          }}
        >
          <Image src={SEARCH.src} alt={SEARCH.name} />
          <Text
            fontSize={"15.5px"}
            fontWeight={600}
            lineHeight={"20px"}
            textTransform={"uppercase"}
          >
            {SEARCH.name}
          </Text>
        </Tab>

        {/* GAME HOMES, TIMELINE, ALL GAMES */}
        {SIDEBAR_LIST?.length > 0 &&
          SIDEBAR_LIST.map((item: SideBarProps, index: number) => (
            <Tab
              key={index}
              padding={{ base: "21px", md: "5px 0" }}
              flexDirection={{ base: "column", md: "row" }}
              justifyContent={{ base: "center", md: "flex-start" }}
              alignItems={"center"}
              gap={"6px 5px"}
            >
              <Image src={item.src} alt={item.name} />
              <Text
                fontSize={{ base: "10px", md: "15.5px" }}
                fontWeight={600}
                lineHeight={{ base: "10px", md: "20px" }}
                textTransform={"uppercase"}
              >
                {md ? item.fullName || item.name : item.name}
              </Text>
            </Tab>
          ))}

        {/* SEARCH MOBILE */}
        <Tab
          display={{ base: "flex", md: "none" }}
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
        </Tab>

        {/* FILTER MOBILE */}
        <Tab
          display={{ base: "flex", md: "none" }}
          borderLeft={"1px solid"}
          flexDirection={"column"}
          alignItems={"center"}
          rowGap={"6px"}
          _selected={{
            opacity: 1,
            borderLeft: "1px solid rgba(0,0,0,0.2)",
          }}
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
        </Tab>
      </TabList>
    </Tabs>
  );
};

export default Sidebar;
