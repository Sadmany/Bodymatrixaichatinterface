import { useState } from 'react';
import { Plus, Image as ImageIcon } from 'lucide-react';
import { ChatHistoryItem } from './ChatHistoryItem';

interface SidebarProps {
  activeChat: string | null;
  onNewChat: () => void;
  onSelectChat: (id: string) => void;
}

const initialChatHistory = [
  { id: '1', title: 'BMI calculation and healthy range' },
  { id: '2', title: 'Daily calorie recommendations' },
  { id: '3', title: 'Understanding blood pressure' },
  { id: '4', title: 'Heart rate improvement tips' },
  { id: '5', title: 'Anti-inflammatory foods guide' },
  { id: '6', title: 'Cholesterol numbers explained' },
];

export function Sidebar({ activeChat, onNewChat, onSelectChat }: SidebarProps) {
  const [chatHistory, setChatHistory] = useState(initialChatHistory);

  const handleDeleteChat = (id: string) => {
    setChatHistory(chatHistory.filter(chat => chat.id !== id));
  };

  const handleDeleteAll = () => {
    setChatHistory([]);
  };

  return (
    <div className="w-[260px] bg-[#F3F4F6] border-r border-[#E5E7EB] flex flex-col h-screen">
      {/* Header */}
      <div className="p-4 border-b border-[#E5E7EB]">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-[#E5E7EB] rounded-lg flex items-center justify-center">
            <ImageIcon className="w-4 h-4 text-[#6B7280]" strokeWidth={2} />
          </div>
          <h1 className="text-[16px] font-semibold text-[#111111] tracking-tight">
            BodyMatrix
          </h1>
        </div>

        <button
          onClick={onNewChat}
          className="w-full text-[#111111] hover:bg-[#E5E7EB] rounded-lg px-3 py-2 flex items-center gap-2 transition-colors duration-150"
        >
          <Plus className="w-4 h-4" strokeWidth={2} />
          <span className="text-[14px] font-medium">New</span>
        </button>
      </div>

      {/* History */}
      <div className="flex-1 overflow-y-auto p-3">
        <div className="mb-3 px-2 flex items-center justify-between">
          <span className="text-[11px] font-semibold text-[#9CA3AF] tracking-wider uppercase">
            History
          </span>
          {chatHistory.length > 0 && (
            <button
              onClick={handleDeleteAll}
              className="text-[12px] text-[#6B7280] hover:text-[#111111] hover:underline transition-colors duration-150"
            >
              Delete All
            </button>
          )}
        </div>

        <div className="space-y-1">
          {chatHistory.map((chat) => (
            <ChatHistoryItem
              key={chat.id}
              title={chat.title}
              active={activeChat === chat.id}
              onClick={() => onSelectChat(chat.id)}
              onDelete={() => handleDeleteChat(chat.id)}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-[#E5E7EB]">
        <p className="text-[11px] text-[#9CA3AF] text-center">
          Private • Local AI
        </p>
      </div>
    </div>
  );
}
