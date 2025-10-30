import React from "react";
import { Box, Typography } from "@mui/material";

export default function Section({ id, title, children, image, reverse, py }) {
  return (
    <Box
      id={id}
      sx={{
        display: "flex",
        flexDirection: reverse ? "row-reverse" : "row",
        alignItems: "center",
        flexWrap: "wrap",
        py: py || 8,
        ml: { md: "220px" },
        px: 3,
      }}
    >
      <Box sx={{ flex: 1, p: 3 }}>
        <Typography variant="h5" fontWeight="bold" color="#B6915D" sx={{ fontSize: '28pt' }} gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" component="div" color="#333333" >{children}</Typography>
      </Box>
      {/* <Box sx={{ flex: 1 }}>
        <img src={image} alt={title} style={{ width: "100%", borderRadius: 4 }} />
      </Box> */}
    </Box>
  );
}
