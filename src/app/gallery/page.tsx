export default function Gallery() {
  const images = [
    { src: "/convocation_2.jpg", alt: "Convocation Drone Flight Wide", colSpan: "md:col-span-2" },
    { src: "/drone_flight.jpg", alt: "Drone Action Shot", colSpan: "md:col-span-1" },
    { src: "/convocation_1.jpg", alt: "Convocation Pilot", colSpan: "md:col-span-1" },
    { src: "/expo_drone.jpg", alt: "Bharat Shiksha Expo Hardware", colSpan: "md:col-span-2" },
    { src: "/expo_team.jpg", alt: "Bharat Shiksha Expo Team", colSpan: "md:col-span-1" },
    { src: "/hardware_stack.jpg", alt: "Hardware Components Stack", colSpan: "md:col-span-1" },
    { src: "/radiomaster.jpg", alt: "RadioMaster Controller", colSpan: "md:col-span-2" },
  ];

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
            Visual Records
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-100 mb-6">
            Field Operations & Hardware.
          </h1>
          <p className="text-lg text-zinc-400 font-light max-w-2xl leading-relaxed">
            Live deployments, hardware prototyping, and team showcases from the field.
          </p>
        </div>

        {/* MASONRY/BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`relative group rounded-[2rem] overflow-hidden border border-white/5 bg-zinc-950/50 backdrop-blur-sm shadow-xl min-h-[300px] md:min-h-[400px] ${image.colSpan}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
              />
              
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10 pointer-events-none z-20 transition-all duration-500 group-hover:ring-orange-500/30"></div>
              
              {/* Subtle hover label */}
              <div className="absolute bottom-6 left-6 z-30 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="px-3 py-1.5 rounded-md border border-white/20 bg-black/50 backdrop-blur-md text-[11px] font-mono text-white shadow-lg">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
