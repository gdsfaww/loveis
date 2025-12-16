import React from 'react';
import { SecretClue } from '../types';
import { Heart, Stars, Unlock, MapPin } from 'lucide-react';

interface SecretMessageProps {
  clue: SecretClue;
  onClose: () => void;
}

const SecretMessage: React.FC<SecretMessageProps> = ({ clue, onClose }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#020617] relative overflow-hidden text-center">
      {/* Ambient Background */}
      <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950/40 via-[#020617] to-[#020617] pointer-events-none"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-gold/20 rounded-full animate-float"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: `${i}s`,
              animationDuration: `${Math.random() * 5 + 5}s`
            }}
          />
        ))}
      </div>

      <div className="z-10 max-w-md w-full animate-fade-in relative">
        {/* Card */}
        <div className="relative">
            {/* Background Layer */}
            <div className="absolute inset-0 bg-luxury-glass rounded-[3rem] border border-gold/10 shadow-[0_0_60px_rgba(251,191,36,0.05)] overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 p-10">
                <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-br from-rose-900/50 to-indigo-900/50 p-4 rounded-full ring-1 ring-white/10 shadow-inner relative">
                        <Heart className="w-10 h-10 text-rose-400 fill-rose-400/20 animate-pulse-slow" />
                        <Stars className="w-5 h-5 text-gold absolute -top-2 -right-2 animate-spin-slow" />
                    </div>
                </div>

                <h3 className="text-gold font-ui text-sm uppercase tracking-[0.3em] mb-4 opacity-80">
                    {clue.note || "Секретное послание"}
                </h3>

                <div className="mb-8">
                    <p className="font-display text-4xl md:text-5xl text-white leading-tight drop-shadow-lg mb-2 p-2 opacity-50">"</p>
                    <p className="font-body text-xl md:text-2xl text-slate-200 leading-relaxed italic whitespace-pre-line px-2">
                        {clue.text}
                    </p>
                    <p className="font-display text-4xl md:text-5xl text-white leading-tight drop-shadow-lg mt-2 text-right p-2 opacity-50">"</p>
                </div>

                {/* Conditional Reveal Section */}
                {clue.codeToReveal ? (
                  // Case 1: Final Code
                  <div className="mb-8 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm animate-pulse-slow">
                      <p className="text-emerald-400 text-xs uppercase tracking-widest mb-2 font-ui">Код найден</p>
                      <div className="flex items-center justify-center gap-3">
                          <Unlock className="w-5 h-5 text-gold" />
                          <span className="font-ui text-2xl font-bold text-white tracking-[0.2em]">{clue.codeToReveal}</span>
                      </div>
                      <p className="text-white/30 text-xs mt-2 font-body italic">Введи этот код, чтобы получить букву</p>
                  </div>
                ) : clue.nextLocation ? (
                  // Case 2: Hint for Next Location
                  <div className="mb-8 bg-indigo-950/40 border border-indigo-500/20 rounded-xl p-4 backdrop-blur-sm">
                      <p className="text-indigo-300 text-xs uppercase tracking-widest mb-2 font-ui">Следующий шаг</p>
                      <div className="flex flex-col items-center justify-center gap-2">
                          <MapPin className="w-6 h-6 text-indigo-400 animate-bounce" />
                          <span className="font-body text-xl text-indigo-100 leading-tight">{clue.nextLocation}</span>
                      </div>
                  </div>
                ) : null}

                <button
                    onClick={onClose}
                    className="text-white/40 hover:text-white text-sm font-ui tracking-widest uppercase transition-colors border-b border-transparent hover:border-white/20 pb-1"
                >
                    {clue.codeToReveal ? "Ввести код" : "Искать дальше"}
                </button>
            </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 font-display text-xl text-white/10 px-4 py-2">
          Love Quest
      </div>
    </div>
  );
};

export default SecretMessage;