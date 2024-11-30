import React, { useState } from "react";
import gif from "../img/heart.gif";
import telegram from "../img/telegram.png";

const Header = () => {
  // Modal state management
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal open/close functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Donate Button */}
        <button
          className="flex items-center px-6 py-3 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-green-500 text-white text-lg font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 hover:shadow-xl transform hover:scale-105"
          onClick={openModal} // Open Modal
        >
          <span className="w-8 h-8 mr-3">
            <img
              className="rounded-full shadow-md"
              src={gif}
              alt="Donate Icon"
            />
          </span>
          Chin ko'ngildan
        </button>

        <a
          href="https://t.me/Abdusattorov_Asilbek"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center w-14 h-14 rounded-full bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transition-all duration-300 hover:w-52 hover:px-4 hover:shadow-xl transform hover:scale-105 group"
        >
          {/* Icon Wrapper */}
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-green-400 to-blue-500">
            <img
              className="w-8 h-8 shadow-sm transition-transform duration-300 group-hover:scale-110"
              src={telegram}
              alt="Telegram Icon"
            />
          </div>

          {/* Hidden Text */}
          <span className="absolute inset-y-0 left-16 flex items-center ml-10 opacity-0 text-white font-semibold text-lg transition-opacity duration-300 group-hover:opacity-100">
            Aloqa
          </span>
        </a>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="card-container relative p-6 rounded-lg shadow-lg w-96">
            {/* Close Button */}
            <button
              className="absolute left-[500px] bottom-[330px] text-4xl text-white"
              onClick={closeModal}
            >
              X
            </button>

            {/* Card */}
            <div className="card">
              {/* Front */}
              <div className="front relative bg-teal-900 text-white rounded-xl p-6 mb-4">
                <span className="block text-right font-bold text-xl">
                  Hamkorbank
                </span>
                <div className="set"></div>
                <p className="text-3xl font-mono text-yellow-400 mb-2">
                  9860 1606 0253 6759
                </p>
                <p className="text-xl text-yellow-400">XX / XX</p>
                <p className="text-xl text-yellow-400 mt-4">
                  Asilbek Abdusattorov
                </p>
                <span className="absolute bottom-4 right-4 px-3 py-1 text-yellow-400 bg-blue-900 rounded-md uppercase font-semibold">
                  Humo
                </span>
              </div>

              {/* Back */}
              <div className="back relative bg-teal-900 text-white rounded-xl p-6">
                <p className="text-xs uppercase mb-2">
                  Milliy banklararo protsessing markazi
                </p>
                <p className="text-xs mb-6">www.humocard.uz</p>
                <div className="w-40 h-8 bg-white mb-8"></div>
                <p className="text-xs uppercase">
                  Ushbu karta bankning mulkidir. Bank kartasi topilganida bankga
                  qaytarib berishingizni so'raymiz.
                </p>
                <p className="text-xs mt-2 uppercase">
                  Murojaat uchun <strong>(+998) 71 200 0888</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
