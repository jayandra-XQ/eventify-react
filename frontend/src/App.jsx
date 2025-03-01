import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/homePage"
import Signup from "./pages/signupPage"
import Login from "./pages/loginPage"
import About from './pages/aboutPage'
import Category from './pages/categoryPage'


function App() {


  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/category' element={<Category />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
