import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import Navbar from "./header/Navbar";
import Sidebar from "./sidebar/Sidebar";
import Dashboard from "./dashboards/Dashboard";
import Business from "./menulist/bussiness/Bussinessform";
import Users from "./menulist/users/Userform";
import Workflow from "./menulist/workflow/Invoice";
import Client from "./menulist/client/Clientform";
import Calendar from "./menulist/calender/Calender";
import Appointment from "./menulist/appointment/Appointments";
import Marketing from "./menulist/marketingCampaighn/Campaighnform";
import Subscription from "./menulist/Subscription/Subscribe";
import Reports from "./menulist/Reports/Report";
import Login from "./menulist/authentication/Loginform"; 

const App = () => {
  const isMobile = useMediaQuery("(max-width: 768px)"); 
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile); 
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("auth") === "true"
  );

  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  }, [isMobile]);

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        {isAuthenticated && (
          <>
            {/* Navbar with Logout Button */}
            <Navbar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              onLogout={handleLogout}
            />
            {/* Sidebar (Hidden on mobile, toggle-able) */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          </>
        )}

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            ml: isAuthenticated && sidebarOpen && !isMobile ? "200px" : "60px",
            transition: "margin 0.3s ease-in-out",
            width: "100%",
          }}
        >
          <Routes>
            {/* Redirect to Login if not authenticated */}
            {!isAuthenticated ? (
              <Route path="*" element={<Login onLogin={handleLogin} />} />
            ) : (
              <>
                <Route path="/" element={<Dashboard />} />
                <Route path="/business" element={<Business />} />
                <Route path="/users" element={<Users />} />
                <Route path="/workflow" element={<Workflow />} />
                <Route path="/client" element={<Client />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/marketing" element={<Marketing />} />
                <Route path="/subscription" element={<Subscription />} />
                <Route path="/report" element={<Reports />} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
