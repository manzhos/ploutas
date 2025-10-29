

import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Section from "../components/Section";

export default function News() {
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
          backgroundImage: "url('/images/news.jpg')",
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
          News & Insights
        </Typography>
        {/* <Typography variant='h5'>
          Join Our Team
        </Typography> */}
      </Box>

      <Typography variant='h3' sx={{ mt: 4, ml: { xs: "70px", md: "220px" }, textAlign: 'center' }}>
        Ploutos Associates&nbsp;&mdash; Case Studies
      </Typography>

      <Section id="private-lending" title="Representative Transactions">
        • Overseas client acquiring portfolio of residential assets
        <ul>
          <li>Budget: £1,000,000</li>
          <li>Delivery: Under 1 week</li>
        </ul>

        • Forest development site financing
        <ul>
          <li>Budget: £600,000</li>
          <li>Delivery: 3 working days</li>
        </ul>

        • Bridge to development of large urban development project
        <ul>
          <li>Budget: €250,000,000</li>
          <li>Delivery: Confidential</li>
        </ul>

        • Luxury mansion in London
        <ul>
          <li>Budget: £8,000,000</li>
          <li>Delivery: Confidential</li>
        </ul>

        • Financed retirement home acquisition and development (80% LTC)
        <ul>
          <li>Budget: £1,300,000</li>
          <li>Delivery: Confidential</li>
        </ul>

        • PBSA development loan (debt + equity: 98% LTC)
        <ul>
          <li>Budget: £15,000,000</li>
          <li>Delivery: Confidential</li>
        </ul> 
        • Financed HMO conversion deal, covering 90% of cost
        <ul>
          <li>Budget: £500,000</li>
          <li>Delivery: Confidential</li>
        </ul>
        • Land acquisition deal financing
        <ul>
          <li>Budget: £1,000,000</li>
          <li>Delivery: 2 weeks</li>
        </ul>
        • Exit of student project financing (75% LTV)
        <ul>
          <li>Budget: £7,000,000</li>
          <li>Delivery: Confidential</li>
        </ul>
        • Second-charge bridge on building development site
        <ul>
          <li>Budget: £315,000</li>
          <li>Delivery: Confidential</li>
        </ul>
        • Industrial asset with development cost financing
        <ul>
          <li>Budget: £4,800,000</li>
          <li>Delivery: Confidential</li>
        </ul>
      </Section>

      <Section id="private-lending" title="UK Auction Finance Examples">
        • 3-bedroom auction property in Surrey
        <ul>
          <li>Budget: £350,000 + £100,000 refurbishment</li>
          <li>Delivery: Exited via mortgage</li>
        </ul>
        • Portfolio of residential properties
        <ul>
          <li>Budget: £1,300,000</li>
          <li>Delivery: Sold individually in 6 months, ~20% profit</li>
        </ul>
        • Leisure development site acquisition
        <ul>
          <li>Budget: £1,000,000</li>
          <li>Delivery: Plot sales over 12 months ~£1,200,000</li>
        </ul>
      </Section>

      <Section id="private-lending" title="Luxury Finance Examples">
        • Refinanced fleet of luxury cars
        <ul>
          <li>Value: £8.3 million</li>
          <li>Delivery: 2021</li>
        </ul>
        • Assisted purchase of luxury yacht
        <ul>
          <li>Value: US$60 million</li>
          <li>Delivery: Closed in 3 weeks (2018)</li>
        </ul>
        • Financed super luxury property in Monaco
        <ul>
          <li>Value: €100 million</li>
          <li>Delivery: 2021</li>
        </ul>
        • Financed pre-owned artwork (4 items)
        <ul>
          <li>Value: US$3–5 million each</li>
          <li>Delivery: 2016</li>
        </ul>

      </Section>
    </motion.div>
  );
}
