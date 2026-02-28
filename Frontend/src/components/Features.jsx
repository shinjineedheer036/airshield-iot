import React from 'react';

const FeatureCard = ({ icon, title, description, linkText }) => (
  <div className="group p-8 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/60 transition-all duration-500 hover:-translate-y-2">
    <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-8 group-hover:neon-glow-primary transition-all">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <h4 className="text-2xl font-bold text-white mb-4">{title}</h4>
    <p className="text-slate-400 leading-relaxed">{description}</p>
    <div className="mt-8 flex items-center text-primary font-bold text-sm uppercase tracking-widest group-hover:gap-2 transition-all cursor-pointer">
      {linkText} <span className="material-symbols-outlined">arrow_right_alt</span>
    </div>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: "sensors",
      title: "IoT Sensing",
      description: "Military-grade hardware precision and seamless real-time connectivity for high-density urban and industrial environments.",
      linkText: "Explore Sensors"
    },
    {
      icon: "psychology",
      title: "ML Predictions",
      description: "Neural networks trained on global atmospheric data to provide proactive analysis and hyper-local air quality forecasting.",
      linkText: "View Analytics"
    },
    {
      icon: "notification_important",
      title: "Instant Alerts",
      description: "Zero-latency safety notifications and automated hardware triggers to mitigate risks before they become threats.",
      linkText: "Protocol Setup"
    }
  ];

  return (
    <section id="features" className="relative z-10 py-32 bg-black border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4">Core Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Advanced IoT Ecosystem</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
