import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const ProductivityTricks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="bg-black text-white py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Los "Trucos de Productividad" de YouTube No Funcionan. He Aquí el Porqué.
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: `Probablemente ya intentaste la Técnica Pomodoro, viste videos sobre 'dopamina detox' o te prometiste a ti mismo apagar las notificaciones. Pero esos son solo <span style="color: #FF0000;">parches temporales</span>, no una solución real. El problema es que la procrastinación no es un tema de 'fuerza de voluntad', es un <span style="color: #FFFF00;">hábito grabado en tus circuitos neuronales</span>. Esos 'trucos' no están diseñados para <span style="color: #FF0000;">reprogramar tu cerebro</span>. Por eso, inevitablemente, vuelves a caer en los mismos patrones. Para un cambio real, necesitas <span style="color: #FFFF00;">un sistema, no más trucos</span>.` }}></p>
      </motion.div>
    </section>
  );
};