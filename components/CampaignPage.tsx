import React, { useState, useEffect, useRef } from 'react';
import QuizComponent from './QuizComponent.js';

// --- ICON COMPONENTS ---
const BackArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);

// --- Main Section Icons ---
const AlertIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
);

const ChartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const HelpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
    </svg>
);

const QuizIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// --- Sub-item Icons ---
const ChevronDoubleRightIcon = ({color}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
  </svg>
);

const CheckCircleIcon = ({color}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.5l.053-.053A2 2 0 018.828 4h6.344a2 2 0 011.414.586l.053.053M4 11V6a2 2 0 012-2h12a2 2 0 012 2v5" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const DigitScroller = ({ char, isInView }) => {
    const isDigit = /\d/.test(char);
  
    if (!isDigit) {
      return <span className="pt-[0.1em]">{char}</span>;
    }
  
    const digit = parseInt(char, 10);
    const style = {
      transform: isInView ? `translateY(-${digit * 1.2}em)` : 'translateY(0)',
      transition: 'transform 1.5s cubic-bezier(0.25, 1, 0.5, 1)',
    };
  
    return (
      <div className="h-[1.2em] overflow-hidden leading-none">
        <div style={style}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="h-[1.2em]">
              {i}
            </div>
          ))}
        </div>
      </div>
    );
};

const CountingNumber = ({ endValue, isInView, className, style }) => {
    const match = endValue.match(/^(\D*)?([\d,.\s]+)(\D*)?$/);

    if (!match) {
      return <span className={`font-black ${className}`} style={style}>{endValue}</span>;
    }
    
    const [, prefix = '', numberPart = '', suffix = ''] = match;

    return (
      <div className={`flex items-center justify-center font-black ${className}`} style={style}>
        {prefix && <span className="pt-[0.1em]">{prefix}</span>}
        
        <div className="flex items-center">
            {numberPart.split('').map((char, index) => (
            <DigitScroller key={index} char={char} isInView={isInView} />
            ))}
        </div>
        
        {suffix && <span className="pt-[0.1em]">{suffix}</span>}
      </div>
    );
};


// --- MAIN PAGE COMPONENT ---
const CampaignPage = ({ campaign, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { details, colors } = campaign;
  const accentColor = colors.neon;
  const slideTitleRefs = useRef([]);

  const slides = [
    { id: 'symptoms', title: details.symptoms.title, icon: <AlertIcon/>, content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {details.symptoms.items.map((item, index) => (
          <div key={index} className="p-4 bg-white/5 rounded-lg flex items-center gap-4 transition-all hover:bg-white/10 hover:scale-105">
            <ChevronDoubleRightIcon color={accentColor} />
            <span className="opacity-90 text-left">{item}</span>
          </div>
        ))}
      </div>
    )},
    { id: 'stats', title: details.stats.title, icon: <ChartIcon/>, content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 text-center">
        {details.stats.items.map((stat, index) => (
          <div key={index} className="p-6 bg-white/5 rounded-xl flex flex-col items-center justify-center gap-2 transition-all hover:bg-white/10 hover:scale-105">
            <CountingNumber 
                endValue={stat.value} 
                isInView={currentIndex === 1}
                className="h-14 text-4xl sm:text-5xl"
                style={{color: accentColor, textShadow: `0 0 8px ${accentColor}`}}
            />
            <h4 className="text-lg font-bold text-white/90 mt-2">{stat.label}</h4>
            <p className="text-sm text-white/60">{stat.description}</p>
          </div>
        ))}
      </div>
    )},
    { id: 'prevention', title: details.prevention.title, icon: <ShieldIcon/>, content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {details.prevention.items.map((item, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-lg flex items-center gap-4 transition-all hover:bg-white/10 hover:scale-105">
                  <CheckCircleIcon color={accentColor} />
                  <span className="opacity-90 text-left">{item}</span>
              </div>
          ))}
      </div>
    )},
    { id: 'help', title: details.help.title, icon: <HelpIcon/>, content: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {details.help.items.map((item, index) => (
          <div key={index} className="p-6 bg-white/5 rounded-xl text-left flex flex-col transition-transform hover:scale-105">
              <h4 className="font-bold text-xl">{item.name}</h4>
              <p className="text-white/70 mt-2 mb-4 text-base flex-grow">{item.description}</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-3 mt-auto">
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline inline-flex items-center gap-2" style={{color: accentColor}}>
                    <GlobeIcon /> Visitar Site
                  </a>
                  {item.phone && (
                  <a href={`tel:${item.phone}`} className="font-semibold hover:underline inline-flex items-center gap-2" style={{color: accentColor}}>
                      <PhoneIcon /> Ligar: {item.phone}
                  </a>
                  )}
              </div>
          </div>
        ))}
      </div>
    )},
    { id: 'quiz', title: details.quiz.title, icon: <QuizIcon/>, content: (
        <QuizComponent questions={details.quiz.questions} accentColor={accentColor} />
    )},
  ];

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex < slides.length - 1 ? prevIndex + 1 : prevIndex));
  };

  useEffect(() => {
    // When the slide changes, focus the new slide's title for screen readers
    const titleElement = slideTitleRefs.current[currentIndex];
    if (titleElement) {
      titleElement.focus({ preventScroll: true });
    }
  }, [currentIndex]);

  return (
    <div className={`h-screen w-full bg-gradient-to-br ${colors.bg} font-sans text-white overflow-hidden flex flex-col`}>
        <style>
          {`
            @keyframes fade-in-up {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up {
                animation: fade-in-up 0.6s ease-out forwards;
            }
            .custom-scrollbar::-webkit-scrollbar {
              width: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
                background-color: ${accentColor};
                border-radius: 10px;
                border: 2px solid transparent;
                background-clip: content-box;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background-color: ${accentColor}99; /* 60% opacity */
            }
          `}
      </style>
      <header className="w-full z-20 flex-shrink-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <img 
              src={campaign.logo} 
              alt={`Logo ${campaign.title}`} 
              className="h-10 w-auto" 
            />
            <button
              onClick={onBack}
              className={`inline-flex items-center px-6 py-2 rounded-full font-bold shadow-md transition-all transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 ${colors.accent} ${colors.accentHover} ${colors.ring} text-gray-900`}
              style={{boxShadow: `0 0 12px ${colors.neon}`}}
            >
              <BackArrowIcon />
              Voltar
            </button>
          </div>
        </div>
      </header>
      
        <main className="flex-grow flex items-center justify-center p-4 md:p-8 relative animate-fade-in-up min-h-0">
            <button 
                onClick={goToPrevious}
                disabled={currentIndex === 0}
                className="absolute left-4 md:left-12 z-20 p-2 rounded-full bg-black/20 hover:bg-black/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Slide anterior"
            >
                <ChevronLeftIcon />
            </button>
            <button 
                onClick={goToNext}
                disabled={currentIndex === slides.length - 1}
                className="absolute right-4 md:right-12 z-20 p-2 rounded-full bg-black/20 hover:bg-black/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Próximo slide"
            >
                <ChevronRightIcon />
            </button>

            <div className="w-full max-w-5xl h-full max-h-[650px] relative" style={{ perspective: '1500px' }}>
                {slides.map((slide, index) => {
                    const offset = index - currentIndex;
                    const isActive = offset === 0;
                    const zIndex = slides.length - Math.abs(offset);

                    const transform = `translateX(${offset * 100}%) scale(${isActive ? 1 : 0.8}) rotateY(${offset * -45}deg)`;
                    const opacity = isActive ? 1 : 0;

                    return (
                        <div
                            key={slide.id}
                            className="absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 text-white flex flex-col transition-all duration-700 ease-out"
                            style={{
                                transform,
                                opacity,
                                zIndex,
                                boxShadow: isActive ? `0 0 25px ${accentColor}BF` : 'none',
                            }}
                            aria-hidden={!isActive}
                        >
                            <div className="w-full h-full p-6 sm:p-8 lg:p-12 flex flex-col">
                                <section role="group" aria-labelledby={`slide-title-${slide.id}`} className="flex-shrink-0">
                                    <div className="flex items-center justify-center gap-4 mb-8" style={{color: accentColor}}>
                                        {slide.icon}
                                        <h3
                                            id={`slide-title-${slide.id}`}
                                            ref={el => { slideTitleRefs.current[index] = el; }}
                                            tabIndex={-1}
                                            className="text-3xl md:text-4xl font-bold focus:outline-none text-center"
                                            style={{textShadow: `0 0 12px ${accentColor}`}}
                                        >
                                            {slide.title}
                                        </h3>
                                    </div>
                                </section>
                                
                                <div className="flex-grow overflow-y-auto custom-scrollbar pr-4">
                                    <div className="flex flex-col justify-center min-h-full">
                                        {slide.content}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>
    </div>
  );
};

export default CampaignPage;