import { Star, StarHalf, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Martinez",
    role: "Football Fan",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=256&auto=format&fit=crop",
    content:
      "The instant design generation let me create custom jerseys in minutes instead of waiting in stadium lines. It's like having a design studio at your fingertips!",
  },
  {
    name: "Sarah Chen",
    role: "Sports Designer",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=256&auto=format&fit=crop",
    content:
      "I can now prototype designs in seconds instead of hours. The AI understands jersey aesthetics perfectly and generates variations I wouldn't have thought of myself.",
  },
  {
    name: "João Silva",
    role: "Team Manager",
    image:
      "https://images.unsplash.com/photo-1546456073-6712f79251bb?q=80&w=256&auto=format&fit=crop",
    content:
      "Our local team went from zero custom jerseys to a full collection in a week. The quality rivals professional clubs. Our players and fans love them!",
  },
  {
    name: "Aisha Green",
    role: "Design Studio Owner",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=256&auto=format&fit=crop",
    content:
      "This tool has revolutionized how I serve my clients. We're delivering custom jersey collections at scale without sacrificing quality or creativity.",
  },
  {
    name: "Michael Chen",
    role: "Football Club Director",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop",
    content:
      "No more waiting, no more compromise. We can fulfill custom jersey requests immediately, and fans are thrilled with the variety of personalized options.",
  },
  {
    name: "Sofia Martinez",
    role: "Sports Brand Manager",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
    content:
      "From concept to delivery takes under a week now. The AI-generated designs match brand guidelines while giving each jersey a unique personality.",
  },
  {
    name: "Carlos Rivera",
    role: "Fan Community Leader",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop",
    content:
      "Finally, custom jerseys for everyone—not just the wealthy or those with inside connections. Stitch AI made personalization accessible and affordable.",
  },
  {
    name: "Rachel Adams",
    role: "Youth Sports Coach",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=256&auto=format&fit=crop",
    content:
      "Our youth team jerseys now have custom designs that boost team spirit. Kids feel like professionals. Best investment in team morale we've made!",
  },
  {
    name: "Noah Bennett",
    role: "Jersey Collector",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=256&auto=format&fit=crop",
    content:
      "I can bring my jersey design ideas to life without needing technical design skills. The AI captures exactly what I envision every time.",
  },
];

const testimonialPairs = [
  [testimonials[0], testimonials[1], testimonials[2], testimonials[0]],
  [testimonials[3], testimonials[4], testimonials[5], testimonials[3]],
  [testimonials[6], testimonials[7], testimonials[8], testimonials[6]],
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative z-10 py-8 lg:py-16 bg-black">
      <style>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-33.33%);
          }
        }
        @keyframes scrollDown {
          0% {
            transform: translateY(-33.33%);
          }
          100% {
            transform: translateY(0);
          }
        }
        [data-scroll-column="1"] {
          animation: scrollUp 20s linear infinite;
        }
        [data-scroll-column="2"] {
          animation: scrollDown 20s linear infinite;
        }
        [data-scroll-column="3"] {
          animation: scrollUp 20s linear infinite;
        }
        [data-scroll-column]:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
        <div className="mb-12">
          <span className="text-sm font-medium text-green-400">
            Testimonials
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Real stories from creators who transform their jersey dreams.
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 border-white/10 bg-white/5">
            <span className="inline-flex items-center -space-x-2">
              {[
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
              ].map((src, idx) => (
                <img
                  key={idx}
                  className="h-6 w-6 rounded-full ring-2 object-cover ring-neutral-900"
                  src={src}
                  alt={`User ${idx + 1}`}
                />
              ))}
            </span>
            <span className="ml-2 inline-flex items-center gap-1 text-sm text-neutral-300">
              {[...Array(4)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-amber-300 fill-amber-300"
                />
              ))}
              <StarHalf className="w-4 h-4 text-amber-300 fill-amber-300" />
              <span className="ml-1">4.9/5 • 2,431 reviews</span>
            </span>
          </div>
        </div>

        <div
          className="grid grid-cols-1 overflow-hidden md:grid-cols-3 py-12 gap-x-6 gap-y-6"
          style={{
            maskImage:
              "linear-gradient(180deg, transparent, black 45%, black 45%, transparent)",
            WebkitMaskImage:
              "linear-gradient(180deg, transparent, black 45%, black 45%, transparent)",
          }}
        >
          {/* Column 1 - Scroll Up */}
          <div className="overflow-hidden">
            <div data-scroll-column="1" className="space-y-6">
              {testimonialPairs[0].map((testimonial, idx) => (
                <article
                  key={idx}
                  data-card="testimonial"
                  className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70"
                >
                  <blockquote className="text-[16px] sm:text-[18px] text-neutral-100">
                    <span className="inline-flex items-center gap-2">
                      <Quote className="w-4 h-4 text-neutral-400" />
                      {testimonial.content}
                    </span>
                  </blockquote>
                  <div className="mt-5 flex items-center gap-3">
                    <img
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div>
                      <div className="text-sm font-medium text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-neutral-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Column 2 - Scroll Down */}
          <div className="overflow-hidden">
            <div data-scroll-column="2" className="space-y-6">
              {testimonialPairs[1].map((testimonial, idx) => (
                <article
                  key={idx}
                  data-card="testimonial"
                  className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70"
                >
                  <blockquote className="text-[16px] sm:text-[18px] text-neutral-100">
                    <span className="inline-flex items-center gap-2">
                      <Quote className="w-4 h-4 text-neutral-400" />
                      {testimonial.content}
                    </span>
                  </blockquote>
                  <div className="mt-5 flex items-center gap-3">
                    <img
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div>
                      <div className="text-sm font-medium text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-neutral-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Column 3 - Scroll Up */}
          <div className="overflow-hidden">
            <div data-scroll-column="3" className="space-y-6">
              {testimonialPairs[2].map((testimonial, idx) => (
                <article
                  key={idx}
                  data-card="testimonial"
                  className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70"
                >
                  <blockquote className="text-[16px] sm:text-[18px] text-neutral-100">
                    <span className="inline-flex items-center gap-2">
                      <Quote className="w-4 h-4 text-neutral-400" />
                      {testimonial.content}
                    </span>
                  </blockquote>
                  <div className="mt-5 flex items-center gap-3">
                    <img
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div>
                      <div className="text-sm font-medium text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-neutral-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
