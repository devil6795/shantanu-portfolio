export default function Achievements() {
  return (
    <main className="min-h-screen bg-[#030303] text-white overflow-hidden pb-32">
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-grid z-0 opacity-20 pointer-events-none"></div>
      
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 flex flex-col">
        
        {/* HEADER */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-[10px] font-mono tracking-widest uppercase mb-6 cursor-default">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_10px_#FF8000]"></span>
            Track Record
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-100 mb-6">
            Milestones & Recognition.
          </h1>
          <p className="text-lg text-zinc-400 font-light max-w-2xl leading-relaxed">
            Key achievements across competitive robotics, public exhibitions, and entrepreneurial ventures.
          </p>
        </div>

        {/* ACHIEVEMENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          
          {/* Achievement 1 */}
          <div className="glass-panel p-8 group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
              <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>
            <h3 className="text-xl font-medium tracking-tight mb-2 text-zinc-100 group-hover:text-orange-400 transition-colors">Bharat Shiksha Expo</h3>
            <p className="text-sm text-orange-400/80 font-mono tracking-widest uppercase mb-4">Exhibitor & Presenter</p>
            <p className="text-sm text-zinc-500 leading-relaxed mt-auto">Showcased custom UAV and robotics hardware to academics and industry leaders at the national expo.</p>
          </div>

          {/* Achievement 2 */}
          <div className="glass-panel p-8 group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
              <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            </div>
            <h3 className="text-xl font-medium tracking-tight mb-2 text-zinc-100 group-hover:text-orange-400 transition-colors">AKTU Techfest</h3>
            <p className="text-sm text-orange-400/80 font-mono tracking-widest uppercase mb-4">Robotics Competitor</p>
            <p className="text-sm text-zinc-500 leading-relaxed mt-auto">Engineered and piloted combat and competitive robots in regional RoboWar and RoboSoccer tournaments.</p>
          </div>

          {/* Achievement 3 */}
          <div className="glass-panel p-8 group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
              <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <h3 className="text-xl font-medium tracking-tight mb-2 text-zinc-100 group-hover:text-orange-400 transition-colors">VELORIX UAV</h3>
            <p className="text-sm text-orange-400/80 font-mono tracking-widest uppercase mb-4">Founder & CEO</p>
            <p className="text-sm text-zinc-500 leading-relaxed mt-auto">Established an indigenous UAV company focusing on autonomous systems, mapping, and heavy-lift platforms.</p>
          </div>

          {/* Achievement 4 */}
          <div className="glass-panel p-8 group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
              <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-xl font-medium tracking-tight mb-2 text-zinc-100 group-hover:text-orange-400 transition-colors">Live Deployments</h3>
            <p className="text-sm text-orange-400/80 font-mono tracking-widest uppercase mb-4">Flight Operations</p>
            <p className="text-sm text-zinc-500 leading-relaxed mt-auto">Successfully executed live UAV banner towing and aerial operations during the 2025 Convocation Ceremony.</p>
          </div>

        </div>
      </div>
    </main>
  );
}
