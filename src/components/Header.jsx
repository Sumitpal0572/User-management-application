import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          User Management Application
        </Typography>
        <Button color="inherit" onClick={toggleTheme}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
