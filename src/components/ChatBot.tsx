"use client";
import { useState } from "react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there 👋 How can I help you with Slack today?", isBot: true },
  ]);
  const [inputValue, setInputValue] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    setMessages([...messages, { text: inputValue, isBot: false }]);
    setInputValue("");

    // Simulate bot response after a short delay
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "Thanks for your message! Our team will get back to you soon.",
          isBot: true,
        },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-40 bg-[#611f69] text-white p-4  px-5 rounded-xl shadow-lg hover:bg-[#4A154B] transition-colors duration-200"
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <span className="text-2xl">👋</span>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 bg-white rounded-lg shadow-xl w-80 sm:w-96 max-h-[500px] flex flex-col">
          {/* Chat header */}
          <div className="bg-[#611f69] text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-xl mr-2">👋</span>
              <h3 className="font-medium">Slack Assistant</h3>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-200"
              aria-label="Close chat"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-80">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${
                  message.isBot ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? "bg-gray-100 text-gray-800"
                      : "bg-[#1264A3] text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Chat input */}
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#611f69]"
              />
              <button
                type="submit"
                className="bg-[#611f69] text-white px-4 py-2 rounded-r-md hover:bg-[#4A154B]"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
