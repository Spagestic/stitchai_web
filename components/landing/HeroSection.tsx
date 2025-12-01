import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen bg-[#050505] text-white overflow-hidden font-sans selection:bg-blue-500/30">
      {/* --- Background Image & Overlay --- */}
      <div className="absolute inset-0 z-0">
        <Image
          fill
          src="/bg-1.png"
          alt="Aether Nebula Background"
          className="w-full h-full object-cover opacity-80"
        />
        {/* Gradient overlays to ensure text readability and blend the bottom */}
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-linear-to-r from-black/50 via-transparent to-transparent" />
      </div>

      {/* --- Navigation --- */}

      <nav className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <Image
              alt="Logo"
              className="h-8 w-8"
              height={40}
              src={"/logo_dark.png"}
              width={40}
            />
            <span className="text-lg font-bold tracking-widest uppercase">
              Stitch AI
            </span>
          </Link>
        </div>

        {/* Nav Links (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-gray-300">
          <a href="#" className="hover:text-white transition-colors">
            HOW IT WORKS
          </a>
          <a href="#" className="hover:text-white transition-colors">
            USE CASES
          </a>
          <a href="#" className="hover:text-white transition-colors">
            INSIGHTS
          </a>
          <a href="#" className="hover:text-white transition-colors">
            PRICING
          </a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <button className="px-5 py-2 text-xs font-medium border border-white/20 rounded hover:bg-white/10 transition-all">
              Sign In
            </button>
            <button className="px-5 py-2 text-xs font-medium border border-white/20 rounded hover:bg-white hover:text-black transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* --- Main Content Grid --- */}
      <main className="relative z-10 flex flex-col lg:flex-row items-end justify-between px-6 md:px-12 pb-20 pt-32 max-w-[1600px] mx-auto h-full min-h-[80vh]">
        {/* Left Column: Text Content */}
        <div className="flex flex-col max-w-2xl mb-12 lg:mb-0">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
            A New Orbit For Your Mind
          </span>

          <h1 className="text-5xl md:text-7xl font-medium leading-[1.1] tracking-tight mb-6">
            Think deeper <br />
            Decide sooner
          </h1>

          {/* Divider Line */}
          <div className="w-full h-px bg-linear-to-r from-white/30 to-transparent my-6" />

          <div className="flex flex-col gap-6">
            <div className="space-y-4 max-w-lg">
              <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                Written with Aether · The Clarity Series
              </p>
              <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed">
                Aether challenges your thinking, maps your logic, and reveals
                the hidden patterns shaping every decision.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <button className="px-8 py-3 bg-white text-black text-sm font-medium rounded hover:bg-gray-200 transition-colors">
                Start a free session
              </button>
              <button className="px-8 py-3 border border-white/20 text-white text-sm font-medium rounded hover:bg-white/5 transition-colors backdrop-blur-sm">
                View Prices
              </button>
            </div>
          </div>

          <div className="mt-4 text-[10px] text-gray-500 tracking-wide">
            No sign-in · Runs in your browser
          </div>
        </div>

        {/* Right Column: Glassmorphism Stats Card */}
        <div className="w-full lg:w-[380px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 relative overflow-hidden">
          {/* Subtle shine effect on top border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />

          <div className="mb-8">
            <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">
              Field Data:
            </p>
            <h3 className="text-lg font-medium text-white">
              Cognitive Metrics
            </h3>
          </div>

          <div className="space-y-8">
            {/* Metric 1 */}
            <div>
              <div className="text-3xl font-light text-white mb-1">47%</div>
              <div className="text-xs text-gray-400 font-light">
                faster time-to-clarity¹
              </div>
              <div className="w-full bg-white/10 h-px mt-4" />
            </div>

            {/* Metric 2 */}
            <div>
              <div className="text-3xl font-light text-white mb-1">12,000+</div>
              <div className="text-xs text-gray-400 font-light">
                thought maps generated
              </div>
              <div className="w-full bg-white/10 h-px mt-4" />
            </div>

            {/* Metric 3 */}
            <div>
              <div className="text-3xl font-light text-white mb-1">2M+</div>
              <div className="text-xs text-gray-400 font-light">
                lines of thought analyzed
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/5">
            <p className="text-[10px] leading-relaxed text-gray-500">
              ¹ Median across 1,200 sessions comparing self-guided vs
              Aether-guided decisions.
            </p>
          </div>
        </div>
      </main>

      {/* --- Footer/Bottom Label --- */}
      <div className="absolute bottom-6 left-0 w-full text-center z-20">
        <p className="text-[10px] tracking-widest text-white/30 uppercase">
          Issue 01: The Clarity Series · Fig. 01: The mind at periapsis · Scroll
          to see how Aether thinks
        </p>
      </div>
    </div>
  );
}
