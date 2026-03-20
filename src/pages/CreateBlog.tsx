import React, { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css'; // Theme editor
import { Save, X, Image as ImageIcon, Send } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CreateBlog: React.FC = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState<string | null>(null);

  // Konfigurasi Toolbar WYSIWYG
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['blockquote', 'code-block'],
      ['link', 'image'],
      ['clean']
    ],
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { title, category, content, coverImage };
    console.log("Data Blog Baru:", payload);
    alert("Blog berhasil disimpan! Cek console.");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-5 h-5 text-gray-500" />
            </Link>
            <h1 className="text-lg font-semibold text-gray-800">Create New Post</h1>
          </div>
          <div className="flex gap-3">
            <Button 
              onClick={handleSubmit}
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-shadow shadow-sm"
            >
              <Send className="w-4 h-4" />
              Publish
            </Button>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto mt-8 px-4">
        <form className="space-y-6">
          {/* Cover Image Upload Area */}
          <div className="relative group w-full h-64 bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center overflow-hidden transition-all hover:border-blue-400">
            {coverImage ? (
              <>
                <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />
                <button 
                  type="button"
                  onClick={() => setCoverImage(null)}
                  className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-4 h-4" />
                </button>
              </>
            ) : (
              <div className="text-center">
                <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500 font-medium">Add a cover image</p>
                <Input 
                  type='file'
                  className="mt-4 px-3 py-1 text-xs border rounded-md outline-none focus:ring-1 ring-blue-500"
                  onChange={(e) => setCoverImage(e.target.value)}
                />
              </div>
            )}
          </div>

          {/* Title Input */}
          <input
            type="text"
            placeholder="New post title here..."
            className="w-full text-4xl md:text-5xl font-extrabold bg-transparent border-none outline-none placeholder:text-gray-300 text-gray-900"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* Category Selector */}
          <div className="flex items-center gap-4">
            <select 
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 outline-none focus:ring-2 ring-blue-500/20"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="tech">Technology</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="education">Education</option>
            </select>
            <span className="text-xs text-gray-400"># Use clear tags for better reach</span>
          </div>

          {/* WYSIWYG Editor Container */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <ReactQuill 
              theme="snow"
              value={content}
              onChange={setContent}
              modules={modules}
              placeholder="Write your story here..."
              className="h-[400px] mb-12" // Margin bottom agar toolbar tidak menutupi teks terakhir
            />
          </div>
        </form>
      </main>

      {/* Global CSS for Quill Overrides */}
      <style>{`
        .ql-container {
          font-size: 1.125rem;
          font-family: inherit;
          border: none !important;
        }
        .ql-toolbar {
          border: none !important;
          border-bottom: 1px solid #e5e7eb !important;
          padding: 0.75rem !important;
          position: sticky;
          top: 64px;
          z-index: 5;
          background: white;
        }
        .ql-editor.ql-blank::before {
          color: #d1d5db;
          font-style: normal;
        }
        .ql-editor {
          min-height: 400px;
          padding: 2rem !important;
        }
      `}</style>
    </div>
  );
};

export default CreateBlog;