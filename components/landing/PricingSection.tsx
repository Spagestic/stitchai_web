import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

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

export default function PricingSection() {
  return (
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
            Start free and upgrade as you grow. No hidden fees, cancel anytime.
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
  );
}
