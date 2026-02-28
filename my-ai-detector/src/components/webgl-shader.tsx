"use client"
import { useEffect, useRef } from "react"
import * as THREE from "three"

export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<any>({})

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const refs = sceneRef.current

    const vertexShader = `
      attribute vec3 position;
      void main() { gl_Position = vec4(position, 1.0); }
    `
    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        float d = length(p) * 0.05;
        float rx = p.x * (1.0 + d);
        float r = 0.05 / abs(p.y + sin((rx + time) * 1.0) * 0.5);
        float g = 0.05 / abs(p.y + sin((p.x + time) * 1.0) * 0.5);
        float b = 0.05 / abs(p.x * (1.0 - d) + time * 1.0);
        gl_FragColor = vec4(r * 0.2, g * 0.4, b * 0.8, 1.0);
      }
    `

    refs.scene = new THREE.Scene()
    refs.renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
    refs.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1)
    refs.uniforms = {
      resolution: { value: [window.innerWidth, window.innerHeight] },
      time: { value: 0.0 }
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array([-1,-1,0, 1,-1,0, -1,1,0, 1,-1,0, -1,1,0, 1,1,0]), 3))
    const material = new THREE.RawShaderMaterial({ vertexShader, fragmentShader, uniforms: refs.uniforms })
    refs.mesh = new THREE.Mesh(geometry, material)
    refs.scene.add(refs.mesh)

    const animate = () => {
      refs.uniforms.time.value += 0.01
      refs.renderer.render(refs.scene, refs.camera)
      refs.animationId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      refs.renderer.setSize(window.innerWidth, window.innerHeight)
      refs.uniforms.resolution.value = [window.innerWidth, window.innerHeight]
    }

    handleResize()
    animate()
    window.addEventListener("resize", handleResize)
    return () => {
      cancelAnimationFrame(refs.animationId)
      window.removeEventListener("resize", handleResize)
      refs.renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" />
}