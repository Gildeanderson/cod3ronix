import { motion } from 'motion/react';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

export const Process = () => {
  const steps = [
    {
      icon: <Search className="text-primary" />,
      title: "Descoberta",
      desc: "Analisamos seu mercado, público e objetivos para traçar o melhor caminho digital.",
      color: "from-blue-500/20 to-transparent"
    },
    {
      icon: <PenTool className="text-primary" />,
      title: "Design UX/UI",
      desc: "Criamos interfaces imersivas e intuitivas focadas na melhor experiência do usuário.",
      color: "from-indigo-500/20 to-transparent"
    },
    {
      icon: <Code className="text-primary" />,
      title: "Desenvolvimento",
      desc: "Transformamos o design em código performático, seguro e escalável.",
      color: "from-blue-600/20 to-transparent"
    },
    {
      icon: <Rocket className="text-primary" />,
      title: "Lançamento",
      desc: "Realizamos o deploy e acompanhamos os resultados iniciais do seu sucesso.",
      color: "from-primary/20 to-transparent"
    }
  ];

  return (
    <section className="py-24 bg-dark relative px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-primary font-black tracking-widest uppercase text-xs mb-4">Metodologia</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Nosso caminho rumo ao <br /> <span className="text-gradient">seu sucesso.</span></h3>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-12" />
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative group text-center"
            >
              <div className={`w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br ${step.color} border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-500 relative z-10`}>
                <div className="absolute inset-0 bg-primary/5 blur-xl group-hover:bg-primary/20 transition-all" />
                {step.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-dark border border-white/10 flex items-center justify-center text-xs font-black text-primary">
                  0{idx + 1}
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-4 tracking-tight">{step.title}</h4>
              <p className="text-text-s text-sm leading-relaxed font-medium px-4">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
