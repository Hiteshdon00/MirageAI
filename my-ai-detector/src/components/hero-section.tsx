'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
 
export function HeroSection() {
  return (
    <Card className="w-full h-[500px] bg-black relative overflow-hidden border-none">
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-12 relative z-10 flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white italic uppercase tracking-tighter">
            Interactive 3D
          </h1>
          <p className="mt-4 text-neutral-400 max-w-lg">
            Bring your UI to life with beautiful 3D scenes. The robot head 
            will follow your cursor movement automatically.
          </p>
        </div>

        {/* Right content - The Robot */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}