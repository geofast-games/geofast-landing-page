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
import { PageContact } from "./components/PageContact";
import { isPrivacyLang } from "@/content/privacy";
import type { ReactNode } from "react";

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

// /de/privacy, /nl/privacy, /fr/privacy. English stays at /privacy, the URL
// the app stores link to; an unknown language code goes there too.
function LocalizedPrivacyPolicy() {
  const { lang } = useParams();
  if (!isPrivacyLang(lang) || lang === "en") return <Navigate to="/privacy" replace />;
  return <PrivacyPolicy lang={lang} />;
}

// The form pages are a Google Form in a card. This gives them the page frame
// and the shared closing block that the legal pages have.
function FormPage({ subject, children }: { subject: string; children: ReactNode }) {
  return (
    <section className="container py-12 sm:py-16">
      {children}
      <PageContact subject={subject} />
    </section>
  );
}

// Everything except the router itself. The browser wraps this in a
// BrowserRouter (below); the build-time prerender wraps the same tree in a
// StaticRouter (src/entry-prerender.tsx), so both render identical pages.
export function AppShell() {
  return (
    <>
      <Navbar />
      <InternalLinksHandler />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/:lang/privacy" element={<LocalizedPrivacyPolicy />} />
        <Route path="/termsofservice" element={<TermsOfService />} />
        <Route path="/datadeletion" element={<DataDeletion />} />
        <Route
          path="/feedback"
          element={<FormPage subject="Feedback"><FeedbackPage /></FormPage>}
        />
        <Route
          path="/suggestions"
          element={<FormPage subject="Suggestion"><SuggestionsPage /></FormPage>}
        />
        <Route
          path="/reportTranslationError"
          element={
            <FormPage subject="Translation error">
              <ReportTranslationErrorPage />
            </FormPage>
          }
        />
        <Route
          path="/reportBug"
          element={<FormPage subject="Bug report"><ReportBugPage /></FormPage>}
        />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/?/:page" element={<RedirectHandler />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <StickyDownload />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;
