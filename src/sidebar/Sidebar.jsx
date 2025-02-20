import React from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaCog, FaBell, FaChartBar, FaClipboardList, FaUsers, FaEnvelope, FaBuilding, FaBars } from "react-icons/fa";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { icon: <FaHome />, label: "Dashboard", path: "/" },
    { icon: <FaUser />, label: "Business", path: "/business" },
    { icon: <FaCog />, label: "Users", path: "/users" },
    { icon: <FaBell />, label: "Workflow", path: "/workflow" },
    { icon: <FaChartBar />, label: "Client", path: "/client" },
    { icon: <FaChartBar />, label: "Calendar", path: "/calendar" },
    { icon: <FaClipboardList />, label: "Appointment", path: "/appointment" },
    { icon: <FaUsers />, label: "Marketing Campaign", path: "/marketing" },
    { icon: <FaEnvelope />, label: "Subscription", path: "/subscription" },
    { icon: <FaEnvelope />, label: "Report", path: "/report" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sidebarOpen ? 200 : 60,
        flexShrink: 0,
        display: { xs: "none", sm: "block" }, // Hide sidebar on mobile
        "& .MuiDrawer-paper": {
          width: sidebarOpen ? 200 : 60,
          transition: "width 0.3s",
          overflowX: "hidden",
          background: "#222",
          color: "white",
          paddingTop: "10px",
          textAlign: "left",
          
        },
      }}
    >
      {/* Sidebar Header (Logo + Toggle Button) */}
      <div style={{ padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <FaBuilding size={40} color="white" />
        {sidebarOpen && <p style={{ marginLeft: "10px", marginBottom: 0 }}>busitron</p>}
        <IconButton
          onClick={() => setSidebarOpen(!sidebarOpen)}
          sx={{ color: "white", marginLeft: "auto", display: { xs: "block", sm: "none" } }} // Show only on mobile
        >
          <FaBars />
        </IconButton>
      </div>

      {/* Sidebar Navigation */}
      <List>
        {menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#4CAF50" : "white",
            })}
          >
            <ListItemButton sx={{ pl: "20px" }}>
              <ListItemIcon sx={{ minWidth: "40px" }}>
                {React.cloneElement(item.icon, { size: 24, color: "white" })}
              </ListItemIcon>
              {sidebarOpen && <ListItemText primary={item.label} />}
            </ListItemButton>
          </NavLink>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
