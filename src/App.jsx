import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Freelance from "./components/Freelance";
import Stack from "./components/Stack";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div class="min-h-screen bg-bg text-ink font-sans antialiased">
      <div class="noise" />
      <Navbar />
      <main class="relative z-10">
        <Hero />
        <Projects />
        <Research />
        <Freelance />
        <Stack />
      </main>
      <Footer />
    </div>
  );
}
