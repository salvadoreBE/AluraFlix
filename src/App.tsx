import HomeView from "./pages/HomeView"
import PostFormView from "./pages/PostFormView"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/newVideo" element={<PostFormView/>}/>
        <Route path="/" element={<HomeView/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
