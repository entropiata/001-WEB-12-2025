import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/pages/Home';
import { Profil } from './components/pages/Profil';
import { Pelayanan } from './components/pages/Pelayanan';
import { PelayananDetail } from './components/pages/PelayananDetail';
import { Artikel } from './components/pages/Artikel';
import { ArtikelDetail } from './components/pages/ArtikelDetail';
import { Inovasi } from './components/pages/Inovasi';
import { InovasiDetail } from './components/pages/InovasiDetail';
import { HubungiKami } from './components/pages/HubungiKami';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/pelayanan" element={<Pelayanan />} />
            <Route path="/pelayanan/:slug" element={<PelayananDetail />} />
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/artikel/:slug" element={<ArtikelDetail />} />
            <Route path="/inovasi" element={<Inovasi />} />
            <Route path="/inovasi/:slug" element={<InovasiDetail />} />
            <Route path="/hubungi-kami" element={<HubungiKami />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}