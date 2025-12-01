import React from "react";
import Image from "next/image";
import { Zap, Sparkles, Palette } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="relative z-10 py-24 lg:py-32 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-blue-400 mb-4">
              Why Stitch AI
            </p>
            <h2 className="text-4xl font-bold text-white sm:text-5xl mb-6">
              The Future of Jersey Customization
            </h2>
            <p className="text-lg text-white/50 mb-8">
              We combine cutting-edge AI with your creativity to produce designs
              that were previously impossible to create without professional
              design skills.
            </p>
            <div className="space-y-6">
              {[
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Generate unique designs in under 30 seconds",
                },
                {
                  icon: Sparkles,
                  title: "AI-Powered",
                  description: "State-of-the-art generative AI models",
                },
                {
                  icon: Palette,
                  title: "Unlimited Creativity",
                  description:
                    "No design skills required — just describe your vision",
                },
              ].map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                    <feature.icon className="h-6 w-6 text-white/70" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-white/50 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-amber-500/10 rounded-3xl blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="/jerseys/velocity.png"
                    alt="Jersey Design"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="/jerseys/diwali.png"
                    alt="Jersey Design"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="/jerseys/black_jersey.png"
                    alt="Jersey Design"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="/jerseys/Modern_blue_gradient.png"
                    alt="Jersey Design"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
