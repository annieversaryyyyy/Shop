import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";

function AppToolbar() {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#05111c",
          color: "white",
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              "& a": {
                color: "white",
                textDecoration: "none",
              },
            }}
          >
            <Link to="/">Jewelry shop Mistica</Link>
          </Typography>
          <Button
            component={Link}
            to="/register"
            sx={{ ml: "auto", color: "white", borderColor: "white" }}
            variant="outlined"
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default AppToolbar;
