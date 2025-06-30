import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import {
  LogOut,
  MessageSquare,
  MessageSquareDot,
  Settings,
  User,
  User2,
} from "lucide-react";
import { useAppToast } from "../constants/ToastProvider";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const { showSuccess, showError } = useAppToast();

  return (
    <header className="sticky bg-gray/60 backdrop-blur-lg rounded-2xl max-w-6xl mx-auto border-b border-gray-800 z-10 font-medium text-[#F5E8D8]">
      <div className="container px-4 h-16 ">
        <div className="flex items-center justify-center h-full">
          <div className="flex items-center justify-between w-full ">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="size-10 rounded-lg bg-gray-500/10 flex items-center justify-center">
                <MessageSquareDot className="w-6 h-6 text-[#DAA520]" />
              </div>
              <p className="text-xl lg:text-2xl font-medium text-[#F5E8D8]">texts.</p>
            </Link>

            {authUser && (
              <div className="flex flex-row gap-5 justify-between">
                <Link
                  to={"/profile"}
                  className={`btn btn-sm gap-2 flex items-center `}
                >
                  <User2 className="size-4" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button
                  className="flex gap-2 items-center"
                  onClick={() => logout(showSuccess, showError)}
                >
                  <LogOut className="size-4" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
