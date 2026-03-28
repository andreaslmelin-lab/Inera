import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Play, Trash2, Trophy } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: (name: string) => void;
  onResetHighScores: () => void;
  onShowHighScores: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart, onResetHighScores, onShowHighScores }) => {
  const [name, setName] = useState('');

  const isAndreasMelin = name.trim().toLowerCase() === 'andreas melin';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onStart(name.trim());
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="inera-card max-w-md mx-auto text-center"
    >
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-inera-secondary-95 rounded-full">
          <Play className="w-12 h-12 text-inera-primary-50 fill-inera-primary-50" />
        </div>
      </div>
      
      <h1 className="text-3xl mb-4">
        Välkommen till MDR UX Master!
      </h1>
      
      <p className="text-inera-neutral-10 mb-8 leading-relaxed">
        Testa dina kunskaper om UX-principer och medicintekniska regelverk (MDR). 
        Ange ditt namn för att börja din resa och klättra på topplistan.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ditt namn..."
            className="inera-input pl-11"
            required
            autoFocus
          />
        </div>
        
        <button
          type="submit"
          className="inera-button-primary w-full flex items-center justify-center gap-2"
          disabled={!name.trim()}
        >
          Starta spelet
          <Play className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={onShowHighScores}
          className="inera-button-secondary w-full flex items-center justify-center gap-2"
        >
          <Trophy className="w-5 h-5" />
          Visa topplista
        </button>

        {isAndreasMelin && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            type="button"
            onClick={() => {
              if (confirm('Är du säker på att du vill nollställa topplistan?')) {
                onResetHighScores();
                alert('Topplistan har nollställts.');
              }
            }}
            className="w-full flex items-center justify-center gap-2 py-2 text-sm text-red-600 hover:text-red-700 font-medium border border-red-200 rounded-md hover:bg-red-50 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Nollställ topplistan
          </motion.button>
        )}
      </form>
    </motion.div>
  );
};
