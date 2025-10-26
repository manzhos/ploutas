import React from "react";
import { Box, Button, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: "url('/images/river-thames-london-uk.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        backgroundColor: "rgba(10, 20, 69, 0.85)",
        // backgroundBlendMode: "screen",
        backgroundBlendMode: "multiply",
        ml: { md: "220px" },
        px: 3,
      }}
    >
      <Typography variant="h3" sx={{ mb: 3 }}>
        Private Structured Capital Solutions <br /> for Real Estate and Other Special Situations
      </Typography>
      <Button
        variant="contained"
        sx={{
          mt: 2,
          bgcolor: "white",
          color: "#0a1445",
          borderRadius: "50px",
          px: 4,
          py: 1,
          fontWeight: 600,
          textTransform: "none",
          "&:hover": { bgcolor: "#f0f0f0" },
        }}
      >
        About Us
      </Button>
    </Box>
  );
}
