import React from "react";
import { UserIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";

const ChatMessage = ({ message, isAi }) => {
  return (
    <div
      className={`max-w-7xl mx-auto flex items-start space-x-4 p-6 rounded-2xl transition-colors duration-200 ${
        isAi ? "bg-teal-100" : "bg-blue-100"
      }`}
    >
      <div className="flex-shrink-0 rounded-full p-2 bg-white">
        {isAi ? (
          <ComputerDesktopIcon className="h-6 w-6 text-teal-600" />
        ) : (
          <UserIcon className="h-6 w-6 text-blue-600" />
        )}
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex items-center">
          <p className="font-medium text-black">{isAi ? "AI" : "Bạn"}</p>
        </div>
        <div className="prose prose-sm max-w-none">
          <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
