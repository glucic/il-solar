"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Icon set

interface NavbarProps {
    dict: {
        nav: Record<string, string>;
    };
}

const sections = ["main", "why", "comparison", "services", "gallery", "contact"];

export function Navbar({ dict }: NavbarProps) {
    const [activeSection, setActiveSection] = useState("main");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                }
            },
            {
                rootMargin: "-30% 0px -60% 0px",
                threshold: 0.1,
            }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="sticky top-0 z-50 bg-[var(--primary)] text-[var(--primary-foreground)] shadow-md border-b border-[var(--accent)]">            <div className="flex items-center justify-between px-4 py-4 sm:px-6 md:px-8 relative">
                {/* Logo left-aligned */}
                <div className="flex-shrink-0">
                    <h1 className="text-lg font-bold md:text-2xl">IL-Solar</h1>
                </div>

                {/* Desktop Centered Menu */}
                <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6 text-sm font-bold uppercase tracking-wide">
                    {sections.map((id) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className={`transition ${
                                    activeSection === id
                                        ? "underline underline-offset-4"
                                        : "opacity-80 hover:opacity-100"
                                }`}
                            >
                                {dict.nav[id]}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        className="focus:outline-none"
                    >
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-[var(--primary)] px-4 pb-4">
                    <ul className="flex flex-col gap-4 text-sm font-bold uppercase tracking-wide">
                        {sections.map((id) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    className={`block transition ${
                                        activeSection === id
                                            ? "underline underline-offset-4"
                                            : "opacity-80 hover:opacity-100"
                                    }`}
                                    onClick={closeMenu}
                                >
                                    {dict.nav[id]}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}