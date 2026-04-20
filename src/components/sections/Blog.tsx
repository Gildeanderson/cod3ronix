import { motion } from 'motion/react';
import { Clock, User } from 'lucide-react';

export const Blog = () => {
  const posts = [
    { title: "O Futuro do Desenvolvimento Web em 2026", date: "15 Mai", author: "Dev Team", category: "Tech", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400" },
    { title: "Design Intuitivo: A Chave para Conversão", date: "10 Mai", author: "Sarah Jane", category: "UX", img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=600&h=400" },
    { title: "Segurança de Dados para PMEs em 2026", date: "02 Mai", author: "Thiago Luz", category: "Cyber", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600&h=400" },
  ];

  return (
    <section id="blog" className="py-24 bg-dark px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary font-black tracking-widest uppercase text-xs mb-4">Journal</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Insights e <span className="text-gradient">conhecimento Digital.</span></h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.article 
              key={idx}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="rounded-[1.5rem] overflow-hidden mb-6 aspect-video relative border border-white/5">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="flex items-center gap-4 text-[10px] font-bold text-text-s uppercase tracking-widest mb-3">
                <span className="flex items-center gap-1.5"><Clock size={12} /> {post.date}</span>
                <span className="flex items-center gap-1.5"><User size={12} /> {post.author}</span>
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-tight tracking-tight">
                {post.title}
              </h4>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
