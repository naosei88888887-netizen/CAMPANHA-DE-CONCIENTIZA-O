import React from 'react';

const Showcase = ({ campaign, onClose, onNavigate }) => {
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
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
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
               style={{ color: campaign.colors.neon, textShadow: `0 0 10px ${campaign.colors.neon}` }}
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
                    boxShadow: `0 0 15px ${campaign.colors.neon}`
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

export default Showcase;