import { useRef, useState } from "react";
import {
  Box,
  Image,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import HotGameSection from "./hot-game-section";
import { HOT_GAME, RELEASE_DATE_FILTER } from "@/constants";

import { ChevronDownBlack, ChevronRightBlack } from "@/assets/icons";
import HotGameSectionMB from "./hot-game-section-mb";
import { HotGameProps } from "@/interfaces";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/styles/carousel-category.css";

import useBreakpoint from "@/hook/useBreakpoint";

import { BreakpointType } from "@/interfaces";

const HotGame = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>();
  const [releaseDateFilter, setReleaseDateFilter] = useState("AZ");
  const { md, lg }: BreakpointType = useBreakpoint();
  const [slideIndex, setSlideIndex] = useState<number>(0)

  const handleSelectFilter = (item: string) => () => {
    setReleaseDateFilter(item);
  };

  const handleChangeSlide = (action: string) => () => {
    if (action === "next") {
      swiperRef.current.slideNext();
    } else {
      swiperRef.current.slidePrev();
    }
  };
  return (
    <Box padding={{ base: "0px 25px", md: 0 }}>
      <Box
        mb={"30px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text
          fontSize={{ base: "18px", md: "28.359px" }}
          fontWeight={600}
          lineHeight={"30px"}
          textTransform={{ base: "uppercase", md: "capitalize" }}
        >
          Hot Game
        </Text>

        {/* BUTTON NEXT, PREV MD */}
        <Box display={{ base: "none", md: "flex" }}>
          <Image
            src={ChevronRightBlack.src}
            alt="chevron right"
            transform={"rotate(180deg)"}
            onClick={handleChangeSlide("prev")}
            opacity={slideIndex <= 0 ? 0.5 : 1}
          />
          <Image
            src={ChevronRightBlack.src}
            alt="chevron right"
            onClick={handleChangeSlide("next")}
            opacity={slideIndex >= HOT_GAME?.length - 1 ? 0.5 : 1}
          />
        </Box>

        {/* FILTER MOBILE */}
        <Box display={{ base: "unset", md: "none" }}>
          <Menu matchWidth>
            <MenuButton as={Button} padding={"0 11px"}>
              <Box width={"124px"} display={"flex"} alignItems={"center"}>
                <Text fontSize={"12px"} fontWeight={600} lineHeight={"26px"}>
                  Release Date
                </Text>
                <Text
                  ml={"16px"}
                  fontSize={"8px"}
                  fontWeight={600}
                  lineHeight={"26px"}
                >
                  {releaseDateFilter}
                </Text>
                <Image src={ChevronDownBlack.src} alt="chevron down" />
              </Box>
            </MenuButton>
            <MenuList
              minWidth={"unset"}
              py={0}
              border={"1px solid rgba(0, 0, 0, 0.2)"}
              borderRadius={"2px"}
              zIndex={9}
            >
              {RELEASE_DATE_FILTER?.length > 0 &&
                RELEASE_DATE_FILTER.map((item: string) => (
                  <MenuItem
                    key={item}
                    backgroundColor={"transparent"}
                    fontSize="10px"
                    onClick={handleSelectFilter(item)}
                  >
                    {item}
                  </MenuItem>
                ))}
            </MenuList>
          </Menu>
        </Box>
      </Box>
      <Swiper
        className={`category-swiper`}
        modules={[Virtual]}
        slidesPerView={lg ? 2 : md ? 1.5 : 1}
        spaceBetween={20}
        virtual
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setSlideIndex(swiper.realIndex)
        }}
      >
        {HOT_GAME?.length > 0 &&
          HOT_GAME.map((item: HotGameProps) => (
            <SwiperSlide key={item.id}>
              {md ? (
                <HotGameSection data={item} />
              ) : (
                <HotGameSectionMB data={item} />
              )}
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
};

export default HotGame;
