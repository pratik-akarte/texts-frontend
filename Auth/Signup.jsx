import React, { useState } from "react";
import { VStack, Button, Input, Box, Link } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import {
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from "@chakra-ui/input";
import { useAppToast } from "../constants/ToastProvider";
import { Eye, EyeClosed, Lock, Mail, User } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    pic: "",
  });
  const { signup, isSigningUp } = useAuthStore();
  const [show, setShow] = useState(false);

  const { showSuccess, showError } = useAppToast();
  const navigate = useNavigate();

  const handleTogglePassword = () => setShow(!show);

  // const setProfilePic = (pics) => {
  //   setLoading(true);
  //   if (!pics) {
  //     toast({
  //       title: "Profile Picture is invalid.",
  //       description: "Please try again",
  //       status: "error",
  //       position: "top",
  //       duration: 9000,
  //       isClosable: true,
  //     });
  //     setLoading(false);
  //     return;
  //   }

  //   if (pics.type === "image/jpeg" || pics.type === "image/png") {
  //     const data = new FormData();
  //     data.append("file", pics);
  //     data.append("upload_preset", "texts.");
  //     data.append("cloud_name", "karna");

  //     fetch("https://api.cloudinary.com/v1_1/karna/image/upload", {
  //       method: "POST",
  //       body: data, // ✅ correct: FormData object
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log("Cloudinary Response:", data);
  //         setFormData({ ...formData, pic: data.url || data.secure_url });
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //         toast({
  //           title: "Upload failed.",
  //           description: "Something went wrong.",
  //           status: "error",
  //           position: "top",
  //           duration: 9000,
  //           isClosable: true,
  //         });
  //         setLoading(false);
  //       });
  //   } else {
  //     toast({
  //       title: "Invalid file type.",
  //       description: "Only JPEG or PNG images are allowed.",
  //       status: "error",
  //       position: "top",
  //       duration: 9000,
  //       isClosable: true,
  //     });
  //     setLoading(false);
  //   }
  // };

  const validateForm = () => {
    if (!formData.name.trim()) return showError("Name is required");
    if (!formData.email.trim()) return showError("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return showError("Invalid email format");
    if (!formData.password) return showError("Password is required");
    if (formData.password.length < 6)
      return showError("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    const success = validateForm();

    console.log(formData);

    if (success === true) {
      const result = await signup(formData, { showSuccess, showError });

      if (result.success) {
        // Redirect or perform post-signup actions
        navigate("/chats"); // Example using react-router
      }
    }
  };
  return (
    <Box w="100%" maxW="md" mx="auto" color={"black"}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} width="100%" mt={5}>
          <FormControl isRequired>
            <FormLabel className="text-[#FF6F61]">Name</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <User className="size-5 text-[#ff6e6186]" />
              </InputLeftElement>
              <Input
                variant="subtle"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                textColor={"#F5E8D8"}
                _placeholder={{ opacity: 0.4, color: "#F5E8D8" }}
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel className="text-[#FF6F61]">Email ID</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Mail className="size-5 text-[#ff6e6186]" />
              </InputLeftElement>

              <Input
                variant="subtle"
                placeholder="you@texts.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
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
                <Lock className="size-5 text-[#ff6e6186]" />
              </InputLeftElement>
              <Input
                variant={"subtle"}
                type={show ? "text" : "password"}
                placeholder="***********"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
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

          {/* <FormControl>
            <FormLabel>Profile Pic</FormLabel>
           


            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setProfilePic(e.target.files[0])}
              variant="subtle"
            />
          </FormControl> */}

          <Button
            w="100%"
            mt="10px"
            isLoading={isSigningUp}
            type="submit"
            h={"50px"}
            bg="#DAA520" // Purple background
            color="white" // White text
            _hover={{ bg: "#DAA510" }} // Darker purple on hover
            _active={{ bg: "#553C9A" }} // Even darker on click
            transition="all 0.3s" // Smooth transition
          >
            Create Account
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Signup;
