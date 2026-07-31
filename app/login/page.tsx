"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast({
            title: "Welcome back!",
            description: "You've been logged in successfully.",
        });
        router.push("/matches");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-secondary/5 p-4">
            <Card className="w-full max-w-md p-8 shadow-card">
                <div className="mb-8 text-center">
                    <Link href="/" className="inline-flex items-center gap-2 group mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow transition-smooth group-hover:scale-110">
                            <Sparkles className="h-6 w-6 text-primary-foreground" />
                        </div>
                    </Link>
                    <h1 className="text-3xl font-display font-bold mb-2">Welcome back</h1>
                    <p className="text-muted-foreground">Log in to continue learning</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <Button type="submit" className="w-full gradient-primary">
                        Log In
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                        Don't have an account?{" "}
                        <Link href="/signup" className="text-primary font-medium hover:underline">
                            Sign up
                        </Link>
                    </p>
                </form>
            </Card>
        </div>
    );
};

export default Login;
