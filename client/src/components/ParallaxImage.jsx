import React, { useRef } from "react";
import { Box } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxImage({ image, height = "45vh", speed = 0.3 }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50 * speed, 50 * speed]);

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        overflow: "hidden",
        height: height,
        width: "100%",
        zIndex: 0,
      }}
    >
      <motion.img
        src={image}
        alt="Parallax"
        style={{
          y,
          width: "100%",
          height: "130%",
          objectFit: "cover",
          position: "absolute",
          top: "-10%",
          left: 0,
          willChange: "transform",
        }}
      />
    </Box>
  );
}