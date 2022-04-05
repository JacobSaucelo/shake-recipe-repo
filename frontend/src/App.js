import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Landpage from "./pages/landpage";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import More from "./pages/more";

const App = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSidebar = () => setIsSideOpen(!isSideOpen);
  const handleLoggedIn = () => setIsLoggedIn(!isLoggedIn);

  return (
    <>
      <Router>
        <Header
          isLoggedIn={isLoggedIn}
          toggleLoggedIn={handleLoggedIn}
          toggle={handleSidebar}
        />
        <Sidebar
          isOpen={isSideOpen}
          isLoggedIn={isLoggedIn}
          toggleLoggedIn={handleLoggedIn}
          toggle={handleSidebar}
        />
        <Routes>
          <Route path="/" element={<Landpage />} />
          <Route
            path="/login"
            element={<Login toggleLoggedIn={handleLoggedIn} />}
          />
          <Route
            path="/register"
            element={
              <Register
                isLoggedIn={isLoggedIn}
                toggleLoggedIn={handleLoggedIn}
              />
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/shake/:id" element={<More />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
//todo   fillers, footer
