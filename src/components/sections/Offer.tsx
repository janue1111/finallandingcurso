import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield } from 'lucide-react';

interface OfferProps {
  price: number;
  discountPrice: number;
  bonuses: string[];
  ctaText: string;
}

export const Offer = ({ price, discountPrice, bonuses, ctaText }: OfferProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Oferta Especial por Tempo Limitado
          </h2>

          <div className="mb-12">
            <span className="text-gray-400 line-through text-2xl">
              R$ {price.toFixed(2)}
            </span>
            <div className="text-5xl font-bold text-green-400 mt-2">
              12x R$ {(discountPrice / 12).toFixed(2)}
            </div>
            <div className="text-xl mt-2">
              ou R$ {discountPrice.toFixed(2)} à vista
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6">Bônus Exclusivos</h3>
            <ul className="space-y-4">
              {bonuses.map((bonus, index) => (
                <li key={index} className="flex items-center justify-center">
                  <span className="text-green-400 mr-2">✓</span>
                  {bonus}
                </li>
              ))}
            </ul>
          </div>

          <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-full text-xl transition-all transform hover:scale-105 mb-8">
            {ctaText}
          </button>

          <div className="flex items-center justify-center text-sm">
            <Shield className="w-5 h-5 mr-2" />
            <span>7 dias de garantia incondicional</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};