import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Section from "../components/Section";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Navbar />

      {/* Hero */}
      <Box
        sx={{
          height: "50vh",
          width: "100%",
          backgroundColor: "rgba(10, 20, 69, 0.85)",
          backgroundImage: "url('/images/privacy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          flexDirection: "column",
          textAlign: "center",
          pl: { xs: "0px", md: "110px" },
          px: 3,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 700 }}>
          Privacy Policy
        </Typography>
        <Typography variant="h6">
          How we collect, use, and protect your personal information
        </Typography>
      </Box>

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          color: "white",
          mt: 6,
          mb: 8,
          fontFamily: "Montserrat, sans-serif",
          lineHeight: 1.7,
        }}
      >

        <Section py={0.5}>
          This Privacy Policy explains how <b>Ploutos Capital Limited</b> (“Ploutos”, “we”, “us”, “our”)
          collects, uses, and protects the personal data you provide when using our website and related
          services.
        </Section>

        <Section title="What Data Do We Collect?" py={0.5}>
          <ul>
            <li>Personal identification information (name, email address, phone number, etc.)</li>
            <li>Accommodation preferences, age, and sex of family members</li>
          </ul>
        </Section>

        <Section title="How Do We Collect Your Data?" py={0.5}>
          <ul>
            <li>When you register online or place an order for our products or services</li>
            <li>When you use our apps or social media pages</li>
            <li>When you make reservations through agents or directly</li>
            <li>When you complete surveys or provide feedback</li>
            <li>Via cookies while browsing our website</li>
          </ul>
          <Typography sx={{ mt: 1 }}>
            We may also receive your data from third-party lead generators, introducing brokers, or partner
            companies.
          </Typography>
        </Section>

        <Section title="How Will We Use Your Data?" py={0.5}>
          <Typography>
            We use your data to process orders, manage accounts, and send relevant offers. Data may be shared
            with trusted service providers and transferred outside the EEA under appropriate safeguards. We may
            also monitor social media for engagement and to protect our business interests.
          </Typography>
        </Section>

        <Section title="How Do We Store Your Data?" py={0.5}>
          <Typography>
            We apply strict security measures to prevent unauthorized access or loss. However, no electronic
            system is entirely secure. Please keep your passwords confidential and notify us immediately of any
            unauthorized use.
          </Typography>
        </Section>

        <Section title="Marketing" py={0.5}>
          <Typography>
            Ploutos may send you updates and offers about our or partner services. You can opt out anytime by
            contacting us at <b>info@ploutas.co.uk</b>.
          </Typography>
        </Section>

        <Section title="Your Data Protection Rights" py={0.5}>
          <Typography>
            You have rights to access, correct, erase, restrict, or object to the processing of your data, and
            to data portability. To exercise any of these rights, contact us at <b>info@ploutas.co.uk</b>. We
            will respond within one month.
          </Typography>
        </Section>

        <Section title="Other Websites" py={0.5}>
          <Typography>
            Our website may link to other sites. Ploutos is not responsible for their privacy practices and
            encourages you to review their policies.
          </Typography>
        </Section>

        <Section title="Changes to This Policy" py={0.5}>
          <Typography>
            We may update this Privacy Policy periodically. The latest version will always be available on this
            page with the effective date shown at the top.
          </Typography>
        </Section>

        <Section title="Contact Us" py={0.5}>
          <Typography>
            If you have questions, please contact us:
            <br />
            <b>Email:</b> info@ploutas.co.uk <br />
            <b>Phone:</b> +44(0) 20 7692 5686 <br />
            <b>Address:</b> 207 Regent Street, 3rd Floor, London, W1B 3HH, UK
          </Typography>
        </Section>
      </Container>

      <ContactForm />
      <Footer />
    </motion.div>
  );
}