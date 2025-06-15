import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home.jsx';
import Donate from './Components/Donate.jsx';
import Event from './Components/Event.jsx';
import Partnership from './Components/Partnership.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Login from './Components/Login.jsx';
import Signup from './Components/Signup.jsx';
import Footer from './Components/Footer.jsx';
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
function App() {
  const location = useLocation();
  //hidden footer on Login and signup
  const hidden = location.pathname === "/login" || location.pathname === "/register"; 
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/donate" element={<Donate/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/partnership" element={<Partnership/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
      </Routes>
      {!hidden && <Footer />}
    </>
  );
}

export default AppWrapper;
