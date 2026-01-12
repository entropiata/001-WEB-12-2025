import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Stethoscope,
  Baby,
  Users,
  Clipboard,
  Clock,
  Calendar,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Lightbulb,
  Heart,
  Shield,
  Home as HomeIcon
} from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { fadeInUp, staggerContainer, cardScrollAnimation, hoverLift } from '../../utils/animations';
import { InteractiveStatistics } from '../common/InteractiveStatistics';

// Particle Background Component for Ber-Iman
function ParticleBackgroundMotto() {
  // Generate random particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeOut"
      }}
      className="relative inline-block"
    >
      {/* Particle Container */}
      <div className="absolute inset-0 -m-20 overflow-visible pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-emerald-400/30"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        {/* Glowing background */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-emerald-500/20 to-emerald-400/20 blur-2xl rounded-3xl" />

        {/* Content Box */}
        <div className="relative bg-gradient-to-br from-white via-emerald-50/50 to-white rounded-2xl px-12 py-6 shadow-2xl border-2 border-emerald-300/50 backdrop-blur-sm">
          {/* Animated gradient text */}
          <motion.p
            className="text-5xl md:text-6xl font-bold"
            style={{
              background: "linear-gradient(135deg, #059669, #10b981, #34d399, #10b981, #059669)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            "Ber-Iman"
          </motion.p>

          {/* Corner sparkles */}
          <motion.div
            className="absolute -top-2 -right-2 w-6 h-6"
            animate={{
              rotate: 360,
              scale: [1, 1.3, 1]
            }}
            transition={{
              rotate: { duration: 4, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Sparkles className="w-6 h-6 text-emerald-500" />
          </motion.div>
          <motion.div
            className="absolute -bottom-2 -left-2 w-6 h-6"
            animate={{
              rotate: -360,
              scale: [1, 1.3, 1]
            }}
            transition={{
              rotate: { duration: 4, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
          >
            <Sparkles className="w-6 h-6 text-emerald-500" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}


export function Home() {
  const layananUtama = [
    {
      id: "klaster-1",
      icon: Clipboard,
      title: 'Klaster 1 – Manajemen',
      description: 'Manajemen dan administrasi Puskesmas'
    },
    {
      id: "klaster-2",
      icon: Baby,
      title: 'Klaster 2 – Ibu dan Anak',
      description: 'Pelayanan kesehatan ibu hamil, bersalin, nifas, dan anak'
    },
    {
      id: "klaster-3",
      icon: Users,
      title: 'Klaster 3 – Usia Dewasa dan Lansia',
      description: 'Pelayanan kesehatan usia dewasa dan lanjut usia'
    },
    {
      id: "klaster-4",
      icon: Heart,
      title: 'Klaster 4 – Penanggulangan Penyakit Menular',
      description: 'Pencegahan dan pengendalian penyakit menular'
    },
    {
      id: "lintas-klaster",
      icon: Stethoscope,
      title: 'Lintas Klaster',
      description: 'Pelayanan pendukung lintas klaster'
    }
  ];

  const inovasiList = [
    'SIMPUS Pasongsongan',
    'Antrian Online',
    'Edukasi Kesehatan Digital',
    'Monitoring Ibu & Anak'
  ];

  const mottoList = [
    {
      icon: Sparkles,
      title: 'BERSIH',
      description: 'Kami selalu berupaya memberikan pelayanan yang terbaik dengan meningkatkan Kebersihan untuk menciptakan kenyamanan Pengunjung yang berobat di Puskesmas Pasongsongan.'
    },
    {
      icon: Lightbulb,
      title: 'INOVATIF',
      description: 'Kami selalu berupaya memberikan pelayanan yang terbaik melalui kerja Tim untuk selalu meningkatkan kreatifitas dalam mencari Teknik pendekatan yang lebih baik untuk mencapai tujuan dan indikator Puskesmas.'
    },
    {
      icon: Heart,
      title: 'MANUSIAWI',
      description: 'Kami senantiasa memperlakukan Klien, Pasien dan seluruh Karyawan secara manusiawi, menghormati dan menghargai hak azasi, martabat dan kewajiban.'
    },
    {
      icon: Shield,
      title: 'AMANAH',
      description: 'Kami sebagai pemberi Layanan selalu bersikap Amanah yang dapat dipercaya baik dalam menjalankan tugas dengan selalu mengutamakan kepercayaan siap memberikan pelayanan dan menginformasikan, informasi yang akurat disesuaikan dengan kebutuhan masyarakat.'
    },
    {
      icon: HomeIcon,
      title: 'NYAMAN',
      description: 'Kami senantiasa memberikan kenyamanan mendengar, merespon dengan cepat dan mengharapkan keterlibatan masyarakat dalam meningkatkan pelayanan dengan tujuan semua pelayanan memuaskan.'
    }
  ];

  const [artikelTerbaru, setArtikelTerbaru] = useState<any[]>([]);

  useEffect(() => {
    // Fetch latest published articles
    fetch('http://localhost:5000/api/articles?status=published')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          // Get only the 3 most recent articles
          const latest = data.data.slice(0, 3).map((article: any) => ({
            slug: article.slug,
            title: article.title,
            date: new Date(article.created_at).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            }),
            category: article.category || 'Artikel',
            image: article.image || 'https://images.unsplash.com/photo-1758691462126-2ee47c8bf9e7?w=400'
          }));
          setArtikelTerbaru(latest);
        }
      })
      .catch(err => {
        console.error('Failed to fetch articles:', err);
        // Fallback to empty array if fetch fails
        setArtikelTerbaru([]);
      });
  }, []);

  // Custom Arrow Components
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
    );
  };

  // Slider settings for Layanan
  const layananSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // Slider settings for Artikel
  const artikelSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div>
      <style>{`
        .slick-dots {
          bottom: -40px;
        }
        .slick-dots li button:before {
          font-size: 10px;
          color: #10b981;
          opacity: 0.3;
        }
        .slick-dots li.slick-active button:before {
          color: #059669;
          opacity: 1;
        }
        .slick-slide > div {
          padding: 0 4px;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-emerald-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758691462126-2ee47c8bf9e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY2xpbmljJTIwZG9jdG9yJTIwcGF0aWVudHxlbnwxfHx8fDE3NjcxOTIyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Puskesmas Pasongsongan"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl mb-4"
            >
              Melayani dengan Sepenuh Hati untuk Kesehatan Masyarakat Pasongsongan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl mb-8 text-emerald-50"
            >
              Memberikan pelayanan kesehatan yang berkualitas, terjangkau, dan mudah diakses oleh seluruh masyarakat
            </motion.p>
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="flex flex-wrap gap-4"
            >
              <motion.div variants={fadeInUp} transition={{ delay: 0.4 }}>
                <Link to="/pelayanan">
                  <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
                    Lihat Pelayanan
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div variants={fadeInUp} transition={{ delay: 0.5 }}>
                <Link to="/hubungi-kami">
                  <Button
                    size="lg"
                    className="bg-emerald-800 text-white hover:bg-emerald-900 border-2 border-white"
                  >
                    Hubungi Kami
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Layanan Utama */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-emerald-700 mb-3">Layanan Unggulan Kami</h2>
            <p className="text-gray-600">
              Berbagai layanan kesehatan terpadu untuk keluarga Indonesia
            </p>
          </div>

          <div className="relative px-12">
            <Slider {...layananSettings}>
              {layananUtama.map((layanan, index) => {
                const Icon = layanan.icon;
                return (
                  <motion.div
                    key={index}
                    className="px-3"
                    {...cardScrollAnimation}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link to={`/pelayanan/${layanan.id}`}>
                      <motion.div {...hoverLift}>
                        <Card className="hover:shadow-lg transition-shadow h-full cursor-pointer" style={{ borderColor: '#A7F3D0' }}>
                          <CardContent className="p-6 text-center">
                            <motion.div
                              className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Icon className="w-8 h-8 text-emerald-600" />
                            </motion.div>
                            <h3 className="mb-2 text-gray-900">{layanan.title}</h3>
                            <p className="text-sm text-gray-600">{layanan.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>

      {/* Jam Pelayanan */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto" style={{ borderColor: '#A7F3D0' }}>
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-emerald-600" />
                <h2 className="text-2xl text-emerald-700">Jam Pelayanan</h2>
              </div>
              <div className="space-y-4 text-center">
                <div className="flex items-center justify-between max-w-md mx-auto">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">Senin - Jumat</span>
                  </div>
                  <span className="text-gray-900">08.00 - 14.00 WIB</span>
                </div>
                <div className="flex items-center justify-between max-w-md mx-auto">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">Sabtu</span>
                  </div>
                  <span className="text-gray-900">08.00 - 12.00 WIB</span>
                </div>
                <div className="pt-4 border-t border-emerald-200">
                  <p className="text-sm text-gray-600">
                    Untuk layanan darurat 24 jam, hubungi nomor darurat kami
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-3">Melayani dengan Dedikasi</h2>
            <p className="text-emerald-50 text-lg">
              Angka-angka yang menunjukkan komitmen kami untuk kesehatan masyarakat
            </p>
          </motion.div>

          <InteractiveStatistics />
        </div>
      </section>

      {/* Motto Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl text-emerald-700 mb-8"
            >
              Motto Pelayanan Kami
            </motion.h2>

            {/* Particle Background Ber-Iman */}
            <ParticleBackgroundMotto />

            {/* Animated acronym breakdown */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-700 font-semibold mb-3 max-w-4xl mx-auto mt-12"
            >
              <span className="text-emerald-700">Ber</span>sih, {" "}
              <span className="text-emerald-700">I</span>novatif, {" "}
              <span className="text-emerald-700">M</span>anusiawi, {" "}
              <span className="text-emerald-700">A</span>manah dan {" "}
              <span className="text-emerald-700">N</span>yaman
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-600 max-w-3xl mx-auto italic"
            >
              Kebijakan manajemen penyelenggaraan pelayanan kesehatan di Puskesmas Pasongsongan
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mottoList.map((motto, index) => {
              const Icon = motto.icon;
              return (
                <motion.div
                  key={index}
                  {...cardScrollAnimation}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div {...hoverLift}>
                    <Card className="hover:shadow-xl transition-all h-full bg-white" style={{ borderColor: '#A7F3D0' }}>
                      <CardContent className="p-6">
                        <motion.div
                          className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-emerald-700 mb-3">{motto.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{motto.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inovasi Unggulan */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-emerald-700 mb-3">Inovasi Puskesmas</h2>
            <p className="text-gray-600">
              Berbagai inovasi untuk meningkatkan kualitas pelayanan kesehatan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inovasiList.map((inovasi, index) => (
              <motion.div
                key={index}
                {...cardScrollAnimation}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div {...hoverLift}>
                  <Card className="hover:shadow-lg transition-shadow bg-gradient-to-br from-emerald-50 to-white h-full" style={{ borderColor: '#A7F3D0' }}>
                    <CardContent className="p-6 text-center">
                      <motion.div
                        className="w-20 h-20 bg-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4"
                        whileHover={{ rotate: 90, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-white text-2xl">+</span>
                      </motion.div>
                      <h3 className="text-gray-900">{inovasi}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/inovasi">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Lihat Semua Inovasi
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Artikel Terbaru */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-emerald-700 mb-3">Artikel & Berita Terbaru</h2>
            <p className="text-gray-600">
              Informasi kesehatan dan kegiatan puskesmas
            </p>
          </div>

          <div className="relative px-12">
            <Slider {...artikelSettings}>
              {artikelTerbaru.map((artikel, index) => (
                <div key={index} className="px-3">
                  <Link to={`/artikel/${artikel.slug}`}>
                    <Card className="hover:shadow-lg transition-all hover:scale-[1.02] h-full" style={{ borderColor: '#A7F3D0' }}>
                      <div className="h-48 bg-gray-200 overflow-hidden">
                        <ImageWithFallback
                          src={artikel.image}
                          alt={artikel.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="mb-3">
                          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                            {artikel.category}
                          </span>
                        </div>
                        <h3 className="mb-2 text-gray-900">{artikel.title}</h3>
                        <p className="text-sm text-gray-500 mb-4">{artikel.date}</p>
                        <span className="text-emerald-600 hover:text-emerald-700 text-sm inline-flex items-center gap-1">
                          Baca Selengkapnya
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>

          <div className="text-center mt-16">
            <Link to="/artikel">
              <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                Lihat Semua Artikel
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}