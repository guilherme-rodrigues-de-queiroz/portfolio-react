import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Sobre from './components/Sections/Sobre/Sobre.jsx'
import Habilidades from './components/Sections/Habilidades/Habilidades.jsx'
import Experiencia from './components/Sections/Experiencia/Experiencia.jsx'
import Projetos from './components/Sections/Projetos/Projetos.jsx'
import Footer from './components/Sections/Footer/Footer.jsx'
import Formacao from './components/Sections/Formacao/Formacao.jsx'
import Contato from './components/Sections/Contato/Contato.jsx'

const App = () => {
  const [isDark, setIsDark] = useState(localStorage.getItem('isDark') === 'true')

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
    localStorage.setItem('isDark', isDark)

    const timer = setTimeout(() => {
      const preloader = document.getElementById('preloader')
      if (preloader) {
        preloader.style.display = 'none'
      }
    }, 4500);

    return () => clearTimeout(timer)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(prevIsDark => !prevIsDark)
  }

  return (
    <div>
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <Sobre />
      <Habilidades />
      <Experiencia />
      <Projetos />
      <Formacao />
      <Contato />
      <Footer />
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);