import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-20 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-primary">shield_with_heart</span>
            <span className="text-2xl font-bold text-white tracking-tighter uppercase font-display">AirShield</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="text-slate-500 hover:text-primary transition-colors uppercase text-xs tracking-widest font-bold" href="#">Privacy Policy</a>
            <a className="text-slate-500 hover:text-primary transition-colors uppercase text-xs tracking-widest font-bold" href="#">Terms of Service</a>
            <a className="text-slate-500 hover:text-primary transition-colors uppercase text-xs tracking-widest font-bold" href="#">Hardware API</a>
            <a className="text-slate-500 hover:text-primary transition-colors uppercase text-xs tracking-widest font-bold" href="#">Contact Support</a>
          </div>
          <div className="flex gap-6">
            <a className="text-slate-500 hover:text-primary transition-all" href="#">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a className="text-slate-500 hover:text-primary transition-all" href="#">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a className="text-slate-500 hover:text-primary transition-all" href="#">
              <span className="material-symbols-outlined">terminal</span>
            </a>
          </div>
        </div>
        <div className="text-center text-slate-600 text-sm font-medium tracking-wide">
          © {new Date().getFullYear()} AIRSHIELD IOT SYSTEMS. ENGINEERED FOR PLANET EARTH.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
