"use client";

import { useScrollTrigger } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";

export function Navbar() {
  const trigger = useScrollTrigger({ threshold: 650, disableHysteresis: true });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          background: "transparent",
          color: trigger ? "black" : "white",
          height: 90,
          px: 4,
          justifyContent: "center",
          transition: "backdrop-filter 0.5s, color 0.2s",
          borderBottomWidth: 2,
          borderBottomStyle: "solid",
          borderBottomColor: trigger ? "rgba(200,200,200,0.4)" : "transparent",
          "& *": {
            transition: "color 0s !important",
          },
          backdropFilter: trigger ? "blur(5px)" : "blur(0px)",
          "& .MuiButton-root": {
            px: 2,
          },
        }}
      >
        <Toolbar>
          <Link
            href="/"
            color="inherit"
            aria-label="menu"
            style={{
              fontSize: 20,
              fontWeight: 900,
              textDecoration: "none",
              color: "inherit",
              marginRight: 20,
            }}
          >
            IHSMUN
          </Link>
          <Button color="inherit" href="/about">
            About
          </Button>
          <Button color="inherit" href="/hall-of-fame">
            Hall of fame
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
