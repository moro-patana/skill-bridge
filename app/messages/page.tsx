'use client';

import Navbar from '../components/Navbar';
import { useState } from 'react';
import { Send, Calendar, Phone, Video } from 'lucide-react';

interface Message {
    id: number;
    text: string;
    isOwn: boolean;
    time: string;
}

const mockMatches = [
    {
        id: 1,
        name: "Sarah Chen",
        avatar: "https://i.pravatar.cc/150?img=1",
        lastMessage: "Hey! Are you free this weekend to swap skills?",
        time: "2m ago",
        unread: 2,
        teachSkill: "React",
        learnSkill: "Photography"
    },
    {
        id: 2,
        name: "Rivo Andrian",
        avatar: "https://i.pravatar.cc/150?img=2",
        lastMessage: "I really liked your Tailwind tips last time!",
        time: "1h ago",
        unread: 0,
        teachSkill: "UI/UX",
        learnSkill: "Backend"
    },
];

export default function Messages() {
    const [selectedChat, setSelectedChat] = useState(1);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Hi Manjaka! I'd love to learn React from you.", isOwn: false, time: "10:32" },
        { id: 2, text: "Hey Sarah! Sure, I'm happy to teach. What do you want to focus on?", isOwn: true, time: "10:35" },
        { id: 3, text: "Mainly component design and state management with TypeScript.", isOwn: false, time: "10:37" },
        { id: 4, text: "Perfect! I can also help you with portrait photography techniques.", isOwn: true, time: "10:38" },
    ]);
    const [newMessage, setNewMessage] = useState("");

    const sendMessage = () => {
        if (!newMessage.trim()) return;
        setMessages([...messages, {
            id: messages.length + 1,
            text: newMessage,
            isOwn: true,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setNewMessage("");
    };

    const currentChat = mockMatches.find(m => m.id === selectedChat);

    return (
        <>
            <Navbar />
            <div className="max-w-6xl mx-auto px-6 pt-20 pb-12 h-[calc(100vh-80px)] flex flex-col">
                <h1 className="text-3xl font-bold text-foreground mb-8">Messages</h1>

                <div className="flex flex-1 gap-6 overflow-hidden">
                    {/* Chat List */}
                    <div className="w-full md:w-96 bg-card border border-border rounded-3xl overflow-hidden flex flex-col">
                        <div className="p-5 border-b border-border">
                            <input
                                type="text"
                                placeholder="Search conversations..."
                                className="w-full bg-zinc-800 dark:bg-zinc-800 light:bg-white border border-border rounded-2xl px-4 py-3 text-sm focus:outline-none"
                            />
                        </div>

                        <div className="flex-1 overflow-y-auto">
                            {mockMatches.map((chat) => (
                                <div
                                    key={chat.id}
                                    onClick={() => setSelectedChat(chat.id)}
                                    className={`p-5 border-b border-border hover:bg-zinc-800 light:hover:bg-zinc-100 cursor-pointer transition-colors ${selectedChat === chat.id ? 'bg-zinc-800 light:bg-zinc-100' : ''
                                        }`}
                                >
                                    <div className="flex gap-4">
                                        <img
                                            src={chat.avatar}
                                            alt={chat.name}
                                            className="w-12 h-12 rounded-2xl object-cover"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between">
                                                <h3 className="font-semibold text-foreground truncate">{chat.name}</h3>
                                                <span className="text-xs text-muted-foreground">{chat.time}</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground truncate mt-0.5">{chat.lastMessage}</p>
                                            <div className="text-xs text-teach mt-2">
                                                {chat.teachSkill} ↔ {chat.learnSkill}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Chat Window */}
                    <div className="hidden md:flex flex-1 flex-col bg-card border border-border rounded-3xl overflow-hidden">
                        {currentChat && (
                            <>
                                <div className="p-6 border-b border-border flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={currentChat.avatar}
                                            alt={currentChat.name}
                                            className="w-12 h-12 rounded-2xl"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-foreground">{currentChat.name}</h3>
                                            <p className="text-sm text-teach">
                                                {currentChat.teachSkill} ↔ {currentChat.learnSkill}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <button className="p-3 hover:bg-zinc-800 light:hover:bg-zinc-100 rounded-2xl transition-colors">
                                            <Calendar className="h-5 w-5" />
                                        </button>
                                        <button className="p-3 hover:bg-zinc-800 light:hover:bg-zinc-100 rounded-2xl transition-colors">
                                            <Video className="h-5 w-5" />
                                        </button>
                                        <button className="p-3 hover:bg-zinc-800 light:hover:bg-zinc-100 rounded-2xl transition-colors">
                                            <Phone className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50">
                                    {messages.map((msg) => (
                                        <div key={msg.id} className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}>
                                            <div className={`max-w-[75%] px-5 py-3 rounded-3xl ${msg.isOwn
                                                    ? 'bg-gradient-to-r from-teach to-learn text-white rounded-br-none'
                                                    : 'bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200 text-foreground rounded-bl-none'
                                                }`}>
                                                <p>{msg.text}</p>
                                                <p className="text-xs opacity-70 text-right mt-1">{msg.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-6 border-t border-border bg-card">
                                    <div className="flex gap-3">
                                        <input
                                            type="text"
                                            value={newMessage}
                                            onChange={(e) => setNewMessage(e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                                            placeholder="Type your message..."
                                            className="flex-1 bg-zinc-800 dark:bg-zinc-800 light:bg-white border border-border rounded-2xl px-5 py-4 focus:outline-none focus:border-teach"
                                        />
                                        <button
                                            onClick={sendMessage}
                                            className="bg-gradient-to-r from-teach to-learn px-8 rounded-2xl hover:brightness-110 transition-all"
                                        >
                                            <Send className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}