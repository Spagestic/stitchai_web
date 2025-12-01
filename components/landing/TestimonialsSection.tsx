import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Martinez",
    role: "Football Fan",
    avatar: "A",
    content:
      "Finally, I can create jerseys that match my imagination. The AI understands exactly what I want!",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Sports Designer",
    avatar: "S",
    content:
      "This tool has revolutionized my workflow. I can prototype designs in seconds instead of hours.",
    rating: 5,
  },
  {
    name: "João Silva",
    role: "Team Manager",
    avatar: "J",
    content:
      "Our local team now has custom jerseys that rival professional clubs. Incredible quality!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative z-10 py-24 lg:py-32 bg-black"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-green-400 mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Loved by Fans Worldwide
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Join thousands of sports enthusiasts who are creating their dream
            jerseys.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-white/20"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/50">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
