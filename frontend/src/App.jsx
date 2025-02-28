import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/homePage"


function App() {


  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
