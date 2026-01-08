import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { 
  Stethoscope, 
  Baby, 
  Smile, 
  FlaskConical, 
  Syringe,
  Clock,
  Calendar,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Home() {
  const layananUtama = [
    {
      icon: Stethoscope,
      title: 'Poli Umum',
      description: 'Pelayanan kesehatan umum untuk berbagai keluhan'
    },
    {
      icon: Baby,
      title: 'Poli KIA',
      description: 'Kesehatan Ibu dan Anak, termasuk KB'
    },
    {
      icon: Smile,
      title: 'Poli Gigi',
      description: 'Perawatan dan konsultasi kesehatan gigi'
    },
    {
      icon: FlaskConical,
      title: 'Laboratorium',
      description: 'Pemeriksaan laboratorium lengkap'
    },
    {
      icon: Syringe,
      title: 'Imunisasi',
      description: 'Program imunisasi lengkap untuk segala usia'
    }
  ];

  const inovasiList = [
    'SIMPUS Pasongsongan',
    'Antrian Online',
    'Edukasi Kesehatan Digital',
    'Monitoring Ibu & Anak'
  ];

  const artikelTerbaru = [
    {
      slug: 'tips-menjaga-kesehatan-di-musim-hujan',
      title: 'Tips Menjaga Kesehatan di Musim Hujan',
      date: '28 Desember 2024',
      category: 'Edukasi Kesehatan',
      image: 'https://images.unsplash.com/photo-1758691462126-2ee47c8bf9e7?w=400'
    },
    {
      slug: 'pentingnya-imunisasi-untuk-anak',
      title: 'Pentingnya Imunisasi untuk Anak',
      date: '25 Desember 2024',
      category: 'Imunisasi',
      image: 'https://images.unsplash.com/photo-1618426372878-9d83ce534436?w=400'
    },
    {
      slug: 'program-posyandu-lansia-bulan-desember',
      title: 'Program Posyandu Lansia Bulan Desember',
      date: '20 Desember 2024',
      category: 'Kegiatan',
      image: 'https://images.unsplash.com/photo-1758575514487-0390fcacc339?w=400'
    }
  ];

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
            <h1 className="text-4xl md:text-5xl mb-4">
              Melayani dengan Sepenuh Hati untuk Kesehatan Masyarakat Pasongsongan
            </h1>
            <p className="text-xl mb-8 text-emerald-50">
              Memberikan pelayanan kesehatan yang berkualitas, terjangkau, dan mudah diakses oleh seluruh masyarakat
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/pelayanan">
                <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
                  Lihat Pelayanan
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/hubungi-kami">
                <Button 
                  size="lg" 
                  className="bg-emerald-800 text-white hover:bg-emerald-900 border-2 border-white"
                >
                  Hubungi Kami
                </Button>
              </Link>
            </div>
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
                  <div key={index} className="px-3">
                    <Card className="hover:shadow-lg transition-shadow border-emerald-100">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-emerald-600" />
                        </div>
                        <h3 className="mb-2 text-gray-900">{layanan.title}</h3>
                        <p className="text-sm text-gray-600">{layanan.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>

      {/* Jam Pelayanan */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto border-emerald-200">
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
              <Card key={index} className="hover:shadow-lg transition-shadow bg-gradient-to-br from-emerald-50 to-white border-emerald-100">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">+</span>
                  </div>
                  <h3 className="text-gray-900">{inovasi}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/inovasi">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
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
                    <Card className="hover:shadow-lg transition-all hover:scale-[1.02] h-full">
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

          <div className="text-center mt-8">
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