import { useState } from 'react';
import { Plus, ArrowUp } from 'lucide-react';

interface InputAreaProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export function InputArea({ value, onChange, onSend }: InputAreaProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (value.trim()) {
        onSend();
      }
    }
  };

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-[700px] px-4">
      <div
        className={`
          bg-white border rounded-xl transition-colors duration-150
          ${isFocused ? 'border-[#D1D5DB]' : 'border-[#E5E7EB]'}
        `}
      >
        {/* Input Field */}
        <div className="p-3 pb-2">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Message BodyMatrix…"
            rows={1}
            className="w-full resize-none bg-transparent border-none outline-none text-[14px] text-[#111111] placeholder:text-[#9CA3AF] leading-relaxed"
            style={{ maxHeight: '200px', minHeight: '24px' }}
          />
        </div>

        {/* Bottom Row */}
        <div className="flex items-center justify-between px-3 pb-3">
          <button className="flex items-center gap-1.5 text-[#6B7280] hover:text-[#111111] transition-colors duration-150 p-1.5 hover:bg-[#F9FAFB] rounded-lg">
            <Plus className="w-4 h-4" strokeWidth={2} />
          </button>

          <button
            onClick={onSend}
            disabled={!value.trim()}
            className={`
              rounded-lg p-2 transition-all duration-150
              ${value.trim()
                ? 'bg-[#111111] hover:bg-[#000000] text-white'
                : 'bg-[#F3F4F6] text-[#9CA3AF] cursor-not-allowed'
              }
            `}
          >
            <ArrowUp className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}
