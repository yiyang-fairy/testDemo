import { Suspense } from "react"
import { useRoutes } from "react-router-dom"
import routes from "~react-pages"
import Nav from "./components/Nav"

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {
        <>
          <Nav />
          <div>{useRoutes(routes)}</div>
        </>
      }
    </Suspense>
  )
}

export default App
