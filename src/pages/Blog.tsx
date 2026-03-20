import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom"; // Pastikan menggunakan react-router-dom
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Backendless from "@/lib/backendless"; // Import konfigurasi backendless kamu
import { Loader2, Eye } from "lucide-react";

// Definisikan interface sesuai skema gambar sebelumnya
interface BlogData {
  id: number;
  tittle: string;
  author: string;
  content: string;
  image: string;
  created: number;
}

export default function DashboardBlog() {
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 1. Fungsi Fetch Data dari Backendless
  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      const queryBuilder = Backendless.DataQueryBuilder.create().setSortBy(["created DESC"]);
      const data = await Backendless.Data.of("Blog").find(queryBuilder);
      setBlogs(data as BlogData[]);
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  

  return (
    <>
        <section className="bg-amber-50">
            <div className="container px-8 py-12 mx-auto max-w-7xl md:px-12 grid grid-cols-1 gap-5">
                <div className="text-center space-y-3">
                    <h1 className="font-bold text-2xl lg:text-4xl">Blog</h1>
                    <p className="text-slate-500 text-sm lg:text-lg">Exploring the intersection of art, emotion, and the world's most rare botanical essences.</p>
                </div>
            </div>
        </section>

      <section>
        <div className="container px-8 py-12 mx-auto max-w-7xl md:px-12 grid grid-cols-1 gap-8">
          
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <Loader2 className="animate-spin text-amber-600" size={40} />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
                <Card key={blog.id} className="overflow-hidden flex flex-col">
                  <img 
                    src={blog.image} 
                    alt={blog.tittle} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                   />
                  <CardHeader>
                    <p className="text-slate-400 text-xs">
                      {new Date(blog.created).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })} 
                      <span className="mx-1">.</span> By {blog.author}
                    </p>
                    <h1 className="font-bold line-clamp-2">{blog.tittle}</h1>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    {/* Render cuplikan teks dari HTML Quill */}
                    <div 
                      className="line-clamp-3 text-xs text-slate-500"
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                  </CardContent>
                  <CardFooter className="flex justify-between items-center gap-2 border-t pt-4">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <Link to={`/blog/${blog.id}`} target="_blank">
                        <Eye size={14} className="mr-2" /> View Detail
                      </Link>
                    </Button>                    
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}

          {!isLoading && blogs.length === 0 && (
            <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed">
              <p className="text-gray-400">Belum ada artikel. Mulai menulis sekarang!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}