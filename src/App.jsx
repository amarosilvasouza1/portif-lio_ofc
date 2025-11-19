import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <main>
          <About />
          <Skills />
          <Education />
          <Projects />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
