import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const { user, setUser } = React.useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    setUserData();
    const newUser = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );
    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
  };
  return (
    <div className="p-9 font-ubermove h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-14"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt="uber-logo"
        />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-base font-medium mb-2">What's your name</h3>
          <div className="flex gap-5">
            <input
              className="bg-[#eeeeee] mb-7 rounded-lg w-1/2 px-4 py-2 border text-lg placeholder:text-base"
              required
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="First name"
            />
            <input
              className="bg-[#eeeeee] mb-7 rounded-lg w-1/2 px-4 py-2 border text-lg placeholder:text-base"
              required
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Last name"
            />
          </div>
          <h3 className="text-base font-medium mb-2">What's your Email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
          />
          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password123"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base">
            Create Account
          </button>
          <p className="text-center">
            Already have an Account?{"  "}
            <Link
              to={"/login"}
              className="text-blue-400 font-semibold hover:text-blue-800 transition duration-200"
            >
              Login Here
            </Link>
          </p>
        </form>
      </div>

      <div>
        <p className="text-sm leading-tight text-gray-500">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline font-semibold">Google Privacy Policy</span>{" "}
          and{" "}
          <span className="underline font-semibold">
            Terms of Service apply
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
