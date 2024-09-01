import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import HigherOrderComponent from "./pages/HigherOrderComponent";
import Ref from "./pages/Ref";
import Context from "./pages/Context";
import RenderProps from "./pages/RenderProps";

const { Sider, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          theme="light"
          width={200}
          style={{ position: "fixed", height: "100vh" }}
        >
          <Menu mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">Higher Order Component</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              <Link to="/ref">Ref</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              <Link to="/context">Context</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              <Link to="/renderProps">RenderProps</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Content
            style={{
              margin: "24px 16px 0",
              overflow: "initial",
              height: "90vh",
            }}
          >
            <div style={{ padding: 24, background: "#fff", height: "100%" }}>
              <Routes>
                <Route path="/" element={<HigherOrderComponent />} />
                <Route path="/ref" element={<Ref />} />
                <Route path="/context" element={<Context />} />
                <Route path="/renderProps" element={<RenderProps />} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
