import { Avatar, Box, Button, Flex, Link, Tooltip } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { InstagramLogo, InstagramMobileLogo } from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlinePlusCircle } from "react-icons/ai";
import useLogOut from "../../hooks/useLogOut";

const Sidebar = () => {
  const { handleLogOut, isLoggingOut, error } = useLogOut();

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w={"full"} h={"full"}>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor={"pointer"}
        >
          <InstagramLogo />
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          p={2}
          display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{
            bg: "whiteAlpha.200",
          }}
          w={10}
          cursor={"pointer"}
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          <Flex direction={"row"} gap={2}>
            <Link
              display={"flex"}
              to={"/"}
              as={RouterLink}
              alignItems={"center"}
              gap={4}
              _hover={{ bg: "whiteAlpha.400" }}
              borderRadius={6}
              p={2}
              w={{ base: 10, md: "full" }}
              mt={"auto"}
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <AiFillHome size={25} />
              <Box display={{ base: "none", md: "block" }}>Home</Box>
            </Link>
          </Flex>
          <Flex direction={"row"} gap={2}>
            <Link
              display={"flex"}
              to={"/search"}
              as={RouterLink}
              alignItems={"center"}
              gap={4}
              _hover={{ bg: "whiteAlpha.400" }}
              borderRadius={6}
              p={2}
              w={{ base: 10, md: "full" }}
              mt={"auto"}
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <IoIosSearch size={25} />
              <Box display={{ base: "none", md: "block" }}>Search</Box>
            </Link>
          </Flex>
          <Flex direction={"row"} gap={2}>
            <Link
              display={"flex"}
              to={"/notifications"}
              as={RouterLink}
              alignItems={"center"}
              gap={4}
              _hover={{ bg: "whiteAlpha.400" }}
              borderRadius={6}
              p={2}
              w={{ base: 10, md: "full" }}
              mt={"auto"}
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <IoMdHeartEmpty size={25} />
              <Box display={{ base: "none", md: "block" }}>Notifications</Box>
            </Link>
          </Flex>
          <Flex direction={"row"} gap={2}>
            <Link
              display={"flex"}
              to={"/create-post"}
              as={RouterLink}
              alignItems={"center"}
              gap={4}
              _hover={{ bg: "whiteAlpha.400" }}
              borderRadius={6}
              p={2}
              w={{ base: 10, md: "full" }}
              mt={"auto"}
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <AiOutlinePlusCircle size={25} />
              <Box display={{ base: "none", md: "block" }}>Create</Box>
            </Link>
          </Flex>
          <Flex direction={"row"} gap={2}>
            <Link
              display={"flex"}
              to={"/profile"}
              as={RouterLink}
              alignItems={"center"}
              gap={4}
              _hover={{ bg: "whiteAlpha.400" }}
              borderRadius={6}
              p={2}
              w={{ base: 10, md: "full" }}
              mt={"auto"}
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <Avatar size={"sm"} name="Kaarti Patel" src="/profilepic.png" />
              <Box display={{ base: "none", md: "block" }}>Profile</Box>
            </Link>
          </Flex>
        </Flex>
        {/* LOG OUT */}
        <Tooltip
          hasArrow
          label={"Log out"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Flex
            onClick={handleLogOut}
            alignItems={"center"}
            gap={4}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: "full" }}
            mt={"auto"}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <BiLogOut size={25} />
            <Button display={{ base: "none", md: "block" }} variant={"ghost"} _hover={{bg: "transparent"}} isLoading={isLoggingOut}>
              Log out
            </Button>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
