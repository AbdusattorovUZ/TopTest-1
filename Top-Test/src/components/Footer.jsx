import React from 'react';
import telegram from '../img/telegram.png';
import instagram from '../img/instagram.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Logo and Site Info */}
          <div className="flex flex-col items-center sm:items-start mb-6 sm:mb-0">
            <h1 className="text-3xl font-semibold text-white mb-2">TopTest.uz</h1>
            <p className="text-sm text-blue-100">Siz uchun eng yaxshi test va bilim sinovlari platformasi.</p>
          </div>

            <h2 className='text-3xl font-semibold'>Created by Abdusattorov</h2>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-6">
            <a href="https://t.me/Abdusattorov_Asilbek" className="text-blue-200 hover:text-blue-100">
              <i className="fab fa-telegram text-2xl"><img className='w-12 h-12' src={telegram} alt="telegram-logo" /></i>
            </a>
            <a href="https://www.instagram.com/abdusattorov_1307/?__pwa=1#" className="text-blue-200 hover:text-blue-100">
              <i className="fab fa-instagram-square text-2xl"><img className='w-12 h-12' src={instagram} alt="instagram-logo" /></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
