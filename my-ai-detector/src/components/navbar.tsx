'use client'
import { useState, useEffect } from "react"
import { ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 p-8 flex justify-between items-center transition-all duration-700",
      isScrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-8"
    )}>
      <div className="flex items-center gap-4">
        <div className="size-10 bg-blue-600 rounded-xl flex items-center justify-center animate-cyber-pulse">
          <ShieldCheck className="text-white" size={20} />
        </div>
        <h2 className="text-2xl font-black italic uppercase tracking-tighter text-white">
          Hack<span className="text-blue-600">Tech</span>
        </h2>
      </div>
      
      <div className="flex gap-4 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
        <span className={cn("transition-colors", isScrolled ? "text-blue-500" : "text-transparent")}>
          System_Online
        </span>
      </div>
    </nav>
  )
}