import { motion } from 'motion/react';

interface SuggestionChipProps {
  text: string;
  onClick: (text: string) => void;
  delay?: number;
}

export function SuggestionChip({ text, onClick, delay = 0 }: SuggestionChipProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      onClick={() => onClick(text)}
      className="
        bg-white border border-[#E5E7EB] px-4 py-2 rounded-full
        text-[13px] text-[#374151] hover:bg-[#F9FAFB]
        transition-colors duration-150
        whitespace-nowrap
      "
    >
      {text}
    </motion.button>
  );
}
