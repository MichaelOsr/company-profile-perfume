import { useParams, Link } from 'react-router'; // Pastikan menggunakan react-router-dom
import { ArrowLeft, Calendar, User, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import Backendless from '@/lib/backendless'; // Sesuaikan path init Backendless kamu

// Pastikan interface sesuai dengan skema
interface BlogPost {
  id: number | string;
  tittle: string; 
  author: string;
  created: number;
  content: string;
  image: string;
}

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPostDetail = async () => {
      setIsLoading(true);
      try {
        // Mencari data berdasarkan kolom 'id' yang kustom
        const queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause(`id = ${id}`);
        const result = await Backendless.Data.of("Blog").find(queryBuilder);

        if (result && result.length > 0) {
          setPost(result[0] as BlogPost);
        }
      } catch (error) {
        console.error("Gagal mengambil detail blog:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchPostDetail();
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="animate-spin text-blue-600" size={40} />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <h1 className="text-2xl font-bold">Artikel tidak ditemukan</h1>
        <Link to="/blog" className="text-blue-600 hover:underline mt-4"> Kemabli ke Daftar Blog</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 pb-20">
      {/* Container Utama untuk Responsivitas */}
      <div className="max-w-4xl mx-auto pt-8">
        
        {/* Navigation - Rapi di Mobile/Desktop */}
        <Link 
          to="/blog" 
          className="flex items-center text-sm text-gray-500 hover:text-blue-600 transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Daftar Artikel
        </Link>

        {/* Article Header */}
        <header className="mb-12 space-y-4"> 
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            {post.tittle}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm border-b border-gray-100 pb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(post.created).toLocaleDateString('id-ID', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>
        </header>

        {/* Featured Image - Responsif dan Rapi */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl shadow-blue-50/50">
          <img 
            src={post.image} 
            alt={post.tittle} 
            className="w-full h-auto max-h-150 object-cover"
          />
        </div>

        {/* Article Content */}
        <main className="max-w-3xl mx-auto px-4 pb-20 mt-10">
        <article 
            className="
            prose prose-blue lg:prose-xl 
            max-w-none 
            text-gray-800 
            leading-relaxed 
            break-words 
            whitespace-pre-wrap
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
        />
        </main>
      </div>
    </div>
  );
}