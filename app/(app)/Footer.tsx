"use client";

import { Box, Container, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export function Footer() {
  return (
    <Box
      sx={{
        mb: 0,
        background: "black",
        color: "white",
      }}
    >
      <Container sx={{ my: 0, py: 7 }}>
        <Grid
          container
          sx={{
            "& a": {
              display: "block",
              mt: 0.5,
            },
          }}
        >
          <Grid xs={12} sm={6}>
            <Typography variant="h1" sx={{ mt: 0 }}>
              IHSIMUN
            </Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Irvine High Model United Nations
            </Typography>
            <Link href="/about" color="inherit">
              Our Mission
            </Link>
            <Link href="/about" color="inherit">
              Conference Staff
            </Link>
            <Link href="/about" color="inherit">
              Instagram
            </Link>
          </Grid>
          <Grid xs={12} sm={6}>
            <Typography variant="h3" sx={{ mt: 1 }}>
              Conference
            </Typography>
            <Link href="/about" color="inherit">
              Registration Information
            </Link>
            <Link href="/committees" color="inherit">
              Committees
            </Link>
            <Link href="/about" color="inherit">
              Venue
            </Link>
            <Link href="/conference-resources" color="inherit">
              Delegate Information
            </Link>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          textAlign: "center",
          py: 2,
          color: "#aaa",
          backgroundColor: "rgba(255,255,255,.1)",
        }}
      >
        &copy; {new Date().getFullYear()} IHSIMUN &bull; Created by{" "}
        <Link href="https://manu.is-a.dev" color="inherit">
          Manu G
        </Link>
      </Box>
    </Box>
  );
}
