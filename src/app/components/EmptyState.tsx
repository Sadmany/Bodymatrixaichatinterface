import { Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { SuggestionChip } from './SuggestionChip';

interface EmptyStateProps {
  onSuggestionClick: (text: string) => void;
}

const suggestions = [
  'What is a healthy BMI for my age?',
  'How many calories should I eat daily?',
  'What does my blood pressure reading mean?',
  'How can I improve my resting heart rate?',
  'What foods reduce inflammation?',
  'Summarize my report',
];

export function EmptyState({ onSuggestionClick }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-12"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5, type: 'spring', stiffness: 200 }}
          className="w-16 h-16 bg-[#F3F4F6] rounded-2xl flex items-center justify-center mx-auto mb-6"
        >
          <Sparkles className="w-7 h-7 text-[#6B7280]" strokeWidth={1.5} />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-[28px] font-semibold text-[#111111] mb-3 tracking-tight"
        >
          How can I help you today?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-[14px] text-[#6B7280] max-w-md leading-relaxed"
        >
          Ask me about your health data, BMI, nutrition, fitness goals, or anything health-related.
        </motion.p>
      </motion.div>

      {/* Suggestion Chips */}
      <div className="flex flex-wrap justify-center gap-2 max-w-2xl mb-8">
        {suggestions.map((suggestion, index) => (
          <SuggestionChip
            key={suggestion}
            text={suggestion}
            onClick={onSuggestionClick}
            delay={0.4 + index * 0.05}
          />
        ))}
      </div>

      {/* Attribution */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.4 }}
        className="text-[11px] text-[#9CA3AF]"
      >
        Created and designed by AI
      </motion.p>
    </div>
  );
}
