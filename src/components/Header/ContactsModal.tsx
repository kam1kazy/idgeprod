import Image from 'next/image';
import React, { useEffect } from 'react';

interface ContactsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactsModal: React.FC<ContactsModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <section
      className={`fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-[#06090bbf]/95 backdrop-blur-md transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-all' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <Image
        className="absolute top-[1.875rem] right-[1.875rem]"
        src="/images/icons/close.svg"
        alt="close"
        width={30}
        height={30}
        onClick={onClose}
      />
      <div
        className={`relative m-4 w-full max-w-[600px] rounded-3xl mt-20 pt-0 p-10 backdrop-blur-md backdrop-filter-none transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 -translate-y-28 scale-90 pointer-events-none'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Контакты</h2>
            <p className="text-gray-300 mb-6">Свяжитесь с нами для обсуждения вашего проекта</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#047cb9]/20 flex items-center justify-center">
                <span className="relative w-6 h-6">
                  <Image
                    src="/images/icons/telegram.svg"
                    alt="telegram"
                    fill
                    priority
                    className="[filter:brightness(0)_invert(1)]"
                  />
                </span>
              </div>
              <div>
                <div className="text-white font-medium">Telegram</div>
                <a
                  href="https://t.me/idgieprod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#047cb9] hover:text-[#047cb9]/80 transition-colors"
                >
                  @idgieprod
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#047cb9]/20 flex items-center justify-center">
                <span className="relative w-6 h-6">
                  <Image
                    src="/images/icons/instagram.svg"
                    alt="instagram"
                    fill
                    priority
                    className="[filter:brightness(0)_invert(1)]"
                  />
                </span>
              </div>
              <div>
                <div className="text-white font-medium">Instagram</div>
                <a
                  href="https://instagram.com/the_idgie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#047cb9] hover:text-[#047cb9]/80 transition-colors"
                >
                  @the_idgie
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#047cb9]/20 flex items-center justify-center">
                <span className="relative w-6 h-6">
                  <Image
                    src="/images/icons/youtube.svg"
                    alt="email"
                    fill
                    priority
                    className="[filter:brightness(0)_invert(1)]"
                  />
                </span>
              </div>
              <div>
                <div className="text-white font-medium">YouTube</div>
                <a
                  href="https://www.youtube.com/@the_idgie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#047cb9] hover:text-[#047cb9]/80 transition-colors"
                >
                  @the_idgie
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#047cb9]/20 flex items-center justify-center">
                <span className="relative w-6 h-6">
                  <Image
                    src="/images/icons/email.svg"
                    alt="email"
                    fill
                    priority
                    className="[filter:brightness(0)_invert(1)]"
                  />
                </span>
              </div>
              <div>
                <div className="text-white font-medium">Email</div>
                <a
                  href="mailto:idgie.prod@yandex.ru"
                  className="text-[#047cb9] hover:text-[#047cb9]/80 transition-colors"
                >
                  idgie.prod@yandex.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsModal;
