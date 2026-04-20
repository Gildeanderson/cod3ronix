import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, ChevronRight, MessageSquare, Briefcase, Zap } from 'lucide-react';
import { Magnetic } from '../ui/Magnetic';

export const BudgetLead = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!email) return;
    setIsSubmitting(true);
    setError(null);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name: 'Lead de Orçamento', 
          email, 
          message: 'Usuário solicitou um orçamento através do modal flutuante.' 
        }),
      });
      if (!response.ok) throw new Error();
      setStep(3);
    } catch (err) {
      setError('Erro ao enviar. Tente novamente.');
    } finally {
    }
  };

  return (
    <>

      {/* Floating Trigger */}
      <div className="fixed bottom-8 right-8 z-[60]">
        <Magnetic>
          <button 
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-2xl shadow-primary/40 group hover:scale-110 active:scale-95 transition-all"
          >
            <Sparkles className="group-hover:rotate-12 transition-transform" />
          </button>
        </Magnetic>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-dark/80 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="card-surface p-8 md:p-12 rounded-[2.5rem] w-full max-w-xl relative overflow-hidden glass"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-text-s hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              {step === 1 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-black text-white tracking-tighter mb-4">Fala conosco! 🚀</h3>
                    <p className="text-text-s font-medium leading-relaxed">Qual é o foco principal do seu projeto hoje?</p>
                  </div>
                  
                  <div className="grid gap-4">
                    {[
                      { icon: <Zap size={18} />, label: "Novo Produto Digital" },
                      { icon: <Briefcase size={18} />, label: "Expansão de Negócio" },
                      { icon: <MessageSquare size={18} />, label: "Consultoria Técnica" }
                    ].map((opt, i) => (
                      <button 
                        key={i} 
                        onClick={() => setStep(2)}
                        className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all group text-left"
                      >
                        <div className="flex items-center gap-4">
                          <div className="text-primary">{opt.icon}</div>
                          <span className="text-white font-bold tracking-tight">{opt.label}</span>
                        </div>
                        <ChevronRight className="text-text-s group-hover:text-primary transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8 py-4 text-center">
                  <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tighter">Quase lá!</h3>
                  <p className="text-text-s font-medium leading-relaxed">
                    Nossos estrategistas estão prontos. Deixe seu e-mail e daremos o próximo passo.
                  </p>
                  <div className="space-y-4">
                    <input 
                      type="email" 
                      placeholder="seu@e-mail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-black/40 border border-white/5 rounded-xl px-6 py-4 text-white outline-none focus:border-primary transition-all font-medium"
                    />
                    {error && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider">{error}</p>}
                    <button 
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white font-black py-4 rounded-xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 transition-all"
                    >
                      {isSubmitting ? 'ENVIANDO...' : 'SOLICITAR ORÇAMENTO'}
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8 py-10 text-center">
                  <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap size={40} className="fill-current" />
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tighter">Recebido! 🏁</h3>
                  <p className="text-text-s font-medium leading-relaxed">
                    Nossa equipe de especialistas entrará em contato em menos de 24 horas. Prepare-se para a decolagem!
                  </p>
                  <button 
                    onClick={() => {
                      setIsOpen(false);
                      setTimeout(() => setStep(1), 500);
                    }}
                    className="text-primary font-bold hover:underline"
                  >
                    Fechar
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
