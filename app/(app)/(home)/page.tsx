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

function getWindowDimensions() {
  if (typeof window === "undefined") return { width: 0, height: 0 };
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function Banner() {
  const trigger = useScrollProgress();

  const { width, height } = useWindowDimensions();
  const [textHidden, setTextHidden] = useState(false);

  useEffect(() => {
    // if aspect ratio width is less than 1450 958
    setTextHidden(width / height < 1450 / 958);
  }, [width, height]);

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
      {!textHidden && (
        <img
          src="/home/text.png"
          alt="IHSIMUN Logo"
          style={{
            zIndex: 2,
            transform:
              trigger !== 0
                ? `scale(${Math.min(2, 1 + trigger / 4000)})`
                : undefined,
            transition: "transform 0.1s",
            animation: "slideUp 1s forwards",
          }}
        />
      )}
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
            flexDirection: { xs: "column", md: "row" },
            alignItems: { sm: "center" },
            gap: 5,
            "& .btn": { flexShrink: 0, marginTop: { xs: 0, sm: "100px" } },
          }}
        >
          <Box>
            <Typography variant="h1" fontWeight={900} sx={{ mb: 2 }}>
              Welcome to IHSIMUN
            </Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>
              It is an honor and our pleasure to welcome you all to the first
              iteration of the Irvine Invitational Conference at Irvine High
              School, California.
            </Typography>
          </Box>

          <Button
            variant="contained"
            target="_blank"
            className="btn"
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

