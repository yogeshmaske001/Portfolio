import './App.css'
import About from './components/about/about';
import Home from './components/homepage/home';
import {BrowserRouter, Routes, Route} from 'react-router'
import Skills from './components/skill/skills';
import Myworks from './components/myworks/works';
import ContactMe from './components/contactme/contactme.jsx';
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <protectedRoute>
        <Home />
        </protectedRoute>
        }></Route>
      <Route path="/about" element={
        <protectedRoute>
        <About />
        </protectedRoute>
        }></Route>
      <Route path="/skills" element={<protectedRoute><Skills /></protectedRoute>}></Route>
      <Route path="/myworks" element={<protectedRoute><Myworks /></protectedRoute>} ></Route>
      <Route path="/contactme" element={<protectedRoute><ContactMe/></protectedRoute>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App