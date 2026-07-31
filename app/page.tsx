import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Star, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary animate-fade-in">
              <Zap className="h-4 w-4" />
              Peer-to-Peer Learning Platform
            </div>

            <h1 className="mb-6 text-5xl font-display font-bold leading-tight tracking-tight md:text-7xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Learn anything by{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                teaching something
              </span>
            </h1>

            <p className="mb-8 text-xl text-muted-foreground md:text-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Exchange skills directly with others. Trade your React expertise for Guitar lessons,
              or your Photography skills for French tutoring.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="gradient-primary shadow-glow text-lg" render={<Link href="/signup" />} nativeButton={false}>
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" render={<Link href="/matches" />} nativeButton={false}>
                Browse Matches
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-display font-bold md:text-5xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Simple, direct, and effective peer-to-peer skill exchange
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="group relative overflow-hidden border-2 p-8 transition-all hover:border-primary hover:shadow-card">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary shadow-soft">
                <BookOpen className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="mb-3 text-2xl font-display font-bold">List Your Skills</h3>
              <p className="text-muted-foreground">
                Share what you can teach and what you want to learn. Be specific to find better matches.
              </p>
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
            </Card>

            <Card className="group relative overflow-hidden border-2 p-8 transition-all hover:border-secondary hover:shadow-card">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-secondary shadow-soft">
                <Users className="h-7 w-7 text-secondary-foreground" />
              </div>
              <h3 className="mb-3 text-2xl font-display font-bold">Get Matched</h3>
              <p className="text-muted-foreground">
                Our algorithm finds perfect skill exchange partners based on mutual teaching-learning needs.
              </p>
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-secondary/5 transition-transform group-hover:scale-150" />
            </Card>

            <Card className="group relative overflow-hidden border-2 p-8 transition-all hover:border-accent hover:shadow-card">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent shadow-soft">
                <Star className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="mb-3 text-2xl font-display font-bold">Start Learning</h3>
              <p className="text-muted-foreground">
                Connect, schedule sessions, and grow together. Rate your experience and build reputation.
              </p>
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/5 transition-transform group-hover:scale-150" />
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 bg-muted/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-display font-bold md:text-5xl">
            Ready to start exchanging skills?
          </h2>
          <p className="mb-8 text-xl text-muted-foreground">
            Join thousands of learners teaching and growing together
          </p>
          <Button size="lg" className="gradient-primary shadow-glow text-lg" render={<Link href="/signup" />} nativeButton={false}>
            Create Your Profile
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
