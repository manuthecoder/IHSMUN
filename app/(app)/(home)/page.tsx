"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Home from "./home.mdx";

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;
      setProgress(scroll);
    };

    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, []);

  return progress;
}

function Banner() {
  const trigger = useScrollProgress();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        maxHeight: "calc(100vh - 60px)",
        overflow: "hidden",
        position: "relative",
        pt: "90px",
        background: "black",
        color: "white",
        "& img": {
          objectFit: "cover",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0.4,
        },
      }}
    >
      <img
        src="https://www.un.org/sites/un2.un.org/files/styles/3x2-front-thumbnail/public/field/image/model_un_landing_page.jpg"
        alt="IHSIMUN Logo"
      />
      <Box
        sx={{
          zIndex: 999,
          width: "100%",
          height: "100%",
          backdropFilter: `blur(${Math.min(50, trigger / 20)}px)`,
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: "100%",
            width: "100%",
            px: { xs: 2, sm: "100px!important" },
          }}
        >
          <Typography variant="h1" fontWeight={900} sx={{ mb: 2 }}>
            Welcome to IHSIMUN
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </Typography>

          <Button
            variant="contained"
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLScr5ZpAocO1NQxyjZmMeW5uE0sOFbUMlr8thS98xiEs0K37sw/viewform"
          >
            Register Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

export default function Page() {
  return (
    <>
      <Banner />
      <Home />
    </>
  );
}

