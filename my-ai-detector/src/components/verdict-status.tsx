import { ShieldCheck, AlertTriangle } from "lucide-react";

export function VerdictStatus({ isFake = false }: { isFake?: boolean }) {
  return (
    <div className="mt-6 flex flex-col md:flex-row gap-6 items-stretch max-w-6xl w-full">
      {/* Outcome Zone */}
      <div className={`flex-1 p-6 rounded-2xl border flex items-center gap-6 ${isFake ? 'bg-red-500/10 border-red-500/20' : 'bg-green-500/10 border-green-500/20'}`}>
        <div className={`p-4 rounded-xl ${isFake ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
          {isFake ? <AlertTriangle size={40} /> : <ShieldCheck size={40} />}
        </div>
        <div>
          <h2 className={`text-4xl font-black italic uppercase ${isFake ? 'text-red-500' : 'text-green-500'}`}>
            {isFake ? 'Flagged as Fake' : 'Verified Real'}
          </h2>
          <p className="text-zinc-400 text-sm mt-1">Cross-modal analysis: Image metadata contradicts textual claims.</p>
        </div>
      </div>

      {/* Info Zone (HackTech Branding) */}
      <div className="w-full md:w-80 p-6 bg-zinc-900/50 rounded-2xl border border-white/5 text-xs font-mono space-y-2">
        <div className="flex justify-between"><span className="text-zinc-500">Team:</span> <span className="text-white">HackTech</span></div>
        <div className="flex justify-between"><span className="text-zinc-500">Lead:</span> <span className="text-white">[Your Name]</span></div>
        <div className="flex justify-between"><span className="text-zinc-500">Dataset:</span> <span className="text-blue-400">MiRAGeNews</span></div>
        <div className="flex justify-between"><span className="text-zinc-500">Model:</span> <span className="text-blue-400">Multimodal Transformer</span></div>
      </div>
    </div>
  );
}