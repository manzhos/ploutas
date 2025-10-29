import React from "react";
import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#1E325C", color: "white", py: 3, textAlign: "center", ml: { md: "220px" } }}>
      <Typography variant="body2">Contact</Typography>
      <Typography variant="body2">+44 (0) 20 7692 5686</Typography>
      <Link href="mailto:info@ploutas.co.uk" color="inherit">info@ploutas.co.uk</Link>
    </Box>
  );
}
