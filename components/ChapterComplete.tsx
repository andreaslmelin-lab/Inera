import React from 'react';
import { motion } from 'motion/react';
import { Trophy, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ChapterCompleteProps {
  chapterNumber: number;
  chapterScore: number;
  onNextChapter: () => void;
  hasNextChapter: boolean;
}

export const ChapterComplete: React.FC<ChapterCompleteProps> = ({
  chapterNumber,
  chapterScore,
  onNextChapter,
  hasNextChapter,
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="inera-card text-center max-w-md mx-auto"
    >
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-inera-success-95 rounded-full">
          <CheckCircle2 className="w-16 h-16 text-inera-success-40" />
        </div>
      </div>
      
      <h2 className="text-3xl mb-2">
        Kapitel {chapterNumber} avklarat!
      </h2>
      
      <p className="text-xl text-inera-neutral-40 mb-8">
        Snyggt jobbat! Du samlade ihop poäng i detta kapitel.
      </p>
      
      <div className="bg-inera-secondary-95 rounded-lg p-8 mb-8 border border-inera-neutral-90">
        <p className="text-sm text-inera-neutral-40 uppercase tracking-widest font-bold mb-2">Kapitelpoäng</p>
        <p className="text-6xl font-black text-inera-primary-50">{chapterScore.toFixed(1)}</p>
      </div>
      
      <button
        onClick={onNextChapter}
        className="inera-button-primary w-full flex items-center justify-center gap-2 text-xl py-4"
      >
        {hasNextChapter ? (
          <>
            Nästa kapitel
            <ArrowRight className="w-6 h-6" />
          </>
        ) : (
          <>
            Visa slutresultat
            <Trophy className="w-6 h-6" />
          </>
        )}
      </button>
    </motion.div>
  );
};
