"use client";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { baseTheme } from "@/theme";
import styles from "@/styles/global.module.css";

import { POSTER } from "@/constants";
import CarouselPoster from "@/components/poster";
import Topbar from "@/components/topbar";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import HotGame from "@/components/hot-game";
import HotCategory from "@/components/hot-category";

export default function Home() {
  return (
    <div className={styles.page}>
      <ChakraProvider theme={baseTheme}>
        <Topbar />
        <Box
          mb={{ base: "unset", md: "80px" }}
          width={"full"}
          backgroundColor={"#03827E"}
        >
          <CarouselPoster data={POSTER} />
        </Box>

        <Box
          margin={"auto"}
          paddingX={{ base: 0, md: "20px" }}
          maxWidth={"1240px"}
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          columnGap={"40px"}
          rowGap={"20px"}
        >
          <Box width={{ base: "full", md: "160px" }}>
            <Sidebar />
          </Box>
          <Box width={{ base: "full", md: "calc(100% - 200px)" }}>
            <HotGame />
            <HotCategory />
          </Box>
        </Box>
        <Footer />
      </ChakraProvider>
    </div>
  );
}
