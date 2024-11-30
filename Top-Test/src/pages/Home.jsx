import React from "react";
import { Link } from "react-router-dom";
import { subjects } from "../data";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen] bg-gray-300 flex-col">
      {/* Header */}
      <Header />
      {/* Hero*/}
      <Hero />
      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 p-8">
          {subjects.map((subject, index) => (
            <Link
              key={index}
              to={`/class/${subject.name}`}
              className="bg-white shadow-lg rounded-xl hover:text-white p-8 text-center text-lg font-semibold hover:bg-gradient-to-br from-blue-500 to-green-500 hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out w-[256px] h-[280px]"
            >
              <div className="bg-blue-50 p-6 rounded-full mb-4 shadow-md transition-transform duration-300 ease-in-out hover:scale-110">
                <img
                  src={subject.logo}
                  alt={`${subject.name} logo`}
                  className="w-24 h-24 mx-auto"
                />
              </div>
              <p className="text-xl font-bold hover:text-white">
                {subject.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
