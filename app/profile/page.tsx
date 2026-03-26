'use client';

import Navbar from '../components/Navbar';
import { MapPin, Star, Edit3, Plus } from 'lucide-react';
import { useState } from 'react';

export default function Profile() {
    const [teachSkills, setTeachSkills] = useState(["React & TypeScript", "Tailwind CSS", "Next.js"]);
    const [learnSkills, setLearnSkills] = useState(["Portrait Photography", "Video Editing", "French Language"]);
    const [isEditing, setIsEditing] = useState(false);
    const [bio, setBio] = useState("Passionate developer who loves teaching web technologies and learning creative skills.");

    const removeSkill = (type: 'teach' | 'learn', index: number) => {
        if (type === 'teach') setTeachSkills(teachSkills.filter((_, i) => i !== index));
        else setLearnSkills(learnSkills.filter((_, i) => i !== index));
    };

    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 pt-24 pb-12">
                <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                    <div className="w-32 h-32 rounded-3xl overflow-hidden">
                        <img src="https://i.ibb.co/Q7Tj52zF/IMG-4334.jpg" alt="Profile" className="w-full h-full object-cover rounded-full" />
                    </div>

                    <div className="flex-1">
                        <div>
                            <h1 className="text-4xl font-bold text-foreground">Manjaka</h1>
                            <div className="flex items-center gap-2 text-muted-foreground mt-1">
                                <MapPin className="h-5 w-5" /> Antananarivo, Madagascar
                            </div>
                        </div>
                        <button
                            onClick={() => setIsEditing(!isEditing)}
                            className="mt-6 px-6 py-3 bg-card border border-border rounded-2xl transition"
                        >
                            <Edit3 className="inline h-4 w-4 mr-2" />
                            Edit Profile
                        </button>
                    </div>
                </div>

                {/* Bio */}
                <div className="mb-12">
                    <h2 className="text-lg font-semibold mb-3 text-muted-foreground">About Me</h2>
                    {isEditing ? (
                        <textarea
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            className="w-full bg-card border border-border rounded-2xl p-5 min-h-[120px] text-foreground"
                        />
                    ) : (
                        <p className="text-foreground leading-relaxed">{bio}</p>
                    )}
                </div>

                {/* Teach Skills */}
                <div className="mb-12">
                    <div className="flex justify-between mb-6">
                        <h2 className="text-2xl font-semibold text-foreground">I Can Teach</h2>
                        <button className="text-teach flex items-center gap-2 hover:underline">
                            <Plus className="h-5 w-5" /> Add
                        </button>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {teachSkills.map((skill, i) => (
                            <div key={i} className="bg-card border border-emerald-500/30 rounded-2xl p-6">
                                <div className="text-emerald-400 text-sm">TEACH</div>
                                <div className="font-medium text-foreground">{skill}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Learn Skills */}
                <div>
                    <div className="flex justify-between mb-6">
                        <h2 className="text-2xl font-semibold text-foreground"> I Want To Learn</h2>
                        <button className="text-learn flex items-center gap-2 hover:underline">
                            <Plus className="h-5 w-5" /> Add
                        </button>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {learnSkills.map((skill, i) => (
                            <div key={i} className="bg-card border border-indigo-500/30 rounded-2xl p-6">
                                <div className="text-indigo-400 text-sm">LEARN</div>
                                <div className="font-medium text-foreground">{skill}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}