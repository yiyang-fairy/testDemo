import { useEffect, useState } from "react";
import Header from "./components/Header";
import * as ReactDOM from "react-dom/client";
import { router } from "./router/index.jsx";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { getUser } from "./api/user";
import { UserContext } from "./utils/user";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      get()
    }
  }, []);
  async function get() {
    const res = await getUser()
    setUser(res.user);

  }
  
console.log(user, 'app user')

  return (
    <UserContext.Provider value={{user, setUser}}>
      <div>
        <Header></Header>
        <RouterProvider router={router} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
