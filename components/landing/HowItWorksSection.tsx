import React from "react";
import { Palette, Sparkles, Download } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative z-10 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-purple-400 mb-4">
            How It Works
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Create in 3 Simple Steps
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            From idea to custom jersey in under a minute. Our AI handles the
            heavy lifting.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Palette,
              step: "01",
              title: "Choose Your Team",
              description:
                "Select from 50+ professional teams or start with a blank canvas. Pick your colors and style preferences.",
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              icon: Sparkles,
              step: "02",
              title: "Describe Your Vision",
              description:
                "Tell our AI what you want — patterns, themes, special elements. Be as creative as you like!",
              gradient: "from-purple-500 to-pink-500",
            },
            {
              icon: Download,
              step: "03",
              title: "Download & Share",
              description:
                "Get your high-quality jersey design instantly. Share with friends or order a physical print.",
              gradient: "from-amber-500 to-orange-500",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient}`}
              >
                <item.icon className="h-7 w-7 text-white" />
              </div>
              <p className="text-6xl font-bold text-white/5 absolute top-6 right-6">
                {item.step}
              </p>
              <h3 className="mb-3 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-white/50 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
