import React from 'react';
import logo from '../asset/logo.png';
import { PiHamburgerLight } from "react-icons/pi";
import { GiFullPizza } from "react-icons/gi";
import { LuCupSoda } from "react-icons/lu";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        {/* App Logo */}
        <div className="mb-8">
          <img src={logo} alt="App Logo" className="w-32" />
        </div>

        {/* Food Icons Animation */}
        <div className="flex space-x-8">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-slate-200 animate-bounce">
            <PiHamburgerLight size={32} className="text-red-500" />
          </div>
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-slate-200 animate-bounce-delay-100">
            <GiFullPizza size={32} className="text-yellow-500" />
          </div>
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-slate-200 animate-bounce-delay-200">
            <LuCupSoda size={32} className="text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;