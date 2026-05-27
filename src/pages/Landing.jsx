import { Background } from "../components/background";
import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { Features } from "../components/features";
import { Tools } from "../components/tools";
import { Reviews } from "../components/reviews";
import { Pricing } from "../components/pricing";
import { CTA, Footer } from "../components/cta-footer";
import { ThemeProvider } from "../components/theme";

export default function Landing() {
  return (
    <ThemeProvider>
      <Background />
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Tools />
        <Reviews />
        <Pricing />
        <CTA />
      </main>

      <Footer />
    </ThemeProvider>
  );
}
