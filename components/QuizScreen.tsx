import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Info, User, Star, ChevronRight } from 'lucide-react';
import { quizData } from '../services/quizData';
import { playAudio } from '../services/audioService';
import { QuestionCard } from './QuestionCard';
import { ChapterComplete } from './ChapterComplete';
import { PlayerScore, QuestionOption, QuestionType, FeedbackType } from '../types';

interface QuizScreenProps {
  playerName: string;
  initialScore: number;
  initialChapter: number;
  initialQuestion: number;
  highScores: PlayerScore[];
  onGameEnd: (finalScore: number) => void;
  setTotalScore: React.Dispatch<React.SetStateAction<number>>;
  setCurrentChapter: React.Dispatch<React.SetStateAction<number>>;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  onShowHighScores: () => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  playerName,
  initialScore,
  initialChapter,
  initialQuestion,
  onGameEnd,
  setTotalScore,
  setCurrentChapter,
  setCurrentQuestion,
  onShowHighScores
}) => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(initialChapter);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(initialQuestion);
  const [chapterScore, setChapterScore] = useState(0);
  const [totalScore, setLocalTotalScore] = useState(initialScore);
  
  const [feedback, setFeedback] = useState<{ type: FeedbackType; recap: string } | null>(null);
  const [isChapterComplete, setIsChapterComplete] = useState(false);
  
  const currentChapterData = quizData[currentChapterIndex];
  const currentQuestion = currentChapterData?.questions[currentQuestionIndex];
  const hasNextChapter = currentChapterIndex < quizData.length - 1;

  useEffect(() => {
    setTotalScore(totalScore);
    setCurrentChapter(currentChapterIndex);
    setCurrentQuestion(currentQuestionIndex);
  }, [totalScore, currentChapterIndex, currentQuestionIndex, setTotalScore, setCurrentChapter, setCurrentQuestion]);

  const handleSubmitAnswer = (selectedOptions: QuestionOption[]) => {
    if (feedback) return;

    const correctOptions = currentQuestion.options.filter(o => o.isCorrect);
    let scoreGained = 0;
    const maxPoints = currentChapterData.chapterNumber;

    if (currentQuestion.type === QuestionType.Single) {
        const isCorrect = selectedOptions.length === 1 && selectedOptions[0].isCorrect;
        if (isCorrect) {
            scoreGained = maxPoints;
            setFeedback({ type: 'correct', recap: currentQuestion.recap });
            playAudio('correct.mp3');
        } else {
            scoreGained = -(maxPoints / 2);
            setFeedback({ type: 'incorrect', recap: currentQuestion.recap });
            playAudio('wrong.mp3');
        }
    } else { // Multiple Choice
        const correctSelected = selectedOptions.filter(o => o.isCorrect).length;
        const incorrectSelected = selectedOptions.filter(o => !o.isCorrect).length;
        const allCorrectCount = correctOptions.length;

        if (correctSelected === allCorrectCount && incorrectSelected === 0) {
            scoreGained = maxPoints;
            setFeedback({ type: 'correct', recap: currentQuestion.recap });
            playAudio('correct.mp3');
        } else if (correctSelected > 0 && incorrectSelected === 0) {
            // Partially correct: some correct, none incorrect
            scoreGained = (maxPoints / allCorrectCount) * correctSelected;
            setFeedback({ type: 'partially-correct', recap: currentQuestion.recap });
            playAudio('correct.mp3'); // Or a different sound?
        } else {
            // Incorrect: any incorrect selected, or nothing correct selected
            scoreGained = -(maxPoints / 2);
            setFeedback({ type: 'incorrect', recap: currentQuestion.recap });
            playAudio('wrong.mp3');
        }
    }
    
    setChapterScore(prev => prev + scoreGained);
    setLocalTotalScore(prev => Math.max(0, prev + scoreGained));
  };

  const totalQuestions = quizData.reduce((acc, chapter) => acc + chapter.questions.length, 0);
  const questionsCompleted = quizData.slice(0, currentChapterIndex).reduce((acc, chapter) => acc + chapter.questions.length, 0) + currentQuestionIndex;
  const progressPercentage = Math.round((questionsCompleted / totalQuestions) * 100);

  const getEncouragement = () => {
    if (progressPercentage === 0) return "Dags att börja granskningen! 📋";
    if (progressPercentage < 25) return "Bra start! Dokumentationen börjar ta form. 📝";
    if (progressPercentage < 50) return "Snyggt jobbat! Du har koll på förordningarna. ✅";
    if (progressPercentage < 75) return "Hälften gjord! Granskaren ser nöjd ut. 🧐";
    if (progressPercentage < 100) return "Snart i mål! Bara sista valideringen kvar. 🏁";
    return "Grattis! CE-märkningen är säkrad! 🏆";
  };

  const handleNext = () => {
    setFeedback(null);
    if (currentQuestionIndex < currentChapterData.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsChapterComplete(true);
    }
  };

  const handleSkipQuestion = () => {
    handleNext();
  };

  if (!currentQuestion) {
    return null;
  }
  
  const handleNextChapter = () => {
    if (hasNextChapter) {
      setCurrentChapterIndex(prev => prev + 1);
      setCurrentQuestionIndex(0);
      setChapterScore(0);
      setIsChapterComplete(false);
    } else {
      onGameEnd(totalScore);
    }
  };

  const correctAnswersCount = currentQuestion.options.filter(o => o.isCorrect).length;

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      <div className="w-full lg:w-2/3">
        <div className="mb-8">
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-bold text-inera-primary-50 uppercase tracking-wider">Vägen till CE-märkning</span>
            <span className="text-xs font-medium text-gray-500">{progressPercentage}% klar</span>
          </div>
          <div className="h-3 bg-inera-neutral-90 rounded-full overflow-hidden border border-inera-neutral-70 shadow-inner">
            <motion.div 
              className="h-full bg-inera-primary-50 shadow-[0_0_10px_rgba(192,63,115,0.3)]"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="mt-2 text-sm italic text-gray-600 font-medium">{getEncouragement()}</p>
        </div>

        <AnimatePresence mode="wait">
          {isChapterComplete ? (
            <motion.div
              key="chapter-complete"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <ChapterComplete
                chapterNumber={currentChapterData.chapterNumber}
                chapterScore={chapterScore}
                onNextChapter={handleNextChapter}
                hasNextChapter={hasNextChapter}
              />
            </motion.div>
          ) : (
            <motion.div
              key={`question-${currentQuestionIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <QuestionCard
                question={currentQuestion}
                chapterNumber={currentChapterData.chapterNumber}
                questionProgress={`${currentQuestionIndex + 1} / ${currentChapterData.questions.length}`}
                onSubmit={handleSubmitAnswer}
                onSkip={handleSkipQuestion}
                onNext={handleNext}
                feedback={feedback}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="w-full lg:w-1/3 space-y-6">
        <div className="inera-card">
            <div className="flex items-center gap-3 mb-4">
              <User className="w-6 h-6 text-inera-primary-50" />
              <h3 className="text-xl">Spelare</h3>
            </div>
            <p className="text-2xl font-bold text-inera-primary-50 truncate mb-4">{playerName}</p>
            
            <div className="h-px bg-inera-neutral-90 mb-4" />
            
            <div className="flex items-center gap-3 mb-2">
              <Star className="w-6 h-6 text-inera-attention-50" />
              <p className="text-lg font-medium">Totalpoäng</p>
            </div>
            <p className="text-4xl font-bold text-inera-neutral-10">{totalScore.toFixed(1)}</p>
        </div>

        <div className="inera-card">
            <div className="flex items-center gap-3 mb-4">
              <Info className="w-6 h-6 text-inera-primary-50" />
              <h3 className="text-xl">Information</h3>
            </div>
            <div className="space-y-4">
                <div>
                    <p className="text-sm text-inera-neutral-40 uppercase tracking-wider font-semibold">Maxpoäng för frågan</p>
                    <p className="text-xl font-bold">{currentChapterData.chapterNumber.toFixed(1)} p</p>
                </div>
                 <div>
                    <p className="text-sm text-inera-neutral-40 uppercase tracking-wider font-semibold">Svarsinstruktion</p>
                    <p className="text-lg font-medium text-inera-primary-50">
                        {currentQuestion.type === QuestionType.Multiple ? `Välj ${correctAnswersCount} alternativ` : 'Välj 1 alternativ'}
                    </p>
                </div>
            </div>
        </div>

         <button
            onClick={onShowHighScores}
            className="inera-button-secondary w-full flex items-center justify-center gap-2"
        >
            <Trophy className="h-5 w-5" /> Visa topplistan
            <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
