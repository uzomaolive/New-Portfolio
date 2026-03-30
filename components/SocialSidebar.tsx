"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "motion/react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export function SocialSidebar() {
  return (
    <motion.div
      className="fixed left-6 bottom-0 hidden md:flex flex-col items-center gap-6 z-40 text-neutral-400"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <div className="flex flex-col gap-6">
        {socialLinks.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#a3e635] hover:-translate-y-1 transition-all duration-300"
            aria-label={social.label}
          >
            <social.icon size={20} strokeWidth={1.5} />
          </Link>
        ))}
      </div>
      <div className="w-[1px] h-24 bg-neutral-400/30 mt-2" />
    </motion.div>
  );
}
