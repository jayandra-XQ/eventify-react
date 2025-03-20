import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/homePage";
import Signup from "./pages/signupPage";
import Login from "./pages/loginPage";
import About from "./pages/aboutPage";
import Category from "./pages/categoryPage";

// Admin Components
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminNavbar from "./components/AdminNavbar";
import UserList from "./pages/admin/UserList";
import Adminabout from "./pages/admin/Adminabout";
import Bookinghistory from "./pages/admin/Bookinghistory";
import Venue from "./pages/admin/Venue";
import AddEvent from "./pages/admin/AddEvent";
import EventType from "./pages/admin/EventType";
import Profile from "./pages/admin/Profile";

// User Components
import UsersNavbar from "./components/UsersNavbar";
import Userhomepage from "./pages/Users/Userhomepage";
import Userabout from "./pages/Users/Userabout";
import UserBook from "./pages/Users/UserBook";
import UserBookinghistory from "./pages/Users/UserBookinghistory";
import Contact from "./pages/Users/contact";
import Userprofile from "./pages/Users/Userprofile";
import Payment from "./pages/Users/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes (With Navbar & Footer) */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/aboutPage" element={<About />} />
                <Route path="/category" element={<Category />} />
              </Routes>
              <Footer />
            </>
          }
        />

        {/* Admin Routes (With Admin Navbar, No Footer) */}
        <Route
          path="/admin/*"
          element={
            <>
              <AdminNavbar />
              <Routes>
                <Route path="/dashboard" element={<AdminDashboard />} />
                <Route path="/UserList" element={<UserList />} />
                <Route path="/Adminabout" element={<Adminabout />} />
                <Route path="/Bookinghistory" element={<Bookinghistory />} />
                <Route path="/venue" element={<Venue />} />
                <Route path="/AddEvent" element={<AddEvent />} />
                <Route path="/EventType" element={<EventType />} />
                <Route path="/Profile" element={<Profile />} />
                
              </Routes>
              <Footer/>
            </>
          }
        />

        {/* User Routes (With Users Navbar & Footer) */}
        <Route
          path="/Users/*"
          element={
            <>
              <UsersNavbar />
              <Routes>
                <Route path="/Userhomepage" element={<Userhomepage />} />
                <Route path="/Userabout" element={<Userabout/>} />
                <Route path="/UserBook" element={<UserBook/>} />
                <Route path="/UserBookinghistory" element={<UserBookinghistory />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Userprofile" element={<Userprofile />} />
                <Route path="/Payment" element={<Payment />} />


              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


