import React, { useState, useEffect, useCallback } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuizScreen } from './components/QuizScreen';
import { HighScoreScreen } from './components/HighScoreScreen';
import { PlayerScore, GameState } from './types';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Welcome);
  const [playerName, setPlayerName] = useState<string>('');
  const [totalScore, setTotalScore] = useState<number>(0);
  const [currentChapter, setCurrentChapter] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [highScores, setHighScores] = useState<PlayerScore[]>([]);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [fromWelcome, setFromWelcome] = useState<boolean>(false);

  useEffect(() => {
    try {
      const savedPlayerName = localStorage.getItem('mdrQuizPlayerName');
      const savedTotalScore = localStorage.getItem('mdrQuizTotalScore');
      const savedCurrentChapter = localStorage.getItem('mdrQuizCurrentChapter');
      const savedCurrentQuestion = localStorage.getItem('mdrQuizCurrentQuestion');
      const savedHighScores = localStorage.getItem('mdrQuizHighScores');

      if (savedPlayerName) {
        setPlayerName(savedPlayerName);
        setTotalScore(savedTotalScore ? parseInt(savedTotalScore, 10) : 0);
        setCurrentChapter(savedCurrentChapter ? parseInt(savedCurrentChapter, 10) : 0);
        setCurrentQuestion(savedCurrentQuestion ? parseInt(savedCurrentQuestion, 10) : 0);
        setGameState(GameState.Playing);
      }
      if (savedHighScores) {
        setHighScores(JSON.parse(savedHighScores));
      }
    } catch (error) {
      console.error("Failed to load game state from localStorage", error);
    }
  }, []);

  const saveProgress = useCallback(() => {
    try {
      localStorage.setItem('mdrQuizPlayerName', playerName);
      localStorage.setItem('mdrQuizTotalScore', totalScore.toString());
      localStorage.setItem('mdrQuizCurrentChapter', currentChapter.toString());
      localStorage.setItem('mdrQuizCurrentQuestion', currentQuestion.toString());
    } catch (error) {
      console.error("Failed to save progress to localStorage", error);
    }
  }, [playerName, totalScore, currentChapter]);

  useEffect(() => {
    if (gameState === GameState.Playing && playerName) {
      saveProgress();
    }
  }, [playerName, totalScore, currentChapter, currentQuestion, gameState, saveProgress]);

  const handleGameStart = (name: string) => {
    setPlayerName(name);
    setTotalScore(0);
    setCurrentChapter(0);
    setCurrentQuestion(0);
    setGameState(GameState.Playing);
  };

  const handleGameEnd = (finalScore: number) => {
    const newScore: PlayerScore = { name: playerName, score: finalScore };
    const updatedHighScores = [...highScores, newScore]
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
    setHighScores(updatedHighScores);
    try {
      localStorage.setItem('mdrQuizHighScores', JSON.stringify(updatedHighScores));
      localStorage.removeItem('mdrQuizPlayerName');
      localStorage.removeItem('mdrQuizTotalScore');
      localStorage.removeItem('mdrQuizCurrentChapter');
      localStorage.removeItem('mdrQuizCurrentQuestion');
    } catch (error) {
      console.error("Failed to save high scores or clear game state", error);
    }
    setIsGameOver(true);
    setGameState(GameState.HighScore);
  };
  
  const handleShowHighScores = () => {
    setIsGameOver(false);
    setFromWelcome(gameState === GameState.Welcome);
    setGameState(GameState.HighScore);
  };

  const handleBackToGame = () => {
    if (fromWelcome) {
      setGameState(GameState.Welcome);
    } else {
      setGameState(GameState.Playing);
    }
  };

  const handleRestart = () => {
    setGameState(GameState.Welcome);
    setPlayerName('');
    setIsGameOver(false);
  };

  const handleResetHighScores = () => {
    setHighScores([]);
    localStorage.removeItem('mdrQuizHighScores');
  };

  const renderScreen = () => {
    switch (gameState) {
      case GameState.Playing:
        return (
          <QuizScreen
            playerName={playerName}
            initialScore={totalScore}
            initialChapter={currentChapter}
            initialQuestion={currentQuestion}
            highScores={highScores}
            onGameEnd={handleGameEnd}
            setTotalScore={setTotalScore}
            setCurrentChapter={setCurrentChapter}
            setCurrentQuestion={setCurrentQuestion}
            onShowHighScores={handleShowHighScores}
          />
        );
      case GameState.HighScore:
        return (
          <HighScoreScreen 
            scores={highScores} 
            onRestart={handleRestart} 
            onBack={handleBackToGame} 
            isGameOver={isGameOver} 
          />
        );
      case GameState.Welcome:
      default:
        return (
          <WelcomeScreen 
            onStart={handleGameStart} 
            onResetHighScores={handleResetHighScores} 
            onShowHighScores={handleShowHighScores}
          />
        );
    }
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-4 bg-inera-secondary-95"
    >
      <main className="relative z-10 w-full max-w-4xl mx-auto">{renderScreen()}</main>
    </div>
  );
};

export default App;