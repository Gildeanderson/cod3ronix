import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Zap, ChevronRight } from 'lucide-react';
import { Magnetic } from '../ui/Magnetic';

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="home" ref={containerRef} className="relative min-h-[90vh] flex items-center pt-24 mt-[10px] overflow-hidden px-6">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6">
            <Zap size={14} className="fill-current" />
            <span>Transformação Digital Rocket-style</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-6 text-white tracking-tighter">
            Codificamos o futuro do seu <span className="text-gradient">negócio.</span>
          </h1>
          <p className="text-xl text-text-s mb-10 max-w-lg leading-relaxed font-medium">
            Desenvolvemos soluções digitais personalizadas que impulsionam o crescimento e otimizam processos reais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Magnetic>
              <a href="#portfolio" className="bg-primary text-white px-8 py-4 rounded-xl font-black flex items-center justify-center gap-2 transition-all group shadow-lg shadow-primary/30 text-lg h-full">
                Ver Projetos
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#services" className="px-8 py-4 rounded-xl font-bold border border-white/20 hover:bg-white/5 transition-all text-center text-lg block h-full">
                Serviços
              </a>
            </Magnetic>
          </div>
        </motion.div>

        <motion.div style={{ y, opacity }} className="relative hidden md:block">
          <div className="card-surface rounded-[2.5rem] p-4 rotate-3 glass">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=1000" 
              alt="Desenvolvimento de Software" 
              className="rounded-[2rem] w-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
