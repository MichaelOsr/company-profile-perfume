import React, { useState, useRef, useEffect } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import Backendless from '../lib/backendless';
import { Link, useNavigate, useParams } from 'react-router';
import { Save, Image as ImageIcon, User, Type, Upload, X } from 'lucide-react';

const CreateBlog: React.FC = () => {

  interface BlogData {
    id: number;
    tittle: string;
    author: string;
    content: string;
    image: string;
    created: number;
    objectId: number;
  }
  
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { id } = useParams(); // Ambil ID jika sedang mode edit
  const isEditMode = !!id;
  
  const [isLoading, setIsLoading] = useState(false);
  const [tittle, setTittle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  
  // State untuk mengelola file gambar
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Handle saat user memilih file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // Untuk menampilkan preview lokal sebelum upload
    }
  };

  //Ambil data lama jika dalam mode edit
  useEffect(() => {
    if (isEditMode) {
      const fetchBlogDetail = async () => {
        try {
          const data:BlogData = await Backendless.Data.of("Blog").findById(id);
          setTittle(data.tittle);
          setAuthor(data.author);
          setContent(data.content);
          setPreviewUrl(data.image); // Tampilkan gambar yang sudah ada
        } catch (error) {
          console.error("Gagal mengambil detail blog:", error);
        }
      };
      fetchBlogDetail();
    }
  }, [id, isEditMode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let uploadedImageUrl = previewUrl;

      // TAHAP 1: Upload hanya jika user memilih file baru
      if (selectedFile) {
        const uploadResult = await Backendless.Files.upload(selectedFile, "blog-images", true);
        uploadedImageUrl = uploadResult.fileURL;
      }

      // TAHAP 2: Save atau Update
      const payload: any = {
        tittle,
        author,
        content,
        image: uploadedImageUrl
      };

      if (isEditMode) {
        payload.objectId = id; // Tambahkan objectId untuk menandakan update
        await Backendless.Data.of("Blog").save(payload);
        alert("Blog berhasil diperbarui!");
      } else {
        await Backendless.Data.of("Blog").save(payload);
        alert("Blog berhasil dipublish!");
      }
      
      navigate('/dashboard');
    } catch (error: any) {
      alert("Error: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-4 py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-sm rounded-2xl">
        
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-white border-b border-gray-100">
          <Link to='/dashboard'>
            <X/>
          </Link>
          <h1 className="text-xl font-bold text-gray-800">{isEditMode ? "Edit Artikel" : "Tulis Artikel Baru"}</h1>
          <button
            onClick={handleSubmit}
            disabled={isLoading || !tittle || (isEditMode?false:!selectedFile)}
            className="flex items-center gap-2 px-6 py-2 font-semibold text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:bg-gray-400"
          >
            {isLoading ? "Memproses..." : <><Save size={18} /> {isEditMode ? "Edit Artikel" : "Tulis Artikel Baru"}</>}
          </button>
        </div>

        <div className="p-8 space-y-6">
          {/* Input Judul */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700"><Type size={16} /> Judul Artikel</label>
            <input
              type="text"
              value={tittle}
              onChange={(e) => setTittle(e.target.value)}
              placeholder="Masukkan judul (tittle)..."
              className="w-full text-3xl font-bold border-none focus:ring-0 placeholder:text-gray-200"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Input Author */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700"><User size={16} /> Penulis</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Nama penulis..."
                className="w-full p-3 transition-all border border-gray-200 outline-none bg-gray-50 rounded-xl focus:border-blue-500"
              />
            </div>

            {/* Area Upload Gambar */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700"><Upload size={16} /> Gambar Sampul</label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="relative flex items-center justify-center h-12 overflow-hidden transition-all border-2 border-gray-300 border-dashed cursor-pointer group rounded-xl hover:border-blue-400 hover:bg-blue-50"
              >
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  accept="image/*" 
                  className="hidden" 
                />
                
                {selectedFile ? (
                  <span className="px-4 text-sm font-medium text-blue-600 truncate">
                    {selectedFile.name}
                  </span>
                ) : (
                  <span className="flex items-center gap-2 text-sm text-gray-400">
                    <ImageIcon size={16} /> Pilih file gambar...
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Preview Gambar Sebelum Upload */}
          {previewUrl && (
            <div className="relative w-full h-64 overflow-hidden border rounded-2xl">
              <img src={previewUrl} alt="Preview" className="object-cover w-full h-full" />
              <button 
                onClick={() => { setSelectedFile(null); setPreviewUrl(null); }}
                className="absolute p-1 text-white bg-red-500 rounded-full top-2 right-2 hover:bg-red-600"
              >
                <X size={16} />
              </button>
            </div>
          )}

          {/* Editor Content */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Isi Konten</label>
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              className="mb-12 h-80"
              placeholder="Tulis isi blog di sini..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;