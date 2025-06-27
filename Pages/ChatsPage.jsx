import { Button, Flex, Text } from "@chakra-ui/react";

import NavBar from "../Components/NavBar.jsx";
import { useChatStore } from "../store/useChatStore.js";
import Chats from "./../Components/Chats";
import ChatPlaceHolder from "./../Components/ChatPlaceHolder";
import Sidebar from "./../Components/Sidebar";
import Footer from "../Components/Footer.jsx";

import Squares from "./../Animations/Squares/Squares";

function ChatsPage() {
  const { selectedUser } = useChatStore();
  return (
    <div className="h-full">
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full bg-[#1c1c1c] ">
        <Squares
          speed={0.5}
          squareSize={30}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#fbd9b067"
        
          hoverFillColor="#888888"
        />
      </div>

      <NavBar />
      <div className="flex items-center justify-center pt-20 px-4 ">
        <div className="bg-base-100 rounded-lg shadow-2xl w-full max-w-5xl h-[calc(100vh-18rem)]  lg:h-[calc(100vh-13rem)]">
          <div className="flex h-full rounded-lg overflow-hidden ">
            <Sidebar />

            {!selectedUser ? <ChatPlaceHolder /> : <Chats />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ChatsPage;
