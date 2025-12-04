import React from 'react';
import { MessageCircleIcon } from 'lucide-react';
export function WhatsAppButton() {
  return <a href="https://wa.me/5541999999999" target="_blank" rel="noopener noreferrer" aria-label="Fale conosco pelo WhatsApp" className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#722F37] text-white shadow-lg transition-all duration-300 hover:bg-[#8B2E3B] hover:scale-110">
      <MessageCircleIcon className="h-7 w-7" />
    </a>;
}