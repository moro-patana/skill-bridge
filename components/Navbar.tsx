"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Users,
    MessageSquare,
    User,
    Sparkles,
} from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    const isAuthenticated =
        pathname !== "/" &&
        pathname !== "/login"
    // pathname !== "/signup";

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary transition-transform group-hover:scale-110">
                        <Sparkles className="h-5 w-5 text-primary-foreground" />
                    </div>

                    <span className="text-xl font-bold">
                        SkillBridge
                    </span>
                </Link>

                {isAuthenticated ? (
                    <div className="flex items-center gap-2">
                        <Button
                            variant={isActive("/matches") ? "default" : "ghost"}
                            size="sm"
                            asChild
                        >
                            <Link href="/matches">
                                <Users className="mr-2 h-4 w-4" />
                                Matches
                            </Link>
                        </Button>

                        <Button
                            variant={isActive("/messages") ? "default" : "ghost"}
                            size="sm"
                            asChild
                        >
                            <Link href="/messages">
                                <MessageSquare className="mr-2 h-4 w-4" />
                                Messages
                            </Link>
                        </Button>

                        <Button
                            variant={isActive("/profile") ? "default" : "ghost"}
                            size="sm"
                            asChild
                        >
                            <Link href="/profile">
                                <User className="mr-2 h-4 w-4" />
                                Profile
                            </Link>
                        </Button>
                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/login">Log In</Link>
                        </Button>

                        <Button size="sm" asChild>
                            <Link href="/signup">Sign Up</Link>
                        </Button>
                    </div>
                )}
            </div>
        </nav>
    );
}