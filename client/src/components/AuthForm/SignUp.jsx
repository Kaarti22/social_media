import { Input, Button, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Input
        placeholder="Full Name"
        fontSize={14}
        type="text"
        value={inputs.fullname}
        size={"sm"}
        onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
      />
      <Input
        placeholder="Email"
        fontSize={14}
        type="email"
        value={inputs.email}
        size={"sm"}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder="Username"
        fontSize={14}
        type="text"
        value={inputs.username}
        size={"sm"}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
      />
      <InputGroup>
        <Input
          placeholder="Password"
          fontSize={14}
          type={showPassword ? "text" : "password"}
          value={inputs.password}
          size={"sm"}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <InputRightElement h={"full"}>
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
        Sign up
      </Button>
    </>
  );
};

export default SignUp;
