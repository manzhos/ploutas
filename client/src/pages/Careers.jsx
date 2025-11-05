
import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Section from "../components/Section";
import Footer from "../components/Footer";
import { blue } from '@mui/material/colors';

export default function Careers() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Navbar />
      {/* <div style={{ width:'100%', backgroundColor:'blue' }}>man</div> */}
      <Box
        sx={{
          height: '50vh',
          width: '100%',
          backgroundColor: "rgba(10, 20, 69, 0.85)",
          backgroundImage: "url('/images/careers.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          flexDirection: 'column',
          textAlign: 'center',
          pl: { xs: "0px", md: "110px" },
          px: 3,
        }}
      >
        <Typography variant='h2'>
          Careers
        </Typography>
        <Typography variant='h5'>
          Join Our Team
        </Typography>
      </Box>

      <Section id="private-lending" title="Careers">
        Join Ploutas Capital and become part of a <b>selective, entrepreneurial, and collaborative team.</b>
        <br /><br />
        We seek individuals who combine <b>financial expertise with creativity, discipline, and integrity</b>.
        <br /><br />
        If you are inspired to <b>shape the future of private capital with purpose</b>, we invite you to connect.
        <br /><br /><br /><a href="mailto:careers@ploutas.co.uk" style={{ color:'#B6915D' }}><b>careers@ploutas.co.uk</b></a>
      </Section>

      <Footer />
    </motion.div>
  );
}
