import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./header/Navbar";
import Sidebar from "./sidebar/Sidebar";
import Dashboard from "./dashboards/Administrators";
import Business from "./menulist/bussiness/Bussinessform";
import Users from "./menulist/users/Userform";
import Workflow from "./menulist/workflow/Invoice";
import Client from "./menulist/client/Clientform";
import Calendar from "./menulist/calender/Calender";
import Appointment from "./menulist/appointment/Appointments";
import Marketing from "./menulist/marketingCampaighn/Campaighnform";
import Subscription from "./menulist/Subscription/Subscribe";
import Reports from "./menulist/Reports/Report";
const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        {/* Navbar with Toggle Button */}
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Sidebar Navigation */}
        <Sidebar sidebarOpen={sidebarOpen} />

        {/* Main Content Area */}
        <Box sx={{ flexGrow: 1, p: 3, marginLeft: sidebarOpen ? "200px" : "60px", transition: "margin 0.3s" }}>
          <Routes>
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

          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
