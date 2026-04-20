import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Code2, Smartphone, Layers, Zap, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  key?: number | string;
  item: {
    icon: React.ReactNode;
    title: string;
    desc: string;
  };
  idx: number;
}

const ServiceCard = ({ item, idx }: ServiceCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const background = useTransform(
    [mouseXSpring, mouseYSpring],
    ([cx, cy]) => `radial-gradient(600px circle at ${cx}px ${cy}px, rgba(59, 130, 246, 0.1), transparent 40%)`
  );

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    x.set(clientX - left);
    y.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      whileHover={{ y: -5 }}
      className="card-surface p-8 rounded-[2rem] group transition-all relative overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background }}
      />
      
      <div className="relative z-10">
        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-all">
          {item.icon}
        </div>
        <h4 className="text-xl font-bold text-white mb-4 tracking-tight">{item.title}</h4>
        <p className="text-text-s text-sm leading-relaxed mb-6 font-medium">
          {item.desc}
        </p>
        <a href="#" className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider hover:text-white transition-colors">
          Saiba mais <ArrowRight size={14} />
        </a>
      </div>
    </motion.div>
  );
};

export const Services = () => {
  const items = [
    {
      icon: <Code2 className="text-primary" />,
      title: "Desenvolvimento Web",
      desc: "Websites de alta performance e landing pages otimizadas utilizando as melhores tecnologias do mercado."
    },
    {
      icon: <Smartphone className="text-primary" />,
      title: "Apps Mobile",
      desc: "Aplicativos intuitivos para iOS e Android que colocam o seu negócio na palma da mão do cliente."
    },
    {
      icon: <Layers className="text-primary" />,
      title: "Sistemas Customizados",
      desc: "Softwares de gestão sob medida para automatizar seus processos e aumentar a produtividade."
    },
    {
      icon: <Zap className="text-primary" />,
      title: "Marketing & SEO",
      desc: "Estratégias orientadas a dados para posicionar sua marca nos primeiros resultados das buscas."
    }
  ];

  return (
    <section id="services" className="py-24 bg-dark relative px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary font-black tracking-widest uppercase text-xs mb-4">Especialidades</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">Soluções para todas as <br /> <span className="text-gradient">etapas digitais.</span></h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <ServiceCard key={idx} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
