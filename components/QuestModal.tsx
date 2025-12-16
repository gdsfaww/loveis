import React, { useState, useEffect } from 'react';
import { Quest } from '../types';
import { X, Gift, HelpCircle, Heart, Star } from 'lucide-react';
import { getQuestHint } from '../services/geminiService';

interface QuestModalProps {
  quest: Quest;
  isCompleted: boolean;
  onClose: () => void;
  onComplete: (questId: number) => void;
}

const QuestModal: React.FC<QuestModalProps> = ({ quest, isCompleted, onClose, onComplete }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [hint, setHint] = useState<string | null>(null);
  const [loadingHint, setLoadingHint] = useState(false);

  useEffect(() => {
    setCode('');
    setError('');
    setAttempts(0);
    setHint(null);
  }, [quest.id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim().toUpperCase() === quest.unlockCode.toUpperCase()) {
      onComplete(quest.id);
    } else {
      setError('Этот ключик не подходит, любимая... ❤️');
      setAttempts(prev => prev + 1);
    }
  };

  const handleGetHint = async () => {
    setLoadingHint(true);
    const aiHint = await getQuestHint(quest.title, quest.description);
    setHint(aiHint);
    setLoadingHint(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0f172a] border border-white/10 w-full max-w-lg rounded-[2rem] shadow-[0_0_50px_rgba(225,29,72,0.15)] overflow-hidden flex flex-col max-h-[90vh] relative">
        
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-900/20 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-900/20 blur-[80px] rounded-full pointer-events-none"></div>

        {/* Header */}
        <div className="relative pt-10 pb-6 px-8 flex flex-col items-center justify-center shrink-0 border-b border-white/5">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-white/30 hover:text-white transition-colors z-20"
          >
            <X size={24} />
          </button>
          
          <div className="text-center z-10">
            <span className="font-display text-3xl text-gold block mb-2 drop-shadow-sm">
              День {quest.day}
            </span>
            <h2 className="text-3xl md:text-4xl font-body font-bold text-white tracking-wide leading-tight">
              {quest.title}
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 pb-8 pt-6 overflow-y-auto flex-1 custom-scrollbar">
          <div className="prose prose-invert max-w-none mb-10">
            <p className="font-body text-xl md:text-2xl text-slate-300 leading-relaxed text-center font-light">
              <span className="text-4xl text-rose-500 font-display mr-1">"</span>
              {quest.description}
              <span className="text-4xl text-rose-500 font-display ml-1">"</span>
            </p>
          </div>

          {isCompleted ? (
            <div className="p-8 bg-gradient-to-br from-emerald-950/40 to-teal-950/40 border border-emerald-500/20 rounded-3xl text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors"></div>
              <Gift className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-2xl font-display text-emerald-200 mb-2">Награда твоя!</h3>
              <p className="text-emerald-100/70 font-ui text-sm uppercase tracking-widest">{quest.rewardText}</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
               {/* Hint Section */}
               {!hint && attempts >= 1 && (
                <button 
                  onClick={handleGetHint}
                  disabled={loadingHint}
                  className="w-full py-2 text-sm text-gold/80 hover:text-gold flex items-center justify-center gap-2 transition-all font-ui tracking-wide uppercase"
                >
                  {loadingHint ? (
                    <span className="animate-pulse">Купидон думает...</span>
                  ) : (
                    <>
                      <Star size={14} className="animate-spin-slow" />
                      <span>Попросить подсказку</span>
                    </>
                  )}
                </button>
              )}
              
              {hint && (
                <div className="p-6 bg-indigo-950/30 border-l-2 border-gold/50 rounded-r-xl">
                  <p className="text-indigo-200 font-body text-xl italic">{hint}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                <div className="relative">
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/10 focus:outline-none focus:ring-1 focus:ring-rose-500/50 text-center tracking-[0.5em] text-xl uppercase font-ui transition-all"
                    placeholder="КОД"
                  />
                </div>
                
                {error && <p className="text-rose-400 text-lg text-center font-body italic">{error}</p>}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-700 to-indigo-700 text-white font-ui font-semibold uppercase tracking-[0.2em] py-4 rounded-xl shadow-lg shadow-rose-900/20 flex items-center justify-center gap-3 transition-all transform hover:scale-[1.01] hover:shadow-rose-900/40 text-sm border border-white/5"
                >
                  <Heart className="fill-current w-4 h-4" />
                  Открыть
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestModal;