import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030303] text-white overflow-hidden">
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-grid z-0 opacity-20 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Column: Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-[10px] font-mono tracking-widest uppercase mb-8 cursor-default hover:bg-orange-500/10 hover:scale-105 transition-all">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse shadow-[0_0_10px_#FF8000]"></span>
              Autonomous Systems Engineer
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-zinc-100 leading-[1.1]">
              Building the future of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-600">unmanned flight.</span>
            </h1>
            
            <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-xl mb-10">
              I am <strong className="text-white font-medium">Shantanu Krishnatray</strong>. Multidisciplinary builder bridging UAV engineering, robotics, and emerging AI technologies. Founder & CEO of VELORIX UAV.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
              <Link href="/projects" className="px-8 py-4 bg-white text-black rounded-full font-medium text-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Explore My Work
              </Link>
              <Link href="/contact" className="px-8 py-4 rounded-full border border-white/10 text-zinc-300 font-medium text-sm hover:text-white hover:bg-white/5 hover:border-white/30 transition-all">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right Column: Beautiful Image & Interactive Ecosystem */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-16 lg:mt-0">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-orange-600/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
            
            {/* Image Container */}
            <div className="relative w-[280px] h-[380px] sm:w-[400px] sm:h-[500px] z-10">
              
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-sm shadow-2xl z-10 hover:border-orange-500/30 transition-colors duration-500">
                <img 
                  src="/profile.jpg" 
                  alt="Shantanu Krishnatray"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10 pointer-events-none"></div>
              </div>

              {/* INTERACTIVE BUBBLES - FOREGROUND (Crisp & Large) */}
              <div className="absolute -top-6 -left-8 sm:-left-12 z-20 animate-float">
                <div className="px-5 py-2.5 rounded-full border border-white/10 bg-zinc-950/80 backdrop-blur-md text-xs font-mono text-zinc-300 hover:scale-110 hover:border-orange-500/50 hover:text-white transition-all cursor-default shadow-xl flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-orange-500 transition-colors"></span>
                  Pixhawk 6X
                </div>
              </div>

              <div className="absolute top-[20%] -right-10 sm:-right-16 z-20 animate-float-delayed">
                <div className="px-5 py-2.5 rounded-full border border-white/10 bg-zinc-950/80 backdrop-blur-md text-xs font-mono text-zinc-300 hover:scale-110 hover:border-orange-500/50 hover:text-white transition-all cursor-default shadow-xl flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-orange-500 transition-colors"></span>
                  ArduPilot
                </div>
              </div>

              <div className="absolute bottom-[25%] -left-6 sm:-left-12 z-20 animate-float-slow">
                <div className="px-5 py-2.5 rounded-full border border-white/10 bg-zinc-950/80 backdrop-blur-md text-xs font-mono text-zinc-300 hover:scale-110 hover:border-orange-500/50 hover:text-white transition-all cursor-default shadow-xl flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-orange-500 transition-colors"></span>
                  ESP32 & LiDAR
                </div>
              </div>

              <div className="absolute -bottom-6 right-2 sm:-right-4 z-20 animate-float">
                <div className="px-5 py-2.5 rounded-full border border-white/10 bg-zinc-950/80 backdrop-blur-md text-xs font-mono text-zinc-300 hover:scale-110 hover:border-orange-500/50 hover:text-white transition-all cursor-default shadow-xl flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-orange-500 transition-colors"></span>
                  N8N Automation
                </div>
              </div>

              {/* INTERACTIVE BUBBLES - HIGHLIGHT (Glowing) */}
              <div className="absolute -top-12 right-4 sm:right-10 z-30 animate-float-delayed">
                <Link href="/projects" className="px-5 py-2.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-xl text-xs font-mono text-orange-200 hover:scale-110 hover:border-orange-500 hover:text-white hover:bg-orange-500/20 transition-all cursor-pointer shadow-[0_0_20px_rgba(255,128,0,0.15)] flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                  Founder @ VELORIX
                </Link>
              </div>

              {/* INTERACTIVE BUBBLES - BACKGROUND (Blurred for depth) */}
              <div className="absolute top-[40%] -left-16 sm:-left-24 z-0 animate-float">
                <div className="px-4 py-2 rounded-full border border-white/5 bg-zinc-950/40 backdrop-blur-sm text-[10px] font-mono text-zinc-500 hover:scale-110 hover:border-orange-500/30 hover:text-white hover:bg-zinc-950/80 transition-all cursor-default opacity-60 hover:opacity-100 flex items-center gap-2">
                  Heavy-Lift Propulsion
                </div>
              </div>

              <div className="absolute bottom-[10%] -right-12 sm:-right-20 z-0 animate-float-slow">
                <div className="px-4 py-2 rounded-full border border-white/5 bg-zinc-950/40 backdrop-blur-sm text-[10px] font-mono text-zinc-500 hover:scale-110 hover:border-orange-500/30 hover:text-white hover:bg-zinc-950/80 transition-all cursor-default opacity-60 hover:opacity-100 flex items-center gap-2">
                  Voice AI
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Section: Interactive Cards */}
        <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-6 w-full border-t border-white/5 pt-12">
          
          <Link href="/projects" className="flex flex-col gap-3 group p-6 rounded-3xl border border-transparent hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-medium text-white group-hover:text-orange-400 transition-colors">UAV Systems</span>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all">
                <svg className="w-4 h-4 text-zinc-500 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
            <span className="text-sm text-zinc-500 font-light leading-relaxed">ArduPilot, Pixhawk architectures & custom heavy-lift propulsion.</span>
          </Link>

          <Link href="/about" className="flex flex-col gap-3 group p-6 rounded-3xl border border-transparent hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-medium text-white group-hover:text-orange-400 transition-colors">Robotics</span>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all">
                <svg className="w-4 h-4 text-zinc-500 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
            <span className="text-sm text-zinc-500 font-light leading-relaxed">ESP32 microcontrollers, LiDAR integration, & physical actuation.</span>
          </Link>

          <Link href="/about" className="flex flex-col gap-3 group p-6 rounded-3xl border border-transparent hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-medium text-white group-hover:text-orange-400 transition-colors">AI Agents</span>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all">
                <svg className="w-4 h-4 text-zinc-500 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
            <span className="text-sm text-zinc-500 font-light leading-relaxed">Voice intelligence, N8N data pipelines & advanced workflow automation.</span>
          </Link>

        </div>

      </div>
    </main>
  );
}
