import { Link, useMatch, useNavigate } from "react-router-dom"
import { styled } from "styled-components"
import routes from "~react-pages"

const NavWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 20px;
`

import { RouteObject } from "react-router-dom"
import { Button } from "@mui/joy"

/**
 * 处理 routes 存在 children 的元素
 * 拼接 path，拉成一层
 */
export const generateFlattenPath = (routes: RouteObject[], ignoreBoot = false) => {
  const res: string[] = []

  const dfs = (currentRoutes: RouteObject[], basePath = "") => {
    currentRoutes.forEach((route) => {
      if (ignoreBoot && route.path === "/") {
        return
      }
      const path = route.path !== "/" ? `${basePath}/${route.path}` : "/"
      if (route.children) {
        dfs(route.children, `${basePath}/${route.path}`)
      } else {
        res.push(path)
      }
    })
  }

  dfs(routes)

  return res
}

function Nav() {
  const inHome = useMatch("/")
  const navigate = useNavigate()

  return (
    <NavWrapper>
      {/* TODO: 这里在 HOME 要隐藏 */}
      {generateFlattenPath(routes, true).map((path) => (
        <div key={path}>
          <Link to={path || ""}>{path}</Link>
        </div>
      ))}
      {!Boolean(inHome) && (
        <>
          <Button
            onClick={() => {
              navigate("/")
            }}
            size="sm"
          >
            Back Home
          </Button>
        </>
      )}
    </NavWrapper>
  )
}

export default Nav
