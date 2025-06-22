import React, { useState } from "react";
import { VStack, Button, Input, Box, Link, Text, Flex } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/input";
import {
  Mail,
  SquareUser,
  User,
  Lock,
  EyeClosed,
  Eye,
  MessageSquareDot,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";
import { useAppToast } from "../constants/ToastProvider.jsx";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { showSuccess, showError } = useAppToast();
  const { login, isLoggingIn } = useAuthStore();

  const [show, setShow] = useState(false);
  const handleTogglePassword = () => setShow(!show);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = login(loginData, { showSuccess, showError });

    
    if (result.success) {
      // Redirect or perform post-signup actions
      console.log("loginData response" + " " + result.data);
      navigate("/chats"); // Example using react-router
    }
  };

  return (
    <Box spacing={4} w="100%" maxW="md" mx="auto">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} width="100%" mt={5}>
          <FormControl isRequired>
            <FormLabel className="text-[#FF6F61]">Email ID</FormLabel>

            <InputGroup>
              <InputLeftElement pointerEvents="none">
                {/* <User className="size-5 text-base-content/20" /> */}
                <Mail className="size-5 text-[#ff6e6186]" />
              </InputLeftElement>

              <Input
                variant="subtle"
                placeholder="you@texts.com"
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                textColor={"#F5E8D8"}
                _placeholder={{ opacity: 0.4, color: "#F5E8D8" }}
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel className="text-[#FF6F61]">Password</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                {/* <User className="size-5 text-base-content/20" /> */}
                <Lock className="size-5 text-[#ff6e6186]" />
              </InputLeftElement>
              <Input
                variant={"subtle"}
                type={show ? "text" : "password"}
                placeholder="*********"
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                textColor={"#F5E8D8"}
                _placeholder={{ opacity: 0.4, color: "#F5E8D8" }}
              />
              <InputRightElement width="4.5rem">
                <Link
                  size="sm"
                  onClick={handleTogglePassword}
                  h="1.75rem"
                  mt={"6px"}
                >
                  {!show ? (
                    <EyeClosed className="size-5 text-[#ff6e6186]" />
                  ) : (
                    <Eye className="size-5 text-[#ff6e6186]" />
                  )}
                </Link>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button
            w={"100%"}
            mt={"10px"}
            type="submit"
            isLoading={isLoggingIn}
            h={"50px"}
            bg="#DAA520" // Purple background
            color="white" // White text
            _hover={{ bg: "#DAA510" }} // Darker purple on hover
            _active={{ bg: "#553C9A" }} // Even darker on click
            transition="all 0.3s" // Smooth transition
          >
            Log In
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Login;
