'use client';
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const benefits = [
    "Estratégias personalizadas para cada cliente",
    "Equipe certificada em Google e Facebook",
    "Relatórios detalhados e transparentes",
    "Suporte dedicado 24/7",
    "Garantia de resultados em 90 dias"
  ];

  const stats = [
    { number: "5+", label: "Anos de Experiência" },
    { number: "500+", label: "Clientes Atendidos" },
    { number: "1M+", label: "Leads Gerados" },
    { number: "98%", label: "Taxa de Sucesso" }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Lado Esquerdo - Conteúdo */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Por que escolher a DigitalPro?
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Somos uma agência especializada em marketing digital com mais de 5 anos de experiência. 
              Nossa missão é transformar pequenas e médias empresas em grandes sucessos digitais.
            </p>
            
            {/* Lista de Benefícios */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Botão CTA */}
            <div className="mt-8">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Conheça Nossa História
              </button>
            </div>
          </div>

          {/* Lado Direito - Card de Estatísticas */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Nossos Números</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-yellow-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-blue-100 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Depoimento em destaque */}
            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-2xl mb-2">⭐⭐⭐⭐⭐</div>
                <p className="text-blue-100 italic mb-4">
                  "A DigitalPro transformou nosso negócio! Aumentamos nossas vendas em 250% em apenas 4 meses."
                </p>
                <div className="text-yellow-400 font-semibold">
                  - João Silva, CEO da TechCorp
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção adicional - Certificações */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Certificações e Parcerias
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {/* Placeholders para logos de certificações */}
            <div className="bg-gray-100 rounded-lg p-6 h-20 flex items-center justify-center">
              <span className="text-gray-500 font-semibold">Google Partner</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 h-20 flex items-center justify-center">
              <span className="text-gray-500 font-semibold">Facebook Partner</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 h-20 flex items-center justify-center">
              <span className="text-gray-500 font-semibold">HubSpot Certified</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 h-20 flex items-center justify-center">
              <span className="text-gray-500 font-semibold">SEMrush Partner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;