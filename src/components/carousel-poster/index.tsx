import { Box, Image, Text, Button } from "@chakra-ui/react";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/styles/carousel.css";

import { ArrowRightWhite } from "@/assets/icons";

interface DataProps {
  id: number;
  name: string;
  src: string;
}

const CarouselPoster = ({ data }: { data: DataProps[] }) => {
  return (
    <Box
      mb={{ base: "unset", md: "80px" }}
      width={"full"}
      backgroundColor={"#03827E"}
    >
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        /* navigation={true} */
      >
        {data?.length > 0 &&
          data.map((item: DataProps) => (
            <SwiperSlide key={item.id}>
              <Box
                position={"relative"}
                width={"full"}
                backgroundColor={"#03827E"}
              >
                <Image
                  src={item.src}
                  alt={item.name}
                  margin={"auto"}
                  height={{ xs: "420px", md: "576px" }}
                  objectFit={"cover"}
                />
                <Text
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
    </Box>
  );
};

export default CarouselPoster;
