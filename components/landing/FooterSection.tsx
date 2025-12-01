import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Github } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="mr-auto">
      <div className="relative  overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black border-white/10 border  backdrop-blur">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 b" />
        </div>

        <div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
          <div className="grid lg:grid-cols-4 gap-10">
            {/* Brand / intro */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo_dark.png"
                  alt="Stitch AI Logo"
                  width={92}
                  height={36}
                  className="h-9 w-auto"
                />
              </div>
              <p className="text-sm leading-relaxed text-neutral-400 max-w-sm">
                Create stunning, personalized sports jerseys with AI-powered
                design generation. From concept to custom — in seconds.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-neutral-900 bg-white hover:bg-white/90 rounded-full px-3 py-1.5"
                >
                  <span className="font-geist">Contact us</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 stroke-[1.5]"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <div className="text-xs text-neutral-500">
                  support@stitchai.com
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-neutral-900/40 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-neutral-900/60 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-neutral-900/40 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-neutral-900/60 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-neutral-900/40 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-neutral-900/60 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Column: Company */}
            <div>
              <h4 className="text-xs tracking-wider text-neutral-300 uppercase font-geist">
                Company
              </h4>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-neutral-300 hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-neutral-300 hover:text-white"
                  >
                    Press
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-neutral-300 hover:text-white"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-neutral-300 hover:text-white"
                  >
                    Partners
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-neutral-300 hover:text-white"
                  >
                    Investor Relations
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column: Apps/Tools */}
            <div>
              <h4 className="text-xs tracking-wider text-neutral-300 uppercase font-geist">
                Apps
              </h4>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-neutral-300 hover:text-white"
                  >
                    iOS App
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-neutral-300 hover:text-white"
                  >
                    Android App
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-neutral-300 hover:text-white"
                  >
                    TV App
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-neutral-300 hover:text-white"
                  >
                    Virtual Reality
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column: Services */}
            <div>
              <h4 className="text-xs tracking-wider text-neutral-300 uppercase font-geist">
                Services
              </h4>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-neutral-300 hover:text-white"
                  >
                    Design Generator
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-neutral-300 hover:text-white"
                  >
                    Team Kits
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-neutral-300 hover:text-white"
                  >
                    Custom Orders
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-neutral-300 hover:text-white"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-neutral-300 hover:text-white"
                  >
                    Guides
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center gap-3 md:justify-between">
            <nav className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-neutral-400 font-geist">
              <a href="#" className="hover:text-neutral-200">
                Fair Housing Statement
              </a>
              <span className="text-neutral-700">|</span>
              <a href="#" className="hover:text-neutral-200">
                Privacy Policy
              </a>
              <span className="text-neutral-700">|</span>
              <a href="#" className="hover:text-neutral-200">
                Terms of Use
              </a>
              <span className="text-neutral-700">|</span>
              <a href="#" className="hover:text-neutral-200">
                Accessibility
              </a>
              <span className="text-neutral-700">|</span>
              <a href="#" className="hover:text-neutral-200">
                DMCA
              </a>
              <span className="text-neutral-700">|</span>
              <a href="#" className="hover:text-neutral-200">
                Sitemap
              </a>
            </nav>

            <div className="text-[11px] text-neutral-500">
              © 2025 Stitch AI, Inc. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
