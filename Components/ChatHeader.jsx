import { X } from "lucide-react";
// import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  //   const { onlineUsers } = useAuthStore();

  return (
    <div className="p-2.5 px-5 bg-[#1C1C1C] sticky top-0 ">
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="avatar">
            <div>
              <img
                src={
                  selectedUser.pic ||
                  "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
                }
                alt={selectedUser.name}
                className="size-10 md:size-12 rounded-lg relative aspect-square object-cover"
              />
            </div>
          </div>

          {/* User info */}
          <div className="font-semibold text-[#F5E8D8]">
            <h3>{selectedUser.name}</h3>
            <p className="text-sm font-light   text-[#fbd9b067]">
              Online
              {/* {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"} */}
            </p>
          </div>
        </div>

        {/* Close button */}
        <button onClick={() => setSelectedUser(null)}>
          <X className=" text-[#F5E8D8]" />
        </button>
      </div>
    </div>
  );
};
export default ChatHeader;
