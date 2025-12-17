import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import AppToolbar from "../AppToolbar/AppToolbar";
import Container from "@mui/material/Container";

function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <AppToolbar />
      <main>
        <Container maxWidth="xl">{children}</Container>
      </main>
    </>
  );
}

export default Layout;
