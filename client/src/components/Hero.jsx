import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

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
        ml: { xs: "0px", md: "220px" },
        px: 3,
      }}
    >
      <Typography sx={{ mb: 3, fontSize: '36pt', fontWeight: 700 }}>
        Private Structured Capital Solutions <br /> for Real Estate and Other Special Situations
      </Typography>
      <Button
        variant="contained"
        sx={{
          mt: 2,
          bgcolor: "#B6915D",
          color: "#ffffff",
          borderRadius: "50px",
          px: 4,
          py: 1,
          fontWeight: 600,
          textTransform: "none",
          "&:hover": { bgcolor: "#f0f0f0" },
        }}
        onClick={() => navigate('/about')}
      >
        About Us
      </Button>
    </Box>
  );
}
