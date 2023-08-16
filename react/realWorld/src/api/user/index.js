import { request, setLocalToken } from "../request";

export const register = (user) => {
  return request({
    method: "POST",
    url: "/users",
    data: { user },
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

  return user;
};
