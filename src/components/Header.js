// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-200 shadow p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">bconto</div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-gray-700 hover:text-blue-600">Home</a></li>
          <li><a href="/product" className="text-gray-700 hover:text-blue-600">Product</a></li>
          <li><a href="/integrations" className="text-gray-700 hover:text-blue-600">Integrations</a></li>
          <li><a href="/teaching" className="text-gray-700 hover:text-blue-600">Teaching</a></li>
          <li><a href="/prices" className="text-gray-700 hover:text-blue-600">Prices</a></li>
          <li><a href="/accounting-companies" className="text-gray-700 hover:text-blue-600">Accounting Companies</a></li>
        </ul>
      </nav>
      <div className="space-x-2">
        <button onClick={() => window.location.href = '/login'} className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
        <button onClick={() => window.location.href = '/register'} className="bg-green-500 text-white px-4 py-2 rounded">Register</button>
        <button onClick={() => window.location.href = '/dashboard'} className="bg-red-500 text-orange-500 px-4 py-2 rounded-full">Enter without Registration</button>
      </div>
    </header>
  );
}

export default Header;
