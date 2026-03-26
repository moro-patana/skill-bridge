'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Book, Home, Users, MessageCircle, User, Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);

    // Load theme from localStorage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        } else {
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);

        if (newIsDark) {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
            localStorage.setItem('theme', 'light');
        }
    };

    const navLinks = [
        { href: '/', label: 'Home', icon: Home },
        { href: '/matches', label: 'Matches', icon: Users },
        { href: '/messages', label: 'Messages', icon: MessageCircle },
        { href: '/profile', label: 'Profile', icon: User },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950 border-b border-zinc-800 dark:bg-zinc-950">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Book className="h-9 w-9 text-teach" />
                    <div>
                        <span className="text-2xl font-bold tracking-tight dark:text-white light:text-black">SkillBridge</span>
                        <p className="text-xs text-teach -mt-1">learn by teaching</p>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-10 text-sm font-medium">
                    {navLinks.map(({ href, label, icon: Icon }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`flex items-center gap-2 transition-colors hover:text-teach ${pathname === href ? 'text-teach' : 'dark:text-zinc-400 light:text-zinc-600'
                                }`}
                        >
                            <Icon className="h-5 w-5" />
                            {label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-xl text-zinc-400 hover:text-white light:text-zinc-600"
                    >
                        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-zinc-400 hover:text-white light:text-zinc-600"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-zinc-800 light:border-zinc-200 bg-zinc-950 light:bg-white">
                    <div className="px-6 py-6 flex flex-col gap-6 text-lg">
                        {navLinks.map(({ href, label, icon: Icon }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`flex items-center gap-3 transition-colors ${pathname === href ? 'text-teach' : 'dark:text-zinc-300 light:text-zinc-700'
                                    }`}
                            >
                                <Icon className="h-6 w-6" />
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}