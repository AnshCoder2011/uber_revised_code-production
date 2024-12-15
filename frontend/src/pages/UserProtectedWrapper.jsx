import React, { useContext, useEffect, useState, useRef } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { gsap } from "gsap";

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);

  const circleRef = useRef(null);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [token]);

  useEffect(() => {
    if (isLoading) {
      // Animate the circular loading spinner
      gsap.to(circleRef.current, {
        rotation: 360,
        duration: 1,
        ease: "linear",
        repeat: -1,
      });
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        <div className="relative w-16 h-16">
          <div
            ref={circleRef}
            className="absolute inset-0 border-4 border-t-blue-500 border-blue-300 rounded-full"
          ></div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default UserProtectWrapper;
