import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const location = useLocation();

    const profilSubmenu = [
        { name: 'Profil Puskesmas', href: '/profil#profil' },
        { name: 'Sambutan Kepala', href: '/profil#sambutan' },
        { name: 'Visi & Misi', href: '/profil#visi-misi' },
        { name: 'Motto', href: '/profil#motto' },
        { name: 'Struktur Organisasi', href: '/profil#struktur' },
        { name: 'Penghargaan', href: '/profil#penghargaan' },
    ];

    const pelayananSubmenu = [
        { name: 'Klaster 1 – Manajemen', href: '/pelayanan/klaster-1' },
        { name: 'Klaster 2 – Ibu dan Anak', href: '/pelayanan/klaster-2' },
        { name: 'Klaster 3 – Usia Dewasa dan Lansia', href: '/pelayanan/klaster-3' },
        { name: 'Klaster 4 – Penanggulangan Penyakit Menular', href: '/pelayanan/klaster-4' },
        { name: 'Lintas Klaster', href: '/pelayanan/lintas-klaster' },
    ];

    const navigation = [
        { name: 'Beranda', href: '/' },
        { name: 'Profil', href: '/profil', submenu: profilSubmenu },
        { name: 'Pelayanan', href: '/pelayanan', submenu: pelayananSubmenu },
        { name: 'Artikel', href: '/artikel' },
        { name: 'Inovasi', href: '/inovasi' },
        { name: 'Hubungi Kami', href: '/hubungi-kami' },
    ];

    const isActive = (path: string) => {
        return location.pathname === path || location.pathname.startsWith(path + '/');
    };

    const handleMouseEnter = (name: string) => {
        setOpenDropdown(name);
    };

    const handleMouseLeave = () => {
        setOpenDropdown(null);
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-maroon-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">P</span>
                                </div>
                                <div className="hidden sm:block">
                                    <h1 className="text-lg font-bold text-maroon-700">Puskesmas</h1>
                                    <p className="text-xs text-gray-600">Pasongsongan</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => item.submenu && handleMouseEnter(item.name)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link
                                    to={item.href}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${isActive(item.href)
                                        ? 'bg-maroon-100 text-maroon-700'
                                        : 'text-gray-700 hover:bg-maroon-50 hover:text-maroon-600'
                                        }`}
                                >
                                    {item.name}
                                    {item.submenu && (
                                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                                    )}
                                </Link>

                                {/* Dropdown Menu */}
                                {item.submenu && (
                                    <AnimatePresence>
                                        {openDropdown === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-2"
                                            >
                                                {item.submenu.map((subItem, subIndex) => (
                                                    <motion.div
                                                        key={subItem.name}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: subIndex * 0.05 }}
                                                    >
                                                        <Link
                                                            to={subItem.href}
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-maroon-50 hover:text-maroon-600 transition-colors"
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6 text-gray-700" />
                            ) : (
                                <Menu className="h-6 w-6 text-gray-700" />
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden border-t border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                            <div key={item.name}>
                                <Link
                                    to={item.href}
                                    onClick={() => !item.submenu && setIsOpen(false)}
                                    className={`flex items-center justify-between px-3 py-2 rounded-md text-base font-medium ${isActive(item.href)
                                        ? 'bg-maroon-100 text-maroon-700'
                                        : 'text-gray-700 hover:bg-maroon-50 hover:text-maroon-600'
                                        }`}
                                >
                                    {item.name}
                                    {item.submenu && (
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''
                                                }`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenDropdown(openDropdown === item.name ? null : item.name);
                                            }}
                                        />
                                    )}
                                </Link>

                                {/* Mobile Submenu */}
                                {item.submenu && openDropdown === item.name && (
                                    <div className="pl-4 mt-1 space-y-1">
                                        {item.submenu.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                to={subItem.href}
                                                onClick={() => setIsOpen(false)}
                                                className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-maroon-50 hover:text-maroon-600"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
