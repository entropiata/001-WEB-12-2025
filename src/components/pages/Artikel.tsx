import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Calendar, Tag, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

const API_URL = 'http://localhost:5000/api';

interface Article {
  id: number;
  title: string;
  author?: string;
  category?: string;
  slug: string;
  content: string;
  excerpt?: string;
  image: string | null;
  status: 'draft' | 'published';
  created_at: string;
  updated_at: string;
}

export function Artikel() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
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

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/articles?status=published`);
      const data = await response.json();

      if (data.success) {
        setArticles(data.data);
      } else {
        setError('Failed to load articles');
      }
    } catch (err) {
      setError('Unable to connect to server');
      console.error('Error fetching articles:', err);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to extract excerpt from content
  const getExcerpt = (content: string, maxLength: number = 150) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength).trim() + '...';
  };

  // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Helper function to create slug from title
  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  // For now, we'll show all articles (category filtering can be added later)
  const filteredArtikel = articles;

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
      <section className="bg-maroon-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl mb-4">Artikel & Berita</h1>
          <p className="text-xl text-maroon-50">
            Informasi kesehatan dan berita kegiatan Puskesmas Pasongsongan
          </p>
        </div>
      </section>

      {/* Filter Kategori */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <Tag className="w-5 h-5 text-maroon-600" />
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
                    ? 'bg-maroon-600 hover:bg-maroon-700 text-white'
                    : 'border-maroon-600 text-maroon-600 hover:bg-maroon-50'
                }
              >
                {category}
              </Button>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Menampilkan {filteredArtikel.length} artikel
          </p>
        </div>
      </section>

      {/* Artikel List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-maroon-600 animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600 mb-4">{error}</p>
              <Button
                onClick={fetchArticles}
                className="bg-maroon-600 hover:bg-maroon-700"
              >
                Coba Lagi
              </Button>
            </div>
          ) : displayedArtikel.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {displayedArtikel.map((artikel) => (
                  <Link key={artikel.id} to={`/artikel/${artikel.slug}`}>
                    <Card className="hover:shadow-lg transition-all hover:scale-[1.02] overflow-hidden cursor-pointer h-full">
                      <div className="h-48 bg-gray-200 overflow-hidden">
                        <img
                          src={artikel.image || 'https://images.unsplash.com/photo-1758691462126-2ee47c8bf9e7?w=400'}
                          alt={artikel.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1758691462126-2ee47c8bf9e7?w=400';
                          }}
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="mb-3">
                          <span className="inline-block px-3 py-1 bg-maroon-100 text-maroon-700 rounded-full text-sm">
                            {artikel.category || 'Artikel'}
                          </span>
                        </div>
                        <h3 className="text-gray-900 mb-3">{artikel.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {artikel.excerpt || getExcerpt(artikel.content)}
                        </p>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(artikel.created_at)}</span>
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
                    className="border-maroon-600 text-maroon-600 hover:bg-maroon-50"
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
                            ? 'bg-maroon-600 hover:bg-maroon-700'
                            : 'border-maroon-600 text-maroon-600 hover:bg-maroon-50'
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
                    className="border-maroon-600 text-maroon-600 hover:bg-maroon-50"
                  >
                    Selanjutnya
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">Belum ada artikel yang dipublikasikan.</p>
              <p className="text-sm text-gray-400">
                Artikel akan muncul di sini setelah dipublikasikan oleh admin.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}