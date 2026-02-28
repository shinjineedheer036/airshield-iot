import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <div className="min-h-screen bg-background-dark flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center pt-20">
        <div className="max-w-md w-full px-6 py-12 rounded-xl bg-primary/5 border border-primary/20 backdrop-blur-md">
          <h2 className="text-3xl font-black text-white shiny-white mb-8 text-center italic">Access AirShield</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-lg bg-black/50 border border-primary/20 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 rounded-lg bg-black/50 border border-primary/20 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
            <button className="w-full py-4 bg-primary text-black font-black uppercase tracking-wider rounded-lg neon-glow-primary hover:scale-105 transition-transform">
              Login to Console
            </button>
          </form>
          <p className="mt-8 text-center text-slate-500 text-sm">
            Don't have an account? <a href="/signup" className="text-primary hover:underline">Request Access</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
