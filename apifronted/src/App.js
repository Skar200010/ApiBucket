import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './components/Home';
import LoginPage from './components/LoginForm';
import Navbar from './components/Navbar';
import RegisterPage from './components/RegisterPage';
import DocumentationPage from './components/DocumentationPage';
import AboutPage from './components/About';
import WelcomePage from './components/WelcomePage';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
function AppContent() {
  const location = useLocation();
  const pathsToHideNavbar = ['/Welcome'];

  const displayNavbar = !pathsToHideNavbar.includes(location.pathname);

  return (
    <div>
      {/* Conditionally render the Navbar */}
      {displayNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Documentation" element={<DocumentationPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Welcome" element={<WelcomePage />} />

      </Routes>
      <Footer />
    </div>
  );
}


export default App;
