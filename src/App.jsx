import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Freelance from "./components/Freelance";
import Stack from "./components/Stack";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div class="min-h-screen bg-bg text-ink font-sans antialiased">
      <div
        class="fixed inset-0 pointer-events-none z-0 opacity-60"
        style="background-image: url('/pattern.svg'); background-size: 80px 80px; background-repeat: repeat;"
      />
      <div class="relative z-10 max-w-6xl mx-auto px-6 py-8 md:py-12">
        <div class="grid md:grid-cols-[260px_1fr] gap-8 md:gap-12">
          <Sidebar />
          <main class="min-w-0 space-y-12">
            <Hero />
            <Research />
            <Projects />
            <Freelance />
            <Stack />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}