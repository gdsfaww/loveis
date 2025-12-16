import React from 'react';
import { Quest, QuestCategory } from '../types';
import { Lock, Check, Gift, MapPin, Home, Zap, Snowflake, Star } from 'lucide-react';

interface QuestCardProps {
  quest: Quest;
  status: 'locked' | 'current' | 'completed';
  onClick: (quest: Quest) => void;
}

const QuestCard: React.FC<QuestCardProps> = ({ quest, status, onClick }) => {
  
  const getIcon = () => {
    if (status === 'locked') return <Lock className="w-5 h-5 text-white/20" />;
    if (status === 'completed') return <Check className="w-6 h-6 text-emerald-300" />;
    
    switch (quest.category) {
      case QuestCategory.HOME: return <Home className="w-6 h-6 text-rose-300" />;
      case QuestCategory.CITY: return <MapPin className="w-6 h-6 text-indigo-300" />;
      case QuestCategory.HYBRID: return <Zap className="w-6 h-6 text-gold" />;
      default: return <Gift className="w-6 h-6 text-pink-300" />;
    }
  };

  const baseClasses = "relative aspect-[4/5] rounded-[1.5rem] p-4 flex flex-col items-center justify-between transition-all duration-500 border backdrop-blur-md group overflow-hidden";
  
  const statusClasses = {
    locked: "bg-white/5 border-white/5 cursor-not-allowed grayscale opacity-60",
    current: "bg-gradient-to-b from-white/10 to-luxury-purple/40 border-gold/30 shadow-[0_0_25px_rgba(251,191,36,0.15)] hover:shadow-[0_0_35px_rgba(225,29,72,0.3)] hover:-translate-y-2 cursor-pointer hover:border-gold/60",
    completed: "bg-emerald-950/30 border-emerald-500/20 cursor-pointer hover:bg-emerald-900/30"
  };

  return (
    <div 
      onClick={() => status !== 'locked' && onClick(quest)}
      className={`${baseClasses} ${statusClasses[status]}`}
    >
      {/* Background Decor */}
      {status === 'current' && (
        <div className="absolute inset-0 bg-gradient-to-t from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      )}
      
      {/* Day Indicator */}
      <div className="w-full flex justify-between items-start z-10">
        <span className={`font-display text-2xl ${status === 'current' ? 'text-gold' : 'text-white/20'}`}>
           {quest.day}
        </span>
        {status === 'locked' && <Snowflake className="w-4 h-4 text-white/10" />}
        {status === 'current' && <Star className="w-4 h-4 text-gold fill-gold animate-pulse" />}
      </div>
      
      {/* Icon Circle */}
      <div className={`p-4 rounded-full transition-all duration-500 z-10 ${status === 'current' ? 'bg-white/5 ring-1 ring-white/20 group-hover:scale-110 group-hover:bg-white/10' : 'bg-white/5'}`}>
        {getIcon()}
      </div>
      
      {/* Title */}
      <div className="text-center z-10 pb-2">
        <h3 className={`text-lg font-body font-semibold leading-tight ${status === 'locked' ? 'text-white/20' : 'text-white group-hover:text-rose-200 transition-colors'}`}>
          {status === 'locked' ? '???' : quest.title}
        </h3>
        
        {status === 'current' && (
          <div className="h-[1px] w-8 bg-gold/50 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        )}
      </div>
    </div>
  );
};

export default QuestCard;