
import React from 'react';
import { Settings, HardHat, Truck, Wrench, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Peças e Componentes',
    description: 'Fornecimento de peças originais e alternativas para tratores Caterpillar, Komatsu, New Holland e Case.',
    icon: Settings,
    delay: '0s'
  },
  {
    id: 2,
    title: 'Motores e Transmissões',
    description: 'Venda e recuperação de motores e sistemas de transmissão para equipamentos pesados.',
    icon: HardHat,
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'Material Rodante',
    description: 'Soluções completas em material rodante para tratores de esteira e máquinas de terraplanagem.',
    icon: Truck,
    delay: '0.2s'
  },
  {
    id: 4,
    title: 'Serviços de Recuperação',
    description: 'Recuperação especializada de bombas e motores hidráulicos, cabeçotes e virabrequins.',
    icon: Wrench,
    delay: '0.3s'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-amber-100 text-amber-600 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Soluções completas para seu equipamento
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos produtos e serviços especializados para atender às necessidades específicas do seu maquinário,
            com mais de 50.000 itens a pronta entrega.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              <div className="bg-amber-100 p-4 rounded-lg inline-block mb-5">
                <service.icon className="text-amber-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="bg-black hover:bg-neutral-800 text-amber-400 px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex"
          >
            <span>Fale com um especialista</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
