import React from 'react';
import { Header } from './components/Header';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
export function App() {
  return <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>;
}