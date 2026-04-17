import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { EmptyState } from './components/EmptyState';
import { InputArea } from './components/InputArea';
import { TopBar } from './components/TopBar';

export default function App() {
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');

  const handleNewChat = () => {
    setActiveChat(null);
    setInputValue('');
  };

  const handleSelectChat = (id: string) => {
    setActiveChat(id);
  };

  const handleSuggestionClick = (text: string) => {
    setInputValue(text);
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      // Handle sending message
      console.log('Sending:', inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#F7F7F5]">
      {/* Sidebar */}
      <Sidebar
        activeChat={activeChat}
        onNewChat={handleNewChat}
        onSelectChat={handleSelectChat}
      />

      {/* Main Content Area */}
      <div className="flex-1 relative overflow-hidden">
        {/* Top Bar */}
        <TopBar />

        {/* Empty State */}
        <EmptyState onSuggestionClick={handleSuggestionClick} />

        {/* Input Area */}
        <InputArea
          value={inputValue}
          onChange={setInputValue}
          onSend={handleSend}
        />
      </div>
    </div>
  );
}