import React, { useState } from 'react';
import { APP_PASSWORD } from '../constants';
import { Heart, Snowflake, Sparkles, Key } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const Snowfall = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className={`absolute text-white/10 animate-snow`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 20}%`,
            fontSize: `${Math.random() * 20 + 8}px`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        >
          <Snowflake />
        </div>
      ))}
    </div>
  );
};

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toUpperCase() === APP_PASSWORD) {
      onLogin();
    } else {
      setError('Неверный код, моя хорошая... ❤️');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-luxury-deep via-luxury-dark to-black relative overflow-hidden">
      <Snowfall />
      
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-md">
        {/* Background Container (Clipped) */}
        <div className="absolute inset-0 luxury-glass rounded-[3rem] shadow-2xl overflow-hidden border-t border-white/10">
           {/* Top Shine */}
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-50"></div>
        </div>

        {/* Content Container (Unclipped) */}
        <div className="relative z-10 p-12 text-center">
          <div className="flex justify-center mb-8 relative">
             <div className="relative">
                <div className="absolute inset-0 bg-rose-500/20 blur-xl rounded-full animate-pulse"></div>
                <Heart className="w-14 h-14 text-rose-500 fill-rose-500/20 stroke-[1.5] relative z-10 animate-float" />
                <Sparkles className="w-6 h-6 text-gold absolute -top-2 -right-4 z-20 animate-pulse" />
             </div>
          </div>
          
          {/* Added padding and leading to prevent font clipping */}
          <h1 className="text-6xl font-display text-gold-gradient mb-4 mt-2 drop-shadow-lg tracking-wide py-2 px-4 leading-[1.3]">
            Love Quest
          </h1>
          <p className="font-body text-xl text-blue-100/70 mb-10 tracking-wider">
            Зимнее приключение от Антона
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Key className="w-5 h-5 text-white/30 group-focus-within:text-gold transition-colors" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-luxury-dark/50 border border-white/10 rounded-2xl px-12 py-4 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-gold/50 focus:border-gold/30 transition-all font-ui text-center text-lg tracking-[0.2em] shadow-inner"
                placeholder="SECRET CODE"
              />
            </div>
            
            {error && <p className="font-body text-rose-400 text-lg italic animate-pulse">{error}</p>}
            
            <button
              type="submit"
              className="w-full relative overflow-hidden bg-gradient-to-r from-rose-700 to-indigo-700 hover:from-rose-600 hover:to-indigo-600 text-white font-ui font-medium uppercase tracking-[0.15em] py-4 rounded-2xl shadow-lg transform transition hover:-translate-y-1 active:scale-95 border border-white/5"
            >
              <span className="relative z-10">Открыть</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-shine" />
            </button>
          </form>
        </div>
      </div>
      
      <div className="absolute bottom-8 text-white/20 font-display text-2xl tracking-widest px-4 py-2">
        Made with Love by Anton
      </div>
    </div>
  );
};

export default Login;