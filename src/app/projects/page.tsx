import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: "fpv-drones",
      title: "Custom FPV Drones (3\" to 16\")",
      category: "Cinematic & Freestyle",
      description: "Designed, engineered, and fine-tuned a complete spectrum of First-Person View (FPV) drones. Ranging from ultra-agile 3-inch freestyle quads to massive 16-inch cine-lifters capable of carrying professional cinematic payloads.",
      tech: ["Betaflight", "ExpressLRS", "Video Transmission", "Custom Tuning"],
      image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=1200",
      featured: true,
    },
    {
      id: "agri-drone",
      title: "Precision Agricultural Drone",
      category: "AgriTech UAV",
      description: "Large-scale drone engineered for modern agriculture. Features autonomous waypoint navigation, specialized fluid distribution systems, and ruggedized architecture for reliable operation in harsh field conditions.",
      tech: ["ArduCopter", "GPS / RTK", "Payload Distribution", "Power Systems"],
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200",
      featured: false,
    },
    {
      id: "heavy-lift-drone",
      title: "Heavy-Lift Industrial Drone",
      category: "UAV Architecture",
      description: "Custom-built multirotor architecture utilizing ArduPilot and Pixhawk 6X. Designed for autonomous mapping, structural testing, and high-payload industrial deployments.",
      tech: ["ArduPilot", "Pixhawk 6X", "High-Torque BLDC", "Telemetry"],
      image: "https://images.unsplash.com/photo-1527443195645-1133f7f28990?q=80&w=1200",
      featured: false,
    },
    {
      id: "voice-ai-agent",
      title: "Autonomous Call Assistant",
      category: "AI Agents",
      description: "Android application powered by AI capable of monitoring calls, delivering AI-generated greetings, and intelligently extracting caller intent and data in real-time.",
      tech: ["Kotlin", "Voice AI", "Telephony API", "DataStore"],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800",
      featured: false,
    }
  ];

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
            Deployments
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-100 mb-6">
            Featured Projects
          </h1>
          <p className="text-lg text-zinc-400 font-light max-w-2xl leading-relaxed">
            A selection of my work spanning autonomous UAV architectures, embedded hardware integrations, and intelligent AI automation pipelines.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="flex flex-col gap-8 w-full">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative rounded-[2rem] overflow-hidden border border-white/5 bg-zinc-950/50 backdrop-blur-sm transition-all duration-500 hover:border-orange-500/30 hover:bg-zinc-900/80 ${
                project.featured ? "flex flex-col md:flex-row h-auto md:h-[450px]" : "flex flex-col md:flex-row h-auto md:h-[300px]"
              }`}
            >
              {/* Image Section */}
              <div className={`relative overflow-hidden ${project.featured ? "w-full md:w-3/5 h-64 md:h-full" : "w-full md:w-2/5 h-64 md:h-full"}`}>
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-950/90 via-zinc-950/20 to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                />
              </div>

              {/* Content Section */}
              <div className={`relative z-20 flex flex-col justify-center p-8 sm:p-12 ${project.featured ? "w-full md:w-2/5" : "w-full md:w-3/5"}`}>
                
                <div className="mb-4">
                  <span className="text-[10px] font-mono text-orange-400 tracking-widest uppercase uppercase bg-orange-500/10 px-3 py-1.5 rounded-full border border-orange-500/20">
                    {project.category}
                  </span>
                </div>
                
                <h2 className={`font-bold tracking-tight text-zinc-100 mb-4 group-hover:text-white transition-colors ${project.featured ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"}`}>
                  {project.title}
                </h2>
                
                <p className="text-zinc-400 font-light leading-relaxed mb-8">
                  {project.description}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-[11px] font-mono text-zinc-300 group-hover:border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
