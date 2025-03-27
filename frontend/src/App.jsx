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
import UserList from "./pages/admin/UserList";
import Venue from "./pages/admin/Venue";
import AddEvent from "./pages/admin/AddEvent";
import EventType from "./pages/admin/EventType";
import Profile from "./pages/admin/Profile";
import EventTypeListAdmin from "./pages/admin/EventTypeListAdmin";

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


          <Route path="event-type" element={<EventType />} />
          <Route path="addevent" element={<AddEvent />} />
          <Route path="profile" element={<Profile />} />
          <Route path="venue" element={<Venue />} />
          <Route path="userlist" element={<UserList />} />
          <Route path="eventlist" element={<EventTypeListAdmin />} />
        </Route>

        {/* Admin Routes */}
        {/* <Route path="/admin" element={<AdminLayout />}>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
