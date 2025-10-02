import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Navigate,
} from "react-router-dom";

import { About } from "./components/About";
//import { Cta } from "./components/Cta";
//import { FAQ } from "./components/FAQ";
import { GameShowcase } from "./components/GameShowcase";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { SuggestionsPage } from "./components/Suggestions";
//import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Contact } from "./components/Contact";
import { Careers } from "./components/Careers";
import { ScrollToTop } from "./components/ScrollToTop";
//import { Services } from "./components/Services";
//import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
import { Reviews } from "./components/Reviews";
import "./App.css";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { ReportBugPage } from "./components/ReportBug";
import { ReportTranslationErrorPage } from "./components/ReportTranslationError";
import FeedbackPage from "./components/Feedback";
import { InternalLinksHandler } from "./components/InternalLinksHandler";
import { StickyDownload } from "./components/StickyDownload";

function Home() {
  return (
    <>
      <Hero />
      <GameShowcase />
      <Reviews />
      <About />
      <Careers />
      <Team />
      <Contact />
      <ScrollToTop />
      {/**
      <Sponsors />
      <HowItWorks />
      <Services />
      <Cta />
      <FAQ />
      **/}
    </>
  );
}

function RedirectHandler() {
  const { page } = useParams();
  return <Navigate to={`/${page}`} replace />;
}

function App() {
  return (
    <Router>
      <Navbar />
      <InternalLinksHandler />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/suggestions" element={<SuggestionsPage />} />
        <Route
          path="/reportTranslationError"
          element={<ReportTranslationErrorPage />}
        />
        <Route path="/reportBug" element={<ReportBugPage />} />
        <Route path="/?/:page" element={<RedirectHandler />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <StickyDownload />
    </Router>
  );
}

export default App;
