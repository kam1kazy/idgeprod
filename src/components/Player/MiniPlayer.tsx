import Image from 'next/image';
import { useEffect, useState } from 'react';

interface MiniPlayerProps {
  isVisible: boolean;
  onStop: () => void;
}

const MiniPlayer: React.FC<MiniPlayerProps> = ({ isVisible, onStop }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300); // Время анимации
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className={`fixed top-4 right-[auto] left-[auto] w-full z-[1000] ${isAnimating ? 'animate-fade-in' : 'animate-fade-out'}`}
    >
      <button
        onClick={onStop}
        className="flex shadow-[0 0 20px #bdbfe1b3] cursor-pointer items-center m-auto md:m-[auto] sm:ml-[59%] gap-2 bg-gray-700/80 backdrop-blur-sm px-4 py-2 rounded-full text-white hover:bg-gray-700/80 transition-colors"
      >
        <span className="relative w-4 h-4">
          <Image
            src="/images/icons/stop.svg"
            alt="stop"
            fill
            priority
            className="[filter:brightness(0)_invert(1)]"
          />
        </span>
        <span className="text-sm font-medium">Остановить</span>
      </button>
    </div>
  );
};

export default MiniPlayer;
