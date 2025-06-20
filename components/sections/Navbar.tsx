"use client";

import {useEffect, useState} from "react";
import {Menu, X} from "lucide-react";
import LanguageSelector from "@/components/elements/LanguageSwitcher";
import Link from "next/link";

interface NavbarProps {
    dict: {
        nav: Record<string, string>;
    };
}

export function Navbar({dict}: NavbarProps) {
    const [activeSection, setActiveSection] = useState("main");
    const [menuOpen, setMenuOpen] = useState(false);

    // Track active section in view
    useEffect(() => {
        const sectionIds = Object.keys(dict.nav);
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter(entry => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible.length > 0) {
                    setActiveSection(visible[0].target.id);
                }
            },
            {
                rootMargin: "-40% 0px -40% 0px",
                threshold: Array.from({length: 21}, (_, i) => i * 0.05), // finer grain
            }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [dict.nav]);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav
            className="sticky top-0 z-50 bg-[var(--primary)] text-[var(--primary-foreground)] shadow-md border-b border-[var(--accent)]">
            <div className="flex items-center justify-between px-4 py-4 sm:px-6 md:px-8 relative">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link href="#main">
                        <h1 className="text-lg text-[var(--secondary)] font-bold md:text-2xl">IL-SOLAR</h1>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6 text-sm font-bold uppercase tracking-wide">
                    {Object.entries(dict.nav).map(([id, label]) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                onClick={() => setActiveSection(id)}
                                className={`transition ${
                                    activeSection === id
                                        ? "underline underline-offset-4"
                                        : "opacity-80 hover:opacity-100"
                                }`}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Language Switch & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <LanguageSelector/>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                            className="focus:outline-none"
                        >
                            {menuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-[var(--primary)] px-4 pb-4">
                    <ul className="flex flex-col gap-4 text-sm font-bold uppercase tracking-wide">
                        {Object.entries(dict.nav).map(([id, label]) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    onClick={() => {
                                        setActiveSection(id);
                                        closeMenu();
                                    }}
                                    className={`block transition ${
                                        activeSection === id
                                            ? "underline underline-offset-4"
                                            : "opacity-80 hover:opacity-100"
                                    }`}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}