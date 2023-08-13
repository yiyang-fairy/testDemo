import {  request, setLocalToken, tokenObj } from "../request";

export const register = (user) => {
  return request({
    method: "POST",
    url: "/users",
    data: user,
  });
};

export const login = async (user) => {
  const {
    user: { token },
  } = await request({
    method: "POST",
    url: "/users/login",
    data: { user },
  });

  setLocalToken(token);
  console.log(user)
  return user;
};


tokenObj.token = 2