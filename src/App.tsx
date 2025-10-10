import { useRef } from 'react';
import { Heart, Zap, Target } from 'lucide-react';
import { Hero } from './components/sections/Hero';
import { FrustrationCycle } from './components/sections/FrustrationCycle';
import { ProductivityTricks } from './components/sections/ProductivityTricks';
import { Benefits } from './components/sections/Benefits';
import { Testimonials } from './components/sections/Testimonials';
import { Steps } from './components/sections/Steps';
import { Author } from './components/sections/Author';
import { Offer } from './components/sections/Offer';
import { FAQ } from './components/sections/FAQ';
import { Guarantee } from './components/sections/Guarantee';
import { Footer } from './components/sections/Footer';
import NotificationBanner from './components/NotificationBanner';
import BottomBanner from './components/BottomBanner';
import type { LandingPageProps } from './types/landing-page';
import { useStickyBanner } from './hooks/useStickyBanner';

// exemplo do conteudo da pagina (altere conforme o uso)
const landingPageData: LandingPageProps = {
  mainTitle: <>
    Para el Estudiante que Sabe que <span style={{ color: '#FFFF00' }}>Puede Más</span>, Pero la <span style={{ color: '#FF0000' }}>Procrastinación lo Detiene</span>.
  </>,
  subTitle: "Descubre el Método Japonés de 7 Días que te Permite Destruir la Procrastinación y Alcanzar Notas de Élite, Incluso si Sientes que Nada te ha Funcionado Antes.",
  videoUrl: "https://www.youtube.com/embed/your-video-id",
  ctaText: "Quero começar agora!",
  benefits: [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Concentración Inquebrantable",
      description: "Olvídate de las distracciones. Siéntate a estudiar y entra en un <span style={{ color: '#FFFF00' }}>estado de flujo</span> donde absorbes información compleja <span style={{ color: '#FFFF00' }}>sin esfuerzo</span> y el tiempo simplemente vuela."
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Resultados de Élite",
      description: "No solo apruebes, <span style={{ color: '#FFFF00' }}>domina tus exámenes</span>. Entiende y retiene la información a un nivel que te posicionará en el <span style={{ color: '#FFFF00' }}>top de tu clase</span>, abriéndote puertas que nunca imaginaste."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Libertad y Tiempo Libre sin Culpa",
      description: "Termina tus obligaciones en la <span style={{ color: '#FFFF00' }}>mitad del tiempo</span>. Disfruta de tus tardes y fines de semana sabiendo que ya hiciste el trabajo, sintiéndote <span style={{ color: '#FFFF00' }}>orgulloso y en paz</span> contigo mismo."
    }
  ],
  testimonials: [
    {
      name: "Sofía R.",
      role: "Estudiante de Ingeniería",
      content: "Siempre pensé que era mala para las matemáticas. Después de aplicar el método, no solo dejé de procrastinar, ¡sino que mi última nota fue un 9.5! Increíble cómo cambió mi mentalidad en solo una semana.",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      name: "Javier M.",
      role: "Estudiante de Derecho",
      content: "Pasaba noches enteras sin dormir por el estrés. Ahora termino de estudiar a las 6 p.m. y tengo tiempo libre. Este curso vale 100 veces su precio. Me devolvió la vida.",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    },
    {
      name: "Ana G.",
      role: "Estudiante de Medicina",
      content: "Antes me sentía abrumada por la cantidad de material. Con este método, organizo mi estudio de forma eficiente y disfruto del proceso. ¡Mis resultados han mejorado muchísimo!",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
    }
  ],

  author: {
    name: "EL METODO JAPONES SHUCHU",
    bio: "no volveras a reconocerte y son solo 7 dias.......",
    imageUrl: "https://i.imgur.com/bjmpPR3.png"
  },
  price: 47,
  discountPrice: 6,
  faq: [
    {
      question: "¿Tendré acceso para siempre?",
      answer: "Sí, tu pago es único y tendrás acceso ilimitado a todos los videos y materiales para siempre, incluyendo futuras actualizaciones."
    },
    {
      question: "¿Necesito mucho tiempo para ver los resultados?",
      answer: "El método está diseñado para darte victorias rápidas. Verás un cambio en tu capacidad para concentrarte desde el primer día. En 7 días, habrás integrado el sistema completo."
    },
    {
      question: "¿Esto sirve si estudio [carrera difícil como medicina, ingeniería, etc.]?",
      answer: "Absolutamente. El método no se basa en el tema que estudias, sino en cómo funciona tu cerebro. De hecho, es especialmente poderoso para carreras que demandan una alta carga de estudio y retención."
    }
  ],
  socialLinks: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/"
  }
};

function App() {
  const faqRef = useRef<HTMLDivElement>(null);
  const isBannerFixed = useStickyBanner(faqRef);

  return (
    <div className="min-h-screen bg-black">
      <NotificationBanner />
      <Hero
        mainTitle={landingPageData.mainTitle}
        subTitle={landingPageData.subTitle}
        videoUrl={landingPageData.videoUrl}
        ctaText={landingPageData.ctaText}
      />
      <FrustrationCycle />
      <ProductivityTricks />
      <Benefits benefits={landingPageData.benefits} />
      <Steps imageUrl={landingPageData.author.imageUrl} />
      <Testimonials testimonials={landingPageData.testimonials} />

      <Offer
        price={landingPageData.price}
        discountPrice={landingPageData.discountPrice}
        ctaText={landingPageData.ctaText}
      />
      <Guarantee />
      <div ref={faqRef}>
        <FAQ faq={landingPageData.faq} />
      </div>
      <BottomBanner isFixed={isBannerFixed} />
      <Footer socialLinks={landingPageData.socialLinks} />
    </div>
  );
}

export default App;