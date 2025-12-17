import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";

function AppToolbar() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              "& a": {
                color: "inherit",
                textDecoration: "none",
              },
            }}
          >
            <Link to="/">Jewelry shop Mistica</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </>
  );
}

export default AppToolbar;
