"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: "What is Stitch AI and what can I do with it?",
    answer:
      "Stitch AI is an AI-powered jersey customization platform that eliminates the long queues at stadium customization booths. Design your dream sports jersey instantly using generative AI—choose a template, describe your vision, and watch as AI creates unique, one-of-a-kind designs tailored to your preferences.",
  },
  {
    question: "How does the AI-powered design generation work?",
    answer:
      "Select a jersey template from our collection, then describe the design you want. Our generative AI engine analyzes your input and creates unique design variations instantly. You can preview your customization in real-time and iterate until you find the perfect look.",
  },
  {
    question: "What jersey templates are available?",
    answer:
      "We offer a wide range of base jersey templates from popular European football leagues including the Premier League, Bundesliga, La Liga, Serie A, Ligue 1, and many more. Each template captures the authentic style and identity of your favorite team.",
  },
  {
    question: "Can I customize any team or create custom designs?",
    answer:
      "Yes! Choose from templates of existing teams or create fully custom designs. Whether you want to personalize an existing jersey or design something completely unique, our AI adapts to your creative vision and brings it to life instantly.",
  },
  {
    question: "Is my design data private and secure?",
    answer:
      "Absolutely. All your custom designs and personal data are encrypted and stored securely. We prioritize your privacy and never share your designs or information with third parties.",
  },
  {
    question: "How do I get started?",
    answer:
      "Sign up for a free account, browse our jersey template library, select your base template, describe your custom design, and let AI generate your options. Review, refine, and save your favorite designs. No waiting in line required!",
  },
];

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="flex w-full items-start justify-center bg-black" id="faqs">
      <div className="flex flex-1 flex-col items-start justify-start gap-6 px-4 py-16 md:px-12 md:py-20 lg:flex-row lg:gap-12">
        {/* Left Column - Header */}
        <div className="flex w-full flex-col items-start justify-center gap-4 lg:flex-1 lg:py-5">
          <div className="flex w-full flex-col justify-center font-sans font-medium text-2xl text-primary-foreground leading-tight tracking-tight md:text-3xl md:leading-tight lg:text-4xl lg:leading-tight">
            Frequently Asked Questions
          </div>
          <div className="w-full font-normal font-sans text-muted-foreground text-sm leading-7 md:text-base">
            Everything you need to know about designing
            <br className="hidden md:block" />
            custom jerseys with Stitch AI.
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="flex w-full flex-col items-center justify-center lg:flex-1">
          <div className="flex w-full flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index);

              return (
                <div
                  className="w-full overflow-hidden border-muted-foreground/20 border-b"
                  key={index as number}
                >
                  <button
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-5 py-[18px] text-left transition-colors duration-200 hover:bg-secondary/5"
                    onClick={() => toggleItem(index)}
                    type="button"
                  >
                    <div className="flex-1 font-medium font-sans text-primary-foreground text-base leading-6 md:text-lg">
                      {item.question}
                    </div>
                    <div className="flex items-center justify-center">
                      <ChevronDownIcon
                        className={`h-6 w-6 text-muted-foreground/60 transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] font-normal font-sans text-muted-foreground text-sm leading-6 md:text-base">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
