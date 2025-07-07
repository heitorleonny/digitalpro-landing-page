import { ArrowRight } from "lucide-react";
import { useState } from "react";

const Contact = ()=> {

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        empresa: ''
    });

    const handleSubmit = (e: any)=> {
        e.preventDefault();
        alert('Formulário enviado!')
        console.log('Dados enviados:', formData);
    };

    const handleInputChange = (e: any)=> {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contato" className="py-20 bg-gray-50">
            <div className="max-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Pronto para Crescer?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Entre em contato conosco e receba um diagnóstico gratuito do seu negócio
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Solicite seu Orçamento Gratuito
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Nome completo
                                </label>
                                <input type="text" 
                                name="nome"
                                value={FormData.nome}
                                onChangeCapture={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Seu nome completo"
                                />
                            </div>

                        <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nome da sua empresa"
                  />
                </div>
                
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  Enviar Solicitação
                  <ArrowRight size={20} />
                </button>

                        </div>
                    </div>
            </div>
            
            </div>
            
        </section>
    )
}

export default Contact;