import React from 'react';

const CTA = () => {
  return (
    <section className="relative py-32 bg-background-dark overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-white shiny-white mb-8 tracking-tighter italic">Ready to secure your airspace?</h2>
        <p className="text-lg text-slate-400 mb-12">
          Join a global network of smart cities and industrial hubs powered by the AirShield ecosystem. 
          Deployment in under 24 hours.
        </p>
        <button className="bg-primary text-black px-12 py-5 rounded-lg font-black text-xl uppercase tracking-[0.2em] neon-glow-primary hover:scale-105 transition-all">
          Deploy Now
        </button>
      </div>
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none grid-bg"></div>
    </section>
  );
};

export default CTA;
