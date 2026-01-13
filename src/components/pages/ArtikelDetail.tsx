import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import rehypeRaw from 'rehype-raw';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowLeft, Calendar, Share2, Facebook, Twitter, Loader2 } from 'lucide-react';
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
          <Loader2 className="w-12 h-12 text-maroon-600 animate-spin mx-auto mb-4" />
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
            <Button className="bg-maroon-600 hover:bg-maroon-700">
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
      <section className="bg-maroon-700 text-white py-12">
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
          <div className="flex items-center gap-4 text-maroon-50">
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
          <Card className="mb-8" style={{ borderColor: '#f9d5d5' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
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

          {/* Article Content with Markdown */}
          <Card>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none markdown-content">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw, rehypeSanitize]}
                  components={{
                    // Custom styling for headings
                    h1: ({ node, ...props }) => <h1 className="text-3xl font-bold text-maroon-700 mt-8 mb-4" {...props} />,
                    h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-maroon-600 mt-6 mb-3" {...props} />,
                    h3: ({ node, ...props }) => <h3 className="text-xl font-semibold text-maroon-600 mt-5 mb-2" {...props} />,
                    // Custom styling for paragraphs
                    p: ({ node, ...props }) => <p className="text-gray-700 leading-relaxed mb-4" {...props} />,
                    // Custom styling for lists
                    ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 space-y-2 ml-4" {...props} />,
                    ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4 space-y-2 ml-4" {...props} />,
                    li: ({ node, ...props }) => <li className="text-gray-700 leading-relaxed" {...props} />,
                    // Custom styling for emphasis
                    strong: ({ node, ...props }) => <strong className="font-semibold text-gray-900" {...props} />,
                    em: ({ node, ...props }) => <em className="italic text-gray-600" {...props} />,
                    // Custom styling for links
                    a: ({ node, ...props }) => (
                      <a
                        className="text-maroon-600 hover:text-maroon-700 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        {...props}
                      />
                    ),
                    // Custom styling for images
                    img: ({ node, ...props }) => (
                      <img
                        className="rounded-lg shadow-md my-6 w-full"
                        loading="lazy"
                        {...props}
                      />
                    ),
                    // Custom styling for blockquotes
                    blockquote: ({ node, ...props }) => (
                      <blockquote
                        className="border-l-4 border-maroon-500 pl-4 italic text-gray-600 my-4"
                        {...props}
                      />
                    ),
                    // Custom styling for code blocks
                    code: ({ node, inline, ...props }: any) =>
                      inline ? (
                        <code className="bg-gray-100 text-maroon-700 px-2 py-1 rounded text-sm" {...props} />
                      ) : (
                        <code className="block bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm my-4" {...props} />
                      ),
                  }}
                >
                  {artikel.content}
                </ReactMarkdown>
              </div>
            </CardContent>
          </Card>

          {/* Back to Articles */}
          <div className="mt-8 text-center">
            <Link to="/artikel">
              <Button
                size="lg"
                variant="outline"
                className="border-maroon-600 text-maroon-600 hover:bg-maroon-50"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                View More Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
