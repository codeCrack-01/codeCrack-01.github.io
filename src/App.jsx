import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Stack from "./components/Stack";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div class="min-h-screen bg-bg text-cream font-mono antialiased">
      <div class="noise" />
      <div class="fixed inset-0 -z-10 grid-bg pointer-events-none" />
      <Navbar />
      <main class="relative z-10">
        <Hero />
        <Projects />
        <Research />
        <Stack />
      </main>
      <Footer />
    </div>
  );
}
