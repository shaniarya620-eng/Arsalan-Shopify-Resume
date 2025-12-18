
import React, { useState } from 'react';
import { 
  Linkedin, 
  Globe, 
  ArrowRight, 
  Sparkles, 
  ExternalLink,
  TrendingUp
} from 'lucide-react';
import { PROJECTS, SKILLS, PROCESS } from './constants';
import { optimizeSummary } from './geminiService';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const GROWTH_DATA = [
  { month: 'Jan', conversion: 1.2 },
  { month: 'Feb', conversion: 1.5 },
  { month: 'Mar', conversion: 1.8 },
  { month: 'Apr', conversion: 2.1 },
  { month: 'May', conversion: 2.5 },
  { month: 'Jun', conversion: 3.1 },
];

const App: React.FC = () => {
  const [summary, setSummary] = useState(
    "Senior Shopify Expert & E-Commerce Growth Specialist with extensive experience engineering high-performance commerce ecosystems for global brands. Proven track record in scaling DTC enterprises through bespoke theme architecture, sophisticated Liquid development, and data-driven conversion rate optimization (CRO). Expert at bridging the gap between complex technical infrastructure and aggressive business growth objectives."
  );
  const [isOptimizing, setIsOptimizing] = useState(false);

  const handleOptimizeSummary = async () => {
    setIsOptimizing(true);
    const newSummary = await optimizeSummary(summary, "Senior Shopify Growth Consultant");
    setSummary(newSummary);
    setIsOptimizing(false);
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-[#1e293b] antialiased selection:bg-[#95BF47]/30">
      {/* Main Resume Canvas */}
      <main className="max-w-[1000px] mx-auto py-12 px-6 md:py-20 print:p-0">
        <div className="bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[2.5rem] overflow-hidden border border-slate-200/60 print:shadow-none print:border-none print:rounded-none">
          
          {/* Header Section - Refined Gradient & Depth */}
          <header className="relative bg-[#0f172a] text-white p-12 md:p-20 overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-8 bg-[#95BF47]" />
                <span className="text-[#95BF47] text-xs font-bold tracking-[0.3em] uppercase">
                  Executive Profile
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
                Arsalan <br className="hidden md:block" /> Yousaf
              </h1>
              <h2 className="text-xl md:text-2xl text-slate-400 font-light flex flex-wrap items-center gap-3">
                Senior Shopify Architect
                <span className="w-1.5 h-1.5 rounded-full bg-[#95BF47]" /> 
                Growth Engineering Lead
              </h2>
              <div className="mt-12 flex flex-wrap gap-6 items-center">
                <p className="text-lg text-slate-500 max-w-xl font-medium leading-relaxed border-l-2 border-slate-800 pl-6 italic">
                  “Engineering scalable, high-velocity commerce ecosystems where performance meets brand identity.”
                </p>
              </div>
            </div>
            
            {/* Visual Decorative Elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#95BF47]/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
          </header>

          {/* Core Content Grid */}
          <div className="p-12 md:p-20 space-y-20">
            
            {/* Professional Summary & AI Interaction */}
            <section>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="flex items-center gap-4">
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.25em]">Statement</h3>
                  <div className="h-px w-16 bg-slate-200" />
                </div>
                <button 
                  onClick={handleOptimizeSummary}
                  disabled={isOptimizing}
                  className="no-print group flex items-center gap-2 px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-[11px] font-bold text-slate-600 hover:bg-[#95BF47] hover:text-white hover:border-[#95BF47] transition-all duration-500 disabled:opacity-50"
                >
                  <Sparkles size={14} className="group-hover:rotate-12 transition-transform" />
                  {isOptimizing ? "Refining..." : "Refine with AI"}
                </button>
              </div>
              <p className="text-2xl md:text-3xl font-semibold leading-[1.4] text-slate-800 tracking-tight">
                {summary}
              </p>
            </section>

            {/* Performance Visualization Section */}
            <section className="relative group">
              <div className="bg-slate-50 rounded-[2rem] p-10 border border-slate-200 transition-all duration-500 hover:border-[#95BF47]/30 hover:shadow-xl hover:shadow-[#95BF47]/5">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <TrendingUp className="text-[#95BF47]" size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">Growth Optimization Performance</h3>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-slate-200">
                    Average Metrics
                  </span>
                </div>
                <div className="h-[240px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={GROWTH_DATA}>
                      <defs>
                        <linearGradient id="colorConversion" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#95BF47" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#95BF47" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="4 4" stroke="#e2e8f0" vertical={false} />
                      <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                      <YAxis stroke="#94a3b8" fontSize={12} hide />
                      <Tooltip 
                        contentStyle={{ 
                          borderRadius: '16px', 
                          border: 'none', 
                          boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
                          padding: '12px 16px'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="conversion" 
                        stroke="#95BF47" 
                        strokeWidth={4} 
                        dot={{ r: 6, fill: '#95BF47', strokeWidth: 3, stroke: '#fff' }} 
                        activeDot={{ r: 10, strokeWidth: 0 }}
                        animationDuration={2000}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-200">
                  <div>
                    <p className="text-2xl font-black text-slate-800">+158%</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Avg. Conversion Lift</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-slate-800">-40%</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Page Load Time</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-slate-800">99.9%</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Uptime Reliability</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-slate-800">$10M+</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Revenue Managed</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Core Skills Grid */}
            <section>
              <div className="flex items-center gap-4 mb-12">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.25em]">Technical Stack</h3>
                <div className="h-px flex-grow bg-slate-100" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SKILLS.map((skill, idx) => (
                  <div key={idx} className="p-8 rounded-3xl border border-slate-100 bg-white hover:border-[#95BF47]/20 hover:bg-slate-50/50 transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#95BF47]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="mb-6 p-4 rounded-2xl bg-slate-50 w-fit group-hover:bg-[#95BF47] group-hover:text-white transition-all duration-500 shadow-sm">
                      {/* Fix: Using React.cloneElement with specific props injection, now type-safe due to Skill icon being ReactElement<any> */}
                      {React.cloneElement(skill.icon, { className: "w-6 h-6 group-hover:text-white transition-colors" })}
                    </div>
                    <h4 className="font-bold text-xl mb-3 text-slate-800 group-hover:text-[#95BF47] transition-colors">{skill.name}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{skill.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience & Projects */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              
              {/* Left Column: Experience */}
              <div className="lg:col-span-5">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] mb-12">Experience</h3>
                <div className="space-y-16">
                  <div className="relative pl-10 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-slate-200">
                    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-[#95BF47] ring-4 ring-[#95BF47]/10" />
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-slate-800 text-xl">Freelance Shopify Architect</h4>
                      <span className="text-[10px] font-black text-[#95BF47] uppercase bg-[#95BF47]/5 px-3 py-1 rounded-full">Current</span>
                    </div>
                    <p className="text-xs font-bold text-slate-400 mb-6 uppercase tracking-widest">2018 — Present</p>
                    <p className="text-slate-600 text-base leading-relaxed font-medium">
                      Leading high-impact digital transformations for global commerce leaders. Orchestrating end-to-end migrations, custom theme architectures, and advanced application integrations that prioritize conversion velocity and operational efficiency.
                    </p>
                    <ul className="mt-6 space-y-3">
                      {['Shopify Plus Migration Expert', 'Bespoke Liquid Development', 'API-first Headless Solutions'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                          <div className="w-1 h-1 rounded-full bg-[#95BF47]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column: Projects */}
              <div className="lg:col-span-7">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] mb-12">Case Studies</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {PROJECTS.map((project, idx) => (
                    <a 
                      key={idx} 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex flex-col p-8 rounded-[2rem] border border-slate-100 bg-white hover:border-[#95BF47]/30 hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink size={14} className="text-[#95BF47]" />
                      </div>
                      <div className="mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#95BF47]" />
                        <span className="font-bold text-slate-800 tracking-tight">{project.name}</span>
                      </div>
                      <p className="text-xs text-slate-500 mb-6 flex-grow leading-relaxed font-medium">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="px-3 py-1 rounded-lg bg-slate-50 text-[9px] font-black text-slate-400 uppercase tracking-[0.1em]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Methodology */}
            <section className="pt-10">
              <div className="text-center mb-16">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] mb-4">The Methodology</h3>
                <h4 className="text-3xl font-bold text-slate-800">Strategic Implementation Framework</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {PROCESS.map((step, idx) => (
                  <div key={idx} className="relative text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-slate-200 text-slate-400 mb-6 group-hover:border-[#95BF47] group-hover:text-[#95BF47] group-hover:shadow-lg group-hover:shadow-[#95BF47]/10 transition-all duration-500">
                      {step.icon}
                    </div>
                    <h4 className="font-bold text-slate-800 mb-2">{step.title}</h4>
                    <p className="text-xs text-slate-500 font-medium px-4 leading-relaxed">{step.description}</p>
                    {idx < PROCESS.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-px bg-slate-100 -ml-8 z-0" />
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* CTA Footer - Refined & High-Ticket Feel */}
          <footer className="bg-slate-900 text-white p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">Scale your store <br /> with surgical precision.</h3>
              <p className="text-slate-400 mb-12 text-lg font-light leading-relaxed">
                Currently reviewing high-impact opportunities for Q3/Q4 2025. Available for architectural consultations and growth partnerships.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="mailto:contact@arsalan.yousaf"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-[#95BF47] text-slate-900 rounded-2xl font-black hover:bg-[#86ac3f] transition-all duration-300 shadow-xl shadow-[#95BF47]/20"
                >
                  Initiate Partnership
                  <ArrowRight size={18} />
                </a>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://www.linkedin.com/in/arsalan-yousaf-1a0a18215/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:text-[#95BF47] hover:bg-white/10 transition-all duration-300"
                    title="LinkedIn Profile"
                  >
                    <Linkedin size={22} />
                  </a>
                  <a 
                    href="#" 
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:text-[#95BF47] hover:bg-white/10 transition-all duration-300"
                    title="Main Website"
                  >
                    <Globe size={22} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Background Texture/Shape */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none select-none">
              <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-transparent blur-3xl scale-150" />
            </div>
          </footer>

        </div>

        {/* Executive Meta Info */}
        <div className="mt-16 text-center text-slate-400 text-[10px] font-black tracking-[0.4em] uppercase flex items-center justify-center gap-6">
          <span className="hover:text-[#95BF47] cursor-default transition-colors">Arsalan Yousaf</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#95BF47]" />
          <span className="hover:text-[#95BF47] cursor-default transition-colors">Shopify Excellence</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#95BF47]" />
          <span className="hover:text-[#95BF47] cursor-default transition-colors">EST. 2018</span>
        </div>
      </main>
    </div>
  );
};

export default App;