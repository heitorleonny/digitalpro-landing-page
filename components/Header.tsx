'use client';
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';



const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <nav className='bg-white shadow-sm fixed w-full top-0 z-50'>
            <div className='max-x-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                <div className='flex items-center'>
                    <h1 className='text-2xl font-bold text-blue-600'>DigitalPro</h1>
                </div>

            <div className='hidden md:flex items-center space-x-8'>
                <a href="#home" className='text-gray-700 hover:text-blue-600 transition-colors'>Início</a>
                <a href="#servicos" className='text-gray-700 hover:text-blue-600 transition-colors'>Serviços</a>
                <a href="#sobre" className='text-gray-700 hover:text-blue-600 transition-colors'>Sobre</a>
                <a href="#contato" className='text-gray-700 hover:text-blue-600 transition-colors'>Contato</a>
                <button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer'>Orçamento Grátis</button>
            </div>

            <div className='md:hidden'>
                <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='text-gray-700 hover:text-blue-600'
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            </div>
            </div>

        {isMenuOpen && (
            <div className='md:hidden bg-white border-t'>
                <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                    <a href="#home" className='block px-3 py-2 text-gray-700 hover:text-blue-600'>Início</a>
                    <a href="#servicos" className='block px-3 py-2 text-gray-700 hover:text-blue-600'>Serviços</a>
                    <a href="#sobre" className='block px-3 py-2 text-gray-700 hover:text-blue-600'>Sobre</a>
                    <a href="#contato" className='block px-3 py-2 text-gray-700 hover:text-blue-600'>Contato</a>
                    <button className='w-full text-left bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer'>Orçamento Grátis</button>
                </div>
            </div>
        )}
        </nav>
    )
}

export default Header;
