import { useState } from "react";
import { Box, Image, Text, Collapse } from "@chakra-ui/react";
import {
  LogoGray,
  TwitterSolidBlue,
  YoutubeSolidRed,
  LinkedinSolidBlue,
} from "@/assets/icons";

import { ROUTER_LIST, ABOUT_US, EVENTS, OUR_PARTNERS } from "@/constants";

import useBreakpoint from "@/hook/useBreakpoint";

const Footer = () => {
  const { md }: any = useBreakpoint();
  const [isShowWebMap, setIsShowWebMap] = useState<boolean>(false);
  const [isShowAboutUs, setIsShowAboutUs] = useState<boolean>(false);
  const [isShowEvents, setIsShowEvents] = useState<boolean>(false);
  const [isShowOutPartners, setIsShowOutPartners] = useState<boolean>(false);

  const handleShowCollapse = (index: number) => () => {
    if (md) return;
    else
      switch (index) {
        case 1:
          setIsShowWebMap(!isShowWebMap);
          break;
        case 2:
          setIsShowAboutUs(!isShowAboutUs);
          break;
        case 3:
          setIsShowEvents(!isShowEvents);
          break;
        case 4:
          setIsShowOutPartners(!isShowOutPartners);
          break;
        default:
          break;
      }
  };

  return (
    <Box
      margin={"auto"}
      maxWidth={"1440px"}
      padding={{ base: "unset", md: "101px 25px" }}
    >
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row-reverse" }}
        justifyContent={"space-between"}
        padding={{ base: "13px 25px 115px 25px", md: "unset" }}
      >
        <Box
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          columnGap={"100px"}
        >
          {/* WEB MAP */}
          <Box
            padding={"30px 0"}
            borderBottom={{
              base: "1px solid rgba(0, 0, 0, 0.06)",
              md: "unset",
            }}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              onClick={handleShowCollapse(1)}
            >
              <Text fontSize={"13px"} fontWeight={600}>
                WEB MAP
              </Text>
              <Text display={{ base: "block", md: "none" }} fontWeight={600}>
                +
              </Text>
            </Box>
            <Box mt={{ base: "unset", md: "20px" }}>
              <Collapse in={md ? true : isShowWebMap} animateOpacity>
                {ROUTER_LIST?.length > 0 &&
                  ROUTER_LIST.map((item: string) => (
                    <Text key={item} fontSize={"11.8px"} opacity={0.5}>
                      {item}
                    </Text>
                  ))}
              </Collapse>
            </Box>
          </Box>

          {/* ABOUT US*/}
          <Box
            padding={"30px 0"}
            borderBottom={{
              base: "1px solid rgba(0, 0, 0, 0.06)",
              md: "unset",
            }}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              onClick={handleShowCollapse(2)}
            >
              <Text fontSize={"13px"} fontWeight={600}>
                ABOUT US
              </Text>
              <Text display={{ base: "block", md: "none" }} fontWeight={600}>
                +
              </Text>
            </Box>
            <Box mt={{ base: "unset", md: "20px" }}>
              <Collapse in={md ? true : isShowAboutUs} animateOpacity>
                {ABOUT_US?.length > 0 &&
                  ABOUT_US.map((item: string) => (
                    <Text key={item} fontSize={"11.8px"} opacity={0.5}>
                      {item}
                    </Text>
                  ))}
              </Collapse>
            </Box>
          </Box>

          {/* EVENTS*/}
          <Box
            padding={"30px 0"}
            borderBottom={{
              base: "1px solid rgba(0, 0, 0, 0.06)",
              md: "unset",
            }}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              onClick={handleShowCollapse(3)}
            >
              <Text fontSize={"13px"} fontWeight={600}>
                EVENTS
              </Text>
              <Text display={{ base: "block", md: "none" }} fontWeight={600}>
                +
              </Text>
            </Box>
            <Box mt={{ base: "unset", md: "20px" }}>
              <Collapse in={md ? true : isShowEvents} animateOpacity>
                {EVENTS?.length > 0 &&
                  EVENTS.map((item: string) => (
                    <Text key={item} fontSize={"11.8px"} opacity={0.5}>
                      {item}
                    </Text>
                  ))}
              </Collapse>
            </Box>
          </Box>

          {/* OUR PARTNERS*/}
          <Box
            padding={"30px 0"}
            borderBottom={{
              base: "1px solid rgba(0, 0, 0, 0.06)",
              md: "unset",
            }}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              onClick={handleShowCollapse(4)}
            >
              <Text fontSize={"13px"} fontWeight={600}>
                OUR PARTNERS
              </Text>
              <Text display={{ base: "block", md: "none" }} fontWeight={600}>
                +
              </Text>
            </Box>
            <Box mt={{ base: "unset", md: "20px" }}>
              <Collapse in={md ? true : isShowOutPartners} animateOpacity>
                {OUR_PARTNERS?.length > 0 &&
                  OUR_PARTNERS.map((item: string) => (
                    <Text key={item} fontSize={"11.8px"} opacity={0.5}>
                      {item}
                    </Text>
                  ))}
              </Collapse>
            </Box>
          </Box>
        </Box>

        <Box mt={{ base: "51px", md: "unset" }}>
          <Image
            display={{ base: "none", md: "block" }}
            src={LogoGray.src}
            alt="logo"
          />
          <Text
            mt={{ base: "unset", md: "14px" }}
            width={{ base: "unset", md: "180px" }}
            fontSize={"11.5px"}
            opacity={0.3}
          >
            Valletta Buildings, South Street, Valletta - VLT 1103 Malta
          </Text>
          <Text
            display={{ base: "block", md: "none" }}
            mt={"20px"}
            fontSize={"11.5px"}
            opacity={0.3}
          >
            COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.
          </Text>
          <Box
            mt={{ base: "30px", md: "40px" }}
            display={"flex"}
            columnGap={"15px"}
          >
            <Image src={TwitterSolidBlue.src} alt="twitter" />
            <Image src={YoutubeSolidRed.src} alt="youtube" />
            <Image src={LinkedinSolidBlue.src} alt="linkedin" />
          </Box>
        </Box>
      </Box>
      <Box
        display={{ base: "none", md: "block" }}
        paddingTop={"40px"}
        borderTop={"1px solid rgba(0, 0, 0, 0.1)"}
      >
        <Text fontSize={"11.5px"} opacity={0.3}>
          COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
