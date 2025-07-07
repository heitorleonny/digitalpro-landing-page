import { Star, TrendingUp, Users } from "lucide-react";


const Hero = () => {
    return (
        <section id='home' className="pt-16 bg-gradient-to-r from-blue-600 to bg-purple-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Transforme seu negócio com <span className="text-yellow-400">Marketing Digital</span>
                        </h2>

                        <p className="text-xl mb-8 text-blue-100">Aumente suas vendas em até 300% com nossas estratégias comprovadas de marketing digital. 
              Resultados garantidos em 90 dias ou seu dinheiro de volta!</p>

              <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-amber-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors">Quero Meus Resultados</button>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">Ver Case Studies</button>
                        </div>
                    </div>
                        <div className="relative">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <div className="space-y-6" >
                                <div className="flex items-cente gap-4">
                                    <div className="bg-green-500 rounded-full p-3">
                                        <TrendingUp size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">+300% ROI</h3>
                                        <p className="text-blue-100">Retorno médio em 6 meses</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-blue-400 rounded-full p-3">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">500 clientes</h3>
                                        <p className="text-blue-100">Satisfeitos e fidelizados</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-yellow-400 rounded-full p-3">
                                        <Star size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">4.9/5 Estrelas</h3>
                                        <p className="text-blue-100">Avaliação dos clientes</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;