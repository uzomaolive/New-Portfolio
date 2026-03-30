"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Navigation() {
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const country = timezone.split("/")[0].replace("_", " ");

    setLocation(country);

    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between text-sm text-gray-300">
        {/* Left: location / time */}
        <div className="flex items-center gap-3">
          <span className="text-white uppercase">{location}/</span>
          <span className="tabular-nums">{time}</span>
        </div>

        {/* Center: navigation links (visible md+) */}
        <ul className="hidden md:flex items-center gap-10 uppercase tracking-widest text-xs">
          <li>
            <Link href="#home" className="hover:opacity-80 transition">
              HOME
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:opacity-80 transition">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="#blog" className="hover:opacity-80 transition">
              BLOG
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:opacity-80 transition">
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Right: contact button */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block text-lg">::</div>
          <Link
            href="#contact"
            className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors"
          >
            CONTACT NOW
          </Link>
        </div>
      </div>
    </nav>
  );
}
  