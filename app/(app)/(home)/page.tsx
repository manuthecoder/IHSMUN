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
        position: "relative",
        pt: "90px",
        background: "black",
        color: "white",
        "& img": {
          objectFit: "cover",
          width: "100%",
          height: "100%",
          maxHeight: "100vh",
          position: "absolute",
          top: 0,
          borderRadius: 0,
          left: 0,
        },
      }}
    >
      <img
        src="/home/text.png"
        alt="IHSIMUN Logo"
        style={{
          zIndex: 2,
          transform: `scale(${Math.min(2, 1 + trigger / 4000)})`,
          transition: "transform 0.1s",
          animation: "slideUp 1s forwards",
        }}
      />
      <img
        src="/home/foreground.png"
        alt="IHSIMUN Logo"
        style={{
          zIndex: 3,
        }}
      />
      <img
        src="/home/background.png"
        alt="IHSIMUN Logo"
        style={{
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          zIndex: 999,
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            p: 5,
            mt: "auto",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Box>
            <Typography variant="h1" fontWeight={900} sx={{ mb: 2 }}>
              Welcome to IHSIMUN
            </Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Welcome to the first iteration of the Irvine Invitational Model
              United Nations at Irvine High School, in Irvine, California. It is
              an honor and our pleasure to welcome you all to the first
              iteration of the Irvine Invitational Conference at Irvine High
              School!
            </Typography>
          </Box>

          <Button
            variant="contained"
            style={{ flexShrink: 0, marginTop: 100 }}
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLScr5ZpAocO1NQxyjZmMeW5uE0sOFbUMlr8thS98xiEs0K37sw/viewform"
          >
            Register Now
          </Button>
        </Box>
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

