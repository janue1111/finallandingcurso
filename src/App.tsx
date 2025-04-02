// import React from 'react';
import { Heart, Zap, Target } from 'lucide-react';
import { Hero } from './components/sections/Hero';
import { Benefits } from './components/sections/Benefits';
import { Testimonials } from './components/sections/Testimonials';
import { Steps } from './components/sections/Steps';
import { Author } from './components/sections/Author';
import { Offer } from './components/sections/Offer';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/sections/Footer';
import type { LandingPageProps } from './types/landing-page';

// exemplo do conteudo da pagina (altere conforme o uso)
const landingPageData: LandingPageProps = {
  mainTitle: "Transforme sua vida com nosso método comprovado",
  subTitle: "Descubra como milhares de pessoas estão alcançando resultados extraordinários",
  videoUrl: "https://www.youtube.com/embed/your-video-id",
  ctaText: "Quero começar agora!",
  benefits: [
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Resultados Garantidos",
      description: "Método testado e aprovado por milhares de alunos"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Rápido e Eficiente",
      description: "Veja resultados em apenas 30 dias de prática"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Suporte Completo",
      description: "Acompanhamento personalizado durante toda sua jornada"
    }
  ],
  testimonials: [
    {
      name: "Testemunha 1",
      role: "Empresária",
      content: "Incrível como o método mudou completamente minha vida em apenas algumas semanas!",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      name: "Testemunha 2",
      role: "Profissional Liberal",
      content: "Nunca imaginei que poderia alcançar tantos resultados em tão pouco tempo.",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    },
    {
      name: "Testemunha 3",
      role: "Estudante",
      content: "O melhor investimento que já fiz em minha educação. Recomendo!",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
    }
  ],
  steps: [
    {
      title: "Faça sua inscrição",
      description: "Processo simples e rápido, comece em menos de 5 minutos"
    },
    {
      title: "Acesse o conteúdo",
      description: "Material completo disponível imediatamente após a compra"
    },
    {
      title: "Aplique o método",
      description: "Siga o passo a passo e veja os resultados acontecerem"
    }
  ],
  author: {
    name: "Titulo em destaque",
    bio: "Descrição sobre a imagem / produto com detalhes ou inteção de venda.",
    imageUrl: "https://ideogram.ai/assets/progressive-image/balanced/response/qkuumgGeS9m2lPFnVc-Mag"
  },
  price: 1997,
  discountPrice: 997,
  bonuses: [
    "Bônus 1",
    "Bônus 2",
    "Bônus 3",
    "Bônus 4"
  ],
  faq: [
    {
      question: "Quanto tempo tenho acesso ao conteúdo?",
      answer: "Acesso vitalício a todo o conteúdo e atualizações futuras."
    },
    {
      question: "Existe garantia de resultados?",
      answer: "Oferecemos 7 dias de garantia incondicional. Se não ficar satisfeito, devolvemos 100% do seu investimento."
    },
    {
      question: "Como funciona o suporte?",
      answer: "Você terá acesso ao nosso time de suporte 24/7 através do grupo VIP no WhatsApp."
    }
  ],
  socialLinks: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/"
  }
};

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        mainTitle={landingPageData.mainTitle}
        subTitle={landingPageData.subTitle}
        videoUrl={landingPageData.videoUrl}
        ctaText={landingPageData.ctaText}
      />
      <Benefits benefits={landingPageData.benefits} />
      <Testimonials testimonials={landingPageData.testimonials} />
      <Steps steps={landingPageData.steps} />
      <Author author={landingPageData.author} />
      <Offer
        price={landingPageData.price}
        discountPrice={landingPageData.discountPrice}
        bonuses={landingPageData.bonuses}
        ctaText={landingPageData.ctaText}
      />
      <FAQ faq={landingPageData.faq} />
      <Footer socialLinks={landingPageData.socialLinks} />
    </div>
  );
}

export default App;