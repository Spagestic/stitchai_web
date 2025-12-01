import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
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
  );
}
