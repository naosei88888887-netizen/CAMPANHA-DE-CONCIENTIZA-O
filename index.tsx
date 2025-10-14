import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';

// --- TYPE DEFINITIONS ---
interface CampaignDetails {
  symptoms: {
    title: string;
    items: string[];
  };
  stats: {
    title: string;
    items: {
      value: string;
      label: string;
      description: string;
    }[];
  };
  prevention: {
    title: string;
    items: string[];
  };
  help: {
    title: string;
    items: {
      name: string;
      description: string;
      link: string;
      phone?: string;
    }[];
  };
}

interface Campaign {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  logo: string;
  objectPosition?: string;
  textPosition?: 'left' | 'center';
  colors: {
    bg: string;
    text: string;
    accent: string;
    accentHover: string;
    ring: string;
    neon: string;
    neonGlow: string;
  };
  details: CampaignDetails;
}

// --- CONSTANTS ---
const CAMPAIGNS: Campaign[] = [
  {
    id: 'setembro-amarelo',
    title: 'Setembro Amarelo',
    description: 'A campanha de prevenção ao suicídio que salva vidas.',
    longDescription: 'Setembro Amarelo é uma campanha brasileira de prevenção ao suicídio, iniciada em 2015. O mês de setembro foi escolhido para a campanha porque, desde 2003, o dia 10 de setembro é o Dia Mundial de Prevenção do Suicídio. A ideia é promover eventos que abram espaço para debates sobre suicídio e divulgar o tema alertando a população sobre a importância de sua discussão.',
    image: 'https://i.imgur.com/nVRhO1w.jpeg',
    logo: 'https://i.imgur.com/OKReyaz.png',
    objectPosition: 'object-right',
    colors: {
      bg: 'from-gray-900 via-gray-900 to-yellow-900/20',
      text: 'text-yellow-200',
      accent: 'bg-yellow-400',
      accentHover: 'hover:bg-yellow-500',
      ring: 'ring-yellow-400',
      neon: '#facc15',
      neonGlow: '#fef08a'
    },
    details: {
      symptoms: {
        title: 'Sinais de Alerta',
        items: [
          'Isolamento social e familiar',
          'Mudanças drásticas de humor',
          'Falar sobre morte ou suicídio com frequência',
          'Perda de interesse em atividades que antes gostava',
          'Comportamento autodestrutivo (abuso de álcool/drogas)',
          'Frases como "Eu quero sumir" ou "Não aguento mais"',
        ],
      },
      stats: {
        title: 'Dados sobre o Suicídio',
        items: [
          {
            value: '17.124',
            label: 'Vidas perdidas em 2023',
            description: 'Número de suicídios registrados no Brasil em 2023. Fonte: Anuário Bras. de Segurança Pública.',
          },
          {
            value: '96,8%',
            label: 'Transtornos Mentais',
            description: 'Dos casos de suicídio, 96,8% estão relacionados a transtornos mentais, como depressão e bipolaridade.',
          },
          {
            value: '4ª',
            label: 'Causa de Morte',
            description: 'Entre jovens de 15 a 29 anos no mundo, o suicídio é a quarta principal causa de morte. Fonte: OMS.',
          },
        ],
      },
      prevention: {
        title: 'Prevenção e Cuidados',
        items: [
          'Converse abertamente sobre seus sentimentos.',
          'Pratique atividades físicas regularmente.',
          'Mantenha uma rotina de sono saudável.',
          'Evite o consumo de álcool e drogas.',
          'Busque ajuda profissional ao primeiro sinal de alerta.',
          'Esteja presente e ofereça apoio a amigos e familiares.',
        ],
      },
      help: {
        title: 'Onde Buscar Ajuda',
        items: [
          {
            name: 'CVV (Centro de Valorização da Vida)',
            description: 'Apoio emocional e prevenção do suicídio, atendendo voluntária e gratuitamente todas as pessoas que querem e precisam conversar, sob total sigilo por telefone, email e chat 24 horas todos os dias.',
            link: 'https://www.cvv.org.br/',
            phone: '188',
          },
          {
            name: 'CAPS (Centros de Atenção Psicossocial)',
            description: 'Procure o CAPS mais próximo na sua cidade para atendimento especializado em saúde mental pelo SUS.',
            link: 'https://www.gov.br/saude/pt-br/acesso-a-informacao/acoes-e-programas/caps',
          },
        ],
      },
    },
  },
  {
    id: 'outubro-rosa',
    title: 'Outubro Rosa',
    description: 'A conscientização sobre o câncer de mama é um ato de amor.',
    longDescription: 'Outubro Rosa é uma campanha anual realizada mundialmente em outubro, com a intenção de alertar a sociedade sobre o diagnóstico precoce do câncer de mama. A mobilização visa também à disseminação de dados preventivos e ressalta a importância de olhar com atenção para a saúde, além de lutar por direitos como o atendimento médico e o suporte emocional, garantindo um tratamento de qualidade.',
    image: 'https://i.imgur.com/mAIQdyG.png',
    logo: 'https://i.imgur.com/Rjch5Y3.png',
    objectPosition: 'object-left',
    colors: {
      bg: 'from-gray-900 via-gray-900 to-pink-900/20',
      text: 'text-pink-200',
      accent: 'bg-pink-500',
      accentHover: 'hover:bg-pink-600',
      ring: 'ring-pink-500',
      neon: '#ec4899',
      neonGlow: '#f9a8d4'
    },
    details: {
      symptoms: {
        title: 'Sintomas e Sinais de Alerta',
        items: [
          'Nódulo (caroço), fixo e geralmente indolor',
          'Pele da mama avermelhada, retraída ou parecida com casca de laranja',
          'Alterações no bico do peito (mamilo)',
          'Pequenos nódulos nas axilas ou no pescoço',
          'Saída de líquido anormal pelos mamilos',
        ],
      },
      stats: {
        title: 'Dados sobre o Câncer de Mama',
        items: [
          {
            value: 'Nº 1',
            label: 'Incidência no Brasil',
            description: 'É o tipo de câncer com maior incidência entre mulheres no país (excluindo pele não melanoma). Fonte: INCA.',
          },
          {
            value: '73.610',
            label: 'Novos Casos (2023-2025)',
            description: 'Estimativa de novos casos por ano no Brasil. Fonte: INCA.',
          },
          {
            value: '95%',
            label: 'Chance de Cura',
            description: 'Quando diagnosticado em estágio inicial, as chances de tratamento bem-sucedido são altíssimas.',
          },
        ],
      },
      prevention: {
        title: 'Prevenção e Cuidados',
        items: [
          'Mantenha o peso corporal adequado.',
          'Pratique atividade física regularmente.',
          'Evite o consumo de bebidas alcoólicas.',
          'Amamente: a amamentação protege contra o câncer de mama.',
          'Realize o autoexame das mamas mensalmente.',
          'Consulte seu médico e faça a mamografia de rastreamento.',
        ],
      },
      help: {
        title: 'Onde Buscar Ajuda',
        items: [
          {
            name: 'INCA (Instituto Nacional de Câncer)',
            description: 'Informações detalhadas sobre prevenção, diagnóstico e tratamento do câncer de mama.',
            link: 'https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/mama',
          },
          {
            name: 'FEMAMA',
            description: 'Federação Brasileira de Instituições Filantrópicas de Apoio à Saúde da Mama.',
            link: 'https://www.femama.org.br/',
          },
        ],
      },
    },
  },
  {
    id: 'novembro-azul',
    title: 'Novembro Azul',
    description: 'Cuidar da saúde também é coisa de homem.',
    longDescription: 'Novembro Azul é um movimento mundial que acontece durante o mês de novembro para reforçar a importância da prevenção e do diagnóstico precoce do câncer de próstata. A doença é o segundo tipo de câncer mais comum entre os homens brasileiros e as maiores vítimas são homens a partir dos 50 anos, além de pessoas com presença da doença em parentes de primeiro grau, como pai, irmão ou filho.',
    image: 'https://i.imgur.com/TOcxcTu.jpeg',
    logo: 'https://i.imgur.com/XuVzMm4.png',
    objectPosition: 'object-center',
    colors: {
      bg: 'from-gray-900 via-gray-900 to-blue-900/20',
      text: 'text-blue-200',
      accent: 'bg-blue-500',
      accentHover: 'hover:bg-blue-600',
      ring: 'ring-blue-500',
      neon: '#3b82f6',
      neonGlow: '#93c5fd'
    },
     details: {
      symptoms: {
        title: 'Sintomas e Sinais de Alerta',
        items: [
          'Dificuldade de urinar',
          'Demora em começar e terminar de urinar',
          'Diminuição do jato de urina',
          'Necessidade de urinar mais vezes durante o dia ou à noite',
          'Presença de sangue na urina ou no sêmen',
        ],
      },
      stats: {
        title: 'Dados sobre o Câncer de Próstata',
        items: [
          {
            value: 'Nº 1',
            label: 'Incidência em Homens',
            description: 'É o câncer mais incidente em homens no Brasil (excluindo pele não melanoma). Fonte: INCA.',
          },
          {
            value: '71.730',
            label: 'Novos Casos (2023-2025)',
            description: 'Estimativa de novos casos por ano no Brasil. Fonte: INCA.',
          },
          {
            value: '38',
            label: 'Minutos',
            description: 'É o tempo médio para uma nova morte por câncer de próstata no Brasil.',
          },
        ],
      },
      prevention: {
        title: 'Prevenção e Cuidados',
        items: [
          'Mantenha uma alimentação saudável e equilibrada.',
          'Pratique atividade física regularmente.',
          'Evite o tabagismo e o consumo de álcool.',
          'Consulte um urologista anualmente a partir dos 50 anos (ou 45, se tiver histórico familiar).',
          'Realize os exames de rotina, como o toque retal e o PSA.',
        ],
      },
      help: {
        title: 'Onde Buscar Ajuda',
        items: [
          {
            name: 'Instituto Lado a Lado pela Vida',
            description: 'Pioneiros na campanha Novembro Azul no Brasil, oferecem informação e suporte.',
            link: 'https://ladoaladopelavida.org.br/',
          },
          {
            name: 'Sociedade Brasileira de Urologia',
            description: 'Informações confiáveis e diretrizes sobre a saúde masculina e o câncer de próstata.',
            link: 'https://portaldaurologia.org.br/',
          },
        ],
      },
    },
  },
];

const AUTOPLAY_INTERVAL = 7000; // 7 seconds

// --- COMPONENTS ---

// TypingEffect Component
interface TypingEffectProps {
  text: string;
  speed?: number;
}
const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText('');
  }, [text]);

  useEffect(() => {
    if (!text || displayedText.length === text.length) {
      return;
    }
    const timeoutId = setTimeout(() => {
      setDisplayedText(text.substring(0, displayedText.length + 1));
    }, speed);
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

// BackgroundEffects Component
interface BackgroundEffectsProps {
  activeCampaign: Campaign;
}
const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ activeCampaign }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationFrameIdRef = useRef<number | null>(null);

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    canvas: HTMLCanvasElement;
    
    constructor(canvas: HTMLCanvasElement) {
      this.canvas = canvas;
      this.x = Math.random() * this.canvas.width;
      this.y = Math.random() * this.canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 0.4 - 0.2;
      this.speedY = Math.random() * 0.4 - 0.2;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.size > 0.1) this.size -= 0.01;
      if (this.x < 0 || this.x > this.canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > this.canvas.height) this.speedY *= -1;
    }

    draw(ctx: CanvasRenderingContext2D, color: string) {
        ctx.fillStyle = `rgba(${color}, ${this.size / 3})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const neonColor = activeCampaign.colors.neon;
    const rgbColor = hexToRgb(neonColor);
    const particleColor = rgbColor ? `${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}` : '255, 255, 255';

    const initParticles = () => {
        particlesRef.current = [];
        const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000);
        for (let i = 0; i < numberOfParticles; i++) {
            particlesRef.current.push(new Particle(canvas));
        }
    }
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesRef.current.length; i++) {
        const particle = particlesRef.current[i];
        particle.update();
        particle.draw(ctx, particleColor);
        if (particle.size <= 0.1) {
          particlesRef.current[i] = new Particle(canvas);
        }
      }
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [activeCampaign.colors.neon]);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-1" />;
};


// Navbar Component
interface NavbarProps {
  campaigns: Campaign[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}
const Navbar: React.FC<NavbarProps> = ({ campaigns, activeIndex, setActiveIndex }) => {
  const [isOpen, setIsOpen] = useState(false);
  const activeCampaign = campaigns[activeIndex];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-1000 ease-in-out">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="relative h-10 w-40 flex items-center">
              {campaigns.map((campaign, index) => (
                <img
                  key={campaign.id}
                  src={campaign.logo}
                  alt="Logo Campanhas de Saúde"
                  className={`absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-1000 ease-in-out ${
                    activeIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {campaigns.map((campaign, index) => (
                <a
                  key={campaign.id}
                  href={`#${campaign.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveIndex(index);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform ${
                    activeIndex === index
                      ? `${activeCampaign.colors.accent} text-white shadow-lg`
                      : `${activeCampaign.colors.text} hover:text-white ${campaign.colors.accentHover} hover:shadow-lg hover:-translate-y-0.5 active:scale-95`
                  }`}
                >
                  {campaign.title}
                </a>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${activeCampaign.colors.text} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="mx-4 rounded-b-lg shadow-xl overflow-hidden bg-white/90 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {campaigns.map((campaign, index) => (
                <a
                  key={campaign.id}
                  href={`#${campaign.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveIndex(index);
                    setIsOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 transform ${
                    activeIndex === index
                      ? `${activeCampaign.colors.accent} text-white shadow-md`
                      : `${activeCampaign.colors.text} hover:text-white ${campaign.colors.accentHover} hover:shadow-md active:scale-95`
                  }`}
                >
                  {campaign.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// Carousel Component
interface CarouselProps {
  campaigns: Campaign[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  onShowcaseSelect: (campaign: Campaign) => void;
}
const Carousel: React.FC<CarouselProps> = ({ campaigns, activeIndex, setActiveIndex, onShowcaseSelect }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % campaigns.length);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [campaigns.length, setActiveIndex]);

  const handleShowcaseOpen = (e: React.MouseEvent<HTMLButtonElement>, campaign: Campaign) => {
    e.preventDefault();
    onShowcaseSelect(campaign);
  };
  
  const activeCampaign = campaigns[activeIndex];

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      <style>
        {`
          .neon-text-main {
            color: #fff;
            font-weight: 900;
            text-shadow:
                0 0 5px var(--neon-color-glow),
                0 0 15px var(--neon-color-glow),
                0 0 30px var(--neon-color);
          }
           .neon-text-subtle {
            color: #e5e7eb; /* a bit off-white */
            text-shadow: 0 0 8px var(--neon-color-glow);
          }
          .neon-button {
              background-color: transparent;
              border: 2px solid var(--neon-color);
              color: var(--neon-color-glow);
              text-shadow: 0 0 5px var(--neon-color-glow);
              box-shadow: 0 0 10px var(--neon-color-glow),
                          inset 0 0 10px var(--neon-color-glow);
              transition: color 0.3s, background-color 0.3s, box-shadow 0.3s, text-shadow 0.3s;
          }
          .neon-button:hover {
              color: #111827;
              background-color: var(--neon-color);
              box-shadow: 0 0 20px var(--neon-color),
                          inset 0 0 10px var(--neon-color);
              text-shadow: none;
          }
          @keyframes progress {
            from { width: 0%; }
            to { width: 100%; }
          }
          .animate-progress {
            animation: progress linear forwards;
            box-shadow: 0 0 10px ${activeCampaign.colors.neon}, 0 0 5px ${activeCampaign.colors.neonGlow};
          }
        `}
      </style>
      
      <div className="relative z-10 text-white px-4 w-full h-full" style={{
            '--neon-color': activeCampaign.colors.neon,
            '--neon-color-glow': activeCampaign.colors.neonGlow,
          } as React.CSSProperties}>
         <div className="relative w-full h-full">
            {campaigns.map((campaign, index) => {
              const textPos = campaign.textPosition || 'center';
              return (
              <div
                key={campaign.id}
                className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-1000 ease-out
                ${ textPos === 'left' ? 'items-start text-left pl-8 md:pl-16 lg:pl-32' : 'items-center text-center' }
                ${ index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none' }`}
              >
                <div 
                  className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-96 -z-10 blur-3xl"
                  style={{
                    backgroundImage: 'radial-gradient(ellipse at center, var(--neon-color) 0%, transparent 70%)',
                    opacity: 0.3
                  }}
                />
                <h1 className={`text-5xl sm:text-6xl lg:text-8xl drop-shadow-lg transition-transform duration-700 ease-out uppercase neon-text-main ${
                    index === activeIndex ? 'translate-y-0' : '-translate-y-4'
                }`}>
                  {campaign.title}
                </h1>
                <div className={`mt-4 text-lg md:text-2xl max-w-2xl drop-shadow-md transition-opacity duration-700 ease-out delay-200 min-h-[64px] neon-text-subtle ${
                    index === activeIndex ? 'opacity-100' : 'opacity-0'
                }`}>
                  {index === activeIndex ? <TypingEffect text={campaign.description} /> : null}
                </div>
                <div className={`mt-8 transition-opacity duration-700 ease-out delay-500 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}>
                   <button
                    onClick={(e) => handleShowcaseOpen(e, campaign)}
                    className={`inline-block px-8 py-3 rounded-full font-bold shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 ${campaign.colors.ring} neon-button`}
                  >
                    Saiba Mais
                  </button>
                </div>
              </div>
            )})}
         </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {campaigns.map((campaign, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? `w-6` : 'bg-white/30 hover:bg-white/50'
            }`}
             style={{
                backgroundColor: index === activeIndex ? activeCampaign.colors.neon : undefined
            }}
            aria-label={`Ir para a campanha ${campaign.title}`}
          />
        ))}
      </div>

       <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full z-10">
          <div
            key={activeIndex}
            className={`h-full animate-progress`}
            style={{ 
                animationDuration: `${AUTOPLAY_INTERVAL}ms`,
                backgroundColor: activeCampaign.colors.neon,
            }}
          ></div>
        </div>
    </section>
  );
};

// Showcase Component
interface ShowcaseProps {
  campaign: Campaign;
  onClose: () => void;
  onNavigate: () => void;
}
const Showcase: React.FC<ShowcaseProps> = ({ campaign, onClose, onNavigate }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`showcase-title-${campaign.id}`}
    >
      <div
        className="relative bg-gray-800 text-white rounded-lg shadow-2xl max-w-4xl w-full m-4 overflow-hidden animate-slide-up border border-white/10"
        onClick={(e) => e.stopPropagation()}
        style={{boxShadow: `0 0 25px ${campaign.colors.neon}`}}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full text-gray-400 bg-gray-900/50 hover:bg-gray-700/70 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label="Fechar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid md:grid-cols-2">
          <div className="relative md:col-span-1 h-64 md:h-auto">
            <img
              src={campaign.image}
              alt={campaign.title}
              className="h-full w-full object-cover"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-gray-800/50 md:to-gray-800"></div>
          </div>
          <div className="md:col-span-1 p-8 lg:p-12 flex flex-col justify-center">
            <h2
              id={`showcase-title-${campaign.id}`}
              className={`text-3xl sm:text-4xl font-bold uppercase`}
               style={{ color: campaign.colors.neon, textShadow: `0 0 10px ${campaign.colors.neonGlow}` }}
            >
              {campaign.title}
            </h2>
            <p className="mt-6 text-base text-gray-300 leading-relaxed">
              {campaign.longDescription}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onClose}
                className="inline-block px-8 py-3 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 bg-gray-600 text-gray-100 hover:bg-gray-500 ring-gray-400"
              >
                Voltar
              </button>
              <button
                onClick={onNavigate}
                className={`inline-block px-8 py-3 rounded-full text-gray-900 font-bold shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 ${campaign.colors.accent} ${campaign.colors.accentHover} ${campaign.colors.ring}`}
                 style={{
                    boxShadow: `0 0 15px ${campaign.colors.neonGlow}`
                 }}
              >
                Ver Detalhes
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
          }
          @keyframes slide-up {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-slide-up {
            animation: slide-up 0.4s ease-out forwards;
            animation-delay: 0.1s;
          }
        `}
      </style>
    </div>
  );
};

// CampaignPage Component
interface CampaignPageProps {
  campaign: Campaign;
  onBack: () => void;
}
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
const ChevronDoubleRightIcon = ({color}: {color: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
  </svg>
);
const CheckCircleIcon = ({color}: {color: string}) => (
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

interface CountingNumberProps {
  endValue: string;
  isInView: boolean;
  className?: string;
  style?: React.CSSProperties;
}
interface DigitScrollerProps {
    char: string;
    isInView: boolean;
}
const DigitScroller: React.FC<DigitScrollerProps> = ({ char, isInView }) => {
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
const CountingNumber: React.FC<CountingNumberProps> = ({ endValue, isInView, className, style }) => {
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
const CampaignPage: React.FC<CampaignPageProps> = ({ campaign, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { details, colors } = campaign;
  const accentColor = colors.neon;
  const slideTitleRefs = useRef<(HTMLHeadingElement | null)[]>([]);

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
                style={{color: accentColor, textShadow: `0 0 10px ${colors.neonGlow}`}}
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
  ];

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex < slides.length - 1 ? prevIndex + 1 : prevIndex));
  };

  useEffect(() => {
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
              style={{boxShadow: `0 0 15px ${colors.neonGlow}`}}
            >
              <BackArrowIcon />
              Voltar
            </button>
          </div>
        </div>
      </header>
      
        <main className="flex-grow flex items-center justify-center p-4 md:p-8 relative animate-fade-in-up">
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
                                boxShadow: isActive ? `0 0 30px ${accentColor}` : 'none',
                            }}
                            aria-hidden={!isActive}
                        >
                            <div className="w-full h-full p-6 sm:p-8 lg:p-12 overflow-y-auto flex flex-col justify-center">
                                <section role="group" aria-labelledby={`slide-title-${slide.id}`}>
                                    <div className="flex items-center justify-center gap-4 mb-8" style={{color: accentColor}}>
                                        {slide.icon}
                                        <h3
                                            id={`slide-title-${slide.id}`}
                                            ref={el => { slideTitleRefs.current[index] = el }}
                                            tabIndex={-1}
                                            className="text-3xl md:text-4xl font-bold focus:outline-none"
                                            style={{textShadow: `0 0 15px ${colors.neonGlow}`}}
                                        >
                                            {slide.title}
                                        </h3>
                                    </div>
                                    <div>
                                       {slide.content}
                                    </div>
                                </section>
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>
    </div>
  );
};

// Main App Component
function App() {
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [viewingCampaign, setViewingCampaign] = useState<Campaign | null>(null);
  const activeCampaign = CAMPAIGNS[carouselIndex];
  
  const handleNavigateToPage = (campaign: Campaign) => {
    setSelectedCampaign(null);
    setViewingCampaign(campaign);
  };
  
  const handleBackToHome = () => {
    setViewingCampaign(null);
  }

  if (viewingCampaign) {
    return <CampaignPage campaign={viewingCampaign} onBack={handleBackToHome} />
  }

  return (
    <>
      <div className="relative w-full min-h-screen bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          {CAMPAIGNS.map((campaign, index) => (
            <img
              key={campaign.id}
              src={campaign.image}
              alt={`Fundo da campanha ${campaign.title}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === carouselIndex ? 'opacity-100' : 'opacity-0'
              } ${campaign.objectPosition || 'object-center'}`}
            />
          ))}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <BackgroundEffects activeCampaign={activeCampaign} />

        <Navbar
          campaigns={CAMPAIGNS}
          activeIndex={carouselIndex}
          setActiveIndex={setCarouselIndex}
        />
        <main>
          <Carousel
            campaigns={CAMPAIGNS}
            activeIndex={carouselIndex}
            setActiveIndex={setCarouselIndex}
            onShowcaseSelect={setSelectedCampaign}
          />
        </main>
      </div>

      {selectedCampaign && (
        <Showcase
          campaign={selectedCampaign}
          onClose={() => setSelectedCampaign(null)}
          onNavigate={() => handleNavigateToPage(selectedCampaign)}
        />
      )}
    </>
  );
}

// --- RENDER APPLICATION ---
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
