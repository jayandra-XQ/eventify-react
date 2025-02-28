import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/homePage"
import Signup from "./pages/signupPage"
import Login from "./pages/loginPage"


function App() {


  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
