import React, { useEffect, useState } from "react";
import { getUser } from "../api/user";

export default function Header() {
  useEffect(() => {
    getUser().then((res) => {
      setUserImage(res.user.image);
      setUsername(res.user.username);
    });
  });
  const [username, setUsername] = useState("");
  const [userImage, setUserImage] = useState("");
  return (
    <div className="w-full h-14 flex items-center justify-center">
      <div className="main  flex justify-between items-center">
        <div className="text-2xl font-black main-color">conduit</div>
        <div className="flex justify-center">
          <div
            className=" mx-5 flex justify-center items-center"
            onClick={() => {
              location.href = "/";
            }}
          >
            Home
          </div>
          {!localStorage.getItem("token") ? (
            <>
              <div
                className="mx-5"
                onClick={() => {
                  location.href = "/login";
                }}
              >
                Sign in
              </div>
              <div
                className="mx-5"
                onClick={() => {
                  location.href = "/register";
                }}
              >
                Sign up
              </div>
            </>
          ) : (
            <>
              <div
                className="mx-5 flex justify-center items-center"
                onClick={() => {
                  location.href = "/create";
                }}
              >
                New Article
              </div>
              <div
                className="mx-5 flex justify-center items-center"
                onClick={() => {
                  location.href = "/setting";
                }}
              >
                Setting
              </div>
              <div
                className="mx-5 flex justify-center items-center"
                onClick={() => {
                  location.href = "/user";
                }}
              >
                <span className=" w-10 h-10 rounded-full overflow-hidden mr-2">
                  <img className="w-full h-full" src={userImage} alt="" />
                </span>
                <span>{username}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
