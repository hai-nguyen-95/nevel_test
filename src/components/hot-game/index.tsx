import { useState } from "react";
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
import HotGameSection from "./hotgame-section";
import { HOT_GAME, RELEASE_DATE_FILTER, HOT_GAME_MB } from "@/constants";

import { ChevronDownBlack } from "@/assets/icons";
import HotGameSectionMB from "./hotgame-section-mb";

const HotGame = () => {
  const [releaseDateFilter, setReleaseDateFilter] = useState("AZ");

  const handleSelectFilter = (item: string) => () => {
    setReleaseDateFilter(item);
  };
  return (
    <Box padding={"0px 25px 30px 25px"}>
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
        >
          Hot Game
        </Text>
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
      <Box
        display={{ base: "none", md: "flex" }}
        gap={"50px 20px"}
        flexFlow={"wrap"}
      >
        {HOT_GAME?.length > 0 &&
          HOT_GAME.map((item) => (
            <Box key={item.id}>
              <HotGameSection data={item} />
            </Box>
          ))}
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <HotGameSectionMB data={HOT_GAME_MB} />
      </Box>
    </Box>
  );
};

export default HotGame;
