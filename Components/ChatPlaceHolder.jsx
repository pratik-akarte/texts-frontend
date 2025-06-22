import React from "react";
import { MessageSquare, MessageSquareDot } from "lucide-react";

const ChatPlaceHolder = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-[#1c1c1cea] border-2 border-gray-200 shadow-md relative">
      <div className="max-w-md text-center border-amber-50 bg-[#1c1c1cfa] shadow-2xl py-25 px-20 rounded-lg ">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4 ">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-xl bg-[#222222] flex items-center
             justify-center animate-bounce"
            >
              <MessageSquareDot className="w-8 h-8  text-[#DAA520]" />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <p className="text-2xl text-[#F5E8D8] font-medium ">
          Welcome to texts.
        </p>
        <p className="text-[#F5E8D8] font-mono text-lg">
          Select a conversation from the sidebar to start chatting
        </p>
      </div>
    </div>
  );
};

export default ChatPlaceHolder;
