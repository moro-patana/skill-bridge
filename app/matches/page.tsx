'use client';

import Navbar from '../components/Navbar';
import { MapPin, Star, MessageCircle } from 'lucide-react';

const mockMatches = [
    {
        id: '1',
        name: "Sarah Chen",
        avatar: "https://i.pravatar.cc/150?img=1",
        location: "Antananarivo",
        rating: 4.9,
        teachSkill: "React + TypeScript",
        learnSkill: "Portrait Photography",
        bio: "Professional photographer who wants to build modern web apps.",
    },
    {
        id: '2',
        name: "Rivo Andrian",
        avatar: "https://i.pravatar.cc/150?img=2",
        location: "Toamasina",
        rating: 4.7,
        teachSkill: "UI/UX Design",
        learnSkill: "Node.js Backend",
        bio: "Designer turned developer. Love clean interfaces and good coffee.",
    },
    {
        id: '3',
        name: "Anja Rakoto",
        avatar: "https://i.pravatar.cc/150?img=3",
        location: "Antananarivo",
        rating: 5.0,
        teachSkill: "French Language",
        learnSkill: "Digital Marketing",
        bio: "French teacher who wants to grow her online presence.",
    },
];

export default function Matches() {
    return (
        <>
            <Navbar />
            <div className="max-w-6xl mx-auto px-6 pt-20 pb-12">
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-foreground mb-2">Find Your Next Swap</h1>
                    <p className="text-muted-foreground">People who can teach what you want to learn</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockMatches.map((match) => (
                        <div
                            key={match.id}
                            className="bg-card border border-border rounded-3xl overflow-hidden hover:border-teach/50 transition-all group"
                        >
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <img
                                        src={match.avatar}
                                        alt={match.name}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-xl text-foreground">{match.name}</h3>
                                        <div className="flex items-center gap-1 text-muted-foreground text-sm">
                                            <MapPin className="h-4 w-4" />
                                            {match.location}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-amber-400">
                                        <Star className="h-5 w-5 fill-current" />
                                        <span className="font-medium">{match.rating}</span>
                                    </div>
                                </div>

                                {/* Skill Swap Box */}
                                <div className="bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-100 border border-border rounded-2xl p-5 mb-6">
                                    <div className="flex justify-between items-center">
                                        <div className="text-center flex-1">
                                            <div className="text-teach text-xs mb-1 tracking-widest">YOU TEACH</div>
                                            <div className="font-medium text-emerald-300 dark:text-emerald-300 light:text-emerald-700">
                                                {match.teachSkill}
                                            </div>
                                        </div>

                                        <div className="text-4xl text-bridge mx-4">↔</div>

                                        <div className="text-center flex-1">
                                            <div className="text-learn text-xs mb-1 tracking-widest">YOU LEARN</div>
                                            <div className="font-medium text-indigo-300 dark:text-indigo-300 light:text-indigo-700">
                                                {match.learnSkill}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-muted-foreground text-sm line-clamp-2 mb-6">{match.bio}</p>

                                <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teach to-learn py-3.5 rounded-2xl font-medium text-white hover:brightness-110 transition-all">
                                    <MessageCircle className="h-5 w-5" />
                                    Start Conversation
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}