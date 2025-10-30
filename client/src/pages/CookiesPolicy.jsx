import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Section from "../components/Section";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function CookiesPolicy() {
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
          backgroundImage: "url('/images/cookies.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          flexDirection: "column",
          textAlign: "center",
          ml: { xs: "0px", md: "110px" },
          px: 3,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 700 }}>
          Cookies Policy
        </Typography>
        <Typography variant="h6">
          How and why we use cookies on our website
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
          <Typography>
            <b>Ploutos Associates Limited</b> (collectively “Ploutos”, “Us”, “We”, “Our” or “Company”) respects your
            data and privacy highly. For more information on how we use and protect your data, please see our{" "}
            <b>Privacy Policy</b>.
          </Typography>
        </Section>

        <Section title="What Are Cookies?" py={0.5}>
          <Typography>
            Cookies are text files placed on your computer to collect standard Internet log information and visitor
            behavior information. When you visit our websites, we may collect information from you automatically
            through cookies or similar technology.
            <br />
            <br />
            For further information, visit{" "}
            <a
              href="https://www.allaboutcookies.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#00B0FF", textDecoration: "none" }}
            >
              allaboutcookies.org
            </a>
            .
          </Typography>
        </Section>

        <Section title="How Do We Use Cookies?" py={0.5}>
          <Typography>
            Ploutos uses cookies in a range of ways to improve your experience on our website, including:
          </Typography>
          <ul>
            <li>Keeping you signed in</li>
            <li>Understanding how you use our website</li>
            <li>Providing interest-based content and relevant advertisements</li>
          </ul>
        </Section>

        <Section title="What Types of Cookies Do We Use?" py={0.5}>
          <Typography>
            There are a number of different types of cookies. However, our website uses:
          </Typography>

          <Typography sx={{ mt: 1 }}>
            <b>Functionality cookies –</b> Ploutos uses these so that we recognize you on our website and remember
            your preferences, such as your preferred language and location. Both first-party and third-party
            cookies are used.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            <b>Advertising cookies –</b> Ploutos uses these to collect information about your visit, content viewed,
            links followed, and details about your browser, device, and IP address. Some of this data may be shared
            with third parties for advertising purposes.
          </Typography>
        </Section>

        <Section title="How to Manage Cookies" py={0.5}>
          <Typography>
            You can manage cookies in several ways:
          </Typography>
          <ul>
            <li>Set your browser to prevent cookies from being accepted.</li>
            <li>
              Configure some browsers to alert you when a website tries to place a cookie on your device.
            </li>
            <li>
              Block cookies entirely using your browser settings — note that this may limit functionality.
            </li>
            <li>Use an ad blocker to prevent analytics or advertising tools.</li>
            <li>
              Delete stored cookies by clearing them in your browser — this removes existing cookies but does not
              block new ones.
            </li>
            <li>
              Refuse specific cookies through each cookie’s opt-out process where provided.
            </li>
          </ul>
          <Typography sx={{ mt: 1 }}>
            We are not responsible for the content or cookies from external websites. Following links from our
            site to third-party pages will be subject to their own cookie and privacy notices.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Restricting or disabling cookies can limit the functionality of our websites. Without persistent
            cookies, for example, booking or managing reservations may not be possible.
          </Typography>
        </Section>

        <Section title="How Long Do Cookies Last?" py={0.5}>
          <Typography>
            Different cookies last for different durations:
          </Typography>
          <Typography sx={{ mt: 1 }}>
            <b>Session cookies</b> last only for your current website visit and are deleted when you close your
            browser. These cookies help maintain your browsing session and improve your user experience.
          </Typography>
        </Section>

        <Section title="How to Contact Us" py={0.5}>
          <Typography>
            If you have any questions about Ploutos’s cookie or privacy practices, please contact us:
            <br />
            <b>Email:</b> info@ploutas.co.uk <br />
            <b>Phone:</b> +44(0) 20 7692 5686 <br />
            <b>Address:</b> 207 Regent Street, 3rd Floor, London, W1B 3HH, UK
          </Typography>
        </Section>

        <Section title="Right to Contact the Appropriate Authority" py={0.5}>
          <Typography>
            Should you wish to report a complaint or if you feel that Ploutos has not addressed your concern in a
            satisfactory manner, you may contact the UK Information Commissioner’s Office (ICO), or any competent
            data protection authority of an EU member state.{" "}
            <a
              href="https://edpb.europa.eu/about-edpb/about-edpb/members_en"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#00B0FF", textDecoration: "none" }}
            >
              View EU Data Protection Authorities
            </a>
            .
          </Typography>
        </Section>
      </Container>

      <ContactForm />
      <Footer />
    </motion.div>
  );
}