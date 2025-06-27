import React from "react";
import { MessageSquare, MessageSquareDot } from "lucide-react";

const ChatPlaceHolder = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-2 lg:p-16 bg-[#1c1c1cea] border-2 border-gray-200 shadow-md relative ">
      <div className="max-w-sm lg:max-w-md text-center border-amber-50 bg-[#1c1c1cfa] shadow-2xl py-25 px-20 rounded-lg ">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4 ">
          <div className="relative">
            <div
              className="w-12 lg:w-16 h-13 lg:h-16 rounded-xl bg-[#222222] flex items-center
             justify-center animate-bounce"
            >
              <MessageSquareDot className="w-6 h-6 lg:w-8 lg:h-8  text-[#DAA520]" />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <p className="text-xl lg:text-2xl text-[#F5E8D8] font-medium ">
          Welcome to texts.
        </p>
        <p className="text-[#F5E8D8] font-mono text-md lg:text-lg">
          Select a conversation from the sidebar to start chatting
        </p>
      </div>
    </div>
  );
};

export default ChatPlaceHolder;
