import { useState } from 'react';
import { Globe } from 'lucide-react';

export function TopBar() {
  const [internetSearch, setInternetSearch] = useState(true);

  return (
    <div className="absolute top-6 right-6 flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E5E7EB]">
      <Globe className={`w-4 h-4 transition-colors duration-150 ${internetSearch ? 'text-[#111111]' : 'text-[#9CA3AF]'}`} strokeWidth={2} />
      <span className="text-[13px] text-[#6B7280] font-medium">Internet Search</span>
      <button
        onClick={() => setInternetSearch(!internetSearch)}
        className={`
          relative w-10 h-6 rounded-full transition-colors duration-200
          ${internetSearch ? 'bg-[#111111]' : 'bg-[#E5E7EB]'}
        `}
      >
        <div
          className={`
            absolute top-0.5 w-5 h-5 bg-white rounded-full
            transition-all duration-200
            ${internetSearch ? 'left-[18px]' : 'left-0.5'}
          `}
        />
      </button>
    </div>
  );
}
