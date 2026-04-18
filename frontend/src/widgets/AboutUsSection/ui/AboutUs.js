import { Box, Typography } from "@mui/material";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../../../shared/assets/aboutImage1.JPG";
import img2 from "../../../shared/assets/aboutImage2.JPG";
import { SplitText } from "gsap/all";
import ViewCanvas from "../../hero-banner/ui/ViewCanvas";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
function AboutUs() {
  const titleRef = useRef();
  const container = useRef();
  useGSAP(() => {
    gsap.fromTo(
      container.current,
      {
        y: 150,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
          end: "top 40%",
          scrub: true,
        },
      },
    );
  }, []);

  return (
    <Box
      ref={container}
      className="aboutSection"
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: 4,
        alignItems: "center",
        padding: "50px 160px",
        marginTop: -10,
      }}
    >
      <Box>
        <Typography
          ref={titleRef}
          sx={{
            fontFamily: "'Boldonse', sans-serif",
            fontSize: { xs: "30px", md: "40px" },
            letterSpacing: "10px",
            textTransform: "uppercase",
            color: "#640000",
          }}
        >
          Our Philosophy
        </Typography>

        <Typography
          sx={{
            color: "#fff",
            maxWidth: 500,
            fontSize: { xs: "30px", md: "24px" },
          }}
        >
          We believe that jewelry is more than just an accessory - it is a
          reflection of identity, emotion, and inner strength.
        </Typography>
      </Box>
      {/* 
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          left: "500px",
          top: "50%",
          transform: "translateY(-50%)",
          width: { xs: "220px", sm: "500px" },
          height: { xs: "300px", sm: "600px" },
          zIndex: 3,
          pointerEvents: "none",
        }}
      >
        <ViewCanvas />
      </Box> */}

      <Box
        className="aboutImg"
        sx={{
          position: "relative",
          height: "400px",
          marginTop: { xs: 4, md: 0 },
        }}
      >
        <Box
          component="img"
          src={img1}
          sx={{
            position: "absolute",
            bottom: "50px",
            right: 0,
            width: "50%",
            borderRadius: 3,
          }}
        />

        <Box
          component="img"
          src={img2}
          sx={{
            position: "absolute",
            bottom: "10px",
            right: "45%",
            width: "40%",
            borderRadius: 3,
          }}
        />
      </Box>
    </Box>
  );
}

export default AboutUs;
