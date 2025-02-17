"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function HamBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="md:hidden p-2 text-gray-300 hover:text-white"
    >
      {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  );
}
