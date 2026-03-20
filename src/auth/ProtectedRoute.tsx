import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = () => {
  // Ganti logika ini dengan sistem autentikasi Anda (misal: cek token di localStorage)
  const isAuthenticated = localStorage.getItem('token'); 

  if (!isAuthenticated) {
    // Jika belum login, tendang ke halaman login
    return <Navigate to="/login" replace />;
  }

  // Jika sudah login, tampilkan konten anak (halaman yang dituju)
  return <Outlet />;
};

export default ProtectedRoute;