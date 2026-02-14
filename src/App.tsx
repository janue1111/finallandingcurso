import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageTimer } from './components/PageTimer';
import { QuizPage } from './pages/QuizPage';
import { VSLPage } from './pages/VSLPage';
import { EyesLanding } from './pages/EyesLanding';
import { GravityLanding } from './pages/GravityLanding';
import { TensionLanding } from './pages/TensionLanding';
import { MVF1Page } from './pages/MVF1Page';
import { MVOFPage } from './pages/MVOFPage';
import { MVCheckoutPage } from './pages/MVCheckoutPage';
import { TyPage } from './pages/TyPage';

function App() {
  return (
    <BrowserRouter>
      <PageTimer />
      <Routes>
        {/* Quiz Funnel - Página principal para anuncios */}
        <Route path="/" element={<QuizPage />} />

        {/* Minimal Via Funnel */}
        <Route path="/mvf1" element={<MVF1Page />} />
        <Route path="/mvof" element={<MVOFPage />} />
        <Route path="/mvcheckout" element={<MVCheckoutPage />} />
        <Route path="/typage" element={<TyPage />} />

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