import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import Container from "@mui/material/Container";
import AppToolbar from "../../widgets/header/AppToolbar";

function MainLayout({ children }) {
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

export default MainLayout;
