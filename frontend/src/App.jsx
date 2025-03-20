import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

// Public Pages
import Home from "./pages/homePage";
import Signup from "./pages/signupPage";
import Login from "./pages/loginPage";
import About from "./pages/aboutPage";
import Category from "./pages/categoryPage";
import UserBook from "./pages/Users/UserBook";
import UserBookinghistory from "./pages/Users/UserBookinghistory";
import Contact from "./pages/Users/contact";
import Userprofile from "./pages/Users/Userprofile";
import Payment from "./pages/Users/Payment";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserList from "./pages/admin/UserList";
import Adminabout from "./pages/admin/Adminabout";
import Bookinghistory from "./pages/admin/Bookinghistory";
import Venue from "./pages/admin/Venue";
import AddEvent from "./pages/admin/AddEvent";
import EventType from "./pages/admin/EventType";
import Profile from "./pages/admin/Profile";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="aboutPage" element={<About />} />
          <Route path="category" element={<Category />} />
          <Route path="book" element={<UserBook />} />
          <Route path="payment" element={<Payment />} />
          <Route path="bookinghistory" element={<UserBookinghistory />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile" element={<Userprofile />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<UserList />} />
          <Route path="about" element={<Adminabout />} />
          <Route path="booking-history" element={<Bookinghistory />} />
          <Route path="venue" element={<Venue />} />
          <Route path="add-event" element={<AddEvent />} />
          <Route path="event-type" element={<EventType />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
