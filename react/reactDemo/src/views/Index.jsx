import Home from "./Home.jsx";
import Search from "./Search.jsx";
import News from './News.jsx';
import My from './My.jsx'
import { Route, BrowserRouter as Router, Link, Routes, useNavigate } from "react-router-dom";
export default function Index() {
    const tabs = [
        {
          key: '/',
          title: '首页',
          icon: <Home />,
        },
        {
          key: '/search',
          title: '待办',
          icon: <Search />,
        },
        {
          key: '/news',
          title: '消息',
          icon: <News />,
        },
        {
          key: '/my',
          title: '我的',
          icon: <My />,
        },
      ]
   
  return (
    <div className="h-screen">
        <div className=" h-full " >
           <Routes>
                <Route path="/" exact element={<Home />}></Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="/news" element={<News />}></Route>
                <Route path="/my" element={<My />}></Route>
           </Routes>
        </div>
        <div className=" fixed bottom-0 left-0 flex justify-around w-full items-center z-10" style={{height: '50px', borderTop: '1px solid #ccc'}}>
        
        {
          tabs.map(item => {
              return (
                  // <Link to={item.key} className="flex flex-col items-center justify-center w-full h-16 text-sm text-gray-500 hover:text-gray-800">{item.title}</Link>
                  <Link className=" hover:text-red-400" to={item.key} key={item.key}>{item.title}</Link>
              )
          })
        }
      </div>
    </div>
  );
}
