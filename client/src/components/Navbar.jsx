import React, { useState } from "react";
import { Box, IconButton, Typography, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const containerVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.5 } },
  };

  const columnVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.3 + i * 0.6, duration: 0.9, ease: "easeOut" },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 1, duration: 0.8, ease: "easeOut" } },
  };

  const scrollToSection = (id) => {
    console.log(id)
    const section = document.getElementById(id);
    console.log('section', section)

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <>
      {/* Sidebar Container */}
      <Box
        sx={{
          position: "fixed",
          left: 0,
          top: 0,
          height: "100vh",
          width: { xs: "70px", md: "220px" },
          bgcolor: "white",
          color: "#0a1445",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          py: 3,
          zIndex: 1300,
          boxShadow: "2px 0 8px rgba(0,0,0,0.05)",
        }}
      >
        {/* Logo */}
        <Box sx={{ textAlign: "center" }}>
          <img src="/images/logo_pc.svg" alt="Ploutas Capital" style={{ width: "100%", maxWidth: 160, marginBottom: 16 }} />
        </Box>

        {/* Burger button */}
        <IconButton onClick={() => setOpen(true)} sx={{ color: "#0a1445", mb: "auto", mt: 2 }}>
          <img src="/images/menu_btn.svg" alt="Menu" style={{ width: "80%", maxWidth: 60 }} />
          {/* <MenuIcon sx={{ fontSize: 36 }} /> */}
        </IconButton>

        {/* Contact info */}
        <Box sx={{ textAlign: "center", fontSize: 12 }}>
          <Typography sx={{ mb: 0.5, fontWeight: 600 }}>Contact</Typography>
          <Typography>+44 (0) 20 7692 5686</Typography>
          <Link href="mailto:info@ploutas.co.uk" color="#0a1445" underline="hover">
            info@ploutas.co.uk
          </Link>
        </Box>
      </Box>

      {/* Animated Fullscreen Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              backgroundColor: "white",
              color: "#0a1445",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "3rem 5vw",
              zIndex: 1500,
              overflow: "hidden",
            }}
          >
            {/* Top bar with logo and close */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <img src="/images/logo_pc.svg" alt="Ploutas" style={{ height: 80 }} />
              <IconButton onClick={() => setOpen(false)} sx={{ color: "#0C1C47" }}>
                <CloseIcon sx={{ fontSize: 36 }} />
              </IconButton>
            </Box>

            {/* Content columns */}
            <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
                  gap: { xs: 5, md: 8 },
                  width: "100%",
                  maxWidth: 1200,
                }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div key={i} custom={i} variants={columnVariants} initial="hidden" animate="visible">
                    {i === 0 && (
                      <>
                        <Typography onClick={() => scrollToSection("private-lending")}    sx={{ cursor: 'pointer', mb: 1, fontWeight: 600, fontSize: 20, color: '#0C1C47' }}>Private Lending</Typography>
                        <Typography onClick={() => scrollToSection("capital-advisory")}   sx={{ cursor: 'pointer', mb: 1, fontWeight: 600, fontSize: 20, color: '#0C1C47' }}>Capital Advisory</Typography>
                        <Typography onClick={() => scrollToSection("family-office")}      sx={{ cursor: 'pointer', mb: 1, fontWeight: 600, fontSize: 20, color: '#0C1C47' }}>Family Office</Typography>
                        <Typography onClick={() => scrollToSection("esg-sustainability")} sx={{ cursor: 'pointer', fontWeight: 600, fontSize: 20, color: '#0C1C47' }}>ESG / Sustainability</Typography>
                      </>
                    )}
                    {i === 1 && (
                      <>
                        <Typography sx={{ mb: 1, fontWeight: 600, fontSize: 20, color: '#0C1C47' }}>News & Insights</Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: 20, color: '#0C1C47' }}>Careers</Typography>
                      </>
                    )}
                    {i === 2 && (
                      <>
                        <Typography sx={{ mb: 1, fontWeight: 600, fontSize: 20, color: '#0C1C47' }}>Contact</Typography>
                        <Typography sx={{ fontSize: 14, color: '#0C1C47' }}>
                          Ploutas Associates Ltd.<br />3rd Floor, 207 Regent Street<br />London, W1B 3HH, UK
                        </Typography>
                        <Typography sx={{ mt: 1, fontSize: 14, color: '#0C1C47' }}>
                          info@ploutas.co.uk<br />+44 20 1234 5678
                        </Typography>
                      </>
                    )}
                  </motion.div>
                ))}
              </Box>
            </Box>
            {/* Animated Bottom Image */}
            <motion.div
              alt="Menu Background"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              style={{
                width: "100%",
                height: "50vh",
                objectFit: "cover",
                marginTop: "auto",
                backgroundImage: 'url("/images/build_menu.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
              }}
            >
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
