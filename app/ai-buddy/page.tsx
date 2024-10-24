"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const initialMessages = [
  { id: 1, sender: "AI", text: "Hello! How can I assist you today?" },
  { id: 2, sender: "Student", text: "I need help with my math homework." },
  {
    id: 3,
    sender: "AI",
    text: "Sure, I can help with that. What specific problem are you working on?",
  },
  {
    id: 4,
    sender: "Student",
    text: "I'm struggling with quadratic equations.",
  },
  {
    id: 5,
    sender: "AI",
    text: "Quadratic equations can be tricky. Do you need help with solving them or understanding the concepts?",
  },
  { id: 6, sender: "Student", text: "I need help with solving them." },
  {
    id: 7,
    sender: "AI",
    text: "Alright, let's start with the basics. The standard form of a quadratic equation is ax^2 + bx + c = 0. Do you have a specific equation you need help with?",
  },
];

export default function AIBuddyPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    const newMsg = {
      id: messages.length + 1,
      sender: "Student",
      text: newMessage,
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        sender: "AI",
        text: "The bot build is still in process, I'll be here to help you soon!",
      };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "AI" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`p-4 rounded-lg max-w-xs ${
                message.sender === "AI"
                  ? "bg-gray-200 text-gray-800"
                  : "bg-blue-500 text-white"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t sticky bottom-0 flex space-x-4">
        <Input
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
          className="flex-grow"
        />
        <Button onClick={sendMessage}>Send</Button>
      </div>
    </div>
  );
}
