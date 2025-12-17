"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, Check } from "lucide-react";
import { toast } from "sonner";
import { PremonitionLogo } from "@/components/icons/premonition-logo";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwcj3tL6u-QFi_1juqKaiD8ewFC_47_88SYwrKxB7qDgmkwHM39pr_40dDNumro9bsekg/exec";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isLoading) return;

    setIsLoading(true);
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setIsSubmitted(true);
      setEmail("");
      toast.success("You're on the list!", {
        description: "We'll notify you when we launch.",
      });
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] sm:h-[600px] bg-gradient-radial from-[#54BBF7]/[0.07] via-transparent to-transparent blur-3xl" />

      {/* Navigation */}
      <nav className="relative z-20 flex items-center px-4 sm:px-6 lg:px-12 py-4 sm:py-6">
        <div className="flex items-center gap-2">
          <PremonitionLogo size={28} className="sm:w-8 sm:h-8" />
          <span className="text-[#EEF0F1] font-semibold text-base sm:text-lg tracking-tight">
            Premonition
          </span>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 pb-12 sm:pb-24">
        <div className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#131419] border border-[#1e1f25] text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4DBE95] animate-pulse" />
              <span className="text-[#9AA4AD] font-mono">
                Polymarket • Real-time
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#EEF0F1] tracking-[-0.02em] leading-[1.1]"
          >
            The trading terminal
            <br />
            <span className="text-[#7D8B96]">for prediction markets</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[#7D8B96] max-w-2xl mx-auto leading-relaxed px-2"
          >
            Real-time order books, AI-powered research, and direct execution.
            <br className="hidden sm:block" />
            Everything you need to trade prediction markets professionally.
          </motion.p>

          {/* Email Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2 sm:pt-4"
          >
            {isSubmitted ? (
              <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#131419] border border-[#4DBE95]/30 text-[#4DBE95]">
                <Check className="w-5 h-5" />
                <span className="font-medium">You&apos;re on the list!</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full sm:flex-1 px-4 py-3.5 rounded-lg bg-[#131419] border border-[#1e1f25] text-[#EEF0F1] placeholder-[#64727C] focus:outline-none focus:border-[#54BBF7]/50 focus:ring-1 focus:ring-[#54BBF7]/50 transition-colors text-sm sm:text-base"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-lg bg-[#EEF0F1] text-[#070709] font-semibold text-sm sm:text-base hover:bg-white transition-colors min-h-[48px] touch-manipulation disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      Join Waitlist
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Terminal preview */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative px-3 sm:px-6 lg:px-12 pb-8 sm:pb-12"
      >
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-xl border border-[#1e1f25] bg-[#0c0d10] overflow-hidden shadow-2xl shadow-black/50">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 border-b border-[#1e1f25] bg-[#0a0b0d]">
              <div className="flex gap-1 sm:gap-1.5">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#febc2e]" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-2 sm:px-4 py-1 rounded-md bg-[#131419] text-[10px] sm:text-xs text-[#64727C] font-mono truncate max-w-[180px] sm:max-w-none">
                  premonition.app/markets
                </div>
              </div>
            </div>

            {/* Terminal content mockup */}
            <div className="p-3 sm:p-6 space-y-3 sm:space-y-4">
              {/* Header row */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
                  <div className="text-xs sm:text-sm font-medium text-[#EEF0F1] shrink-0">
                    Markets
                  </div>
                  <div className="flex gap-1 sm:gap-2 overflow-x-auto scrollbar-hide">
                    {["All", "Politics", "Crypto", "Sports"].map((tab, i) => (
                      <div
                        key={tab}
                        className={`px-2 sm:px-3 py-1 rounded-md text-[10px] sm:text-xs whitespace-nowrap ${i === 0 ? "bg-[#1e1f25] text-[#EEF0F1]" : "text-[#64727C]"}`}
                      >
                        {tab}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:block w-48 h-8 rounded-md bg-[#131419] border border-[#1e1f25] shrink-0" />
              </div>

              {/* Market rows */}
              <div className="space-y-1.5 sm:space-y-2">
                {[
                  {
                    name: "Will Bitcoin reach $150k by end of 2025?",
                    shortName: "Bitcoin $150k by 2025?",
                    price: "34¢",
                    change: "+2.4%",
                    vol: "$1.2M",
                  },
                  {
                    name: "Fed rate cut in January 2025?",
                    shortName: "Fed rate cut Jan 2025?",
                    price: "18¢",
                    change: "-1.2%",
                    vol: "$842K",
                  },
                  {
                    name: "SpaceX Starship orbital success Q1 2025?",
                    shortName: "Starship orbital Q1?",
                    price: "67¢",
                    change: "+5.1%",
                    vol: "$2.4M",
                  },
                  {
                    name: "Apple Vision Pro 2 announcement at WWDC?",
                    shortName: "Vision Pro 2 at WWDC?",
                    price: "72¢",
                    change: "+0.8%",
                    vol: "$156K",
                  },
                ].map((market, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-[#131419]/50 border border-[#1e1f25]/50 hover:bg-[#131419] transition-colors gap-2 sm:gap-4"
                  >
                    <div className="flex-1 text-xs sm:text-sm text-[#EEF0F1] truncate min-w-0">
                      <span className="hidden sm:inline">{market.name}</span>
                      <span className="sm:hidden">{market.shortName}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-6 text-xs sm:text-sm shrink-0">
                      <span className="text-[#EEF0F1] font-mono w-8 sm:w-12 text-right">
                        {market.price}
                      </span>
                      <span
                        className={`font-mono w-12 sm:w-16 text-right ${market.change.startsWith("+") ? "text-[#4DBE95]" : "text-[#D84F68]"}`}
                      >
                        {market.change}
                      </span>
                      <span className="hidden md:inline text-[#64727C] font-mono w-16 text-right">
                        {market.vol}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
