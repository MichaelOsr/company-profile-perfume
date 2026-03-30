import { useParams, Link } from 'react-router'; // Pastikan menggunakan react-router-dom
import { ArrowLeft, Calendar, User, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import Backendless from '@/lib/backendless'; // Sesuaikan path init Backendless kamu
import ReactQuill from 'react-quill-new';

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
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Loader2 className="text-blue-600 animate-spin" size={40} />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50">
        <h1 className="text-2xl font-bold">Artikel tidak ditemukan</h1>
        <Link to="/blog" className="mt-4 text-blue-600 hover:underline"> Kemabli ke Daftar Blog</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 pb-20 bg-gray-50">
      {/* Container Utama untuk Responsivitas */}
      <div className="max-w-4xl pt-8 mx-auto">
        
        {/* Navigation - Rapi di Mobile/Desktop */}
        <Link 
          to="/blog" 
          className="flex items-center mb-10 text-sm text-gray-500 transition-colors hover:text-blue-600 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Daftar Artikel
        </Link>

        {/* Article Header */}
        <header className="mb-12 space-y-4"> 
          <h1 className="text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            {post.tittle}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 pb-6 text-sm text-gray-500 border-b border-gray-100">
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
        <div className="mb-16 overflow-hidden shadow-2xl rounded-3xl shadow-blue-50/50">
          <img 
            src={post.image} 
            alt={post.tittle} 
            className="object-cover w-full h-auto max-h-150"
          />
        </div>

        {/* Article Content */}
        <main className="max-w-3xl pb-20 mx-auto">
          <div className="quill-content">
            <ReactQuill
              value={post.content}
              readOnly={true}
              theme="bubble" // Menggunakan bubble karena tidak ada toolbar bawaan yang mengganggu
              modules={{ toolbar: false }} // Mematikan toolbar sepenuhnya
            />
          </div>
        </main>
      </div>
    </div>
  );
}