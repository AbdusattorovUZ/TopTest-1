import React from "react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">TopTest</h1>
        <p className="text-lg md:text-xl mb-8">
          TopTest sayti orqali 1-sinfdan 11-sinfgacha bo'lgan testlar bilan
          bilimlaringizni sinab ko'ring va yangi mavzularni o'rganing.
          Platformamiz o'quvchilarga o'ziga xos testlarni taqdim etadi,
          muvaffaqiyatli natijalar olish uchun boshlash juda oson.
        </p>
      </div>
    </div>
  );
};

export default Hero;
