import { Navigate, Outlet } from 'react-router';

const PublicRoute = () => {
  // Cek token di localStorage (sesuaikan dengan logic login Anda)
  const isAuthenticated = localStorage.getItem('token');

  if (isAuthenticated) {
    // Jika sudah login tapi coba buka /login, lempar ke dashboard
    return <Navigate to="/dashboard" replace />;
  }

  // Jika belum login, izinkan akses ke halaman login/register
  return <Outlet />;
};

export default PublicRoute;