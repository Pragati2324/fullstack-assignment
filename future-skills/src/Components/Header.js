import React from 'react';
import logo from '../assets/logo.png';

const Header=()=> {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center rounded-t-2xl">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 ml-16 mb-2" />
        <h1 className="text-xl font-bold">Abstract | Help Center</h1>
      </div>
      <button className="bg-gray-600 border border-gray-400 px-6 py-2 rounded-lg w-48 mr-28">
        Submit a request
      </button>
    </header>
  );
}

export default Header;
