import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react';

export function Artikel() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const itemsPerPage = 6;

  const categories = [
    'Semua',
    'Edukasi Kesehatan',
    'Imunisasi',
    'Kegiatan',
    'Program Kesehatan',
    'Ibu & Anak',
  ];

  const allArtikel = [
    {
      slug: 'tips-menjaga-kesehatan-di-musim-hujan',
      title: 'Tips Menjaga Kesehatan di Musim Hujan',
      excerpt: 'Musim hujan sering kali membawa berbagai penyakit. Pelajari cara menjaga kesehatan Anda dan keluarga dengan tips praktis dari kami.',
      date: '28 Desember 2024',
      category: 'Edukasi Kesehatan',
      image: 'https://images.unsplash.com/photo-1758691462126-2ee47c8bf9e7?w=400',
    },
    {
      slug: 'pentingnya-imunisasi-untuk-anak',
      title: 'Pentingnya Imunisasi untuk Anak',
      excerpt: 'Imunisasi merupakan investasi kesehatan terbaik untuk anak. Kenali jenis-jenis imunisasi dan jadwal yang tepat untuk si kecil.',
      date: '25 Desember 2024',
      category: 'Imunisasi',
      image: 'https://images.unsplash.com/photo-1618426372878-9d83ce534436?w=400',
    },
    {
      slug: 'program-posyandu-lansia-bulan-desember',
      title: 'Program Posyandu Lansia Bulan Desember',
      excerpt: 'Kegiatan pemeriksaan kesehatan rutin untuk lansia telah dilaksanakan dengan sukses. Lebih dari 100 lansia mengikuti program ini.',
      date: '20 Desember 2024',
      category: 'Kegiatan',
      image: 'https://images.unsplash.com/photo-1758575514487-0390fcacc339?w=400',
    },
    {
      slug: 'cara-mencegah-stunting-pada-balita',
      title: 'Cara Mencegah Stunting pada Balita',
      excerpt: 'Stunting dapat dicegah dengan nutrisi yang tepat. Pelajari cara memberikan asupan gizi yang baik untuk tumbuh kembang optimal anak.',
      date: '18 Desember 2024',
      category: 'Ibu & Anak',
      image: 'https://images.unsplash.com/photo-1691341114517-e61d8e2e2298?w=400',
    },
    {
      slug: 'gerakan-hidup-sehat-dimulai-dari-keluarga',
      title: 'Gerakan Hidup Sehat Dimulai dari Keluarga',
      excerpt: 'Program GERMAS (Gerakan Masyarakat Hidup Sehat) mengajak setiap keluarga untuk menerapkan pola hidup sehat di rumah.',
      date: '15 Desember 2024',
      category: 'Program Kesehatan',
      image: 'https://images.unsplash.com/photo-1758691462126-2ee47c8bf9e7?w=400',
    },
    {
      slug: 'pemeriksaan-kesehatan-gratis-untuk-pelajar',
      title: 'Pemeriksaan Kesehatan Gratis untuk Pelajar',
      excerpt: 'Puskesmas Pasongsongan mengadakan pemeriksaan kesehatan gratis untuk pelajar SD dan SMP di wilayah kerja kami.',
      date: '12 Desember 2024',
      category: 'Kegiatan',
      image: 'https://images.unsplash.com/photo-1758575514487-0390fcacc339?w=400',
    },
    {
      slug: 'kenali-gejala-dbd-dan-cara-pencegahannya',
      title: 'Kenali Gejala DBD dan Cara Pencegahannya',
      excerpt: 'Demam berdarah dengue (DBD) masih menjadi ancaman. Kenali gejala dan lakukan pencegahan dengan 3M Plus.',
      date: '10 Desember 2024',
      category: 'Edukasi Kesehatan',
      image: 'https://images.unsplash.com/photo-1691341114517-e61d8e2e2298?w=400',
    },
    {
      slug: 'sosialisasi-asi-eksklusif-untuk-ibu-hamil',
      title: 'Sosialisasi ASI Eksklusif untuk Ibu Hamil',
      excerpt: 'Kegiatan edukasi tentang pentingnya ASI eksklusif 6 bulan untuk tumbuh kembang bayi yang optimal.',
      date: '8 Desember 2024',
      category: 'Ibu & Anak',
      image: 'https://images.unsplash.com/photo-1618426372878-9d83ce534436?w=400',
    },
    {
      slug: 'imunisasi-mr-untuk-anak-usia-sekolah',
      title: 'Imunisasi MR untuk Anak Usia Sekolah',
      excerpt: 'Program imunisasi Measles Rubella (MR) dilaksanakan untuk melindungi anak dari penyakit campak dan rubella.',
      date: '5 Desember 2024',
      category: 'Imunisasi',
      image: 'https://images.unsplash.com/photo-1758691462126-2ee47c8bf9e7?w=400',
    },
  ];

  const filteredArtikel =
    selectedCategory === 'Semua'
      ? allArtikel
      : allArtikel.filter((artikel) => artikel.category === selectedCategory);

  const totalPages = Math.ceil(filteredArtikel.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedArtikel = filteredArtikel.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="bg-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl mb-4">Artikel & Berita</h1>
          <p className="text-xl text-emerald-50">
            Informasi kesehatan dan berita kegiatan Puskesmas Pasongsongan
          </p>
        </div>
      </section>

      {/* Filter Kategori */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <Tag className="w-5 h-5 text-emerald-600" />
            <span className="text-gray-700">Filter Kategori:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleCategoryChange(category)}
                className={
                  selectedCategory === category
                    ? 'bg-emerald-600 hover:bg-emerald-700'
                    : 'border-emerald-600 text-emerald-600 hover:bg-emerald-50'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Artikel List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {displayedArtikel.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {displayedArtikel.map((artikel, index) => (
                  <Link key={index} to={`/artikel/${artikel.slug}`}>
                    <Card className="hover:shadow-lg transition-all hover:scale-[1.02] overflow-hidden cursor-pointer h-full">
                      <div className="h-48 bg-gray-200 overflow-hidden">
                        <img
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
                        <h3 className="text-gray-900 mb-3">{artikel.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{artikel.excerpt}</p>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{artikel.date}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Sebelumnya
                  </Button>

                  <div className="flex gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => handlePageChange(page)}
                        className={
                          currentPage === page
                            ? 'bg-emerald-600 hover:bg-emerald-700'
                            : 'border-emerald-600 text-emerald-600 hover:bg-emerald-50'
                        }
                      >
                        {page}
                      </Button>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  >
                    Selanjutnya
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">Tidak ada artikel untuk kategori ini.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}