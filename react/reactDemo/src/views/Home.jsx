import { Link } from "react-router-dom";
import MenuList from "../component/MenuList";
import router from "../router/index";
import { useRoutes } from "react-router-dom";
export default function Home() {

    // const about = useRoutes(router)
  return (
    <div className="home">
      <h1>Home</h1>
      <div className="flex">
        <div className="text-blue-600">左边菜单列
            <MenuList></MenuList>
        </div>
        <div>
            {/* <Link to="/about">右边内容页</Link> */}
            {/* {about} */}
        </div>
      </div>
    </div>
  );
}
