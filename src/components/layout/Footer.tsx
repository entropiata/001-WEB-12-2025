import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-maroon-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">P</span>
                            </div>
                            <div>
                                <h3 className="text-white font-bold">Puskesmas</h3>
                                <p className="text-sm text-gray-400">Pasongsongan</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400">
                            Melayani dengan sepenuh hati untuk kesehatan masyarakat Pasongsongan
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Tautan Cepat</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/profil" className="text-sm hover:text-maroon-400 transition-colors">
                                    Profil Puskesmas
                                </Link>
                            </li>
                            <li>
                                <Link to="/pelayanan" className="text-sm hover:text-maroon-400 transition-colors">
                                    Layanan Kami
                                </Link>
                            </li>
                            <li>
                                <Link to="/artikel" className="text-sm hover:text-maroon-400 transition-colors">
                                    Artikel & Berita
                                </Link>
                            </li>
                            <li>
                                <Link to="/inovasi" className="text-sm hover:text-maroon-400 transition-colors">
                                    Inovasi
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Kontak</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-maroon-400 mt-1 flex-shrink-0" />
                                <span className="text-sm">
                                    Jl. Abubakar Siddiq, Benteng Utara, Panaongan, Kec. Pasongsongan, Kabupaten Sumenep, Jawa Timur 69457
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-maroon-400 flex-shrink-0" />
                                <span className="text-sm">085852236642</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-maroon-400 flex-shrink-0" />
                                <span className="text-sm">pkm.pasongsongan@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Jam Pelayanan</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <Clock className="w-4 h-4 text-maroon-400 mt-1 flex-shrink-0" />
                                <div className="text-sm">
                                    <p className="font-medium text-white">Senin - Jumat</p>
                                    <p className="text-gray-400">08.00 - 14.00 WIB</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <Clock className="w-4 h-4 text-maroon-400 mt-1 flex-shrink-0" />
                                <div className="text-sm">
                                    <p className="font-medium text-white">Sabtu</p>
                                    <p className="text-gray-400">08.00 - 12.00 WIB</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social Media & Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-400">
                            © {new Date().getFullYear()} Puskesmas Pasongsongan. All rights reserved.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://facebook.com/puskesmaspasongsongan"
                                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-maroon-600 transition-colors"
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a
                                href="https://instagram.com/puskesmaspasongsongan"
                                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-maroon-600 transition-colors"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a
                                href="https://api.whatsapp.com/send/?phone=6285852236642&text=Halo+Puskesmas%2C%0ASaya+ingin+menanyakan+informasi+terkait+layanan+kesehatan.%0AMohon+informasinya%2C+terima+kasih.&type=phone_number&app_absent=0"
                                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-maroon-600 transition-colors"
                                aria-label="WhatsApp"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Phone className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
