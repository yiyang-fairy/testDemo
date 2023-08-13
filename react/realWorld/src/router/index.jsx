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


// 添加路由守卫组件
export const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log({ location });

  const isAuthenticated = localStorage.getItem("token") !== null;
  const requiresAuth = location.route.requiresAuth;
  console.log(isAuthenticated);
  React.useEffect(() => {
    if (requiresAuth && !isAuthenticated) {
      navigate("/login");
      console.log("跳转到登录页");
    } else {
      console.log("跳转到首页");
    }
  }, [requiresAuth, isAuthenticated, navigate]);

  return children;
};

// 创建路由对象
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthGuard>
        <Home />
      </AuthGuard>
    ),
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
    path: "/ariticle",
    element: <Article />,
    requiresAuth: true, // 添加 requiresAuth 属性
  },
]);


// 导出包装过的路由对象
// export default function App() {
//   return (
//     <RouterProvider router={router}>
//       <AuthGuard>
//         <AppRoutes />
//       </AuthGuard>
//     </RouterProvider>
//   );
// }

// 定义路由组件
export const AppRoutes = () => {
  const routes = router.getRoutes();

  return (
    <React.Fragment>
      {routes.map((route) => (
        <route.element key={route.path} />
      ))}
    </React.Fragment>
  );
};
