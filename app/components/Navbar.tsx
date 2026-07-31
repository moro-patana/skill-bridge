"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, User, Sparkles } from "lucide-react";

const Navbar = () => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    const isAuthenticated = pathname !== "/" && pathname !== "/login" && pathname !== "/signup";

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-glow transition-smooth group-hover:scale-110">
                        <Sparkles className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <span className="text-xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        SkillBridge
                    </span>
                </Link>

                {isAuthenticated ? (
                    <div className="flex items-center gap-2">
                        <Button
                            variant={isActive("/matches") ? "default" : "ghost"}
                            render={<Link href="/matches" />} nativeButton={false}
                            size="sm"
                        >
                            <Users className="h-4 w-4" />
                            Matches
                        </Button>
                        <Button
                            variant={isActive("/messages") ? "default" : "ghost"}
                            render={<Link href="/messages" />} nativeButton={false}
                            size="sm"
                        >
                            <MessageSquare className="h-4 w-4" />
                            Messages
                        </Button>
                        <Button
                            variant={isActive("/profile") ? "default" : "ghost"}
                            render={<Link href="/profile" />} nativeButton={false}
                            size="sm"
                        >
                            <User className="h-4 w-4" />
                            Profile
                        </Button>
                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" render={<Link href="/login" />} nativeButton={false} size="sm">
                            Log In
                        </Button>
                        <Button className="gradient-primary" render={<Link href="/signup" />} nativeButton={false} size="sm">
                            Sign Up
                        </Button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
