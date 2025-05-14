
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from '../hooks/use-mobile';

const products = [
  {
    id: 1,
    title: "Controle de Direção",
    description: "Controle de direção Proporcionam a mudança de direção de tratores de esteira e outros equipamentos com rapidez e eficiência.",
    image: "/lovable-uploads/b9d5bb09-af5f-48a4-8516-2bcb7667eb41.png"
  },
  {
    id: 2,
    title: "Pistão Premium para Motor",
    description: "Pistão de alta qualidade para motores diesel de tratores pesados. Fabricado com liga especial de alumínio que proporciona excelente resistência a altas temperaturas e pressão.",
    image: "/lovable-uploads/0194d858-93ba-42b4-b975-4a48de032722.png"
  },
  {
    id: 3,
    title: "Injetor de Combustível",
    description: "Injetor de combustível recondicionado para tratores Caterpillar e Komatsu. Sistema de precisão que garante a atomização ideal do combustível, melhorando a eficiência do motor.",
    image: "/lovable-uploads/b432f303-5113-40c5-afdc-824e8ce0491b.png"
  },
  {
    id: 4,
    title: "Conversor de Torque",
    description: "Conversor de torque para transmissões automáticas de equipamentos pesados. Componente essencial que multiplica o torque do motor e permite operações suaves em diferentes condições de trabalho.",
    image: "/lovable-uploads/c48541c2-23eb-41ad-a930-756a785457c8.png"
  },
  {
    id: 5,
    title: "Bloco de Motor",
    description: "Bloco de motor para tratores da linha amarela. Estrutura robusta construída em ferro fundido, projetada para resistir às condições mais severas de operação em campo.",
    image: "/lovable-uploads/aa7ec1e8-26d1-40bc-858f-d9f07b2dbabe.png"
  },
  {
    id: 6,
    title: "Bomba Hidráulica Kawasaki",
    description: "Bomba hidráulica Kawasaki para sistemas de escavadeiras e carregadeiras. Oferece fluxo constante mesmo em operações prolongadas, garantindo a potência necessária para os implementos hidráulicos.",
    image: "/lovable-uploads/6930abe0-2a06-4290-908d-34c472985a52.png"
  }
];

const Products = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="products" className="section bg-gray-50 py-16 md:py-24">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Produtos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Peças e componentes de qualidade
          </h2>
          <p className="text-gray-600 text-lg">
            Confira alguns dos principais componentes que fornecemos para tratores e máquinas pesadas,
            com mais de 50.000 itens disponíveis para pronta entrega.
          </p>
        </div>
        
        {/* Desktop View - Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 animate-fade-in">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-gray-600">
                  {product.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <a href="#contact" className="text-orange-600 hover:text-orange-700 font-medium text-sm flex items-center">
                  Solicitar orçamento
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem key={product.id}>
                  <Card className="overflow-hidden border-gray-100">
                    <div className="aspect-square overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{product.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm text-gray-600">
                        {product.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <a href="#contact" className="text-orange-600 hover:text-orange-700 font-medium text-sm flex items-center">
                        Solicitar orçamento
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative inset-auto left-0 right-0 mx-2" />
              <CarouselNext className="relative inset-auto left-0 right-0 mx-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Products;
