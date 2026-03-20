import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom"; // Pastikan menggunakan react-router-dom
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Backendless from "@/lib/backendless"; // Import konfigurasi backendless kamu
import { Loader2, Trash2, Eye } from "lucide-react";

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
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState<BlogData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
  
    // 1. Fetch Data
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
  
    // 2. Fungsi Delete Blog (DIPERBARUI)
    const handleDelete = async (id: number) => {
      if (window.confirm("Apakah Anda yakin ingin menghapus blog ini?")) {
        try {
          // Menggunakan whereClause karena menghapus berdasarkan kolom 'id' kustom
          await Backendless.Data.of("Blog").bulkDelete(`id = ${id}`);
          
          // Update state lokal agar langsung hilang dari UI tanpa reload
          setBlogs(prev => prev.filter((blog) => blog.id !== id));
          alert("Blog berhasil dihapus");
        } catch (error: any) {
          console.error("Delete error:", error);
          alert("Gagal menghapus blog: " + error.message);
        }
      }
    };
  

  const handleLogout = async () => {
    try {
      await Backendless.UserService.logout();
      localStorage.removeItem('token');
      navigate('/login', { replace: true });
    } catch (error: any) {
      localStorage.removeItem('token');
      navigate('/login');
    }
  };

  return (
    <>
      <section className="bg-amber-50">
        <div className="container px-8 py-12 mx-auto max-w-7xl md:px-12">
          <div className="space-y-3 text-center">
            <h1 className="text-2xl font-bold lg:text-4xl">Dashboard Blog</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="container grid grid-cols-1 gap-8 px-8 py-12 mx-auto max-w-7xl md:px-12">
          <div className="flex items-center justify-between">
            <Button asChild>
              <Link to='/create-blog'>+ New Post</Link>
            </Button>
            <Button variant={"destructive"} onClick={handleLogout}>
              Log Out
            </Button>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center h-40">
              <Loader2 className="animate-spin text-amber-600" size={40} />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
                <Card key={blog.id} className="flex flex-col overflow-hidden shadow-md">
                  
                    <img 
                      src={blog.image} 
                      alt={blog.tittle} 
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                  
                  <CardHeader>
                    <p className="text-xs text-slate-400">
                      {new Date(blog.created).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })} 
                      <span className="mx-1">.</span> By {blog.author}
                    </p>
                    <h1 className="font-bold line-clamp-2">{blog.tittle}</h1>
                  </CardHeader>
                  <CardContent className="grow">
                    <div 
                      className="text-xs line-clamp-3 text-slate-500"
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                  </CardContent>
                  <CardFooter className="flex items-center justify-between gap-2 pt-4 border-t">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <Link to={`/blog/${blog.id}`} target="_blank">
                        <Eye size={14} className="mr-1" /> View
                      </Link>
                    </Button>

                    {/* Tombol Delete */}
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleDelete(blog.id)}
                    >
                      <Trash2 size={14} className="mr-1" /> Delete
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}

          {!isLoading && blogs.length === 0 && (
            <div className="py-20 text-center border-2 border-dashed bg-gray-50 rounded-xl">
              <p className="text-gray-400">Belum ada artikel. Mulai menulis sekarang!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}