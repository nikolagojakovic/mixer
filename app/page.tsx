'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ChefHat, Cpu, Zap, Shield, BarChart3, Users, ArrowRight, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-secondary-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
              <ChefHat size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-primary">MIXER</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#research" className="text-sm font-medium hover:text-primary transition-colors">Research</a>
            <a href="#execution" className="text-sm font-medium hover:text-primary transition-colors">Execution</a>
            <a href="#platform" className="text-sm font-medium hover:text-primary transition-colors">Platform</a>
            <button className="bg-cta text-white px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-cta/20">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-secondary-light p-4 flex flex-col gap-4"
        >
          <a href="#research" className="text-lg font-medium py-2">Research</a>
          <a href="#execution" className="text-lg font-medium py-2">Execution</a>
          <a href="#platform" className="text-lg font-medium py-2">Platform</a>
          <button className="bg-cta text-white px-6 py-3 rounded-full text-center font-bold">
            Get Started
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cta/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-light text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <Zap size={14} className="fill-current" />
              Next-Gen AI Infrastructure
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-secondary-dark">
              Deep research. <br />
              <span className="text-primary">Flawless execution.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              We are building the foundation for the next era of intelligence. MIXER combines cutting-edge AI research with industrial-grade platform execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-cta text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-xl shadow-cta/25 flex items-center justify-center gap-2">
                Explore the Platform <ArrowRight size={20} />
              </button>
              <button className="bg-white border-2 border-secondary-light text-secondary-dark px-8 py-4 rounded-full text-lg font-bold hover:bg-secondary-light/20 transition-colors">
                Read our Research
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl border border-secondary-light/50 p-4 overflow-hidden aspect-[4/3]">
              <Image 
                src="https://picsum.photos/seed/mixer-ai/800/600" 
                alt="AI Platform Dashboard" 
                fill
                className="rounded-2xl object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/20 to-transparent pointer-events-none" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cta/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Cpu size={28} className="text-primary" />,
      title: "Neural Architecture",
      description: "Proprietary models optimized for high-throughput enterprise workloads."
    },
    {
      icon: <Shield size={28} className="text-primary" />,
      title: "Secure Execution",
      description: "Air-gapped environments for sensitive data processing and model training."
    },
    {
      icon: <BarChart3 size={28} className="text-primary" />,
      title: "Real-time Analytics",
      description: "Deep visibility into model performance and resource utilization."
    },
    {
      icon: <Users size={28} className="text-primary" />,
      title: "Collaborative R&D",
      description: "Integrated tools for research teams to iterate on models at scale."
    }
  ];

  return (
    <section id="platform" className="py-24 bg-secondary-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-secondary-dark">The MIXER Advantage</h2>
          <p className="text-lg text-gray-600">
            We bridge the gap between theoretical AI research and practical, scalable platform implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl border border-secondary-light shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-secondary-light/30 rounded-2xl flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-secondary-dark">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-primary text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-white h-full" />
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-4xl lg:text-6xl font-black mb-2">99.9%</div>
            <div className="text-primary-foreground/80 font-bold uppercase tracking-widest text-xs">Uptime Guarantee</div>
          </div>
          <div>
            <div className="text-4xl lg:text-6xl font-black mb-2">10ms</div>
            <div className="text-primary-foreground/80 font-bold uppercase tracking-widest text-xs">Avg Latency</div>
          </div>
          <div>
            <div className="text-4xl lg:text-6xl font-black mb-2">500+</div>
            <div className="text-primary-foreground/80 font-bold uppercase tracking-widest text-xs">Research Papers</div>
          </div>
          <div>
            <div className="text-4xl lg:text-6xl font-black mb-2">24/7</div>
            <div className="text-primary-foreground/80 font-bold uppercase tracking-widest text-xs">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-secondary-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary">
                <ChefHat size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tighter">MIXER</span>
            </div>
            <p className="text-gray-400 max-w-sm text-lg mb-8">
              Deep research and execution in the AI platform space. Building the intelligence layer of tomorrow.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Platform</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Research Hub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Model API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 flex flex-col md:row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2024 MIXER AI. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      
      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary-light/30 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cta/10 blur-[100px] rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -ml-32 -mb-32" />
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-secondary-dark relative z-10">
              Ready to mix intelligence <br />into your workflow?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto relative z-10">
              Join the leading research teams and enterprises building on the MIXER platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="bg-cta text-white px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform shadow-2xl shadow-cta/30">
                Get Started Now
              </button>
              <button className="bg-white text-secondary-dark px-10 py-5 rounded-full text-xl font-bold border-2 border-secondary-light hover:bg-secondary-light/20 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
