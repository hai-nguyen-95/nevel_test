import {
  Box,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";

import { LogoWhite, MenuWhite } from "@/assets/icons";

import { ROUTER_LIST } from "@/constants";

const Topbar = () => {
  return (
    <Box
      width={"full"}
      position={"absolute"}
      top={0}
      left={0}
      background={{
        base: "transparent",
        md: "linear-gradient(180deg, rgba(0, 0, 0, 0.50) 7%, rgba(0, 0, 0, 0.00) 70%)",
      }}
      zIndex={9}
    >
      <Box
        margin={"auto"}
        padding={"14px 17px"}
        maxWidth={"1240px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Image
          src={LogoWhite.src}
          alt={"logo"}
          width={{ base: "53px", md: "109px" }}
          height={{ base: "31px", md: "64px" }}
        />

        {/* MENU MD */}
        <Tabs
          display={{ base: "none", md: "unset" }}
          borderColor={"transparent"}
        >
          <TabList>
            {ROUTER_LIST?.length > 0 &&
              ROUTER_LIST.map((item: string) => (
                <Tab
                  key={item}
                  color={"#fff"}
                  opacity={0.5}
                  fontSize="14.75px"
                  _active={{
                    bgColor: "transparent",
                  }}
                  _selected={{
                    opacity: 1,
                    borderBottom: "1px solid #fff",
                  }}
                  textTransform={"uppercase"}
                  height={"72px"}
                >
                  {item}
                </Tab>
              ))}
          </TabList>
        </Tabs>

        {/* MENU MOBILE */}
        <Box display={{ base: "unset", md: "none" }}>
          <Menu>
            <MenuButton
              as={Button}
              padding={0}
              borderColor={"transparent"}
              rightIcon={<Image src={MenuWhite.src} alt="menu" />}
            />
            <MenuList background={"rgba(0, 0, 0, 0.5)"} border={"unset"}>
              {ROUTER_LIST?.length > 0 &&
                ROUTER_LIST.map((item: string) => (
                  <MenuItem
                    key={item}
                    backgroundColor={"transparent"}
                    color={"#fff"}
                    fontSize="10px"
                  >
                    {item}
                  </MenuItem>
                ))}
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
