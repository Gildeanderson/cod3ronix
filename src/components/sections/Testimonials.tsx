import { Quote } from 'lucide-react';

export const Testimonials = () => {
  const data = [
    { name: "Carlos Mendes", role: "CEO na StartupTech", content: "A Cod3ronix transformou nossa ideia em um produto real em tempo recorde. O profissionalismo foi excepcional." },
    { name: "Ana Paula", role: "Diretora de Marketing", content: "Nossa landing page agora converte 3x mais. O design intuitivo e a velocidade fizeram toda a diferença." },
    { name: "Rafael Silva", role: "Fundador da EcoGreen", content: "Trabalhar com a Cod3ronix foi a melhor decisão. O suporte pós-venda é o que nos mantém parceiros." }
  ];

  return (
    <section id="testimonials" className="py-24 bg-dark/50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Quote className="text-primary w-12 h-12 mx-auto mb-6 opacity-30" />
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">O que nossos <span className="text-gradient">clientes dizem.</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {data.map((t, idx) => (
            <div key={idx} className="p-10 rounded-[2rem] card-surface flex flex-col justify-between backdrop-blur-xl">
              <p className="text-text-s italic mb-8 relative leading-relaxed font-medium">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black border border-primary/30 text-xl">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-tight">{t.name}</h4>
                  <p className="text-text-s text-xs font-bold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
