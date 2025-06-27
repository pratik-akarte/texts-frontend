import { useState } from "react";
import Banner from "../Components/Banner.jsx";
import { Flex } from "@chakra-ui/react";
import { MessageSquareDot } from "lucide-react";
import Login from "./../Auth/Login";
import Signup from "../Auth/Signup.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen flex md:flex-row flex-col font-[Outfit] bg-[#1C1C1C]">
      <div className="hidden md:flex md:w-1/2 items-center justify-center p-8">
        <Banner
          title="Join our community"
          subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
        />
      </div>

      {/* Right - Login (Full width on mobile, half on md+) */}
      <div className="w-full  md:w-1/2 flex items-center justify-center  p-8 flex-col bg-base-200 min-h-screen md:min-h-0">
        <Flex
          fontWeight="bold"
          color="#F5E8D8"
          textAlign="center"
          mb="30px"
          direction="column"
          align="center"
          gap={"2"}
          justify="center"
        >
          <MessageSquareDot className="w-9 h-9 lg:w-11 lg:h-11 text-[#DAA520]" />

          <p className="text-2xl lg:text-3xl font-medium text-[#F5E8D8]">texts.</p>
        </Flex>
        {activeTab === "tab1" && <Login />}
        {activeTab === "tab2" && <Signup />}
        <div className="mt-5 text-[#F5E8D8] ">
          {activeTab === "tab1" && (
            <h2 className="flex gap-2">
              New to texts ?{" "}
              <Link onClick={() => handleTabClick("tab2")}>
                <p className="underline hover:text-[#FF4500] transition-colors duration-300  decoration-1 underline-offset-4">
                  Sign Up
                </p>
              </Link>
            </h2>
          )}
          {activeTab === "tab2" && (
            <h2 className="flex gap-2">
              Already a user?{" "}
              <Link onClick={() => handleTabClick("tab1")}>
                <p className="underline hover:text-[#FF4500] transition-colors duration-300  decoration-1 underline-offset-4">
                  Login
                </p>
              </Link>
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
