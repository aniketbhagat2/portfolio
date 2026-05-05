import About from './components/About';
import AnimatedBackground from './components/AnimatedBackground';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import PatentAchievement from './components/PatentAchievement';
import Projects from './components/Projects';
import ScrollProgress from './components/ScrollProgress';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <LoadingScreen />
      <AnimatedBackground />
      <ScrollProgress />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <PatentAchievement />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
