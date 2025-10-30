import React from "react";
import { Box, Typography, Link, Grid, useTheme, useMediaQuery } from "@mui/material";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MessageCircle,
  MessageSquare,
} from "lucide-react"; // MessageCircle = WhatsApp style, MessageSquare = Messenger style

import { motion } from "framer-motion";

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  {/* shared icon style */}
  const iconStyle = {
    color: "#ffffff",
    transition: "all 0.3s ease",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      color: "#00B0FF",
      transform: "scale(1.15)",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Box
        component="footer"
        sx={{
          backgroundColor: "#0A1445",
          color: "#ffffff",
          py: { xs: 5, sm: 6 },
          px: { xs: 3, sm: 6, md: 10 },
          mt: 8,
          ml: { xs: "0px", md: "220px" },
        }}
      >
        <Grid
          container
          spacing={isMobile ? 2 : 10}
          direction={isMobile ? "column" : "row"}
        >
          {/* Office */}
          <Grid item size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h6"
              sx={{
                mb: 1,
                fontWeight: 600,
                fontSize: isMobile ? "1.4rem" : "1.6rem",
              }}
            >
              Office
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
              Ploutas Associates Ltd.<br />
              3rd Floor, 207 Regent Street<br />
              London, W1B 3HH, UK<br />
            </Typography>
          </Grid>

          {/* Contact */}
          <Grid item size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h6"
              sx={{
                mb: 1,
                fontWeight: 600,
                fontSize: isMobile ? "1.4rem" : "1.6rem",
              }}
            >
              Contact
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
              +44 20 1234 5678<br />
              <Link
                href="mailto:info@ploutas.co.uk"
                sx={{
                  color: "#ffffff",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                info@ploutas.co.uk
              </Link>
            </Typography>
          </Grid>

          {/* Legal */}
          <Grid item size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h6"
              sx={{
                mb: 1,
                fontWeight: 600,
                fontSize: isMobile ? "1.4rem" : "1.6rem",
              }}
            >
              Legal
            </Typography>
            <Link
              href="/privacy-policy"
              sx={{
                display: "block",
                color: "#ffffff",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Data and privacy policy
            </Link>
          </Grid>
          <Grid item size={{ xs: 12, md: 3 }}>
            {/* --- Social Links --- */}
            <Box>
              <Typography
                variant="subtitle2"
                sx={{ mb: 1, color: "#b0b8d1", fontWeight: 500, letterSpacing: "0.5px" }}
              >
                Follow us
              </Typography>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Link href="https://www.facebook.com/ploutos.associates/" target="_blank" rel="noopener" sx={iconStyle}>
                  <Facebook size={22} />
                </Link>
                <Link href="https://www.instagram.com/ploutos.associates/" target="_blank" rel="noopener" sx={iconStyle}>
                  <Instagram size={22} />
                </Link>
                <Link href="https://www.linkedin.com/company/ploutos-associates/" target="_blank" rel="noopener" sx={iconStyle}>
                  <Linkedin size={22} />
                </Link>
                <Link href="https://twitter.com/Ploutas_com" target="_blank" rel="noopener" sx={iconStyle}>
                  <Twitter size={22} />
                </Link>
              </Box>
            </Box>

            {/* --- Messenger Links --- */}
            <Box sx={{ mt: 3 }}>
              <Typography
                variant="subtitle2"
                sx={{ mb: 1, color: "#b0b8d1", fontWeight: 500, letterSpacing: "0.5px" }}
              >
                Chat with us
              </Typography>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Link href="https://www.messenger.com/t/106681555021466/?messaging_source=source%3Apages%3Amessage_shortlink" target="_blank" rel="noopener" sx={iconStyle}>
                  <MessageSquare size={22} /> {/* FB Messenger */}
                </Link>
                <Link href="https://api.whatsapp.com/send/?phone=447742161591&text=Hello%21+I+would+like+to+know+about+the+financial+services.+Please+provide+the+information&app_absent=0" target="_blank" rel="noopener" sx={iconStyle}>
                  <MessageCircle size={22} /> {/* WhatsApp */}
                </Link>
              </Box>
            </Box>            
          </Grid>
        </Grid>

        {/* Divider Line */}
        <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.2)", mt: 4, mb: 3 }} />

        {/* Bottom Disclaimer */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 2,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.6,
              display: "block",
              flex: 1,
              fontSize: isMobile ? "0.72rem" : "0.8rem",
            }}
          >
            This website is intended for professional intermediary use only and not for distribution to the general public.
            Loans facilitated by Ploutas Capital are unregulated. Ploutas Capital is not authorised by the Financial Conduct Authority and you
            won’t have access to the Financial Services Compensation Scheme (FSCS) or the Financial Ombudsman Service (FOS).
            Property used as security is at risk of repossession if you do not keep up payments. Registered Office: 3rd Floor, 207 Regent Street London, W1B 3HH, UK.
          </Typography>

          {/* Logo (Desktop only) */}
          {!isMobile && (
            <Box sx={{ textAlign: "right", mt: 3, ml: 10 }}>
              <img src="/images/logo_pc_white.svg" alt="Ploutas" style={{ height: 60 }} />
            </Box>
          )}
        </Box>
      </Box>
    </motion.div>
  );
}