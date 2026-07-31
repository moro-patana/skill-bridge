"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "@/components/Navbar";
import { Send } from "lucide-react";
import { useState } from "react";

const mockConversations = [
    {
        id: 1,
        name: "Sarah Martinez",
        lastMessage: "That sounds great! When would you like to have our first session?",
        time: "2m ago",
        unread: 2,
    },
    {
        id: 2,
        name: "David Kim",
        lastMessage: "I'm available Tuesday and Thursday evenings",
        time: "1h ago",
        unread: 0,
    },
    {
        id: 3,
        name: "Maria Rodriguez",
        lastMessage: "¡Perfecto! Let's start with basic grammar",
        time: "3h ago",
        unread: 1,
    },
];

const mockMessages = [
    {
        id: 1,
        sender: "Sarah Martinez",
        message: "Hi! I saw we matched on photography and React. Excited to exchange skills!",
        time: "10:30 AM",
        isOwn: false,
    },
    {
        id: 2,
        sender: "You",
        message: "Hey Sarah! Yes, I'm really looking forward to learning photography from you!",
        time: "10:32 AM",
        isOwn: true,
    },
    {
        id: 3,
        sender: "Sarah Martinez",
        message: "That's awesome! I've been wanting to learn React for a while now. How should we structure our sessions?",
        time: "10:35 AM",
        isOwn: false,
    },
    {
        id: 4,
        sender: "You",
        message: "Maybe we could do 1 hour sessions? 30 mins on photography, 30 mins on React?",
        time: "10:38 AM",
        isOwn: true,
    },
    {
        id: 5,
        sender: "Sarah Martinez",
        message: "That sounds great! When would you like to have our first session?",
        time: "10:40 AM",
        isOwn: false,
    },
];

const Messages = () => {
    const [selectedChat, setSelectedChat] = useState(mockConversations[0]);
    const [newMessage, setNewMessage] = useState("");

    const handleSend = () => {
        if (newMessage.trim()) {
            // Mock sending - in real app would send to backend
            setNewMessage("");
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <div className="container mx-auto px-4 py-8">
                <h1 className="mb-6 text-4xl font-display font-bold">Messages</h1>

                <div className="grid md:grid-cols-[320px_1fr] gap-4 h-[calc(100vh-240px)]">
                    {/* Conversations List */}
                    <Card className="p-4 shadow-card overflow-hidden flex flex-col">
                        <h2 className="font-display font-bold mb-4">Conversations</h2>
                        <ScrollArea className="flex-1">
                            <div className="space-y-2">
                                {mockConversations.map((conv) => (
                                    <button
                                        key={conv.id}
                                        onClick={() => setSelectedChat(conv)}
                                        className={`w-full text-left p-3 rounded-lg transition-colors ${selectedChat.id === conv.id
                                                ? "bg-primary/10 border border-primary/20"
                                                : "hover:bg-muted"
                                            }`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <Avatar className="h-10 w-10">
                                                <AvatarFallback className="bg-gradient-primary text-sm font-bold text-primary-foreground">
                                                    {conv.name.split(" ").map((n) => n[0]).join("")}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-baseline justify-between mb-1">
                                                    <p className="font-medium text-sm truncate">{conv.name}</p>
                                                    <span className="text-xs text-muted-foreground ml-2 shrink-0">{conv.time}</span>
                                                </div>
                                                <p className="text-xs text-muted-foreground truncate">{conv.lastMessage}</p>
                                            </div>
                                            {conv.unread > 0 && (
                                                <div className="shrink-0 h-5 w-5 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                                                    {conv.unread}
                                                </div>
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </ScrollArea>
                    </Card>

                    {/* Chat Area */}
                    <Card className="p-6 shadow-card flex flex-col">
                        <div className="flex items-center gap-3 pb-4 border-b border-border mb-4">
                            <Avatar className="h-12 w-12">
                                <AvatarFallback className="bg-gradient-primary font-bold text-primary-foreground">
                                    {selectedChat.name.split(" ").map((n) => n[0]).join("")}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="font-display font-bold">{selectedChat.name}</h3>
                                <p className="text-sm text-muted-foreground">Active now</p>
                            </div>
                        </div>

                        <ScrollArea className="flex-1 pr-4 mb-4">
                            <div className="space-y-4">
                                {mockMessages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}
                                    >
                                        <div
                                            className={`max-w-[70%] rounded-2xl px-4 py-2 ${msg.isOwn
                                                    ? "bg-gradient-primary text-primary-foreground"
                                                    : "bg-muted text-foreground"
                                                }`}
                                        >
                                            <p className="text-sm">{msg.message}</p>
                                            <p className={`text-xs mt-1 ${msg.isOwn ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                                                {msg.time}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>

                        <div className="flex gap-2">
                            <Input
                                placeholder="Type a message..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            />
                            <Button onClick={handleSend} className="gradient-primary">
                                <Send className="h-4 w-4" />
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Messages;
