import React from 'react';
import Header from './components/Header';
import './index.css';

function App() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      <Header />
      <main className="p-4">
        <div id="root">Welcome to bconto</div>
      </main>
      <footer className="bg-gray-800 text-gray-200 p-4">
        {/* Добавьте контент для футера */}
      </footer>
    </div>
  );
}

export default App;
