import React from "react";
import { Container, Flex } from "@chakra-ui/react";

const Auth = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Container maxW={"container.md"} padding={0}>
            This is some content
        </Container>
    </Flex>
  );
};

export default Auth;
