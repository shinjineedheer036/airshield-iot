import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <div className="text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl font-bold">shield_with_heart</span>
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white font-display uppercase italic">AirShield</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#features">Features</a>
          <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#">Solutions</a>
          <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#">Data</a>
        </div>
        <div>
          <Link to="/login">
            <button className="px-6 py-2 rounded-lg text-sm font-bold text-primary neon-border hover:bg-primary/10 transition-all uppercase tracking-widest">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
