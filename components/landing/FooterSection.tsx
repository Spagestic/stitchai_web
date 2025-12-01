import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Github } from "lucide-react";

export default function FooterSection() {
  return (
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
  );
}
