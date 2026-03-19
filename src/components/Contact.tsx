import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, CheckCircle2, MessageCircle, Sparkles, SendHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "Jeevan will get back to you shortly.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/919942373735', '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jeevanadhithya21@gmail.com',
      href: 'mailto:jeevanadhithya21@gmail.com',
      color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 99423 73735',
      href: 'tel:+919942373735',
      color: 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '9942373735',
      href: 'https://wa.me/919942373735',
      color: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden font-['Poppins'] transition-colors duration-500">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-10"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 shadow-sm">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-[10px] font-black text-blue-700 dark:text-blue-300 tracking-widest uppercase">Get In Touch</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.2]">
                Let's <span className="text-blue-600 dark:text-blue-500">Accelerate</span> Your Vision.
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-xl">
                I'm currently open to <span className="text-slate-900 dark:text-white font-black">Full-Stack</span> and <span className="text-slate-900 dark:text-white font-black">AI</span> roles. Have a project in mind? reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center space-x-6 p-4 rounded-[2rem] hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-all duration-300 group ring-1 ring-transparent hover:ring-slate-100 dark:hover:ring-slate-800"
                >
                  <div className={`w-14 h-14 ${info.color} rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-xl transition-all duration-300`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{info.label}</p>
                    <p className="text-lg font-black text-slate-900 dark:text-white transition-colors">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
              <Button
                onClick={openWhatsApp}
                className="w-full h-16 rounded-[2rem] bg-green-500 hover:bg-green-600 text-white shadow-xl shadow-green-500/20 font-black text-lg group"
              >
                <MessageCircle className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                Chat on WhatsApp
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <Card className="p-8 md:p-12 bg-white dark:bg-slate-900/50 backdrop-blur-3xl border border-slate-100 dark:border-slate-800 rounded-[3rem] shadow-2xl relative overflow-hidden group ring-1 ring-slate-100 dark:ring-slate-800">
              {/* Form Success Animation */}
              <AnimatePresence>
                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md z-20 flex flex-col items-center justify-center text-center p-8"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 10, stiffness: 100 }}
                      className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
                    </motion.div>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">I'll get back to you within 24 hours.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest px-2">Your Full Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jeevan Adhithya"
                      required
                      className="h-14 px-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-none shadow-inner focus:ring-4 focus:ring-blue-500/10 transition-all font-bold text-slate-900 dark:text-white"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest px-2">Email Address</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jeevan@example.com"
                      required
                      className="h-14 px-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-none shadow-inner focus:ring-4 focus:ring-blue-500/10 transition-all font-bold text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest px-2">Project Vision</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your requirements..."
                    required
                    rows={6}
                    className="p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border-none shadow-inner focus:ring-4 focus:ring-blue-500/10 transition-all font-bold text-slate-900 dark:text-white resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-16 rounded-[2rem] bg-slate-950 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white shadow-2xl transition-all duration-300 transform active:scale-95 text-lg font-black group"
                >
                  {isSubmitting ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                      <Sparkles className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <>
                      Send Inquiry
                      <SendHorizontal className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;