import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import Backendless from '../lib/backendless';
import { Link, useNavigate } from 'react-router';
import { Save, Image as ImageIcon, User, Type, Upload, X } from 'lucide-react';

const CreateBlog: React.FC = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return alert("Silakan pilih gambar terlebih dahulu");
    
    setIsLoading(true);

    try {
      // TAHAP 1: Upload file ke Backendless File Service
      // File akan disimpan di folder /blog-images/
      const uploadResult = await Backendless.Files.upload(selectedFile, "blog-images", true);
      const uploadedImageUrl = uploadResult.fileURL;

      // TAHAP 2: Simpan data blog ke tabel 'Blog' dengan URL dari hasil upload
      const payload = {
        tittle: tittle,
        author: author,
        content: content,
        image: uploadedImageUrl // URL hasil upload disimpan di sini
      };

      await Backendless.Data.of("Blog").save(payload);
      
      alert("Blog berhasil dipublish dengan gambar!");
      navigate('/dashboard');
    } catch (error: any) {
      console.error("Error:", error);
      alert("Terjadi kesalahan: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200">
        
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-20">
          <Link to='/dashboard'>
            <X/>
          </Link>
          <h1 className="text-xl font-bold text-gray-800">Tulis Artikel Baru</h1>
          <button
            onClick={handleSubmit}
            disabled={isLoading || !tittle || !selectedFile}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:bg-gray-400"
          >
            {isLoading ? "Memproses..." : <><Save size={18} /> Publish</>}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input Author */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700"><User size={16} /> Penulis</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Nama penulis..."
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-500 transition-all"
              />
            </div>

            {/* Area Upload Gambar */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700"><Upload size={16} /> Gambar Sampul</label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="relative cursor-pointer group h-12 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all overflow-hidden"
              >
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  accept="image/*" 
                  className="hidden" 
                />
                
                {selectedFile ? (
                  <span className="text-sm text-blue-600 font-medium truncate px-4">
                    {selectedFile.name}
                  </span>
                ) : (
                  <span className="text-sm text-gray-400 flex items-center gap-2">
                    <ImageIcon size={16} /> Pilih file gambar...
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Preview Gambar Sebelum Upload */}
          {previewUrl && (
            <div className="relative w-full h-64 rounded-2xl overflow-hidden border">
              <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
              <button 
                onClick={() => { setSelectedFile(null); setPreviewUrl(null); }}
                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
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
              className="h-80 mb-12"
              placeholder="Tulis isi blog di sini..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;