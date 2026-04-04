import { Box, Typography } from "@mui/material";
import AppToolbar from "../../../widgets/header/AppToolbar";
import ring from "../../../shared/assets/mainRing.PNG";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function HeroBanner() {
  useGSAP(() => {
    gsap.from(".heroTitle", {
      filter: "blur(20px)",
      opacity: 0,
      scale: 0.9,
      duration: 1.5,
      ease: "power2.out",
    });
  });

  useGSAP(() => {
    gsap.from(".ring", {
      y: 150,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  });
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".heroSubtitle", {
      x: -200,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  });
  return (
    <Box
      className="mainRoot"
      sx={{ height: "100vh", position: "relative", overflow: "hidden" }}
    >
      <AppToolbar />

      <Typography
        variant="h1"
        className="heroTitle"
        sx={{
          fontFamily: "'Boldonse', sans-serif",
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: { xs: "60px", md: "250px" },
          letterSpacing: "10px",
          textTransform: "uppercase",
          color: "#400000",
        }}
      >
        Mistica
      </Typography>

      <Typography
        className="heroSubtitle"
        sx={{
          fontFamily: "'Boldonse', sans-serif",
          position: "absolute",
          bottom: "20%",
          left: "20%",
          transform: "translateX(-50%)",
          fontSize: { xs: "12px", md: "18px" },
          color: "#ccc",
          letterSpacing: "3px",
          textAlign: "center",
          whiteSpace: "pre-line",
        }}
      >
        {"Discover unique jewelry\ncrafted with soul"}
      </Typography>

      <Box
        component="img"
        src={ring}
        alt="ring"
        className="ring"
        sx={{
          position: "absolute",
          bottom: "50px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "450px",
          zIndex: 2,
        }}
      />
    </Box>
  );
}

export default HeroBanner;
