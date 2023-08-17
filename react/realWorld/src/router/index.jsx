import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Article from "../pages/Article";
import Auth from "../components/Auth";
import User from "../pages/User";
import Setting from "../pages/Setting";
import CreateArticle from "../pages/CreateArticle";

// 创建路由对象
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/article",
    element: (
      <Auth>
        <Article />
      </Auth>
    ),
  },
  {
    path: "/user",
    element: (
      <Auth>
        <User />
      </Auth>
    ),
  },
  {
    path: "/setting",
    element: (
      <Auth>
        <Setting />
      </Auth>
    ),
  },
  {
    path: "/create",
    element: (
      <Auth>
        <CreateArticle />
      </Auth>
    ),
  },
]);