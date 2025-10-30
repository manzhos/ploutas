import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// import { Box } from "@mui/material";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import ParallaxImage from "../components/ParallaxImage";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import CookieBanner from "../components/CookieBanner";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import NewsLetter from "../components/NewsLetter";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }

      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <>
      <Navbar />
      <Hero />

      <Section id="private-lending" title="Private Lending">
        A boutique private lender specialising in bespoke short- and long-term financing across diverse asset classes:
        <ul>
          <li><b>Real Estate</b> – prime residential, commercial, and development projects</li>
          <li><b>Art & Collectables</b> – discreet financing secured against exceptional assets</li>
          <li><b>Corporates</b> – working capital, expansion finance, and special situations</li>
          <li><b>Securities</b> – structured loans against listed and private portfolios</li>
        </ul>
      </Section>

      <ParallaxImage image="/images/parallax1.jpg" height="45vh" speed={10} />

      <Section id="capital-advisory" title="Capital Advisory" image="/images/building2.jpg" reverse>
        We deliver tailored equity and debt solutions for entrepreneurs, corporates, and family-owned businesses.
        <ul>
          <li>Innovative structures designed to <b>maximize value creation</b></li>
          <li>Access to <b>deep global networks</b> of capital providers and strategic partners</li>
          <li>Up to <b>98% funding</b> available for partners with proven track records and meaningful commitment</li>
        </ul>
        Our advisory approach combines <b>strategic insight</b> with <b>execution excellence</b>, helping clients unlock opportunities that others overlook.
      </Section>

      <NewsLetter />

      <ParallaxImage image="/images/parallax2.jpg" height="45vh" speed={10} />

      <Section id="family-office" title="Family Office">
        For ultra-high-net-worth individuals and wealthy families, Ploutas Capital offers:
        <ul>
          <li><b>Exclusive access</b> to proprietary deal flow and rare opportunities</li>
          <li><b>Direct co-investments</b> alongside seasoned principals</li>
          <li><b>Curated investments</b> in real estate, private equity, and alternative assets</li>
        </ul>
        Our philosophy is grounded in <b>preservation of capital, sustainable growth, and discretion</b>.<br />
        Each opportunity is vetted for both <b>financial merit</b> and <b>long-term alignment</b>.
      </Section>

      <ParallaxImage image="/images/parallax3.jpg" height="45vh" speed={10} />

      <Section id="esg-sustainability" title="ESG / Sustainability">
        At Ploutas Capital, we believe that <b>lasting value is responsible value</b>.
        <ul>
          <li><b>Environmental:</b> Investments in sustainable assets, energy efficiency, and low-carbon operations</li>
          <li><b>Social:</b> Commitment to ethics, inclusion, and accessibility</li>
          <li><b>Governance:</b> Highest standards of transparency, compliance, and accountability</li>
        </ul>
        We view ESG not as a checkbox, but as a <b>core principle of enduring success</b> — doing well by doing good.
      </Section>

      {/* <ParallaxImage image="/images/parallax3.jpg" height="45vh" speed={10} /> */}

      <ContactForm />

      <Footer />
      <CookieBanner />
    </>
  );
}
