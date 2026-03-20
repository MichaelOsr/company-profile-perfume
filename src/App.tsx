import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';
import { useEffect } from 'react';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Navbar from './components/shared/Navbar';
import Products from './pages/Products';
import Teams from './pages/Teams';
import BlogDetail from './pages/BlogDetail';
import DashboardBlog from './pages/DashboardBlog';
import CreateBlog from './pages/CreateBlog';
import Login from './pages/Login';
import ProtectedRoute from './auth/ProtectedRoute';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <Navbar>
        <ScrollToTop />
        <Routes>
          {/* Public Routes - Semua orang bisa akses */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes - Hanya untuk yang sudah login */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardBlog />} />
            <Route path="/create-blog" element={<CreateBlog />} />
          </Route>
          
        </Routes>
      </Navbar>
    </Router>
  );
}

export default App;