import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden hero-gradient">
      <div className="grid-floor"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase tracking-[0.2em] font-bold mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Next-Gen Environmental Security
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white shiny-white leading-tight mb-6 font-display italic tracking-tighter">
          Breathe Smarter <br />with <span className="text-primary">AirShield.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Real-time micro-level air pollution monitoring <br className="hidden md:block" /> & ML-based predictions for smart industrial hubs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="group relative px-10 py-5 bg-primary rounded-lg text-black font-black text-lg uppercase tracking-wider neon-glow-primary hover:scale-105 transition-transform">
            Get Started
          </button>
          <button className="px-10 py-5 rounded-lg text-white border border-white/20 font-bold text-lg hover:bg-white/5 transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined">play_circle</span>
            Watch Demo
          </button>
        </div>
      </div>
      {/* Abstract Visual Placeholder */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none">
        <div 
          className="w-full h-full bg-no-repeat bg-center bg-contain opacity-50" 
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBn_wJxj3mUuiF6jkIAUMtwQ7C4-Xiple2EhO1xY8bOhDR7l1ZSkoM0KNl4OQ6YIfAlhkv4-WurtJGKSd9CiF9fIaEQKh9LmixhJm9WQv1u35l0xXalrunzoJQGoxb9k2ScpwmC4L35fEXu_KZoQMyovddmSg4_WA4Odo40x0dqcHtZjmtWP6BSCsCEQagM01CLfu9oKNyVEqn-mm3EGeF1gekwktInr2zVrbM-HhCYp4RDUK0kXKi9qa8RNSwzhyDH_cJFbVgP4Ep')` }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
