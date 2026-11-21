import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Research from "./components/Research";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div class="min-h-screen" style="background:var(--color-paper);">
      <div
        aria-hidden="true"
        class="fixed inset-0 pointer-events-none z-0"
        style="background-image: url('/pattern.svg'); background-size: 80px 80px; background-repeat: repeat; opacity: 0.55;"
      />
      <div
        aria-hidden="true"
        class="fixed inset-0 pointer-events-none z-0"
        style="background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(85,255,92,0.08), transparent 70%);"
      />
      <Navbar />
      <main class="relative z-10">
        <Hero />
        <Work />
        <Research />
        <Experience />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}