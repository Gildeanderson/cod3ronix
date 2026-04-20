import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';

export const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Falha ao enviar');

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error(err);
      setError('Ocorreu um erro ao enviar. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-primary font-black tracking-widest uppercase text-xs mb-4">Contact</h2>
          <h3 className="text-5xl font-black text-white mb-8 tracking-tighter leading-tight">Vamos construir algo <span className="text-gradient">épico juntos.</span></h3>
          <p className="text-text-s mb-12 leading-relaxed font-medium">
            Tem uma ideia disruptiva? Nossa equipe está pronta para escalar seu projeto digital.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 card-surface rounded-2xl flex items-center justify-center text-primary shrink-0 border border-primary/20">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold tracking-tight">E-mail</h4>
                <p className="text-text-s font-medium text-sm">cod3ronix@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 card-surface rounded-2xl flex items-center justify-center text-primary shrink-0 border border-primary/20">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold tracking-tight">WhatsApp</h4>
                <p className="text-text-s font-medium text-sm">11992582593</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-surface p-10 rounded-[2.5rem] glass border-primary/10">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Enviado!</h4>
              <p className="text-text-s text-sm">Entraremos em contato em breve.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-text-s uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_var(--color-primary)]" />
                    Nome
                  </label>
                  <input 
                    {...register("name", { required: true })}
                    className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all font-medium text-sm" 
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-text-s uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_var(--color-primary)]" />
                    E-mail
                  </label>
                  <input 
                    {...register("email", { 
                      required: "E-mail obrigatório",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "E-mail inválido"
                      }
                    })}
                    className={`w-full bg-black/40 border ${errors.email ? 'border-red-500' : 'border-white/5'} rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all font-medium text-sm`} 
                    placeholder="E-mail"
                  />
                  {errors.email && <span className="text-[9px] text-red-500 font-bold uppercase tracking-wider">{errors.email.message as string}</span>}
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-text-s uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_var(--color-primary)]" />
                  Mensagem
                </label>
                <textarea 
                  {...register("message", { required: true })}
                  className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all h-32 font-medium text-sm" 
                  placeholder="Seu projeto..."
                />
              </div>
              {error && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider">{error}</p>}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 text-white font-black py-4 rounded-xl shadow-xl shadow-primary/20 transition-all text-sm uppercase tracking-widest"
              >
                {isSubmitting ? 'Enviando...' : 'Decolar Projeto'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
