import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Plus,
    Edit,
    Trash2,
    LogOut,
    FileText,
    Eye,
    EyeOff,
    Loader2,
    CheckCircle,
    XCircle,
    Search,
    Clock
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ArticleForm } from './ArticleForm';
import { useAdminSessionTimeout } from '../../hooks/useInactivityTimeout';


const API_URL = 'http://localhost:5000/api';

interface Article {
    id: number;
    title: string;
    content: string;
    image: string | null;
    status: 'draft' | 'published';
    created_at: string;
    updated_at: string;
}

export function AdminDashboard() {
    const navigate = useNavigate();
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingArticle, setEditingArticle] = useState<Article | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState<'all' | 'draft' | 'published'>('all');

    // Initialize session timeout (20 minutes of inactivity)
    useAdminSessionTimeout();

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const response = await fetch(`${API_URL}/articles`);
            const data = await response.json();
            if (data.success) {
                setArticles(data.data);
            }
        } catch (error) {
            console.error('Failed to fetch articles:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        navigate('/admin/login');
    };

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this article?')) return;

        try {
            const token = localStorage.getItem('adminToken');
            const response = await fetch(`${API_URL}/articles/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            const data = await response.json();
            if (data.success) {
                setArticles(articles.filter(a => a.id !== id));
            }
        } catch (error) {
            console.error('Failed to delete article:', error);
            alert('Failed to delete article');
        }
    };

    const handleEdit = (article: Article) => {
        setEditingArticle(article);
        setShowForm(true);
    };

    const handleFormClose = () => {
        setShowForm(false);
        setEditingArticle(null);
        fetchArticles();
    };

    const filteredArticles = articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.content.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'all' || article.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    if (showForm) {
        return <ArticleForm article={editingArticle} onClose={handleFormClose} />;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Article Management</h1>
                            <p className="text-sm text-gray-600 mt-1">Puskesmas Pasongsongan Admin Panel</p>
                        </div>
                        <Button
                            onClick={handleLogout}
                            variant="outline"
                            className="border-red-300 text-red-600 hover:bg-red-50"
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            Logout
                        </Button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Actions Bar */}
                <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full">
                        {/* Search */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                            />
                        </div>

                        {/* Filter */}
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value as any)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                        >
                            <option value="all">All Status</option>
                            <option value="published">Published</option>
                            <option value="draft">Draft</option>
                        </select>
                    </div>

                    <Button
                        onClick={() => setShowForm(true)}
                        className="bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        New Article
                    </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600">Total Articles</p>
                                    <p className="text-3xl font-bold text-gray-900 mt-1">{articles.length}</p>
                                </div>
                                <FileText className="w-12 h-12 text-emerald-600 opacity-20" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600">Published</p>
                                    <p className="text-3xl font-bold text-green-600 mt-1">
                                        {articles.filter(a => a.status === 'published').length}
                                    </p>
                                </div>
                                <Eye className="w-12 h-12 text-green-600 opacity-20" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600">Drafts</p>
                                    <p className="text-3xl font-bold text-orange-600 mt-1">
                                        {articles.filter(a => a.status === 'draft').length}
                                    </p>
                                </div>
                                <EyeOff className="w-12 h-12 text-orange-600 opacity-20" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Articles List */}
                {loading ? (
                    <div className="flex items-center justify-center py-12">
                        <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" />
                    </div>
                ) : filteredArticles.length === 0 ? (
                    <Card>
                        <CardContent className="p-12 text-center">
                            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
                            <p className="text-gray-600 mb-6">
                                {searchTerm || filterStatus !== 'all'
                                    ? 'Try adjusting your search or filter'
                                    : 'Get started by creating your first article'}
                            </p>
                            {!searchTerm && filterStatus === 'all' && (
                                <Button onClick={() => setShowForm(true)} className="bg-emerald-600 hover:bg-emerald-700">
                                    <Plus className="w-4 h-4 mr-2" />
                                    Create Article
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                ) : (
                    <div className="grid grid-cols-1 gap-4">
                        {filteredArticles.map((article, index) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Card className="hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            {/* Image */}
                                            {article.image && (
                                                <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                                                    <img
                                                        src={article.image}
                                                        alt={article.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            )}

                                            {/* Content */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between gap-4 mb-2">
                                                    <h3 className="text-lg font-semibold text-gray-900">{article.title}</h3>
                                                    <div className="flex items-center gap-2 flex-shrink-0">
                                                        {article.status === 'published' ? (
                                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                                <CheckCircle className="w-3 h-3 mr-1" />
                                                                Published
                                                            </span>
                                                        ) : (
                                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                                                <XCircle className="w-3 h-3 mr-1" />
                                                                Draft
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                                                    {article.content}
                                                </p>

                                                <div className="flex items-center justify-between">
                                                    <p className="text-xs text-gray-500">
                                                        Updated: {new Date(article.updated_at).toLocaleDateString()}
                                                    </p>

                                                    <div className="flex gap-2">
                                                        <Button
                                                            onClick={() => handleEdit(article)}
                                                            variant="outline"
                                                            size="sm"
                                                            className="border-emerald-300 text-emerald-600 hover:bg-emerald-50"
                                                        >
                                                            <Edit className="w-4 h-4 mr-1" />
                                                            Edit
                                                        </Button>
                                                        <Button
                                                            onClick={() => handleDelete(article.id)}
                                                            variant="outline"
                                                            size="sm"
                                                            className="border-red-300 text-red-600 hover:bg-red-50"
                                                        >
                                                            <Trash2 className="w-4 h-4 mr-1" />
                                                            Delete
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
