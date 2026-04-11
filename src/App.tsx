import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Trust from './components/Trust';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary-blue selection:text-white font-sans antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Trust />
        <Testimonials />
        <div id="final-cta">
          <FinalCTA />
        </div>
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
