import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    // Redefine o texto exibido sempre que o texto de origem mudar.
    setDisplayedText('');
  }, [text]);

  useEffect(() => {
    // Se não houver texto ou se a animação estiver completa, não faz nada.
    if (!text || displayedText.length === text.length) {
      return;
    }

    // Agenda a adição do próximo caractere.
    const timeoutId = setTimeout(() => {
      setDisplayedText(text.substring(0, displayedText.length + 1));
    }, speed);

    // Função de limpeza para limpar o timeout se o componente for desmontado
    // ou se as dependências mudarem antes que o timeout dispare.
    return () => clearTimeout(timeoutId);
  }, [displayedText, text, speed]);
  
  return (
    <>
      {displayedText}
      <span className="typing-cursor">|</span>
      <style>
          {`
            @keyframes blink {
              50% { opacity: 0; }
            }
            .typing-cursor {
              animation: blink 1s step-end infinite;
            }
          `}
      </style>
    </>
  );
};

export default TypingEffect;