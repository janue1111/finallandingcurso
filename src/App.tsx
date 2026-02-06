import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QuizPage } from './pages/QuizPage';
import { VSLPage } from './pages/VSLPage';
import { EyesLanding } from './pages/EyesLanding';
import { GravityLanding } from './pages/GravityLanding';
import { TensionLanding } from './pages/TensionLanding';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Quiz Funnel - Página principal para anuncios */}
        <Route path="/" element={<QuizPage />} />

        {/* Landing VSL - Fallback */}
        <Route path="/vsl" element={<VSLPage />} />

        {/* Landings de venta según segmentación */}
        <Route path="/mirada-radiante" element={<EyesLanding />} />
        <Route path="/efecto-lifting" element={<GravityLanding />} />
        <Route path="/rostro-sin-tension" element={<TensionLanding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;