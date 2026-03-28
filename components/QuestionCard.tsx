import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, Info, ChevronRight, HelpCircle, Sparkles } from 'lucide-react';
import { Question, QuestionOption, QuestionType, FeedbackType } from '../types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface QuestionCardProps {
  question: Question;
  chapterNumber: number;
  questionProgress: string;
  onSubmit: (selectedOptions: QuestionOption[]) => void;
  onSkip: () => void;
  onNext: () => void;
  feedback: { type: FeedbackType; recap: string } | null;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  chapterNumber,
  questionProgress,
  onSubmit,
  onSkip,
  onNext,
  feedback,
}) => {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  useEffect(() => {
    setSelectedIndices([]);
  }, [question]);

  const handleOptionClick = (index: number) => {
    if (feedback) return;

    if (question.type === QuestionType.Single) {
      setSelectedIndices([index]);
    } else {
      setSelectedIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    }
  };

  const handleSubmit = () => {
    if (selectedIndices.length === 0 || feedback) return;
    const selectedOptions = selectedIndices.map((i) => question.options[i]);
    onSubmit(selectedOptions);
  };

  return (
    <div className="inera-card w-full">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="bg-inera-primary-50 text-inera-neutral-100 px-3 py-1 rounded-full text-sm font-bold">
            Kapitel {chapterNumber}
          </div>
          <span className="text-sm text-inera-neutral-40 font-medium">{questionProgress}</span>
        </div>
        <HelpCircle className="w-6 h-6 text-inera-primary-50" />
      </div>

      <h2 className="text-2xl mb-8 leading-tight">
        {question.questionText}
      </h2>

      <div className="space-y-3 mb-8">
        {question.options.map((option, index) => {
          const isSelected = selectedIndices.includes(index);
          const isCorrect = option.isCorrect;
          
          let optionClasses = cn(
            "w-full text-left p-4 rounded-md border-2 transition-all flex items-center justify-between group",
            "focus:outline-none focus:ring-4 focus:ring-inera-primary-70",
            !feedback && isSelected && "border-inera-primary-50 bg-inera-secondary-95",
            !feedback && !isSelected && "border-inera-neutral-90 hover:border-inera-primary-50 hover:bg-inera-secondary-95",
            feedback && isCorrect && "border-inera-success-40 bg-inera-success-95",
            feedback && isSelected && !isCorrect && "border-inera-error-40 bg-inera-error-95",
            feedback && feedback.type === 'partially-correct' && isCorrect && !isSelected && "border-inera-attention-50 bg-inera-attention-95",
            feedback && !isSelected && !isCorrect && "opacity-60 border-inera-neutral-90"
          );

          return (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              disabled={!!feedback}
              className={optionClasses}
            >
              <span className="text-lg font-medium">{option.text}</span>
              <div className="flex items-center">
                {feedback && isCorrect && <CheckCircle2 className="w-6 h-6 text-inera-success-40" />}
                {feedback && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-inera-error-40" />}
                {!feedback && (
                  <div className={cn(
                    "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                    isSelected ? "border-inera-primary-50 bg-inera-primary-50" : "border-inera-neutral-90 group-hover:border-inera-primary-50"
                  )}>
                    {isSelected && <div className="w-2 h-2 bg-inera-neutral-100 rounded-full" />}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-4">
        {!feedback ? (
          <div className="flex gap-4">
            <button
              onClick={onSkip}
              className="inera-button-secondary flex-1"
            >
              Hoppa över
            </button>
            <button
              onClick={handleSubmit}
              disabled={selectedIndices.length === 0}
              className="inera-button-primary flex-1 flex items-center justify-center gap-2"
            >
              Svara
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: feedback.type === 'correct' ? [0.95, 1.05, 1] : 1 
            }}
            transition={{ 
              duration: feedback.type === 'correct' ? 0.4 : 0.2,
              times: [0, 0.6, 1]
            }}
            className={cn(
              "p-6 rounded-lg border-2 mb-4",
              feedback.type === 'correct' ? "bg-inera-success-95 border-inera-success-40" : 
              feedback.type === 'partially-correct' ? "bg-inera-attention-95 border-inera-attention-50" : "bg-inera-error-95 border-inera-error-40"
            )}
          >
            <div className="flex items-start gap-4">
              <div className={cn(
                "p-2 rounded-full",
                feedback.type === 'correct' ? "bg-inera-success-40 text-inera-neutral-100" : 
                feedback.type === 'partially-correct' ? "bg-inera-attention-50 text-inera-neutral-100" : "bg-inera-error-40 text-inera-neutral-100"
              )}>
                {feedback.type === 'correct' ? <CheckCircle2 className="w-6 h-6" /> : 
                 feedback.type === 'partially-correct' ? <CheckCircle2 className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                    <h3 className={cn(
                    "text-xl",
                    feedback.type === 'correct' ? "text-inera-success-40" : 
                    feedback.type === 'partially-correct' ? "text-inera-attention-40" : "text-inera-error-40"
                    )}>
                    {feedback.type === 'correct' ? 'Rätt svar!' : 
                    feedback.type === 'partially-correct' ? 'Delvis rätt!' : 'Inte helt rätt...'}
                    </h3>
                    {feedback.type === 'correct' && (
                        <div className="flex items-center gap-2">
                            <motion.div
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            >
                                <Sparkles className="w-5 h-5 text-inera-attention-50 fill-inera-attention-50" />
                            </motion.div>
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-sm font-bold text-inera-success-40 uppercase tracking-tighter"
                            >
                                Snyggt!
                            </motion.span>
                        </div>
                    )}
                </div>
                <div className="flex items-start gap-2 text-inera-neutral-10 bg-white/50 p-3 rounded border border-black/5">
                  <Info className="w-5 h-5 mt-0.5 text-inera-primary-50 shrink-0" />
                  <p className="text-sm leading-relaxed italic">{feedback.recap}</p>
                </div>
              </div>
            </div>
            <button
              onClick={onNext}
              className="inera-button-primary w-full mt-6 flex items-center justify-center gap-2"
            >
              Nästa fråga
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};
