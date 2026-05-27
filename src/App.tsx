import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const NewsPost = lazy(() => import("@/pages/NewsPost"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse font-display text-brand text-xl">Loading...</div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/:slug" element={<NewsPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
