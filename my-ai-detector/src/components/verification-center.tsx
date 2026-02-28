'use client'
import React, { useState } from 'react';
import { Upload, Zap, Cpu, Activity, ShieldCheck, AlertTriangle, Loader2 } from "lucide-react";
import { runInference } from '@/lib/api';

export function VerificationCenter() {
  const [isScanning, setIsScanning] = useState(false);
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);

  const handleVerify = async () => {
    if (!text && !file) return;
    setIsScanning(true);
    
    const data = await runInference(text, file || undefined);
    
    if (data) {
      setResult(data);
    }
    setIsScanning(false);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="bg-zinc-950/50 backdrop-blur-2xl rounded-[32px] border border-white/10 p-8 space-y-6 shadow-2xl">
        
        {/* ZONE 1: INPUT CENTER */}
        <div className="space-y-4">
          <textarea 
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="PROMPT: Enter news headline or source text for analysis..."
            className="w-full h-28 bg-black/50 border border-zinc-800 rounded-2xl p-4 text-sm font-mono text-blue-100 placeholder:text-zinc-700 focus:border-blue-500/50 outline-none transition-all resize-none"
          />

          <div 
            className="group relative h-40 border-2 border-dashed border-zinc-800 hover:border-blue-500/40 rounded-2xl flex flex-col items-center justify-center transition-all bg-black/40 overflow-hidden cursor-pointer"
            onClick={() => document.getElementById('file-upload')?.click()}
          >
            {isScanning && <div className="absolute inset-x-0 h-1 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,1)] z-20 animate-laser" />}
            <input 
              id="file-upload" 
              type="file" 
              className="hidden" 
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
            <Upload className="text-zinc-600 mb-2 group-hover:text-blue-400 transition-colors" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
              {file ? file.name : "Upload Visual Evidence (IMG/VID)"}
            </span>
          </div>

          <button 
            onClick={handleVerify}
            disabled={isScanning}
            className="group relative w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-800 text-white font-black rounded-2xl overflow-hidden transition-all active:scale-[0.98]"
          >
            <div className="relative z-10 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs">
              {isScanning ? <Loader2 className="animate-spin" size={16} /> : <Zap size={16} fill="currentColor" />}
              {isScanning ? "Processing GPU Inference..." : "Run Multimodal Verification"}
            </div>
          </button>
        </div>

        {/* ZONE 2: LIVE METRICS */}
        <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
          <div className="space-y-1">
            <p className="text-[9px] font-mono text-zinc-500 uppercase">Confidence</p>
            <div className="text-xl font-black text-blue-400 font-mono">
              {result ? `${(result.confidence * 100).toFixed(1)}%` : "0.0%"}
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[9px] font-mono text-zinc-500 uppercase">Hardware</p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-green-500">
              <Cpu size={12} /> {result?.device === "cuda" ? "RTX 4050" : "CPU Engine"}
            </div>
          </div>
          <div className="space-y-1 text-right">
            <p className="text-[9px] font-mono text-zinc-500 uppercase">Latency</p>
            <div className="flex items-center justify-end gap-2 text-[11px] font-mono text-blue-400">
              <Activity size={12} /> {result?.latency || "0ms"}
            </div>
          </div>
        </div>
      </div>

      {/* ZONE 3: AUTHENTICITY VERDICT */}
      {result && (
        <div className={`p-6 rounded-3xl border-2 flex items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ${result.is_fake ? 'bg-red-500/10 border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.1)]' : 'bg-green-500/10 border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.1)]'}`}>
          <div className={`p-4 rounded-2xl ${result.is_fake ? 'bg-red-500' : 'bg-green-500'}`}>
            {result.is_fake ? <AlertTriangle size={32} className="text-white" /> : <ShieldCheck size={32} className="text-white" />}
          </div>
          <div>
            <h2 className={`text-3xl font-black italic uppercase tracking-tighter ${result.is_fake ? 'text-red-500' : 'text-green-500'}`}>
              {result.is_fake ? 'Deception Detected' : 'Authentic Content'}
            </h2>
            <p className="text-zinc-400 text-xs font-mono mt-1">
              {result.is_fake ? 'Cross-modal analysis flags high probability of AI manipulation.' : 'Content verified against MiRAGeNews authenticity standards.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}