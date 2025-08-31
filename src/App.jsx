import './App.css'
import About from './components/about/about';
import Home from './components/homepage/home';
import Skills from './components/skill/skills';
import Myworks from './components/myworks/works';
import ContactMe from './components/contactme/contactme.jsx';

// 👇 import HashRouter instead of BrowserRouter
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/skills"
          element={
            <ProtectedRoute>
              <Skills />
            </ProtectedRoute>
          }
        />
        <Route
          path="/myworks"
          element={
            <ProtectedRoute>
              <Myworks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contactme"
          element={
            <ProtectedRoute>
              <ContactMe />
            </ProtectedRoute>
          }
        />
      </Routes>
    </HashRouter>
  )
}

export default App
