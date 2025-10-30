// src/components/CookieBanner.jsx
import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Link } from "@mui/material";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        bgcolor: "#B6915D", // gold background
        color: "#ffffff",
        py: 2,
        px: { xs: 2, md: 4 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        zIndex: 2000,
      }}
    >
      <Box sx={{ maxWidth: { xs: "100%", md: "75%" } }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            letterSpacing: "0.5px",
            mb: 0.5,
            textTransform: "uppercase",
          }}
        >
          Cookies Policy
        </Typography>

        <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
          Our site uses cookies to store information on your device. Some cookies are essential,
          while others help us improve your experience by providing insights into site usage.
          By using our site, you accept our{" "}
          <Link
            href="/privacy-policy"
            sx={{ color: "#fff", textDecoration: "underline", fontWeight: 500 }}
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/cookies-policy"
            sx={{ color: "#fff", textDecoration: "underline", fontWeight: 500 }}
          >
            Cookies Policy
          </Link>
          .
        </Typography>
      </Box>

      <Button
        onClick={handleAccept}
        variant="contained"
        sx={{
          bgcolor: "#ffffff",
          color: "#B6915D",
          fontWeight: 700,
          borderRadius: "50px",
          px: 3,
          py: 1,
          "&:hover": {
            bgcolor: "#f0f0f0",
          },
        }}
      >
        Accept Cookies
      </Button>
    </Box>
  );
}