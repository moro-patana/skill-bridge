"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Navbar from "@/components/Navbar";
import { X, Plus, MapPin, Pencil, Check, GraduationCap, BookOpen, Star, Users, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);

    const [profile, setProfile] = useState({
        name: "Alex Chen",
        bio: "Passionate developer and photography enthusiast looking to expand my creative skills.",
        location: "San Francisco, CA",
    });

    const [teachSkills, setTeachSkills] = useState(["React", "TypeScript", "Node.js"]);
    const [learnSkills, setLearnSkills] = useState(["Photography", "Guitar", "Spanish"]);
    const [newTeachSkill, setNewTeachSkill] = useState("");
    const [newLearnSkill, setNewLearnSkill] = useState("");

    const addTeachSkill = () => {
        if (newTeachSkill.trim()) {
            setTeachSkills([...teachSkills, newTeachSkill.trim()]);
            setNewTeachSkill("");
        }
    };

    const addLearnSkill = () => {
        if (newLearnSkill.trim()) {
            setLearnSkills([...learnSkills, newLearnSkill.trim()]);
            setNewLearnSkill("");
        }
    };

    const removeTeachSkill = (skill: string) => {
        setTeachSkills(teachSkills.filter((s) => s !== skill));
    };

    const removeLearnSkill = (skill: string) => {
        setLearnSkills(learnSkills.filter((s) => s !== skill));
    };

    const handleSave = () => {
        setIsEditing(false);
        toast({
            title: "Profile updated!",
            description: "Your changes have been saved successfully.",
        });
    };

    const initials = profile.name.split(" ").map((n) => n[0]).join("");

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <div className="container mx-auto px-4 py-8">
                <div className="mx-auto max-w-4xl">
                    {!isEditing ? (
                        <>
                            {/* Hero header */}
                            <Card className="relative overflow-hidden shadow-card mb-6 border-0">
                                <div className="h-36 gradient-primary relative">
                                    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%)]" />
                                </div>
                                <div className="px-8 pb-8 -mt-16 relative">
                                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                                        <div className="flex items-end gap-5">
                                            <Avatar className="h-32 w-32 border-4 border-card shadow-card">
                                                <AvatarFallback className="bg-gradient-primary text-4xl font-bold text-primary-foreground">
                                                    {initials}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="pb-2">
                                                <h1 className="text-3xl md:text-4xl font-display font-bold">{profile.name}</h1>
                                                <div className="flex items-center gap-1.5 text-muted-foreground mt-1">
                                                    <MapPin className="h-4 w-4" />
                                                    <span className="text-sm">{profile.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <Button onClick={() => setIsEditing(true)} className="gradient-primary shadow-glow">
                                            <Pencil className="h-4 w-4" />
                                            Edit Profile
                                        </Button>
                                    </div>

                                    <p className="mt-6 text-base text-foreground/80 leading-relaxed max-w-2xl">
                                        {profile.bio}
                                    </p>
                                </div>
                            </Card>

                            {/* Stats row */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <Card className="p-5 shadow-soft">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <GraduationCap className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-display font-bold">{teachSkills.length}</p>
                                            <p className="text-xs text-muted-foreground">Teaching</p>
                                        </div>
                                    </div>
                                </Card>
                                <Card className="p-5 shadow-soft">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                                            <BookOpen className="h-5 w-5 text-secondary" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-display font-bold">{learnSkills.length}</p>
                                            <p className="text-xs text-muted-foreground">Learning</p>
                                        </div>
                                    </div>
                                </Card>
                                <Card className="p-5 shadow-soft">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                                            <Users className="h-5 w-5 text-accent" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-display font-bold">12</p>
                                            <p className="text-xs text-muted-foreground">Connections</p>
                                        </div>
                                    </div>
                                </Card>
                                <Card className="p-5 shadow-soft">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <Star className="h-5 w-5 text-primary fill-primary" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-display font-bold">4.9</p>
                                            <p className="text-xs text-muted-foreground">Rating</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>

                            {/* Skills overview */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <Card className="p-6 shadow-card border-2 border-primary/20">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
                                            <GraduationCap className="h-4 w-4 text-primary-foreground" />
                                        </div>
                                        <h2 className="text-xl font-display font-bold text-primary">Can Teach</h2>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {teachSkills.map((skill) => (
                                            <Badge key={skill} className="gradient-primary text-sm py-1.5 px-3">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </Card>

                                <Card className="p-6 shadow-card border-2 border-secondary/20">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="h-8 w-8 rounded-lg gradient-secondary flex items-center justify-center">
                                            <BookOpen className="h-4 w-4 text-secondary-foreground" />
                                        </div>
                                        <h2 className="text-xl font-display font-bold text-secondary">Want to Learn</h2>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {learnSkills.map((skill) => (
                                            <Badge key={skill} className="gradient-secondary text-sm py-1.5 px-3">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </Card>
                            </div>

                            {/* Recommendation callout */}
                            <Card className="mt-6 p-6 shadow-soft bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
                                <div className="flex items-start gap-4">
                                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                                        <Sparkles className="h-5 w-5 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold mb-1">Profile looking good!</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Add a few more skills you can teach to unlock better matches. The more you share, the more you can learn.
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h1 className="text-4xl font-display font-bold">Edit Profile</h1>
                                    <p className="text-muted-foreground mt-1">Update your info and skills</p>
                                </div>
                                <Button variant="outline" onClick={() => setIsEditing(false)}>
                                    Cancel
                                </Button>
                            </div>

                            <Card className="p-6 mb-6 shadow-card">
                                <h2 className="text-2xl font-display font-bold mb-6">Basic Information</h2>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input
                                            id="name"
                                            value={profile.name}
                                            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="bio">Bio</Label>
                                        <Textarea
                                            id="bio"
                                            rows={4}
                                            value={profile.bio}
                                            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                                            placeholder="Tell others about yourself..."
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="location">Location</Label>
                                        <Input
                                            id="location"
                                            value={profile.location}
                                            onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                                            placeholder="City, Country"
                                        />
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6 mb-6 shadow-card border-2 border-primary/20">
                                <h2 className="text-2xl font-display font-bold mb-2 text-primary">Skills I Can Teach</h2>
                                <p className="text-muted-foreground mb-4">What expertise can you share with others?</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {teachSkills.map((skill) => (
                                        <Badge
                                            key={skill}
                                            className="gradient-primary text-base py-1.5 px-3 gap-2"
                                        >
                                            {skill}
                                            <button
                                                onClick={() => removeTeachSkill(skill)}
                                                className="hover:bg-primary-foreground/20 rounded-full p-0.5"
                                            >
                                                <X className="h-3 w-3" />
                                            </button>
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex gap-2">
                                    <Input
                                        placeholder="Add a skill..."
                                        value={newTeachSkill}
                                        onChange={(e) => setNewTeachSkill(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && addTeachSkill()}
                                    />
                                    <Button onClick={addTeachSkill} size="icon" className="gradient-primary">
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </div>
                            </Card>

                            <Card className="p-6 mb-6 shadow-card border-2 border-secondary/20">
                                <h2 className="text-2xl font-display font-bold mb-2 text-secondary">Skills I Want to Learn</h2>
                                <p className="text-muted-foreground mb-4">What would you like to learn from others?</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {learnSkills.map((skill) => (
                                        <Badge
                                            key={skill}
                                            className="gradient-secondary text-base py-1.5 px-3 gap-2"
                                        >
                                            {skill}
                                            <button
                                                onClick={() => removeLearnSkill(skill)}
                                                className="hover:bg-secondary-foreground/20 rounded-full p-0.5"
                                            >
                                                <X className="h-3 w-3" />
                                            </button>
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex gap-2">
                                    <Input
                                        placeholder="Add a skill..."
                                        value={newLearnSkill}
                                        onChange={(e) => setNewLearnSkill(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && addLearnSkill()}
                                    />
                                    <Button onClick={addLearnSkill} size="icon" className="gradient-secondary">
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </div>
                            </Card>

                            <div className="flex gap-3">
                                <Button variant="outline" onClick={() => setIsEditing(false)} className="flex-1">
                                    Cancel
                                </Button>
                                <Button onClick={handleSave} className="flex-1 gradient-primary" size="lg">
                                    <Check className="h-4 w-4" />
                                    Save Changes
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
