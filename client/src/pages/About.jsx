import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Section from "../components/Section";
import Footer from "../components/Footer";
import ContactForm from '../components/ContactForm';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Navbar />
      <Box
        sx={{
          height: '50vh',
          width: '100%',
          backgroundColor: "rgba(10, 20, 69, 0.85)",
          backgroundImage: "url('/images/about-us.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          flexDirection: 'column',
          textAlign: 'center',
          ml: { xs: "0px", md: "110px" },
          px: 3,
        }}
      >
        <Typography variant='h2'>
          About Us
        </Typography>
        <Typography variant='h5'>
          Swift Bridging Loans and Bespoke Financing
        </Typography>
      </Box>

      <Section id="private-lending" title="About Us" py={2}>
        At Ploutas Capital, we specialise in bespoke investment and lending products tailored for each individual opportunity.<br/>
        We are not merely financiers; we are true real estate professionals and connoisseurs of high-value asset finance.
      </Section>

      <Section id="private-lending" title="Swift Bridging Loans and Bespoke Financing" py={2}>
        The core of Ploutas Capital lies in our rapid bridging loans—seamless, straightforward, and executed with unprecedented speed. <br/>
        But our vision is broader, our expertise deeper. We artfully design bespoke financing solutions for intricate, special situations and assets that defy convention. <br/>
        Understanding that uniqueness is the essence of luxury, our team possesses the agility and experience to navigate the most complex of financial landscapes.
      </Section>

      <Section id="private-lending" title="Global Reach, Local Expertise" py={2}>
        Our strategic financial canvas spans from the UK and Channel Islands to the vibrant markets of Western Europe, <br/>
        and reaches out to the international stages of the US, Canada, Australia, New Zealand, and Singapore.
      </Section>

      <ContactForm />

      <Footer />
    </motion.div>
  );
}
