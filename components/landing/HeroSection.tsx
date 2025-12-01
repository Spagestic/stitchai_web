import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen bg-primary text-primary-foreground overflow-hidden font-sans selection:bg-muted-foreground/30">
      {/* --- Background Image & Overlay --- */}
      {/* Ideally, use a background image of a stadium tunnel, jersey fabric texture, or abstract fluid team colors */}
      <div className="absolute inset-0 z-0">
        <Image
          fill
          src="/bg-3.png"
          alt="Background Image"
          className="w-full h-full object-cover opacity-80"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent" />
      </div>

      {/* --- Navigation --- */}
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12">
        {/* Logo */}
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

        {/* Navigation */}
        <nav className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center space-x-2 gap-8 ">
          <Link
            className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-muted-foreground hover:text-muted transition-colors"
            href="#gallery"
          >
            GALLERY
          </Link>
          <Link
            className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-muted-foreground hover:text-muted transition-colors"
            href="#pricing"
          >
            PRICING
          </Link>
          <Link
            className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-muted-foreground hover:text-muted transition-colors"
            href="#faqs"
          >
            FAQS
          </Link>
        </nav>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Link href="/auth/login">
              <button className="px-5 py-2 text-xs font-medium border border-muted-foreground rounded hover:bg-secondary/10 transition-all">
                Login
              </button>
            </Link>
            <Link href="/auth/sign-up">
              <button className="px-5 py-2 text-xs font-medium bg-secondary text-secondary-foreground border border-secondary rounded hover:bg-secondary/90 transition-all">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* --- Main Content Grid --- */}
      <main className="relative z-10 flex flex-col lg:flex-row items-end justify-between px-6 md:px-12 pb-20 pt-48 max-w-[1600px] mx-auto h-full min-h-[80vh]">
        {/* Left Column: Text Content */}
        <div className="flex flex-col max-w-2xl mb-12 lg:mb-0">
          <span className="text-sm md:text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4">
            The Future of Sports Fan Experience
          </span>

          <h1 className="text-5xl md:text-7xl font-medium leading-[1.1] tracking-tight mb-6">
            Match day glory. <br />
            Zero wait time.
          </h1>

          {/* Divider Line */}
          <div className="w-full h-px bg-linear-to-r from-muted-foreground to-transparent my-6" />

          <div className="flex flex-col gap-6">
            <div className="space-y-4 max-w-lg">
              <p className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                Powered by Generative Design · The Stadium Series
              </p>
              <p className="text-lg md:text-xl text-accent font-light leading-relaxed">
                Stitch AI removes the physical friction of the customization
                booth. Capture the stadium atmosphere and design your dream
                jersey instantly with our generative engine.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Link href="/dashboard">
                <button className="px-8 py-3 bg-secondary text-secondary-foreground text-sm font-medium rounded hover:bg-secondary/90 transition-colors">
                  Start Designing
                </button>
              </Link>
              <Link href="/dashboard">
                <button className="px-8 py-3 border border-muted-foreground text-secondary text-sm font-medium rounded hover:bg-secondary/5 transition-colors backdrop-blur-sm">
                  View Showcase
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-12 text-[10px] text-muted-foreground tracking-wide">
            No queueing required · Instant render · Production ready
          </div>
        </div>

        {/* Right Column: Glassmorphism Stats Card */}
        <div className="w-full lg:w-[380px] bg-secondary/5 backdrop-blur-xl border border-muted-foreground rounded-2xl p-8 relative overflow-hidden">
          {/* Subtle shine effect */}
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-muted-foreground/40 to-transparent" />

          <div className="mb-8">
            <p className="text-[10px] font-bold tracking-widest text-secondary/50 uppercase mb-1">
              Performance Data
            </p>
            <h3 className="text-lg font-medium text-secondary">
              Fan Experience Metrics
            </h3>
          </div>

          <div className="space-y-8">
            {/* Metric 1 */}
            <div>
              <div className="text-3xl font-light text-secondary mb-1">
                45 min
              </div>
              <div className="text-xs text-secondary/50 font-light">
                average queue time saved¹
              </div>
              <div className="w-full bg-muted-foreground/20 h-px mt-4" />
            </div>

            {/* Metric 2 */}
            <div>
              <div className="text-3xl font-light text-secondary mb-1">
                Infinite
              </div>
              <div className="text-xs text-secondary/50 font-light">
                generative design variations
              </div>
              <div className="w-full bg-muted-foreground/20 h-px mt-4" />
            </div>

            {/* Metric 3 */}
            <div>
              <div className="text-3xl font-light text-secondary mb-1">
                100%
              </div>
              <div className="text-xs text-secondary/50 font-light">
                unique team identity
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-secondary/5">
            <p className="text-[10px] leading-relaxed text-secondary/50">
              ¹ Based on average wait times at customization booths outside
              major European football arenas during match days.
            </p>
          </div>
        </div>
      </main>

      {/* --- Footer/Bottom Label --- */}
      <div className="absolute bottom-6 left-0 w-full text-center z-20 px-4">
        <p className="text-[10px] tracking-widest text-secondary/30 uppercase">
          Edition 01: Portugal Origins · Fig. 01: Digital Craftsmanship · Scroll
          to create
        </p>
      </div>
    </div>
  );
}
