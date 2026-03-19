import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Navbar from './components/shared/Navbar';
import Products from './pages/Products';
import Teams from './pages/Teams';


function App() {
  return (
    <Router>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Navbar>
    </Router>
  );
}

export default App;