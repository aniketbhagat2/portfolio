import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import About from './components/About';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ScrollProgress from './components/ScrollProgress';
import Skills from './components/Skills';
import Stats from './components/Stats';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#09090b] text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!loading && (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <ScrollProgress />
            <Navbar />
            <main>
              <Hero />
              <Stats />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Certifications />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
