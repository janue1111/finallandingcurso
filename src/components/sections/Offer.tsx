import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield } from 'lucide-react';

interface OfferProps {
  price: number;
  discountPrice: number;
  ctaText: string; // bonuses prop will no longer be used directly
}

export const Offer = ({ price, discountPrice, ctaText }: OfferProps) => {
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
            Accede a la Transformación Completa Hoy (Oferta Especial de Lanzamiento)
          </h2>

          <div className="mb-12">
            <span className="text-gray-400 line-through text-2xl">
              ${price} USD
            </span>
            <div className="text-5xl font-bold mt-2" style={{ color: '#FFFF00' }}>
              Solo ${discountPrice} USD
            </div>
          </div>

          <div className="bg-black rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6">Recibirás Acceso Inmediato a Todo Esto:</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center text-lg">
                <span className="text-green-400 mr-2">✅</span> El Curso Completo "Método Shuchu" (7 Módulos en video)
              </li>
              <li className="flex items-center justify-center text-lg">
                <span className="text-green-400 mr-2">✅</span> Bonus #1: La Técnica de Energía Infinita
              </li>
              <li className="flex items-center justify-center text-lg">
                <span className="text-green-400 mr-2">✅</span> Bonus #2: El Disparador de Creatividad Instantánea
              </li>
            </ul>
          </div>




        </motion.div>
      </div>
    </section>
  );
};