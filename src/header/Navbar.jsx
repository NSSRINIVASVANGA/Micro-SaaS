import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import { FaBars } from "react-icons/fa";

const Navbar = ({ sidebarOpen, setSidebarOpen, onLogout }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: sidebarOpen ? "calc(100% - 200px)" : "calc(100% - 60px)",
        transition: "width 0.3s",
        color: "black",
        backgroundColor: "white",
      }}
    >
      <Toolbar>
        {/* Toggle Sidebar Button */}
        <IconButton
          onClick={() => setSidebarOpen((prev) => !prev)}
          sx={{ color: "black", mr: 2 }}
        >
          <FaBars />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>

        {/* Logout Button */}
        <Button variant="contained" color="error" onClick={onLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
