import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0f]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/bg-1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/90 via-[#0a0a0f]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]/30" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl animate-pulse delay-500" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-4 lg:px-12 lg:py-6">
        <div className="flex items-center gap-2">
          <Image
            src="/logo_dark.png"
            alt="Stitch AI Logo"
            width={140}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            HOW IT WORKS
          </Link>
          <Link
            href="#designs"
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            DESIGNS
          </Link>
          <Link
            href="#gallery"
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            GALLERY
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            PRICING
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="hidden text-white/90 hover:bg-white/10 hover:text-white sm:flex"
            asChild
          >
            <Link href="/auth/login">Sign In</Link>
          </Button>
          <Button
            className="bg-white text-black hover:bg-white/90 font-medium px-6"
            asChild
          >
            <Link href="/auth/sign-up">Get Started</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="relative z-10 flex min-h-[calc(100vh-88px)] items-center px-6 lg:px-12">
        <div className="grid w-full max-w-7xl mx-auto gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/50">
              A NEW ERA FOR <span className="text-white/80">SPORTS FANS</span>
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Design your
              <br />
              <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                Dream jersey
              </span>
            </h1>

            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-white/40">
              POWERED BY AI · INSTANT CUSTOMIZATION
            </p>

            <p className="mb-8 max-w-md text-lg leading-relaxed text-white/60">
              Skip the stadium lines. Create stunning, personalized sports
              jerseys with AI-powered design generation. From concept to custom
              — in seconds.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-6 text-base rounded-full shadow-lg shadow-white/10 transition-all hover:shadow-white/20 hover:scale-105"
                asChild
              >
                <Link href="/auth/sign-up">Start designing free</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 font-semibold px-8 py-6 text-base rounded-full backdrop-blur-sm"
                asChild
              >
                <Link href="#designs">View Designs</Link>
              </Button>
            </div>

            <p className="mt-4 text-xs text-white/40">
              No credit card required · Runs in your browser
            </p>
          </div>

          {/* Right Content - Stats Card */}
          <div className="hidden lg:flex justify-end">
            <div className="relative">
              {/* Glowing effect behind card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-amber-500/20 rounded-3xl blur-2xl opacity-50" />

              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
                <p className="mb-1 text-xs font-medium uppercase tracking-widest text-white/40">
                  LIVE STATS
                </p>
                <p className="mb-6 text-lg font-semibold text-white">
                  Design Metrics
                </p>

                <div className="space-y-6">
                  <div>
                    <p className="text-4xl font-bold text-white">10K+</p>
                    <p className="text-sm text-white/50">
                      jerseys designed this month
                    </p>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  <div>
                    <p className="text-4xl font-bold text-white">50+</p>
                    <p className="text-sm text-white/50">
                      supported teams & leagues
                    </p>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  <div>
                    <p className="text-4xl font-bold text-white">&lt;30s</p>
                    <p className="text-sm text-white/50">
                      average generation time
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-xs text-white/30">
                  Real-time data from our platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Text */}
      <div className="absolute bottom-6 left-0 right-0 z-10 text-center">
        <p className="text-xs text-white/30">
          The Stitch AI Collection · Scroll to explore our designs
        </p>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute bottom-20 left-10 z-20 hidden lg:block">
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
          <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          <span className="text-xs text-white/60">AI generating now</span>
        </div>
      </div>
    </div>
  );
}
