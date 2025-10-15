import React, { useState } from 'react';

const Navbar = ({ campaigns, activeIndex, setActiveIndex }) => {
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

export default Navbar;