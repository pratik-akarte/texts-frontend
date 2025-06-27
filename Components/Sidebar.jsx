import React, { useEffect } from "react";
import { Users } from "lucide-react";
import { useChatStore } from "./../store/useChatStore";
import "./sidebar.css";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import { Checkbox } from "@chakra-ui/react";

const Sidebar = () => {
  const { users, getUsers, selectedUser, setSelectedUser, isUserLoading } =
    useChatStore();

  const { onlineUsers } = useAuthStore();
  // const [showOnline, setShowOnline] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  // const filteredUsers = showOnline
  //   ? users?.filter((user) => onlineUsers?.includes(user._id))
  //   : users;

  // const handleToggle = () => setShowOnline(!showOnline);

  if (isUserLoading) {
    return <SidebarSkeleton />;
  }

  return (
    <aside className="h-full w-22 lg:w-80 flex flex-col bg-[#1e1e1e] transition-all duration-200 relative ">
      {/* Fixed Header */}

      <div className="flex flex-col items-center lg:items-start justify-center  px-4 md:px-6  h-16 lg:h-17 shrink-0 sticky z-10 bg-[#181818]">
        <div className="flex gap-2 mt-5 lg:mt-3">
          <Users className="size-6 lg:size-6 text-[#DAA520]" />
          <span className="font-medium text-lg hidden lg:flex text-[#DAA520]">
            Contacts
          </span>
        </div>

        {/* <div className="hidden lg:flex items-center gap-1">
          <label className="cursor-pointer flex items-center gap-2">
            <Checkbox isChecked={showOnline} onChange={handleToggle} />
            <span className="text-sm">Show online only</span>
          </label>
          <span className="text-xs text-zinc-400">
            (
            {onlineUsers.length != 0
              ? "(onlineUsers.length - 1) online"
              : "No user online"}
            )
          </span>
        </div> */}
      </div>

      {/* Scrollable list */}
      <div className="overflow-y-auto w-full  ">
        {users.length === 0 && (
          <div className="text-center text-zinc-600 py-8">No online users.</div>
        )}

        {users.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`sidebar-contact-btn ${
              selectedUser?._id === user._id ? "selected" : ""
            } `}
          >
            <div className="relative mx-auto lg:mx-0 my-2 px-2 lg:px-4">
              <img
                src={
                  user?.pic ||
                  "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
                }
                alt={user.name}
                className="size-12 aspect-square object-cover rounded-lg"
              />

              {onlineUsers?.includes(user._id) && (
                <span className="absolute bottom-0 right-2 lg:right-3 size-2 lg:size-2 bg-green-500 rounded-full ring-2" />
              )}
            </div>

            <div className="hidden lg:block min-w-0">
              <p className="font-medium truncate text-[#F5E8D8]">{user.name}</p>

              {onlineUsers?.includes(user._id) ? (
                <p className="text-sm  text-[#fbd9b067]  font-light">Online</p>
              ) : (
                <p className="text-sm text-[#fbd9b067] font-light">Offline</p>
              )}
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
