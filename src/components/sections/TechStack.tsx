import { motion } from 'motion/react';

export const TechStack = () => {
  const techs = [
    "React", "Node.js", "TypeScript", "Next.js", "TailwindCSS", "Framer Motion", 
    "Docker", "AWS", "Firebase", "PostgreSQL", "MongoDB", "Python", "Radix UI"
  ];

  // Duplicate the list for seamless loop
  const duplicatedTechs = [...techs, ...techs, ...techs];

  return (
    <section className="py-20 bg-dark/50 border-y border-white/5 overflow-hidden">
      <div className="flex flex-col gap-10">
        <div className="text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-s/50">Stack Tecnológica & Ferramentas</p>
        </div>
        
        <div className="relative flex overflow-x-hidden">
          <motion.div 
            className="flex gap-16 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedTechs.map((tech, idx) => (
              <span 
                key={idx} 
                className="text-4xl md:text-6xl font-black text-white/10 hover:text-primary/40 transition-colors uppercase tracking-tighter"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
