"use client";

import React, { useState } from "react";

const pricingPlans = {
  monthly: [
    {
      name: "Basic Creator",
      subtitle: "Starter Plan",
      price: "$4.99",
      period: "/month",
      description:
        "Start your jersey design journey. Create unique custom jerseys with AI-powered personalization.",
      features: [
        "Up to 5 custom designs per month",
        "AI-powered design suggestions",
        "Access to all jersey templates",
        "Basic customization options",
        "Instant preview feature",
      ],
      cta: "Get Started",
    },
    {
      name: "Pro Designer",
      subtitle: "Pro Plan",
      price: "$12.99",
      period: "/month",
      description:
        "Unleash your creativity. Advanced design tools, unlimited creations, and priority support.",
      features: [
        "Unlimited custom designs",
        "Advanced AI design generation",
        "Premium template access",
        "Advanced color & pattern customization",
        "High-resolution export (up to 4K)",
        "Priority customer support",
      ],
      cta: "Upgrade Now",
    },
  ],
  annual: [
    {
      name: "Basic Creator",
      subtitle: "Starter Plan",
      price: "$49.99",
      period: "/year",
      description:
        "Start your jersey design journey. Create unique custom jerseys with AI-powered personalization.",
      features: [
        "Up to 5 custom designs per month",
        "AI-powered design suggestions",
        "Access to all jersey templates",
        "Basic customization options",
        "Instant preview feature",
      ],
      cta: "Get Started",
    },
    {
      name: "Pro Designer",
      subtitle: "Pro Plan",
      price: "$129.99",
      period: "/year",
      description:
        "Unleash your creativity. Advanced design tools, unlimited creations, and priority support.",
      features: [
        "Unlimited custom designs",
        "Advanced AI design generation",
        "Premium template access",
        "Advanced color & pattern customization",
        "High-resolution export (up to 4K)",
        "Priority customer support",
      ],
      cta: "Upgrade Now",
    },
  ],
};

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">(
    "monthly"
  );

  const plans = pricingPlans[billingPeriod];

  return (
    <section
      id="pricing"
      className="sm:pt-12 sm:pb-12 z-10 pt-24 pb-24 relative bg-black"
    >
      <div className="lg:pt-8 lg:pb-8 bg-linear-to-br from-primary/0 via-primary/5 to-primary/0 max-w-7xl rounded-3xl mr-auto ml-auto pt-8 pb-8 ">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-7xl mr-auto ml-auto pr-6 pl-6">
          {/* Left: Headings */}
          <div className="text-left max-w-none">
            <h2 className="leading-7 text-base font-semibold text-secondary">
              Pricing
            </h2>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
              Simple plans for every designer
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Choose the perfect plan to create your custom sports jersey
              designs with AI.
            </p>
          </div>

          {/* Right: Segmented control */}
          <div className="md:mt-0 mt-8">
            <div
              className="inline-flex border-muted-foreground/20 border rounded-lg pt-1 pr-1 pb-1 pl-1 items-center"
              role="tablist"
              aria-label="Billing period"
            >
              <button
                type="button"
                role="tab"
                aria-selected={billingPeriod === "monthly"}
                onClick={() => setBillingPeriod("monthly")}
                className={`px-4 py-2 text-xs font-medium rounded transition ${
                  billingPeriod === "monthly"
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:text-primary-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={billingPeriod === "annual"}
                onClick={() => setBillingPeriod("annual")}
                className={`px-4 py-2 text-xs font-medium rounded transition ${
                  billingPeriod === "annual"
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:text-primary-foreground"
                }`}
              >
                Annual
                <span className={`ml-1 text-xs font-medium `}>(save 20%)</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 max-w-2xl mx-auto gap-x-8 gap-y-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="overflow-hidden border-muted-foreground/20 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-xl bg-primary/5"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-3xl font-semibold tracking-tight text-primary-foreground">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-secondary font-medium text-sm">
                    {plan.subtitle}
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-end gap-2 mt-6">
                <div className="text-5xl font-bold tracking-tight text-primary-foreground">
                  {plan.price}
                </div>
                <div className="pb-2 text-muted-foreground text-sm">
                  {plan.period}
                </div>
              </div>

              <p className="mt-3 text-muted-foreground text-lg leading-8">
                {plan.description}
              </p>

              <div className="h-px bg-muted-foreground/10 my-6"></div>

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3 text-base text-primary-foreground/90"
                  >
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-secondary/15">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 text-secondary"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="m20 6-11 11-5-5"></path>
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
