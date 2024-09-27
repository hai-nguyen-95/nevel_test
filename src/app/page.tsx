"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { baseTheme } from "@/theme";
import styles from "@/styles/global.module.css";

import { POSTER } from "@/constants";
import CarouselPoster from "@/components/carousel-poster";
import Topbar from "@/components/topbar";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <ChakraProvider theme={baseTheme}>
        <Topbar />
        <main>
          <CarouselPoster data={POSTER} />
          <Sidebar />
        </main>
        <Footer />
      </ChakraProvider>
    </div>
  );
}
