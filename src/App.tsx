import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./layout"
import Home from "./pages/home"

function App() {

  return (
    <Suspense>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Suspense>
  )
}

export default App
