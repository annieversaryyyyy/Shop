import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Anonymous() {
  return (
    <>
    <Box sx={{ display: "flex", gap: 2 }}>
  <Button
    component={Link}
    to="/register"
    variant="outlined"
    sx={{
      color: "white",
      borderColor: "white",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "white",
        color: "#05111c",
        borderColor: "white",
      },
    }}
  >
    Sign Up
  </Button>

  <Button
    component={Link}
    to="/login"
    variant="outlined"
    sx={{
      color: "white",
      borderColor: "white",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "white",
        color: "#05111c",
        borderColor: "white",
      },
    }}
  >
    Sign In
  </Button>
</Box>

    </>
  );
}

export default Anonymous;
