import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#030303] text-white overflow-hidden pb-32 flex items-center">
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-grid z-0 opacity-20 pointer-events-none"></div>
      
      {/* Ambient Top Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full text-center">
        
        {/* HEADER */}
        <div className="mb-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-[10px] font-mono tracking-widest uppercase mb-6 cursor-default">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse shadow-[0_0_10px_#FF8000]"></span>
            Secure Uplink
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-zinc-100 mb-6">
            Initiate Contact.
          </h1>
          <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            Whether you are looking to collaborate on advanced UAV architectures, discuss AI automation, or explore hardware engineering opportunities, my inbox is always open.
          </p>
        </div>

        {/* INTERACTIVE CONTACT LINKS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          
          <a 
            href="mailto:contact@velorix.com" 
            className="w-full sm:w-auto px-10 py-5 glass-panel flex items-center justify-center gap-4 hover:scale-105 transition-all group cursor-pointer"
          >
            <svg className="w-6 h-6 text-zinc-400 group-hover:text-orange-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <span className="text-lg font-medium text-zinc-200 group-hover:text-white">Email Address</span>
          </a>

          <a 
            href="#" 
            className="w-full sm:w-auto px-10 py-5 glass-panel flex items-center justify-center gap-4 hover:scale-105 transition-all group cursor-pointer"
          >
            <svg className="w-6 h-6 text-zinc-400 group-hover:text-[#0077b5] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <span className="text-lg font-medium text-zinc-200 group-hover:text-white">LinkedIn Profile</span>
          </a>

        </div>

        {/* RESUME DOWNLOAD */}
        <div className="mt-16">
          <a href="/resume.pdf" download="Shantanu_Resume.pdf" className="inline-flex items-center gap-3 text-sm font-mono text-zinc-500 hover:text-orange-400 transition-colors uppercase tracking-widest border-b border-transparent hover:border-orange-400 pb-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Download Technical Resume
          </a>
        </div>

      </div>
    </main>
  );
}
