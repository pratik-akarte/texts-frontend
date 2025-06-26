import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Home from "../Pages/Home";
import ChatsPage from "../Pages/ChatsPage";
import { useAuthStore } from "./../store/useAuthStore";

import { Spinner } from "@chakra-ui/react";
import { Loader } from "lucide-react";
import Signup from "../Auth/Signup";
import ProfilePage from "../Pages/ProfilePage";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "../Pages/ErrorPage";

function App() {
  const { authUser, isCheckingAuth, checkAuth, onlineUsers } = useAuthStore();

  useEffect(() => {
    checkAuth();
    // Call the function
  }, [checkAuth]);

  console.log("authuser is: : " + " " + authUser?.name);

  console.log({ onlineUsers });

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <div className="app">
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <Routes>
          <Route
            path="/"
            element={!authUser ? <Home /> : <Navigate to="/chats" />}
          />
          <Route
            path="/chats"
            element={authUser ? <ChatsPage /> : <Navigate to="/" />}
          />
          <Route
            path="/profile"
            element={authUser ? <ProfilePage /> : <Navigate to="/" />}
          />
          

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
