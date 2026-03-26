import Navbar from './components/Navbar';
import { Sparkles } from 'lucide-react';

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <div className="text-center py-12">
          <h1 className="text-6xl font-bold tracking-tight mb-3 text-foreground">
            Build Your Bridge
          </h1>
          <p className="text-xl text-muted-foreground">
            Learn anything by teaching something
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Skill Balance */}
          <div className="bg-card border border-border rounded-3xl p-10 bridge-glow">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="h-8 w-8 text-teach" />
              <h2 className="text-2xl font-semibold text-foreground">Your Skill Balance</h2>
            </div>

            <div className="text-[140px] leading-none font-bold text-teach mb-2">84</div>
            <p className="text-teach text-xl font-medium">Well Balanced</p>
            <p className="text-muted-foreground mt-4">
              You're giving almost as much as you're receiving.
            </p>
          </div>

          {/* Best Match */}
          <div className="bg-card border border-bridge/30 rounded-3xl p-10 flex flex-col">
            <p className="text-bridge uppercase text-sm tracking-widest mb-6">Today's Best Match</p>

            <div className="flex-1 flex items-center gap-8 text-center">
              <div className="flex-1">
                <div className="text-teach text-sm mb-1">YOU TEACH</div>
                <div className="font-medium text-lg text-foreground">React + TypeScript</div>
              </div>

              <div className="text-5xl text-bridge">↔</div>

              <div className="flex-1">
                <div className="text-learn text-sm mb-1">YOU LEARN</div>
                <div className="font-medium text-lg text-foreground">Portrait Photography</div>
              </div>
            </div>

            <button className="mt-10 w-full py-4 bg-gradient-to-r from-teach to-learn rounded-2xl font-medium text-white hover:brightness-110 transition-all">
              Message Sarah Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}