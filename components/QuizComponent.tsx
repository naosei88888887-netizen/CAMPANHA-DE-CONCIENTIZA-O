import React, { useState } from 'react';

// --- Icon Components ---

const CheckIcon = ({color}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-check-in" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const CheckCircleSolidIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 animate-check-in" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const XCircleSolidIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400 animate-check-in" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
);

const QuizComponent = ({ questions, accentColor }) => {
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleSelectAnswer = (questionIndex, optionIndex) => {
    if (submitted) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelectedAnswers(Array(questions.length).fill(null));
    setSubmitted(false);
  };

  const allAnswered = selectedAnswers.every(answer => answer !== null);

  return (
    <div className="space-y-6">
       <style>{`
        @keyframes check-in {
            from { transform: scale(0.5); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        .animate-check-in {
            animation: check-in 0.3s ease-out forwards;
        }
      `}</style>
      {questions.map((q, qIndex) => (
        <div key={qIndex} className="bg-white/5 p-4 rounded-lg">
          <p className="font-bold text-lg mb-4 text-white/95">{qIndex + 1}. {q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, oIndex) => {
              const isSelected = selectedAnswers[qIndex] === oIndex;
              const isCorrect = q.correctAnswerIndex === oIndex;
              let buttonClass = 'w-full p-3 rounded-md transition-all duration-200 border-2 border-transparent text-white/80';

              if (submitted) {
                if (isCorrect) {
                  buttonClass += ' bg-green-500/30 border-green-500 text-white font-semibold';
                } else if (isSelected && !isCorrect) {
                  buttonClass += ' bg-red-500/30 border-red-500 text-white font-semibold';
                } else {
                  buttonClass += ' bg-white/10 opacity-60';
                }
              } else {
                if (isSelected) {
                  buttonClass += ` bg-white/20 border-white/50`;
                } else {
                  buttonClass += ' bg-white/10 hover:bg-white/20';
                }
              }

              return (
                <button
                  key={oIndex}
                  onClick={() => handleSelectAnswer(qIndex, oIndex)}
                  disabled={submitted}
                  className={`${buttonClass} flex items-center justify-between text-left`}
                >
                  <span className="pr-4">{option}</span>
                  <div className="w-6 h-6 flex-shrink-0">
                      {!submitted && isSelected && (
                          <CheckIcon color={accentColor} />
                      )}
                      {submitted && isCorrect && (
                          <CheckCircleSolidIcon />
                      )}
                      {submitted && isSelected && !isCorrect && (
                          <XCircleSolidIcon />
                      )}
                  </div>
                </button>
              );
            })}
          </div>
          {submitted && (
            <div className="mt-4 p-3 bg-black/30 rounded-md text-sm text-white/80 border-l-4" style={{ borderColor: accentColor }}>
              <p><strong className="font-bold" style={{color: accentColor}}>Explicação:</strong> {q.explanation}</p>
            </div>
          )}
        </div>
      ))}
      <div className="pt-4 text-center">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className="px-8 py-3 font-bold rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ 
                backgroundColor: allAnswered ? accentColor : '#4b5563', 
                color: allAnswered ? 'black' : '#d1d5db',
                boxShadow: allAnswered ? `0 0 15px ${accentColor}` : 'none'
            }}
          >
            Verificar Respostas
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="px-8 py-3 font-bold rounded-full transition-all transform hover:scale-105"
            style={{ backgroundColor: accentColor, color: 'black', boxShadow: `0 0 15px ${accentColor}` }}
          >
            Refazer Quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;