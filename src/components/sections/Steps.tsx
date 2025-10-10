import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StepsProps {
  imageUrl: string;
}

export const Steps = ({ imageUrl }: StepsProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Te Presento: El Método Shuchu (Código Cero Procrastinación)
        </h2>
        <div className="mb-8">
          <img src={imageUrl} alt="Método Shuchu" className="mx-auto max-w-full h-auto rounded-lg shadow-lg" />
        </div>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto" dangerouslySetInnerHTML={{ __html: `El <span style="color: #FFFF00;">único sistema</span> de 7 días basado en neurociencia cognitiva japonesa que te guía paso a paso para <span style="color: #FF0000;">destruir la procrastinación</span> y <span style="color: #FFFF00;">activar tu capacidad de aprendizaje acelerado</span>.` }}></p>
        <div className="text-left max-w-3xl mx-auto bg-gray-900 p-8 rounded-lg">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Este no es un curso teórico. Es un entrenamiento práctico de 7 días. Cada día, desbloquearás una técnica simple y poderosa que puedes aplicar de inmediato.
          </p>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Días 1-3: Destrucción de la Procrastinación</h3>
            <p className="text-gray-300 mb-4" dangerouslySetInnerHTML={{ __html: `Te daré 3 técnicas neuro-científicas para <span style="color: #FF0000;">desmantelar el hábito de posponer</span> las cosas desde su raíz.` }}></p>
            
            <h3 className="text-2xl font-bold text-white mb-2">Días 4-7: Activación del Aprendizaje Acelerado</h3>
            <p className="text-gray-300 mb-4" dangerouslySetInnerHTML={{ __html: `Aprenderás un sistema completo para <span style="color: #FFFF00;">mejorar tu retención, comprensión y velocidad</span> de lectura, culminando con un método de repaso <span style="color: #FFFF00;">infalible</span>.` }}></p>
            
            <h3 className="text-2xl font-bold text-white mb-2">Bonus Exclusivos</h3>
            <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: `Además, recibirás dos técnicas secretas para <span style="color: #FFFF00;">disparar tus niveles de energía y creatividad</span> al instante.` }}></p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};