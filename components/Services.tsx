import { Mail, TrendingUp, Users } from "lucide-react";
import { title } from "process";

const Services = () => {

    const services = [
        {
            icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
            title: "SEO & SEM",
            description: "Apareça no topo do Google e aumente sua visibilidade online com estratégias de SEO e links patrocinados.",
            price: "A partir de R$ 1.500/mês"
        },
        {
            icon: <Users className="w-12 h-12 text-blue-600" />,
            title: "Social Media",
            description: "Gestão completa das suas redes sociais com conteúdo estratégico que converte seguidores em clientes.",
            price: "A partir de R$ 1.200/mês"
        },
        {
            icon: <Mail className="w-12 h-12 text-blue-600" />,
            title: "E-mail Marketing",
            description: "Automações inteligentes que nutrem seus leads e aumentam as vendas através de e-mails personalizados.",
            price: "A partir de R$ 800/mês"
        },
    ]

    return (
        <section id="servicos" className="py-20 bg-gray-50">
            <div className="max-x-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Nossos Serviços
                    </h2>

                    <p className="text-xl text-gray-600 max-x-2xl mx-auto">
                        Soluções completas para levar seu negócio ao próximo nível
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transiction-shadow duration-300 hover:-translate-y-1 transform transition-transform"
                        >
                            <div className="mb-6">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="flex items-center justify-between">
                                <span className="text-lg font-semibold text-blue-600">
                                    {service.price}
                                </span>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                                    Saiba Mais
                                </button>
                            </div>
                        </div>
                    )) }
                </div>

                <div className="text-center mt-16">
                    <div className="bg-blue-600 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">
                            Não encontrou o que precisa?
                        </h3>
                        <p className="text-blue-100 mb-6 text-lg">Oferecemos soluções personalizadas para cada tipo de negócio</p>
                        <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors">Fale com um Especialista</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;