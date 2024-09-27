"use client";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { baseTheme } from "@/theme";
import styles from "@/styles/global.module.css";

import { POSTER } from "@/constants";
import CarouselPoster from "@/components/carousel-poster";
import Topbar from "@/components/topbar";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import HotGame from "@/components/hot-game";

export default function Home() {
  return (
    <div className={styles.page}>
      <ChakraProvider theme={baseTheme}>
        <Topbar />
        <CarouselPoster data={POSTER} />
        <Box
          margin={"auto"}
          paddingX={{base: 0, md: "20px"}}
          maxWidth={"1240px"}
          display={"flex"}
          flexDirection={{base: "column", md: "row"}}
          columnGap={"40px"}
          rowGap={"20px"}
        >
          <Sidebar />
          <HotGame />
        </Box>
        <Footer />
      </ChakraProvider>
    </div>
  );
}
