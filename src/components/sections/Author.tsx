import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { Author } from '../../types/landing-page';

interface AuthorProps {
  author: Author;
}

export const Author = ({ author }: AuthorProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center max-w-4xl mx-auto"
        >

          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-3xl font-bold mb-4 text-white">{author.name}</h2>
            <p className="text-gray-300 leading-relaxed">{author.bio}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
