import { useState } from 'react';
import { MessageSquare, MoreVertical, Trash2 } from 'lucide-react';

interface ChatHistoryItemProps {
  title: string;
  active: boolean;
  onClick: () => void;
  onDelete: () => void;
}

export function ChatHistoryItem({ title, active, onClick, onDelete }: ChatHistoryItemProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete();
    setShowMenu(false);
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handleItemClick = () => {
    if (!showMenu) {
      onClick();
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowMenu(false);
      }}
    >
      <div
        className={`
          w-full text-left px-3 py-2 rounded-lg transition-colors duration-150
          flex items-center gap-2.5 group cursor-pointer
          ${active
            ? 'bg-[#E5E7EB] text-[#111111]'
            : 'text-[#6B7280] hover:bg-[#E5E7EB] hover:text-[#111111]'
          }
        `}
      >
        <div
          onClick={handleItemClick}
          className="flex items-center gap-2.5 flex-1 min-w-0"
        >
          <MessageSquare className={`w-3.5 h-3.5 flex-shrink-0 ${active ? 'text-[#111111]' : 'text-[#9CA3AF] group-hover:text-[#6B7280]'}`} strokeWidth={2} />
          <span className="text-[13px] truncate leading-tight">
            {title}
          </span>
        </div>

        {isHovered && (
          <button
            onClick={handleMenuClick}
            className="flex-shrink-0 p-1 hover:bg-[#D1D5DB] rounded transition-colors duration-150"
          >
            <MoreVertical className="w-3.5 h-3.5 text-[#6B7280]" strokeWidth={2} />
          </button>
        )}
      </div>

      {/* Delete Menu */}
      {showMenu && (
        <div className="absolute right-2 top-full mt-1 bg-white border border-[#E5E7EB] rounded-lg shadow-lg py-1 z-10 min-w-[120px]">
          <button
            onClick={handleDelete}
            className="w-full px-3 py-2 text-left text-[13px] text-[#EF4444] hover:bg-[#FEF2F2] transition-colors duration-150 flex items-center gap-2"
          >
            <Trash2 className="w-3.5 h-3.5" strokeWidth={2} />
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
