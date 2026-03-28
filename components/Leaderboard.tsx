import React from 'react';
import { Trophy, User } from 'lucide-react';
import { PlayerScore } from '../types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface LeaderboardProps {
  scores: PlayerScore[];
  currentPlayerName: string;
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ scores, currentPlayerName }) => {
  return (
    <div className="inera-card w-full">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="w-6 h-6 text-yellow-500" />
        <h2 className="text-xl">Topplista</h2>
      </div>
      
      <div className="space-y-2">
        {scores.length > 0 ? (
          scores.slice(0, 5).map((score, index) => {
            const isCurrentPlayer = score.name === currentPlayerName;
            
            return (
              <div
                key={index}
                className={cn(
                  "flex items-center justify-between p-3 rounded-md transition-colors",
                  isCurrentPlayer ? "bg-blue-50 border border-inera-blue" : "bg-inera-gray-light"
                )}
              >
                <div className="flex items-center gap-3">
                  <span className={cn(
                    "font-bold text-sm w-6 text-center",
                    index < 3 ? "text-inera-blue" : "text-gray-400"
                  )}>
                    {index + 1}
                  </span>
                  <div className="flex items-center gap-2">
                    {isCurrentPlayer && <User className="w-4 h-4 text-inera-blue" />}
                    <span className={cn(
                      "font-bold truncate",
                      isCurrentPlayer ? "text-inera-blue" : "text-inera-heading"
                    )}>
                      {score.name}
                    </span>
                  </div>
                </div>
                <span className="font-black text-inera-blue">
                  {score.score.toFixed(1)} <span className="text-[10px] font-normal text-gray-400">p</span>
                </span>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500 py-8 italic">Inga poäng än.</p>
        )}
      </div>
    </div>
  );
};
