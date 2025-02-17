"use client";

import { Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import HamBar from "../atoms/HamBar";

const NavigationLinks = ["home", "projects", "skills", "journey", "contact"];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-purple-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              dev.shivam
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NavigationLinks.map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                onClick={() => setActiveSection(item)}
                className={`text-sm uppercase tracking-wider hover:text-purple-400 transition-colors relative group ${
                  activeSection === item ? "text-purple-400" : "text-gray-300"
                }`}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all ${
                    activeSection === item ? "w-full" : "group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>
          <HamBar />
        </div>
      </div>
    </nav>
  );
}
