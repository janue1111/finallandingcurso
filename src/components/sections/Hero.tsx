import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users } from 'lucide-react';

interface HeroProps {
  mainTitle: string;
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

          <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-full text-xl transition-all transform hover:scale-105">
            {ctaText}
          </button>

          <div className="mt-8 flex items-center justify-center text-gray-200">
            <Users className="w-6 h-6 mr-2" />
            <span>Mais de 10.000 clientes satisfeitos</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};