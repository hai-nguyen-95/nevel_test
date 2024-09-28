import { useRef, useState } from "react";
import {
  Box,
  Image,
  Text,
  Button
} from "@chakra-ui/react";

import HotCategorySection from "./hot-category-section";
import { HOT_CATEGORY } from "@/constants";
import { HotCategoryProps } from "@/interfaces";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Virtual } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/styles/carousel-category.css";

import useBreakpoint from "@/hook/useBreakpoint";

import { ChevronRightBlack } from "@/assets/icons";

import { BreakpointType } from "@/interfaces";

const HotCategory = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>();
  const { md, lg }: BreakpointType = useBreakpoint();
  const [slideIndex, setSlideIndex] = useState<number>(0)

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return (
        '<div class="' +
        className +
        '"><div class="swiper-pagination-bullet-child"></div></div>'
      );
    },
  };

  const handleChangeSlide = (action: string) => () => {
    if (action === "next") {
      swiperRef.current.slideNext();
    } else {
      swiperRef.current.slidePrev();
    }
  };
  return (
    <Box mt={{ base: "47px", md: "100px" }}>
      <Box
        mb={"30px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text
          paddingX={{ base: "25px", md: 0 }}
          fontSize={{ base: "18px", md: "28.359px" }}
          fontWeight={600}
          lineHeight={"30px"}
          textTransform={{ base: "uppercase", md: "capitalize" }}
        >
          Hottest Category
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
            opacity={slideIndex >= HOT_CATEGORY?.length - 1 ? 0.5 : 1}
          />
        </Box>
      </Box>
      <Swiper
        className={`category-swiper`}
        modules={[Pagination, Virtual]}
        slidesPerView={lg ? 2 : md ? 1.5 : 1}
        spaceBetween={20}
        pagination={md ? false : pagination}
        virtual
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setSlideIndex(swiper.realIndex)
        }}
      >
        {HOT_CATEGORY?.length > 0 &&
          HOT_CATEGORY.map((item: HotCategoryProps) => (
            <SwiperSlide key={item.id}>
              <HotCategorySection data={item} />
            </SwiperSlide>
          ))}
      </Swiper>

      {/* BUTTON LOADMORE MOBILE */}
      <Button
        display={{ base: "block", md: "none" }}
        margin={"auto"}
        width={"350px"}
        padding={"1px 0"}
        borderRadius={"14px"}
        border={"1px solid rgba(0, 0, 0, 0.02)"}
        backgroundColor={"rgba(0, 0, 0, 0.02)"}
        fontSize={"15px"}
        lineHeight={"48px"}
        fontWeight={600}
      >
        Load More +
      </Button>
    </Box>
  );
};

export default HotCategory;
