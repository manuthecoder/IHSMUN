"use client";

import { Box, ThemeProvider, createTheme } from "@mui/material";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import { MDXProvider } from "@mdx-js/react";

const IBMPlexSans = IBM_Plex_Sans({
  weight: ["500", "700"],
  subsets: ["latin"],
});

const heading = Fraunces({
  weight: ["900"],
  subsets: ["latin"],
});

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const theme = createTheme({
    typography: {
      fontFamily: `${IBMPlexSans.style.fontFamily}!important`,
      h1: { fontFamily: `${heading.style.fontFamily}!important` },
      h2: { fontFamily: `${heading.style.fontFamily}!important` },
      h3: { fontFamily: `${heading.style.fontFamily}!important` },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          h1: { marginTop: "2rem", marginBottom: "1rem", fontSize: "3rem" },
          h2: {
            marginTop: "1.5rem",
            marginBottom: ".5rem",
            fontSize: "2.5rem",
          },
          h3: { marginTop: "1.5rem", marginBottom: "0.5rem", fontSize: "2rem" },
          h4: { marginTop: "1rem", marginBottom: "1rem", fontSize: "1.5rem" },
          h5: {
            marginTop: "0.5rem",
            marginBottom: "0.2rem",
            fontSize: "1.25rem",
          },
          h6: {
            marginTop: "0.2rem",
            marginBottom: "0.1rem",
            fontSize: "1.25rem",
          },
        },
      },
      MuiAppBar: {
        defaultProps: {
          elevation: 0,
        },
      },
      MuiTouchRipple: {
        styleOverrides: {
          ripple: {
            animationDuration: "0.3s!important",
            opacity: "0.1!important",
          },
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: "md",
          sx: { my: 10 },
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
          sx: {
            px: 4,
            py: 2,
            fontSize: 18,
            borderRadius: 99,
            "&.MuiButton-outlined": {
              borderWidth: "2px!important",
              borderColor: "hsl(var(--primary-base), 30%)",
              color: "hsl(var(--primary-base), 30%)",
            },
            "&.MuiButton-contained": {
              backgroundColor: "var(--primary)",
              color: "hsl(var(--primary-base), 20%)",
              transition: "transform .2s",
              "&:hover": {
                backgroundColor: "hsl(var(--primary-base), 70%)",
              },
              "&:active": {
                transition: "none",
                transform: "scale(0.95)",
              },
            },
            textTransform: "none",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          "& iframe, & img": {
            borderRadius: 5,
            borderWidh: 0,
            maxWidth: "100%",
          },
          "& .section": {
            // idk why but it works
            py: 0.1,
            "&.primary": {
              background: "var(--primary)",
              color: "hsl(var(--primary-base), 20%)",
            },
            "&.secondary": {
              background: "var(--secondary)",
              color: "hsl(var(--secondary-base), 20%)",
            },
          },
          "& .call-to-action": {
            borderRadius: 5,
            background: "black",
            color: "white",
            p: 5,
            "& .MuiButton-root": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.3)",
              },
              "&:active": {
                backgroundColor: "rgba(255, 255, 255, 0.4)",
              },
            },
          },
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
}
