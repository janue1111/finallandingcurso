import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users } from 'lucide-react';
import '../BottomBanner.css';

interface HeroProps {
  mainTitle: ReactNode;
  subTitle: string;
  videoUrl: string;
  ctaText: string;
}
export const Hero = ({ mainTitle, subTitle, videoUrl, ctaText }: HeroProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{mainTitle}</h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200">{subTitle}</p>
          
          <div className="aspect-video bg-black rounded-xl shadow-2xl mb-12">
            <iframe
              src={videoUrl}
              className="w-full h-full rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>



          <div className="mt-8 text-gray-200 text-center">
            <p>Acceso instantáneo por un único pago de <span style={{ color: '#FF0000' }}>$6 USD</span></p>
            <p className="mt-2">👤 Únete a la comunidad de estudiantes que han decidido tomar el control.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};