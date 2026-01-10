import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Save, Loader2, Image as ImageIcon, AlertCircle, Upload } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

const API_URL = 'http://localhost:5000/api';

interface Article {
    id: number;
    title: string;
    author?: string;
    category?: string;
    slug?: string;
    content: string;
    excerpt?: string;
    image: string | null;
    status: 'draft' | 'published';
}

interface ArticleFormProps {
    article: Article | null;
    onClose: () => void;
}

export function ArticleForm({ article, onClose }: ArticleFormProps) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [slug, setSlug] = useState('');
    const [content, setContent] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [image, setImage] = useState('');
    const [status, setStatus] = useState<'draft' | 'published'>('draft');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    // Image upload states
    const [imageMethod, setImageMethod] = useState<'url' | 'upload'>('url');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploadProgress, setUploadProgress] = useState(false);
    const [previewUrl, setPreviewUrl] = useState('');

    // Auto-generate slug from title
    const generateSlug = (text: string) => {
        return text
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .replace(/(^-|-$)/g, '');
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        // Auto-generate slug only if creating new article
        if (!article) {
            setSlug(generateSlug(newTitle));
        }
    };

    useEffect(() => {
        if (article) {
            setTitle(article.title);
            setAuthor(article.author || '');
            setCategory(article.category || '');
            setSlug(article.slug || '');
            setContent(article.content);
            setExcerpt(article.excerpt || '');
            setImage(article.image || '');
            setPreviewUrl(article.image || '');
            setStatus(article.status);
        }
    }, [article]);

    // Handle file selection
    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            // Create preview URL
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle file upload to server
    const handleFileUpload = async (file: File): Promise<string> => {
        const formData = new FormData();
        formData.append('image', file);

        const token = localStorage.getItem('adminToken');
        const response = await fetch(`${API_URL}/articles/upload`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: formData,
        });

        const data = await response.json();
        if (!data.success) {
            throw new Error(data.message || 'Failed to upload image');
        }

        return data.data.url;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            let finalImageUrl = image;

            // If using upload method and file is selected, upload it first
            if (imageMethod === 'upload' && selectedFile) {
                setUploadProgress(true);
                finalImageUrl = await handleFileUpload(selectedFile);
                setUploadProgress(false);
            }

            const token = localStorage.getItem('adminToken');
            const url = article
                ? `${API_URL}/articles/${article.id}`
                : `${API_URL}/articles`;
            const method = article ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    title,
                    author: author || 'Tim Puskesmas Pasongsongan',
                    category: category || 'Artikel',
                    slug: slug || generateSlug(title),
                    content,
                    excerpt: excerpt || null,
                    image: finalImageUrl || null,
                    status,
                }),
            });

            const data = await response.json();

            if (data.success) {
                setSuccess(true);
                setTimeout(() => {
                    onClose();
                }, 1500);
            } else {
                setError(data.message || 'Failed to save article');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unable to connect to server');
        } finally {
            setLoading(false);
            setUploadProgress(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Card>
                        <CardContent className="p-8">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {article ? 'Edit Article' : 'Create New Article'}
                                </h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                    disabled={loading}
                                >
                                    <X className="w-5 h-5 text-gray-500" />
                                </button>
                            </div>

                            {/* Success Message */}
                            {success && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                                >
                                    <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-green-800 font-medium">
                                        Article {article ? 'updated' : 'created'} successfully!
                                    </p>
                                </motion.div>
                            )}

                            {/* Error Message */}
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                                >
                                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-red-800">{error}</p>
                                </motion.div>
                            )}

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Title */}
                                <div>
                                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                                        Title <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="title"
                                        type="text"
                                        value={title}
                                        onChange={handleTitleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                                        placeholder="Enter article title"
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                {/* Author */}
                                <div>
                                    <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                                        Author
                                    </label>
                                    <input
                                        id="author"
                                        type="text"
                                        value={author}
                                        onChange={(e) => setAuthor(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                                        placeholder="Tim Puskesmas Pasongsongan"
                                        disabled={loading}
                                    />
                                </div>

                                {/* Category */}
                                <div>
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                                        Category
                                    </label>
                                    <select
                                        id="category"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                                        disabled={loading}
                                    >
                                        <option value="">Select category</option>
                                        <option value="Artikel">Artikel</option>
                                        <option value="Edukasi Kesehatan">Edukasi Kesehatan</option>
                                        <option value="Imunisasi">Imunisasi</option>
                                        <option value="Kegiatan">Kegiatan</option>
                                        <option value="Program Kesehatan">Program Kesehatan</option>
                                        <option value="Ibu & Anak">Ibu & Anak</option>
                                    </select>
                                </div>

                                {/* Slug */}
                                <div>
                                    <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-2">
                                        URL Slug
                                    </label>
                                    <input
                                        id="slug"
                                        type="text"
                                        value={slug}
                                        onChange={(e) => setSlug(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all font-mono text-sm"
                                        placeholder="article-url-slug"
                                        disabled={loading}
                                    />
                                    <p className="mt-2 text-sm text-gray-500">
                                        Auto-generated from title. You can edit if needed.
                                    </p>
                                </div>

                                {/* Excerpt */}
                                <div>
                                    <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                                        Excerpt
                                    </label>
                                    <textarea
                                        id="excerpt"
                                        value={excerpt}
                                        onChange={(e) => setExcerpt(e.target.value)}
                                        rows={3}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
                                        placeholder="Short summary for article listing..."
                                        disabled={loading}
                                    />
                                    <p className="mt-2 text-sm text-gray-500">
                                        Optional. Will be auto-generated from content if left empty.
                                    </p>
                                </div>

                                {/* Content */}
                                <div>
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                                        Content <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="content"
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        rows={16}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none font-mono text-sm"
                                        placeholder="Write your article content using Markdown...&#10;&#10;## Section Title&#10;&#10;This is a paragraph with **bold** and *italic* text.&#10;&#10;- List item 1&#10;- List item 2"
                                        required
                                        disabled={loading}
                                    />
                                    <div className="mt-2 flex items-start justify-between gap-4">
                                        <div className="text-sm text-gray-500">
                                            <p className="font-medium mb-1">✨ Markdown Formatting Supported:</p>
                                            <p className="text-xs">
                                                <code className="bg-gray-100 px-1 rounded">## Heading</code>
                                                {' • '}
                                                <code className="bg-gray-100 px-1 rounded">**bold**</code>
                                                {' • '}
                                                <code className="bg-gray-100 px-1 rounded">*italic*</code>
                                                {' • '}
                                                <code className="bg-gray-100 px-1 rounded">- list</code>
                                                {' • '}
                                                <code className="bg-gray-100 px-1 rounded">[link](url)</code>
                                                {' • '}
                                                <code className="bg-gray-100 px-1 rounded">![image](url)</code>
                                            </p>
                                            <p className="text-xs mt-1">
                                                See <span className="text-emerald-600 font-medium">MARKDOWN_GUIDE.md</span> for full documentation
                                            </p>
                                        </div>
                                        <p className="text-sm text-gray-500 whitespace-nowrap">
                                            {content.length} characters
                                        </p>
                                    </div>
                                </div>

                                {/* Image Input - Tabbed Interface */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        Article Image
                                    </label>

                                    {/* Tab Switcher */}
                                    <div className="flex gap-2 mb-4">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setImageMethod('url');
                                                setSelectedFile(null);
                                                setPreviewUrl(image);
                                            }}
                                            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${imageMethod === 'url'
                                                    ? 'bg-emerald-600 text-white shadow-md'
                                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                }`}
                                            disabled={loading}
                                        >
                                            <ImageIcon className="w-4 h-4 inline-block mr-2" />
                                            Image URL
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setImageMethod('upload');
                                                setImage('');
                                            }}
                                            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${imageMethod === 'upload'
                                                    ? 'bg-emerald-600 text-white shadow-md'
                                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                }`}
                                            disabled={loading}
                                        >
                                            <Upload className="w-4 h-4 inline-block mr-2" />
                                            Upload File
                                        </button>
                                    </div>

                                    {/* URL Input */}
                                    {imageMethod === 'url' && (
                                        <div>
                                            <div className="relative">
                                                <ImageIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    id="image"
                                                    type="url"
                                                    value={image}
                                                    onChange={(e) => {
                                                        setImage(e.target.value);
                                                        setPreviewUrl(e.target.value);
                                                    }}
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                                                    placeholder="https://example.com/image.jpg"
                                                    disabled={loading}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {/* File Upload */}
                                    {imageMethod === 'upload' && (
                                        <div>
                                            <label
                                                htmlFor="file-upload"
                                                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-emerald-500 hover:bg-emerald-50 transition-all"
                                            >
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                                                    <p className="text-sm text-gray-600 font-medium">
                                                        {selectedFile ? selectedFile.name : 'Click to upload or drag and drop'}
                                                    </p>
                                                    <p className="text-xs text-gray-500 mt-1">
                                                        PNG, JPG, GIF, WebP (max 5MB)
                                                    </p>
                                                </div>
                                                <input
                                                    id="file-upload"
                                                    type="file"
                                                    className="hidden"
                                                    accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                                                    onChange={handleFileSelect}
                                                    disabled={loading}
                                                />
                                            </label>
                                            {uploadProgress && (
                                                <div className="mt-2 flex items-center gap-2 text-sm text-emerald-600">
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                    Uploading image...
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Image Preview */}
                                    {previewUrl && (
                                        <div className="mt-3">
                                            <p className="text-sm text-gray-600 mb-2">Preview:</p>
                                            <img
                                                src={previewUrl}
                                                alt="Preview"
                                                className="w-full max-w-md h-48 object-cover rounded-lg border border-gray-200"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="200"%3E%3Crect fill="%23f3f4f6" width="400" height="200"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="14" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EImage not found%3C/text%3E%3C/svg%3E';
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Status */}
                                <div>
                                    <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                                        Status <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="status"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value as 'draft' | 'published')}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                                        disabled={loading}
                                    >
                                        <option value="draft">Draft</option>
                                        <option value="published">Published</option>
                                    </select>
                                    <p className="mt-2 text-sm text-gray-500">
                                        {status === 'published'
                                            ? 'This article will be visible to all users'
                                            : 'This article will only be visible to admins'}
                                    </p>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-3 pt-4 border-t border-gray-200">
                                    <Button
                                        type="button"
                                        onClick={onClose}
                                        variant="outline"
                                        className="flex-1"
                                        disabled={loading}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        type="submit"
                                        className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                Saving...
                                            </>
                                        ) : (
                                            <>
                                                <Save className="w-4 h-4 mr-2" />
                                                {article ? 'Update Article' : 'Create Article'}
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
