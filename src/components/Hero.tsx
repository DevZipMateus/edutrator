
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="pt-28 pb-12 md:pt-36 md:pb-20 bg-gradient-to-br from-neutral-900 to-neutral-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1723714372451-940b9ab6ab92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhY3RvcnN8ZW58MHwwfDB8fHwy')] bg-cover bg-center opacity-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          <div className="w-48 md:w-64 mx-auto mb-6 animate-fade-in">
            <img 
              src="/lovable-uploads/6cb201c9-3397-4326-98b1-d206e6af655e.png" 
              alt="Edu Trator" 
              className="w-full h-auto"
            />
          </div>
          
          <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold text-white leading-tight mb-6 animate-fade-in`} style={{
            animationDelay: '0.1s'
          }}>
            Especialistas em equipamentos para tratores
          </h1>
          
          <p className="text-lg text-amber-200 mb-10 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            No mercado há mais de 40 anos, atendendo todo Brasil na linha Amarela de equipamentos pesados para tratores Caterpillar, Komatsu, New Holland e Case.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
            <a href="https://wa.me/5511945809669" target="_blank" rel="noopener noreferrer" className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2">
              <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-5 h-5" />
              <span>Solicitar Orçamento</span>
            </a>
            <a href="#services" className="btn-secondary">
              Nossos serviços
            </a>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
