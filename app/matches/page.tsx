"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Navbar from "@/components/Navbar";
import { MapPin, MessageSquare, Star } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const mockMatches = [
    {
        id: 1,
        name: "Sarah Martinez",
        location: "Austin, TX",
        bio: "Professional photographer with 5 years of experience. Love teaching composition and lighting!",
        teaches: ["Photography", "Lightroom", "Portrait Photography"],
        learns: ["React", "Web Development"],
        rating: 4.9,
        matchPercentage: 95,
    },
    {
        id: 2,
        name: "David Kim",
        location: "Seattle, WA",
        bio: "Classical guitarist and music theory enthusiast. Always excited to share my passion.",
        teaches: ["Guitar", "Music Theory", "Classical Guitar"],
        learns: ["TypeScript", "Node.js"],
        rating: 4.8,
        matchPercentage: 88,
    },
    {
        id: 3,
        name: "Maria Rodriguez",
        location: "Miami, FL",
        bio: "Native Spanish speaker and certified language teacher. ¡Vamos a aprender!",
        teaches: ["Spanish", "Latin American Culture", "Conversational Spanish"],
        learns: ["React", "TypeScript"],
        rating: 5.0,
        matchPercentage: 92,
    },
    {
        id: 4,
        name: "James Wilson",
        location: "Boston, MA",
        bio: "UX designer who loves teaching design principles and Figma workflows.",
        teaches: ["UI/UX Design", "Figma", "Design Systems"],
        learns: ["Node.js", "Backend Development"],
        rating: 4.7,
        matchPercentage: 78,
    },
];

const Matches = () => {
    const handleConnect = (name: string) => {
        toast({
            title: "Connection request sent!",
            description: `Your request to connect with ${name} has been sent.`,
        });
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="mb-2 text-4xl font-display font-bold">Your Matches</h1>
                    <p className="text-lg text-muted-foreground">
                        People who can teach what you want to learn, and vice versa
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {mockMatches.map((match) => (
                        <Card key={match.id} className="group relative overflow-hidden p-6 shadow-card transition-all hover:shadow-glow hover:border-primary/50">
                            {/* Match Percentage Badge */}
                            <div className="absolute top-4 right-4">
                                <Badge className="gradient-primary text-sm font-bold">
                                    {match.matchPercentage}% Match
                                </Badge>
                            </div>

                            <div className="flex items-start gap-4 mb-4">
                                <Avatar className="h-16 w-16 border-2 border-primary/20">
                                    <AvatarFallback className="bg-gradient-primary text-xl font-bold text-primary-foreground">
                                        {match.name.split(" ").map((n) => n[0]).join("")}
                                    </AvatarFallback>
                                </Avatar>

                                <div className="flex-1">
                                    <h3 className="text-xl font-display font-bold mb-1">{match.name}</h3>
                                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="h-3.5 w-3.5" />
                                            {match.location}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                                            {match.rating}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-sm text-muted-foreground mb-4">{match.bio}</p>

                            <div className="space-y-3 mb-4">
                                <div>
                                    <p className="text-xs font-medium text-primary mb-2">Can teach you:</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {match.teaches.map((skill) => (
                                            <Badge key={skill} variant="secondary" className="text-xs">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xs font-medium text-secondary mb-2">Wants to learn:</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {match.learns.map((skill) => (
                                            <Badge key={skill} variant="outline" className="text-xs border-secondary text-secondary">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <Button
                                onClick={() => handleConnect(match.name)}
                                className="w-full gradient-primary"
                            >
                                <MessageSquare className="h-4 w-4 mr-2" />
                                Connect & Start Learning
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Matches;
