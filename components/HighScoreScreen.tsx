import React from 'react';
import { motion } from 'motion/react';
import { Trophy, RotateCcw, Medal, ChevronRight } from 'lucide-react';
import { PlayerScore } from '../types';

interface HighScoreScreenProps {
  scores: PlayerScore[];
  onRestart: () => void;
  onBack: () => void;
  isGameOver: boolean;
}

export const HighScoreScreen: React.FC<HighScoreScreenProps> = ({ scores, onRestart, onBack, isGameOver }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="inera-card max-w-2xl mx-auto"
    >
      <div className="text-center mb-8">
        <div className="inline-flex p-4 bg-inera-attention-95 rounded-full mb-4">
          <Trophy className="w-12 h-12 text-inera-attention-40" />
        </div>
        <h1 className="text-4xl mb-2">Topplista</h1>
        <p className="text-xl text-inera-neutral-40">
          {isGameOver ? "Spelet är slut! Här är de bästa resultaten." : "Här är de bästa resultaten. Bra kämpat!"}
        </p>
      </div>

      <div className="overflow-hidden border border-inera-neutral-90 rounded-lg mb-8">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-inera-secondary-95 border-bottom border-inera-neutral-90">
              <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-inera-neutral-40 w-20">Plats</th>
              <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-inera-neutral-40">Namn</th>
              <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-inera-neutral-40 text-right">Poäng</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-inera-neutral-90">
            {scores.length > 0 ? (
              scores.map((score, index) => (
                <tr 
                  key={index}
                  className={index === 0 ? "bg-inera-attention-95/30" : "bg-white hover:bg-inera-secondary-95 transition-colors"}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {index < 3 ? (
                        <Medal className={`w-5 h-5 ${
                          index === 0 ? "text-inera-attention-50" : 
                          index === 1 ? "text-inera-neutral-60" : 
                          "text-inera-attention-40"
                        }`} />
                      ) : (
                        <span className="w-5 text-center text-inera-neutral-60 font-bold">{index + 1}</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold text-inera-neutral-10">
                    {score.name}
                  </td>
                  <td className="px-6 py-4 text-right font-black text-inera-primary-50 text-lg">
                    {score.score.toFixed(1)} <span className="text-xs font-normal text-inera-neutral-40">p</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="px-6 py-12 text-center text-gray-500 italic">
                  Inga poäng registrerade än. Bli den första!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex gap-4">
        {isGameOver ? (
          <button
            onClick={onRestart}
            className="inera-button-primary w-full flex items-center justify-center gap-2 text-xl py-4"
          >
            <RotateCcw className="w-6 h-6" />
            Spela igen
          </button>
        ) : (
          <button
            onClick={onBack}
            className="inera-button-primary w-full flex items-center justify-center gap-2 text-xl py-4"
          >
            <ChevronRight className="w-6 h-6 rotate-180" />
            Återgå
          </button>
        )}
      </div>
    </motion.div>
  );
};
