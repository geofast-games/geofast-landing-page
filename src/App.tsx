import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Navigate,
} from "react-router-dom";

import { About } from "./components/About";
import { GameShowcase } from "./components/GameShowcase";
import { LiveStats } from "./components/LiveStats";
import { DiscordCommunity } from "./components/DiscordCommunity";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { SuggestionsPage } from "./components/Suggestions";
import { Navbar } from "./components/Navbar";
import { Contact } from "./components/Contact";
import { ScrollToTop } from "./components/ScrollToTop";
import { Reviews } from "./components/Reviews";
import "./App.css";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import DataDeletion from "./components/DataDeletion";
import { ReportBugPage } from "./components/ReportBug";
import { ReportTranslationErrorPage } from "./components/ReportTranslationError";
import FeedbackPage from "./components/Feedback";
import { InternalLinksHandler } from "./components/InternalLinksHandler";
import { StickyDownload } from "./components/StickyDownload";
import ResetPasswordPage from "./components/ResetPassword";

function Home() {
  return (
    <>
      <Hero />
      <GameShowcase />
      <LiveStats />
      <Reviews />
      <DiscordCommunity />
      <About />
      <Contact />
      <ScrollToTop />
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
        <Route path="/termsofservice" element={<TermsOfService />} />
        <Route path="/datadeletion" element={<DataDeletion />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/suggestions" element={<SuggestionsPage />} />
        <Route
          path="/reportTranslationError"
          element={<ReportTranslationErrorPage />}
        />
        <Route path="/reportBug" element={<ReportBugPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/?/:page" element={<RedirectHandler />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <StickyDownload />
    </Router>
  );
}

export default App;
