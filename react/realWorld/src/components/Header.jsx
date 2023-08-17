import React from "react";
export default function Header() {
  return (
    <div className="w-full h-14 flex items-center justify-center">
      <div className="main  flex justify-between items-center">
        <div className="text-2xl font-black main-color">conduit</div>
        <div className="flex justify-center">
          <div
            className=" mx-5"
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
                className="mx-5"
                onClick={() => {
                  location.href = "/create";
                }}
              >
                New Article
              </div>
              <div
                className="mx-5"
                onClick={() => {
                  location.href = "/setting";
                }}
              >
                Setting
              </div>
              <div
                className="mx-5"
                onClick={() => {
                  location.href = "/user";
                }}
              >
               username
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}