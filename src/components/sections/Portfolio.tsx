import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export const Portfolio = () => {
  const projects = [
    { title: "Fintech Replay", category: "Financeiro", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600" },
    { title: "EcoStore Platform", category: "E-commerce", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800&h=600" },
    { title: "HealthTrack App", category: "Saúde", img: "https://images.unsplash.com/photo-1576091160550-217359f41f48?auto=format&fit=crop&q=80&w=800&h=600" },
    { title: "NexGen Dashboard", category: "Analítica", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800&h=600" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-dark px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-secondary font-black tracking-widest uppercase text-xs mb-4">Case Studies</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Trabalhos que nos <br /> <span className="text-gradient">orgulhamos de criar.</span></h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-[2rem] overflow-hidden aspect-video border border-white/5"
            >
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-8 left-8">
                <span className="text-[10px] font-black text-primary uppercase tracking-widest mb-2 block">{p.category}</span>
                <h4 className="text-2xl font-bold text-white flex items-center gap-3 tracking-tight">
                  {p.title} <ExternalLink size={18} className="text-primary" />
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
