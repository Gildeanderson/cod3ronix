import { Linkedin, Instagram, Zap } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-dark border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="text-primary flex items-center font-logo font-black text-4xl tracking-tighter mb-6">
              <span className="text-secondary">&lt;</span>
              <span className="text-white">/</span>
              <span className="text-secondary">&gt;</span>
              <span className="ml-2 text-white italic">Cod3ronix</span>
            </div>
            <p className="text-text-s max-w-sm mb-8 leading-relaxed">
              Estrategistas digitais, designers e engenheiros focados em
              transformar ideias complexas em experiências digitais simples e lucrativas.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/gildeanderson/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-s hover:text-white hover:bg-white/10 transition-all"><Linkedin size={18} /></a>
              <a href="https://www.instagram.com/cod3ronix/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-s hover:text-white hover:bg-white/10 transition-all"><Instagram size={18} /></a>
            </div>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Links Rápidos</h5>
            <ul className="space-y-4">
              <li><a href="#home" className="text-text-s text-sm hover:text-white transition-colors">Início</a></li>
              <li><a href="#services" className="text-text-s text-sm hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="text-text-s text-sm hover:text-white transition-colors">Portfólio</a></li>
              <li><a href="#blog" className="text-text-s text-sm hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Suporte</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-text-s text-sm hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-text-s text-sm hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#contact" className="text-text-s text-sm hover:text-white transition-colors">Ajuda</a></li>
              <li><a href="#" className="text-text-s text-sm hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs text-center md:text-left">
            © 2026 Cod3ronix Soluções Digitais. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span>Desenvolvido com</span>
            <Zap size={14} className="text-secondary fill-secondary" />
            <span>pela Cod3ronix Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
