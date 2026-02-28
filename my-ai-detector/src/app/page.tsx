'use client'
import React, { useState, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { LayoutDashboard, UserCog, ShieldCheck, FileSearch, Github } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { SplineScene } from "@/components/ui/splite";
import { VerificationCenter } from "@/components/verification-center";
import { VerdictStatus } from "@/components/verdict-status";
import { HackTechLogo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define transition variables inside the component to avoid ReferenceErrors
  const sparklesOpacity = Math.min(1, scrollY / 600); //
  const robotOpacity = Math.max(0, 1 - scrollY / 500); //
  const robotScale = Math.max(0.7, 1 - scrollY / 1000); //

  const links = [
    { label: "Dashboard", href: "#", icon: <LayoutDashboard className="size-5 text-zinc-400" /> },
    { label: "Analysis", href: "#", icon: <FileSearch className="size-5 text-zinc-400" /> },
    { label: "Settings", href: "#", icon: <UserCog className="size-5 text-zinc-400" /> },
  ];

  return (
    <div className="flex flex-col md:flex-row bg-[#020202] w-full flex-1 mx-auto overflow-hidden h-screen font-sans">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 border-r border-white/5 bg-black/40 backdrop-blur-2xl">
          <div className="flex flex-col flex-1 overflow-y-auto no-scrollbar">
            <HackTechLogo />
            <div className="mt-12 flex flex-col gap-4">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} className="hover:bg-blue-500/10 rounded-lg px-2 transition-all" />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>

      <div className="flex-1 overflow-y-auto no-scrollbar relative">
        {/* BACKGROUND EFFECT ZONE */}
        <div 
          className="fixed inset-0 z-0 transition-opacity duration-1000 pointer-events-none" 
          style={{ 
            opacity: sparklesOpacity,
            background: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 70%)` 
          }}
        >
          <SparklesCore 
            id="tsparticles" 
            background="transparent" 
            minSize={0.6} 
            maxSize={1.4} 
            particleDensity={100} 
            className="w-full h-full" 
            particleColor="#3b82f6" 
          />
        </div>

        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center z-10 px-6 lg:px-20 overflow-hidden">
          <div className="grid lg:grid-cols-2 w-full items-center gap-12">
            
            <div className="z-20 space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="h-[1px] w-12 bg-blue-600 shadow-[0_0_10px_blue]" />
                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-blue-500">HackTech Forensics Unit</p>
              </div>

              <div className="relative">
                <h1 className="text-8xl lg:text-[11rem] font-black italic uppercase leading-[0.75] tracking-[-0.06em] text-white">
                  DECODE <br /> 
                  <span className="text-blue-600">TRUTH.</span>
                </h1>
              </div>

              <div className="max-w-md pt-6">
                <p className="text-zinc-500 text-xl font-light leading-relaxed border-l border-zinc-800 pl-8">
                  Analyzing multimodal streams to expose synthetic manipulation. 
                  Digital authenticity verified by HackTech.
                </p>
              </div>
            </div>

            {/* ROBOT GUARDIAN */}
            <div 
              className="relative h-[550px] w-full transition-all duration-300 ease-out flex justify-center items-center" 
              style={{ 
                opacity: robotOpacity, 
                transform: `scale(${robotScale}) translateY(${scrollY * 0.1}px)`,
                visibility: robotOpacity < 0.01 ? 'hidden' : 'visible'
              }}
            >
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" 
                className="w-full h-full" 
              />
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 animate-bounce">
            <div className="w-[1px] h-20 bg-gradient-to-b from-blue-600 to-transparent" />
          </div>
        </section>

        {/* COMMAND CENTER DASHBOARD */}
        <section className="relative z-20 px-6 lg:px-20 py-32">
          <div className="max-w-5xl mx-auto bg-zinc-950/80 backdrop-blur-3xl p-12 lg:p-20 rounded-[4rem] border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)]">
            <div className="flex flex-col items-center text-center space-y-4 mb-16">
              <h2 className="text-6xl font-black italic uppercase tracking-tighter">Command Center</h2>
              <div className="h-1 w-24 bg-blue-600 rounded-full shadow-[0_0_15px_blue]" />
              <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em] mt-4">Inference Status: Active</p>
            </div>

            <VerificationCenter />
            <VerdictStatus isFake={false} />

            <footer className="pt-16 border-t border-white/5 font-mono text-[10px] text-zinc-600 flex justify-between uppercase tracking-widest">
              <div className="space-y-1">
                <p>Team: HackTech</p>
                <p>Architecture: Multimodal-Transformer</p>
              </div>
              <div className="text-right space-y-1">
                <p>Dataset: MiRAGeNews v2.1</p>
                <p className="text-blue-500">Hardware: RTX 4050 Connected</p>
              </div>
            </footer>
          </div>
        </section>
      </div>
    </div>
  );
}