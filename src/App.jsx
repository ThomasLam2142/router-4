import {Contact} from "./Contact"
import {Home} from "./Home"
import {LoginPage} from "./LoginPage"
import { BrowserRouter as Router, Route, Link, Routes  } from "react-router-dom"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/LoginPage" element={<LoginPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
