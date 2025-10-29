import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Careers from './pages/Careers';

import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans, Helvetica, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
    allVariants: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    h1: {
      letterSpacing: '0.03em',
      fontWeight: 700,
    },
    h2: {
      letterSpacing: '0.03em',
      fontWeight: 700,
    },
    h3: {
      letterSpacing: '0.02em',
      fontWeight: 600,
    },
    h4: {
      letterSpacing: '0.02em',
      fontWeight: 600,
    },
    h5: {
      letterSpacing: '0.015em',
      fontWeight: 500,
    },
    h6: {
      letterSpacing: '0.01em',
      fontWeight: 500,
    },
    body1: {
      letterSpacing: '0.005em',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/news' element={<News />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
