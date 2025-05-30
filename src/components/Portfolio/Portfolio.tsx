import Image from 'next/image';
import { useState } from 'react';

import { Genre } from '../Player/songlist';
import WorksModal from '../Player/WorksModal';
import NamesCloud from './NamesCloud';
import { portfolioCards } from './PortfolioList';

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (_genre: Genre) => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-3 mt-12 uppercase">
          Мои работы
        </h1>

        {/* Карточки в виде веера */}
        <div className="relative h-[600px]">
          {portfolioCards.map((card, index) => (
            <div
              key={card.genre}
              className="absolute w-80 transition-all duration-300 hover:scale-110 cursor-pointer"
              style={{
                left: `${25 + index * 25}%`,
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${-15 + index * 15}deg)`,
                zIndex: index,
              }}
              onClick={() => handleCardClick(card.genre)}
            >
              <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-gray-400 text-lg">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Плеер */}
        <WorksModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialCategory="Песни под ключ"
        />

        {/* Ссылка на Яндекс Диск */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Больше примеров работ можно послушать по ссылке:</p>
          <a
            href="https://disk.yandex.ru/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-xs px-2 py-1 rounded-full ml-2 px-6 py-3 cursor-pointer hover:text-blue-400"
          >
            Яндекс Диск
          </a>
        </div>

        {/* Облако имен */}
        <div className="mt-20">
          <NamesCloud />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
