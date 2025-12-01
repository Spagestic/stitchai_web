import React from "react";

export default function TrustedBySection() {
  return (
    <section className="relative z-10 border-y border-white/5 bg-white/[0.02] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-white/30 mb-8">
          Trusted by football fans worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50">
          {[
            "Premier League",
            "La Liga",
            "Serie A",
            "Bundesliga",
            "Ligue 1",
          ].map((league) => (
            <span key={league} className="text-lg font-semibold text-white/40">
              {league}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
