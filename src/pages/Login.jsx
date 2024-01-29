import React, { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const {currentUser, signInWithGoogle} = UserAuth()
    const handleLogin = async () => {
        try{
            await signInWithGoogle();
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        if(currentUser){
            navigate("/chat");
        }
    }, [currentUser])
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
                Chat Your Friend so fast
            </p>
            <button onClick={handleLogin} className="btn btn-primary">Login With Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
