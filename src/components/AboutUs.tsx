
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
const AboutUs = () => {
  return <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="bg-orange-200/40 w-full h-full absolute -left-6 -top-6 rounded-lg"></div>
              <img alt="Máquina pesada trabalhando em obra" className="relative z-10 rounded-lg shadow-lg w-full object-cover h-[400px]" src="/lovable-uploads/cbed2288-9971-4335-bf3b-50f124cb16af.png" />
              <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-6 z-20 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Desde 1980</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">+50.000 itens</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">40+</div>
                <div className="text-sm text-gray-600">Anos de experiência em equipamentos para tratores</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-orange-100 text-orange-600 font-medium px-4 py-1.5 rounded-full text-sm mb-4 animate-fade-in">
              Sobre Nós
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              Excelência em peças e serviços para tratores
            </h2>
            <p className="text-gray-600 mb-6 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              Desde 1980, a Edu Trator se dedica ao fornecimento de equipamentos e peças para tratores de diversos portes, 
              atendendo todo o Brasil na linha Amarela de equipamentos pesados para tratores Caterpillar, Komatsu, New Holland e Case.
            </p>
            <p className="text-gray-600 mb-8 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              Nossa equipe técnica está em constante capacitação para oferecer as melhores soluções no setor, 
              garantindo a qualidade e eficiência que seu maquinário precisa.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.4s'
            }}>
                <div className="bg-orange-100 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-orange-600" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Peças Originais e Alternativas</h4>
                  <p className="text-gray-600">Fornecedores Nacionais e Importados para todas as marcas</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.5s'
            }}>
                <div className="bg-orange-100 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-orange-600" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Pronta Entrega</h4>
                  <p className="text-gray-600">Mais de 50.000 itens disponíveis para entrega imediata</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.6s'
            }}>
                <div className="bg-orange-100 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-orange-600" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Serviços de Recuperação</h4>
                  <p className="text-gray-600">Recuperação de bombas, motores hidráulicos, cabeçotes e virabrequins</p>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="bg-black hover:bg-neutral-800 text-orange-400 px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex animate-fade-in" style={{
            animationDelay: '0.7s'
          }}>
              <span>Conheça Nossos Produtos</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutUs;
