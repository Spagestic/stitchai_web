import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Zap,
  Palette,
  Download,
  Star,
  ChevronRight,
  Check,
  ArrowRight,
  Instagram,
  Twitter,
  Github,
  Menu,
  X,
} from "lucide-react";

// Gallery jerseys data
const galleryJerseys = [
  {
    id: 1,
    src: "/jerseys/black_jersey.png",
    name: "Midnight Edition",
    style: "Modern",
  },
  {
    id: 2,
    src: "/jerseys/noel_diwali.png",
    name: "Festive Flair",
    style: "Festive",
  },
  {
    id: 3,
    src: "/jerseys/Classic_red_and_whit.png",
    name: "Classic Red",
    style: "Classic",
  },
  {
    id: 4,
    src: "/jerseys/Modern_blue_gradient.png",
    name: "Ocean Wave",
    style: "Modern",
  },
  {
    id: 5,
    src: "/jerseys/velocity.png",
    name: "Velocity",
    style: "Futuristic",
  },
  {
    id: 6,
    src: "/jerseys/diwali.png",
    name: "Diwali Delight",
    style: "Festive",
  },
  {
    id: 7,
    src: "/jerseys/Retro_90s_style_jers.png",
    name: "Retro Vibes",
    style: "Retro",
  },
  {
    id: 8,
    src: "/jerseys/hunyuan.png",
    name: "Nature's Touch",
    style: "Modern",
  },
];

// Testimonials data
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

// Pricing plans
const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out",
    features: [
      "5 jersey designs/month",
      "Basic templates",
      "Standard quality",
      "Community gallery access",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    description: "For serious creators",
    features: [
      "Unlimited designs",
      "Premium templates",
      "HD quality exports",
      "Priority generation",
      "Custom team logos",
      "No watermarks",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Team",
    price: "$49",
    period: "/month",
    description: "For clubs & organizations",
    features: [
      "Everything in Pro",
      "5 team members",
      "Bulk generation",
      "API access",
      "Dedicated support",
      "White-label options",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0a0f]">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-amber-500/3 blur-[150px]" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo_dark.png"
              alt="Stitch AI Logo"
              width={140}
              height={40}
              className="h-9 w-auto"
            />
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              How It Works
            </Link>
            <Link
              href="#gallery"
              className="text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              Gallery
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              Reviews
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              className="hidden text-white/80 hover:bg-white/10 hover:text-white sm:flex"
              asChild
            >
              <Link href="/auth/login">Sign In</Link>
            </Button>
            <Button
              className="bg-white text-black hover:bg-white/90 font-medium px-5"
              asChild
            >
              <Link href="/auth/sign-up">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
                jerseys with AI-powered design generation. From concept to
                custom — in seconds.
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

      {/* Trusted By / Social Proof */}
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
              <span
                key={league}
                className="text-lg font-semibold text-white/40"
              >
                {league}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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

      {/* Gallery Section */}
      <section
        id="gallery"
        className="relative z-10 py-24 lg:py-32 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-amber-400 mb-4">
              Gallery
            </p>
            <h2 className="text-4xl font-bold text-white sm:text-5xl mb-4">
              Community Creations
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Get inspired by designs created by our community of sports fans
              and designers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {galleryJerseys.map((jersey, index) => (
              <div
                key={jersey.id}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all hover:border-white/20"
              >
                <Image
                  src={jersey.src}
                  alt={jersey.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <p className="text-white font-semibold">{jersey.name}</p>
                  <p className="text-white/60 text-sm">{jersey.style}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 rounded-full px-8"
              asChild
            >
              <Link href="/dashboard">
                View All Designs
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-24 lg:py-32">
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
                We combine cutting-edge AI with your creativity to produce
                designs that were previously impossible to create without
                professional design skills.
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

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="relative z-10 py-24 lg:py-32 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"
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
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-white/50">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-purple-400 mb-4">
              Pricing
            </p>
            <h2 className="text-4xl font-bold text-white sm:text-5xl mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Start free and upgrade as you grow. No hidden fees, cancel
              anytime.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border ${
                  plan.popular
                    ? "border-purple-500/50 bg-gradient-to-b from-purple-500/10 to-transparent"
                    : "border-white/10 bg-white/[0.02]"
                } p-8 transition-all hover:border-white/20`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-white/50 text-sm mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-white/50">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-3 text-sm text-white/70"
                    >
                      <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full rounded-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                  asChild
                >
                  <Link href="/auth/sign-up">{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-amber-500/20 rounded-3xl blur-3xl opacity-50" />
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-12 lg:p-16 backdrop-blur-sm">
              <h2 className="text-4xl font-bold text-white sm:text-5xl mb-6">
                Ready to Create Your
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                  Dream Jersey?
                </span>
              </h2>
              <p className="text-lg text-white/50 mb-8 max-w-2xl mx-auto">
                Join thousands of sports fans who are already designing unique,
                AI-powered jerseys. No design skills required.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 font-semibold px-8 py-6 text-base rounded-full shadow-lg shadow-purple-500/25"
                  asChild
                >
                  <Link href="/auth/sign-up">
                    Start Designing — It&apos;s Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <p className="mt-6 text-sm text-white/40">
                No credit card required · 5 free designs per month
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-[#0a0a0f] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <Image
                src="/logo_dark.png"
                alt="Stitch AI Logo"
                width={140}
                height={40}
                className="h-9 w-auto mb-4"
              />
              <p className="text-white/50 max-w-sm mb-6">
                Create stunning, personalized sports jerseys with AI-powered
                design generation. From concept to custom — in seconds.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#how-it-works"
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#gallery"
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/30">
              © 2025 Stitch AI. All rights reserved.
            </p>
            <p className="text-sm text-white/30">
              Made with ❤️ for sports fans everywhere
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
