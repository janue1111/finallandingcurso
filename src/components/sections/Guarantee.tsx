import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield } from 'lucide-react';

export const Guarantee = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Nuestra Garantía
          </h2>
          <div className="flex items-center justify-center text-sm mb-8">
            <Shield className="w-5 h-5 mr-2" />
            <span>🛡️ Garantía de Satisfacción de 7 Días. Si después de aplicar el método no sientes un cambio radical en tu productividad, te devuelvo el 100% de tu dinero. Sin preguntas.</span>
          </div>
          {/* Placeholder para la imagen de la garantía */}
          <div className="mt-8">
            <img
              src="https://i.imgur.com/6uEW9aP.png"
              alt="Garantía de Satisfacción"
              className="mx-auto max-w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};