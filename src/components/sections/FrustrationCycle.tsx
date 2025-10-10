import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const FrustrationCycle = () => {
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
          ¿Te Suena Familiar Este Ciclo de Frustración?
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: `Empiezas el día con la meta clara: 'Hoy sí voy a estudiar'. Abres el libro, lees una página... y de repente, tu mano ya está desbloqueando el celular. Pasan <span style="color: #FF0000;">dos horas</span> entre TikToks y chats, y la <span style="color: #FF0000;">culpa</span> te empieza a carcomer. Llega la noche, el examen es mañana y la <span style="color: #FF0000;">ansiedad</span> es casi insoportable. Te quedas hasta la madrugada intentando memorizar todo, sabiendo que es <span style="color: #FF0000;">inútil</span>. Te acuestas sintiendo que te <span style="color: #FF0000;">fallaste otra vez</span>. Si este ciclo de procrastinación, culpa y estrés te está robando la paz y las notas que mereces, no estás solo. Y <span style="color: #FFFF00;">no es tu culpa</span>.` }}></p>
      </motion.div>
    </section>
  );
};