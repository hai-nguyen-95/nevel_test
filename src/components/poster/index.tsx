import { Box, Image, Text, Button } from "@chakra-ui/react";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Virtual } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/styles/carousel-poster.css";

import { ArrowRightWhite } from "@/assets/icons";

import { PosterProps } from "@/interfaces";

import useBreakpoint from "@/hook/useBreakpoint";

import { BreakpointType } from "@/interfaces";

const Poster = ({ data }: { data: PosterProps[] }) => {
  const { md }: BreakpointType = useBreakpoint();

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
  return (
    <Swiper
      className={`poster-swiper ${
        md ? "poster-swiper-screen-md" : "poster-swiper-screen-mb"
      }`}
      modules={[Pagination, Virtual]}
      pagination={pagination}
      virtual
    >
      {data?.length > 0 &&
        data.map((item: PosterProps) => (
          <SwiperSlide key={item.id} virtualIndex={item.id}>
            <Box position={"relative"} width={"full"}>
              <Image
                src={item.src}
                alt={item.name}
                margin={"auto"}
                height={{ xs: "420px", md: "576px" }}
                objectFit={"cover"}
              />
              <Text
                display={{ base: "block", md: "none" }}
                position={"absolute"}
                width={"full"}
                bottom={"62.5px"}
                fontSize={"24px"}
                textAlign={"center"}
                color={"#fff"}
              >
                {item.name}
              </Text>
              <Button
                display={{ base: "block", md: "none" }}
                position={"absolute"}
                bottom={"28.5px"}
                left={"calc(50% - 70px)"}
                fontSize={"14px"}
                color={"#fff"}
                borderColor={"transparent"}
                rightIcon={
                  <Image src={ArrowRightWhite.src} alt={"Arrow Right"} />
                }
              >
                Game Details
              </Button>
            </Box>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Poster;
