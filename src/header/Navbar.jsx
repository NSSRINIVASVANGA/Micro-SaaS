import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { FaBars } from "react-icons/fa";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: sidebarOpen ? "calc(100% - 200px)" : "calc(100% - 60px)",
        transition: "width 0.3s",
      }}
    >
      <Toolbar>
        {/* Toggle Button in Navbar */}
        <IconButton
          onClick={() => setSidebarOpen((prev) => !prev)}
          sx={{ color: "white", mr: 2 }}
        >
          <FaBars />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
