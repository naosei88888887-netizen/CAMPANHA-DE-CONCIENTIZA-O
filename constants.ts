import { Campaign } from './types.ts';

export const CAMPAIGNS: Campaign[] = [
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
      quiz: {
        title: "Teste seus Conhecimentos",
        questions: [
          {
            question: "O que representa a campanha Setembro Amarelo?",
            options: ["Prevenção do câncer de próstata", "Prevenção ao suicídio", "Prevenção ao uso de drogas", "Prevenção ao tabagismo"],
            correctAnswerIndex: 1,
            explanation: "A campanha busca conscientizar sobre a prevenção ao suicídio, um tema de extrema importância para a saúde pública."
          },
          {
            question: "Qual é o principal objetivo do Setembro Amarelo?",
            options: ["Arrecadar doações", "Promover a saúde física", "Combater o preconceito racial", "Conscientizar sobre a importância da saúde mental"],
            correctAnswerIndex: 3,
            explanation: "O objetivo é quebrar o tabu sobre o suicídio, promovendo a conscientização sobre a saúde mental e informando que a prevenção é possível."
          },
          {
            question: "Qual é o canal oficial de ajuda emocional no Brasil?",
            options: ["180", "100", "188", "192"],
            correctAnswerIndex: 2,
            explanation: "O CVV (Centro de Valorização da Vida) oferece apoio emocional gratuito 24 horas por dia através do número 188."
          },
          {
            question: "Qual destas frases melhor ajuda alguém em sofrimento emocional?",
            options: ["“Você precisa ser mais forte.”", "“Já passou por isso antes, supere.”", "“Você quer conversar? Estou aqui para te ouvir.”", "“Tem gente em situação pior.”"],
            correctAnswerIndex: 2,
            explanation: "Oferecer escuta ativa, sem julgamentos, é uma das formas mais eficazes de apoiar alguém que está em sofrimento."
          },
          {
            question: "Quais são sinais comuns de que alguém pode estar em sofrimento emocional?",
            options: ["Isolamento, mudança de humor, desinteresse", "Felicidade repentina", "Aumento de produtividade", "Falar mais do que o normal"],
            correctAnswerIndex: 0,
            explanation: "Isolamento, mudanças de humor e desinteresse são sinais de alerta importantes que não devem ser ignorados."
          }
        ]
      }
    },
  },
  {
    id: 'outubro-rosa',
    title: 'Outubro Rosa',
    description: 'A conscientização sobre o câncer de mama é um ato de amor.',
    longDescription: 'Outubro Rosa é uma campanha anual realizada mundialmente em outubro, com a intenção de alertar a sociedade sobre o diagnóstico precoce do câncer de mama. A mobilização visa também à disseminação de dados preventivos e ressalta a importância de olhar com atenção para a saúde, além de lutar por direitos como o atendimento médico e o suporte emocional, garantindo um tratamento de qualidade.',
    image: 'https://i.imgur.com/8BuU3ey.jpeg',
    logo: 'https://i.imgur.com/Rjch5Y3.png',
    objectPosition: 'object-right',
    textPosition: 'center',
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
      quiz: {
        title: "Teste seus Conhecimentos",
        questions: [
          {
            question: "O que simboliza a campanha Outubro Rosa?",
            options: ["Saúde dos olhos", "Câncer de próstata", "Prevenção ao câncer de mama", "Combate ao sedentarismo"],
            correctAnswerIndex: 2,
            explanation: "Outubro Rosa é mundialmente conhecido por alertar sobre a importância da prevenção e do diagnóstico precoce do câncer de mama."
          },
          {
            question: "Qual é a principal forma de detecção precoce do câncer de mama?",
            options: ["Teste de sangue", "Mamografia", "Ultrassom abdominal", "Ressonância magnética"],
            correctAnswerIndex: 1,
            explanation: "A mamografia é o exame mais eficaz para detectar o câncer de mama em estágio inicial, antes mesmo do surgimento de sintomas."
          },
          {
            question: "Com que idade é recomendada a realização da mamografia no Brasil para mulheres sem fatores de risco?",
            options: ["A partir dos 20 anos", "A partir dos 35 anos", "A partir dos 40 anos", "A partir dos 50 anos"],
            correctAnswerIndex: 3,
            explanation: "No Brasil, a recomendação do Ministério da Saúde é que mulheres entre 50 e 69 anos façam mamografia a cada dois anos."
          },
          {
            question: "Qual das opções abaixo não é considerada um fator de risco para o câncer de mama?",
            options: ["Histórico familiar", "Sedentarismo", "Obesidade", "Beber bastante água"],
            correctAnswerIndex: 3,
            explanation: "Manter-se hidratado é saudável, mas não é um fator de risco ou prevenção direta do câncer de mama. Histórico familiar, sedentarismo e obesidade são fatores de risco conhecidos."
          },
          {
            question: "O autoexame das mamas é suficiente para diagnosticar o câncer?",
            options: ["Sim", "Não", "Depende da idade", "Só em casos avançados"],
            correctAnswerIndex: 1,
            explanation: "Não. O autoexame ajuda a mulher a conhecer seu corpo e identificar alterações, mas não substitui exames médicos como a mamografia para um diagnóstico preciso."
          }
        ]
      }
    },
  },
  {
    id: 'novembro-azul',
    title: 'Novembro Azul',
    description: 'Cuidar da saúde também é coisa de homem.',
    longDescription: 'Novembro Azul é um movimento mundial que acontece durante o mês de novembro para reforçar a importância da prevenção e do diagnóstico precoce do câncer de próstata. A doença é o segundo tipo de câncer mais comum entre os homens brasileiros e as maiores vítimas são homens a partir dos 50 anos, além de pessoas com presença da doença em parentes de primeiro grau, como pai, irmão ou filho.',
    image: 'https://i.imgur.com/qzVHeKI.jpeg',
    logo: 'https://i.imgur.com/XuVzMm4.png',
    objectPosition: 'object-left',
    textPosition: 'center',
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
      quiz: {
        title: "Teste seus Conhecimentos",
        questions: [
          {
            question: "Qual é o objetivo principal da campanha Novembro Azul?",
            options: ["Conscientizar sobre diabetes", "Combater o câncer de próstata", "Incentivar a vacinação", "Reduzir o estresse no trabalho"],
            correctAnswerIndex: 1,
            explanation: "A campanha Novembro Azul foca na conscientização sobre o câncer de próstata e a importância da saúde integral do homem."
          },
          {
            question: "Qual é o exame mais comum para detectar precocemente o câncer de próstata?",
            options: ["Colonoscopia", "Exame de urina", "Toque retal e PSA", "Ressonância magnética"],
            correctAnswerIndex: 2,
            explanation: "O diagnóstico precoce combina o exame de toque retal, que avalia a glândula, e o exame de sangue PSA (Antígeno Prostático Específico)."
          },
          {
            question: "Com que idade os homens devem começar a se preocupar com a prevenção ao câncer de próstata (sem fatores de risco)?",
            options: ["30 anos", "40 anos", "45 anos", "50 anos"],
            correctAnswerIndex: 3,
            explanation: "A recomendação geral é que homens a partir dos 50 anos (ou 45, com fatores de risco) procurem um urologista anualmente."
          },
          {
            question: "O câncer de próstata tem sintomas logo no início?",
            options: ["Sim, sempre", "Não, geralmente é silencioso", "Apenas se for grave", "Só quando há dor"],
            correctAnswerIndex: 1,
            explanation: "Em sua fase inicial, o câncer de próstata geralmente não apresenta sintomas. Por isso, os exames preventivos são fundamentais."
          },
          {
            question: "Qual dessas atitudes ajuda na prevenção do câncer de próstata?",
            options: ["Evitar exames médicos", "Ter uma alimentação saudável e fazer atividade física", "Tomar suplementos sem prescrição", "Usar roupas apertadas"],
            correctAnswerIndex: 1,
            explanation: "Adotar um estilo de vida saudável, com boa alimentação e atividade física, é uma das principais formas de prevenir diversos tipos de câncer, incluindo o de próstata."
          }
        ]
      }
    },
  },
];

export const AUTOPLAY_INTERVAL = 7000; // 7 seconds