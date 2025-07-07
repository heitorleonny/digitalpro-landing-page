const Footer = ()=> {
    return (
        <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">DigitalPro</h3>
              <p className="text-gray-400">
                Transformando negócios através do marketing digital desde 2019.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>SEO & SEM</li>
                <li>Social Media</li>
                <li>E-mail Marketing</li>
                <li>Consultoria Digital</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre Nós</li>
                <li>Case Studies</li>
                <li>Blog</li>
                <li>Carreiras</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(11) 3333-3333</li>
                <li>contato@digitalpro.com</li>
                <li>Av. Paulista, 1000</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DigitalPro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    )
}

export default Footer