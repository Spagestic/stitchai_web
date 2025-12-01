import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, Check, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative z-10 min-h-[90vh] flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/bg-1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/95 via-[#0a0a0f]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]/40" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span className="text-sm text-white/70">
                AI-Powered Design Generation
              </span>
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Design your
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                Dream Jersey
              </span>
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-white/60">
              Skip the stadium lines. Create stunning, personalized sports
              jerseys with AI-powered design generation. From concept to custom
              — in seconds.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 font-semibold px-8 py-6 text-base rounded-full shadow-lg shadow-purple-500/25 transition-all hover:shadow-purple-500/40 hover:scale-105"
                asChild
              >
                <Link href="/auth/sign-up">
                  Start Designing Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 font-semibold px-8 py-6 text-base rounded-full backdrop-blur-sm"
                asChild
              >
                <Link href="#gallery">View Gallery</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-400" />
                <span>Runs in your browser</span>
              </div>
            </div>
          </div>
          {/* Right Content - Stats Card */}
          <div className="hidden lg:flex justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-amber-500/20 rounded-3xl blur-2xl opacity-60" />
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                  <p className="text-xs font-medium uppercase tracking-widest text-white/40">
                    LIVE STATS
                  </p>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-5xl font-bold text-white">10K+</p>
                    <p className="text-sm text-white/50">
                      jerseys designed this month
                    </p>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div>
                    <p className="text-5xl font-bold text-white">50+</p>
                    <p className="text-sm text-white/50">
                      supported teams & leagues
                    </p>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div>
                    <p className="text-5xl font-bold text-white">&lt;30s</p>
                    <p className="text-sm text-white/50">
                      average generation time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-widest uppercase">
            Scroll to explore
          </span>
          <div className="h-12 w-6 rounded-full border border-white/20 flex items-start justify-center p-1.5">
            <div className="h-2 w-1 rounded-full bg-white/40 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
