import { useParams, Link } from 'react-router';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';

// Interface untuk tipe data blog (Opsional jika sudah ada global types)
interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  image: string;
}
export default function BlogDetail () {
    const { id } = useParams<{ id: string }>();

    // Contoh data (Dalam realita, ini didapat dari API berdasarkan ID)
    const post: BlogPost = {
        id: id || '1',
        title: "Membangun Arsitektur Frontend yang Scalable dengan React dan TypeScript",
        author: "Admin",
        date: "15 Maret 2026",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
        content: `
        <p>Menulis kode yang berjalan adalah satu hal, tetapi menulis kode yang bisa dikelola oleh tim besar selama bertahun-tahun adalah tantangan yang berbeda. Dalam artikel ini, kita akan membahas mengapa TypeScript menjadi standar industri...</p>
        <h2 class="text-2xl font-bold mt-8 mb-4">Kenapa Harus TypeScript?</h2>
        <p>TypeScript memberikan keamanan tipe data yang mencegah bug sebelum aplikasi dijalankan. Dengan fitur interface dan generics, kita bisa membuat kontrak data yang jelas antara komponen...</p>
        <blockquote class="border-l-4 border-blue-500 pl-4 italic my-6 text-gray-700">
            "Clean code always looks like it was written by someone who cares." — Robert C. Martin
        </blockquote>
        <p>Langkah selanjutnya adalah memikirkan folder structure yang modular, memisahkan antara logic (hooks) dan tampilan (components)...</p>
        `
    };

    return (
        <div className="min-h-screen bg-white">
        {/* Header / Navigation Space */}
        <div className="max-w-4xl mx-auto px-4 pt-10">
            <Link 
            to="/blog" 
            className="flex items-center text-sm text-gray-500 hover:text-blue-600 transition-colors mb-8 group"
            >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back
            </Link>

            {/* Article Header */}
            <header className="mb-10"> 
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
                    {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 mt-6 text-gray-500 text-sm">
                    <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                    </div>
                </div>
            </header>
        </div>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto px-4 mb-12">
            <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-100 md:h-125 object-cover rounded-2xl shadow-lg"
            />
        </div>

        {/* Article Content */}
        <main className="max-w-3xl mx-auto px-4 pb-20">
            <article 
            className="prose prose-lg prose-blue max-w-none text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
        </main>
        </div>
    );
}