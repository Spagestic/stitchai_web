import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
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
  );
}
