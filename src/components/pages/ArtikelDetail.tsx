import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowLeft, Calendar, Tag, Share2, Facebook, Twitter, Loader2 } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';

const API_URL = 'http://localhost:5000/api';

interface Article {
  id: number;
  title: string;
  author: string;
  category: string;
  slug: string;
  content: string;
  excerpt: string | null;
  image: string | null;
  status: string;
  created_at: string;
  updated_at: string;
}

export function ArtikelDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [artikel, setArtikel] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (slug) {
      fetchArticle(slug);
    }
  }, [slug]);

  const fetchArticle = async (articleSlug: string) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/articles/slug/${articleSlug}`);
      const data = await response.json();

      if (data.success) {
        setArtikel(data.data);
      } else {
        setError('Article not found');
      }
    } catch (err) {
      console.error('Error fetching article:', err);
      setError('Unable to load article');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-emerald-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !artikel) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-gray-700 mb-4">
            {error || 'Article not found'}
          </h2>
          <Link to="/artikel">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Articles
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="bg-emerald-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/artikel">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 mb-6 -ml-2"
              size="sm"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Articles
            </Button>
          </Link>
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm">
              {artikel.category}
            </span>
          </div>
          <h1 className="text-4xl mb-4">{artikel.title}</h1>
          <div className="flex items-center gap-4 text-emerald-50">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(artikel.created_at)}</span>
            </div>
            <span>•</span>
            <span>{artikel.author}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          {artikel.image && (
            <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src={artikel.image}
                alt={artikel.title}
                className="w-full h-96 object-cover"
              />
            </div>
          )}

          {/* Share Buttons */}
          <Card className="mb-8 border-emerald-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-600">
                  <Share2 className="w-5 h-5" />
                  <span>Share this article:</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                    onClick={() => {
                      const url = window.location.href;
                      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
                    }}
                  >
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-sky-600 text-sky-600 hover:bg-sky-50"
                    onClick={() => {
                      const url = window.location.href;
                      const text = artikel.title;
                      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
                    }}
                  >
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Article Content */}
          <Card>
            <CardContent className="p-8 prose prose-emerald max-w-none">
              <div
                className="artikel-content"
                dangerouslySetInnerHTML={{ __html: artikel.content }}
              />
            </CardContent>
          </Card>

          {/* Back to Articles */}
          <div className="mt-8 text-center">
            <Link to="/artikel">
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                View More Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .artikel-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #059669;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .artikel-content h3 {
          font-size: 1.375rem;
          font-weight: 600;
          color: #047857;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .artikel-content p {
          color: #374151;
          line-height: 1.75;
          margin-bottom: 1rem;
        }
        .artikel-content ul {
          margin-left: 1.5rem;
          margin-bottom: 1rem;
          list-style-type: disc;
        }
        .artikel-content li {
          color: #374151;
          line-height: 1.75;
          margin-bottom: 0.5rem;
        }
        .artikel-content strong {
          font-weight: 600;
          color: #1f2937;
        }
        .artikel-content em {
          font-style: italic;
          color: #6b7280;
        }
      `}</style>
    </div>
  );
}
