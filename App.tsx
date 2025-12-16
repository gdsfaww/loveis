import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import QuestCard from './components/QuestCard';
import QuestModal from './components/QuestModal';
import SecretMessage from './components/SecretMessage';
import { QUESTS, SECRET_CLUES } from './constants';
import { UserState, Quest } from './types';
import { Heart, Trophy, Sparkles, Snowflake, Puzzle } from 'lucide-react';

// Subtle background particle
const Particle: React.FC<{ delay: number; style: React.CSSProperties }> = ({ delay, style }) => (
  <div 
    className="absolute rounded-full bg-white/20 animate-float"
    style={{
      ...style,
      animationDelay: `${delay}s`,
    }}
  />
);

const App: React.FC = () => {
  const [user, setUser] = useState<UserState>({
    isAuthenticated: false,
    unlockedDay: 1,
    completedDays: []
  });

  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);
  const [foundClueId, setFoundClueId] = useState<string | null>(null);

  useEffect(() => {
    // 1. Load User State
    const saved = localStorage.getItem('loveQuestState');
    if (saved) {
      setUser(JSON.parse(saved));
    }

    // 2. Check for QR Code Clue in URL (e.g., ?clue=1)
    const params = new URLSearchParams(window.location.search);
    const clueParam = params.get('clue');
    if (clueParam) {
        setFoundClueId(clueParam);
    }
  }, []);

  useEffect(() => {
    if (user.isAuthenticated) {
      localStorage.setItem('loveQuestState', JSON.stringify(user));
    }
  }, [user]);

  const handleLogin = () => {
    setUser(prev => ({ ...prev, isAuthenticated: true }));
  };

  const handleQuestComplete = (questId: number) => {
    setUser(prev => {
      const isAlreadyCompleted = prev.completedDays.includes(questId);
      if (isAlreadyCompleted) return prev;

      const newCompleted = [...prev.completedDays, questId];
      const nextDay = Math.max(prev.unlockedDay, questId + 1);
      
      return {
        ...prev,
        completedDays: newCompleted,
        unlockedDay: nextDay > 15 ? 15 : nextDay
      };
    });
  };

  const handleClueClose = () => {
    // Remove the query param from URL without refreshing
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.history.pushState({path:newUrl},'',newUrl);
    setFoundClueId(null);
  };

  const getQuestStatus = (quest: Quest) => {
    if (user.completedDays.includes(quest.id)) return 'completed';
    if (quest.day <= user.unlockedDay) return 'current';
    return 'locked';
  };

  const collectedLetters = QUESTS
    .filter(q => user.completedDays.includes(q.id) && q.clueLetter)
    .sort((a, b) => a.day - b.day)
    .map(q => q.clueLetter);

  // If a QR code was scanned, show the Clue Screen immediately (bypassing Login)
  if (foundClueId) {
      const clue = SECRET_CLUES.find(c => c.id === foundClueId);
      if (clue) {
          return <SecretMessage clue={clue} onClose={handleClueClose} />;
      }
  }

  if (!user.isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  const progress = Math.round((user.completedDays.length / 15) * 100);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 pb-20 relative overflow-x-hidden font-body">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-rose-900/10 blur-[120px] rounded-full"></div>
        {/* Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <Particle 
            key={i} 
            delay={i * 2} 
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.3
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-900 to-indigo-900 flex items-center justify-center border border-white/10 shadow-inner">
             <Heart className="text-rose-400 fill-rose-400/20 w-5 h-5" />
          </div>
          <h1 className="font-display text-3xl text-gold-gradient pt-1">
            Love Quest
          </h1>
        </div>
        
        <div className="flex flex-col items-end gap-1">
          <span className="text-[10px] font-ui font-bold tracking-[0.2em] text-slate-500 uppercase">Прогресс</span>
          <div className="w-24 sm:w-32 h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-goldDark via-gold to-white transition-all duration-1000 ease-out" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl relative z-10">
        
        {/* Intro */}
        <div className="text-center mb-10 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/5 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="inline-flex items-center gap-3 mb-4 px-5 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm">
            <Snowflake className="w-3 h-3 text-blue-200" />
            <span className="text-xs font-ui font-bold tracking-[0.2em] uppercase text-blue-100">Декабрь 16</span>
            <Snowflake className="w-3 h-3 text-blue-200" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-display text-transparent bg-clip-text bg-gradient-to-r from-rose-100 via-white to-indigo-100 mb-6 drop-shadow-2xl">
            15 Steps to Magic
          </h2>
          <p className="font-body text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light italic">
            "Каждая разгадка дарит тебе букву. Собери их все, чтобы открыть моё сердце..."
          </p>
        </div>

        {/* Letters Bank */}
        <div className="mb-12 flex justify-center">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md max-w-3xl w-full">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <Puzzle className="w-4 h-4 text-gold" />
                    <span className="text-xs font-ui uppercase tracking-widest text-slate-400">Собранные фрагменты</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                    {Array.from({ length: 14 }).map((_, i) => (
                        <div 
                            key={i} 
                            className={`w-10 h-12 rounded-lg flex items-center justify-center font-display text-2xl border transition-all duration-500
                                ${collectedLetters[i] 
                                    ? 'bg-gold/10 border-gold/30 text-gold shadow-[0_0_15px_rgba(251,191,36,0.2)]' 
                                    : 'bg-white/5 border-white/5 text-white/10'}`}
                        >
                            {collectedLetters[i] || '?'}
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Quest Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {QUESTS.map((quest) => (
            <QuestCard
              key={quest.id}
              quest={quest}
              status={getQuestStatus(quest)}
              onClick={setSelectedQuest}
            />
          ))}
        </div>

        {/* Final Completion Banner */}
        {user.completedDays.length === 15 && (
          <div className="mt-20 p-12 bg-gradient-to-br from-amber-950/40 to-black border border-gold/20 rounded-[3rem] text-center relative overflow-hidden group shadow-[0_0_100px_rgba(251,191,36,0.1)] animate-fade-in">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
            <div className="relative z-10">
                <div className="inline-flex p-6 bg-gold/10 rounded-full mb-6 ring-1 ring-gold/30 backdrop-blur-md">
                     <Trophy className="w-16 h-16 text-gold drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]" />
                </div>
                <h3 className="text-5xl font-display text-gold mb-4">Наша История Вечна</h3>
                <p className="text-amber-100/80 font-body text-2xl max-w-xl mx-auto italic">
                    Ты собрала все ключи, моя королева. Самый главный подарок — это наша любовь.
                </p>
                <div className="mt-8 flex justify-center gap-4 text-gold/40">
                    <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-24 text-center pb-12 border-t border-white/5 pt-12">
        <div className="flex flex-col items-center gap-4">
            <Heart className="w-5 h-5 text-rose-600 fill-current animate-pulse-slow" />
            <p className="font-display text-2xl text-slate-500">
              Made with eternal love by Anton
            </p>
        </div>
      </footer>

      {/* Modal */}
      {selectedQuest && (
        <QuestModal
          quest={selectedQuest}
          isCompleted={user.completedDays.includes(selectedQuest.id)}
          onClose={() => setSelectedQuest(null)}
          onComplete={handleQuestComplete}
        />
      )}
    </div>
  );
};

export default App;