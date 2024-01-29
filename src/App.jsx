import { useState } from "react";
import { Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import ChatRoom from "./pages/ChatRoom";
import "./index.css";
import PrivateRoutes from "./routes/PrivateRoutes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={
          <PrivateRoutes>
            <ChatRoom />
          </PrivateRoutes>
        } />
      </Routes>
      {/* <Login /> */}
    </AuthProvider>
  );
}

export default App;
