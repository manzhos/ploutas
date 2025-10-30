import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  const [vh, setVh] = useState(window.innerHeight * 0.01);

  useEffect(() => {
    const handleResize = () => {
      setVh(window.innerHeight * 0.01);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        height: `calc(${vh * 100}px)`,
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
        backgroundBlendMode: "multiply",
        ml: { xs: "0px", md: "220px" },
        px: 3,
      }}
    >
      <Typography
        sx={{
          mb: 3,
          fontSize: { xs: "30pt", sm: "34pt", md: "36pt" },
          fontWeight: 700,
          lineHeight: 1.2,
        }}
      >
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
          "&:hover": { bgcolor: "#f0f0f0", color: "#000" },
        }}
        onClick={() => navigate('/about')}
      >
        About Us
      </Button>
    </Box>
  );
}