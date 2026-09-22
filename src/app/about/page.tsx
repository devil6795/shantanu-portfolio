import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-[#030303] text-white overflow-hidden pb-32">
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-grid z-0 opacity-20 pointer-events-none"></div>
      
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 flex flex-col">
        
        {/* HEADER */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-[10px] font-mono tracking-widest uppercase mb-6 cursor-default">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_10px_#FF8000]"></span>
            System Architecture
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-100 mb-6">
            The Engineer Behind The Systems.
          </h1>
          <p className="text-lg text-zinc-400 font-light max-w-3xl leading-relaxed">
            With a foundation in Electronics & Communication Engineering (ECE), my focus is bridging the physical and digital worlds. From building combat robots to founding <strong>VELORIX UAV</strong>, I specialize in the rapid R&D of autonomous hardware and intelligent workflows.
          </p>
        </div>

        {/* CORE PILLARS BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
          
          {/* PILLAR 1: UAV & PROPULSION (WIDE) */}
          <div className="md:col-span-8 glass-panel p-8 sm:p-12 group flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg className="w-24 h-24 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            </div>
            <div>
              <h2 className="text-2xl font-medium tracking-tight mb-4 text-zinc-100 group-hover:text-orange-400 transition-colors">UAV Engineering & Propulsion</h2>
              <p className="text-zinc-400 font-light leading-relaxed mb-8 max-w-xl">
                My strongest technical domain. Designing and manufacturing specialized UAV platforms, from agile cine-lifters to heavy-lift agricultural drones. Deep expertise in flight control architecture, propulsion mathematics, and frame kinematics.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["ArduPilot", "Pixhawk 6X", "BLDC Motor R&D", "Telemetry", "Power Budgets"].map(tag => (
                <span key={tag} className="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-[11px] font-mono text-zinc-300">{tag}</span>
              ))}
            </div>
          </div>

          {/* PILLAR 2: ROBOTICS (SQUARE) */}
          <div className="md:col-span-4 glass-panel p-8 sm:p-12 group flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-medium tracking-tight mb-4 text-zinc-100 group-hover:text-orange-400 transition-colors">Hardware & Robotics</h2>
              <p className="text-zinc-400 font-light leading-relaxed mb-8 text-sm">
                Roots in competitive robotics (RoboWar, RoboSoccer). Integrating complex sensors, actuators, and control systems.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["ESP32", "TF-Luna LiDAR", "PCB Design", "Sensor Fusion"].map(tag => (
                <span key={tag} className="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-[11px] font-mono text-zinc-300">{tag}</span>
              ))}
            </div>
          </div>

          {/* PILLAR 3: AI AGENTS (SQUARE) */}
          <div className="md:col-span-4 glass-panel p-8 sm:p-12 group flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-medium tracking-tight mb-4 text-zinc-100 group-hover:text-orange-400 transition-colors">AI & Automation</h2>
              <p className="text-zinc-400 font-light leading-relaxed mb-8 text-sm">
                Beyond physical machines, I build autonomous software agents. From market intelligence scrapers to fully functional AI voice call assistants.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Voice AI", "N8N Pipelines", "LLM Integration", "Android/Kotlin"].map(tag => (
                <span key={tag} className="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-[11px] font-mono text-zinc-300">{tag}</span>
              ))}
            </div>
          </div>

          {/* PILLAR 4: R&D & PROTOTYPING (WIDE) */}
          <div className="md:col-span-8 glass-panel p-8 sm:p-12 group flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 group-hover:bg-orange-500/10 transition-colors"></div>
            <div>
              <h2 className="text-2xl font-medium tracking-tight mb-4 text-zinc-100 group-hover:text-orange-400 transition-colors">Rapid Prototyping & R&D</h2>
              <p className="text-zinc-400 font-light leading-relaxed mb-8 max-w-xl">
                My workflow is defined by rapid iteration: Problem → Research → Prototype → Test → Failure → Debug. Whether it's testing new 2207 motor architectures, CNC laser cutting, or writing experimental control logic.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 relative z-10">
              {["3D Printing", "CNC / Laser Cutting", "Hardware Debugging", "Systems Security"].map(tag => (
                <span key={tag} className="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-[11px] font-mono text-zinc-300">{tag}</span>
              ))}
            </div>
          </div>

        </div>

        </div>

      </div>
    </main>
  );
}
