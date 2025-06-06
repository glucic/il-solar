'use client';

import { Popover } from '@headlessui/react';
import { useRouter, usePathname } from 'next/navigation';
import Flag from 'react-world-flags';
import { useEffect, useState } from 'react';

const languages = [
    { code: 'de', label: 'Deutsch', flag: 'DE' },
    { code: 'hr', label: 'Hrvatski', flag: 'HR' },
];

export default function LanguageSelector() {
    const router = useRouter();
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(false);
    const [currentLang, setCurrentLang] = useState(languages[0]);

    // Detect screen size
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Detect language from URL or localStorage
    useEffect(() => {
        const fromPath =
            languages.find((lang) => pathname.startsWith(`/${lang.code}`)) || null;
        const stored = localStorage.getItem('preferred-language');

        const preferredLang =
            fromPath ||
            languages.find((l) => l.code === stored) ||
            languages[0];

        setCurrentLang(preferredLang);
    }, [pathname]);

    // Switch language + store in localStorage
    const switchLanguage = (langCode: string) => {
        localStorage.setItem('preferred-language', langCode);
        const newPath = pathname.replace(/^\/(de|hr)/, `/${langCode}`);
        router.push(newPath);
    };

    return (
        <Popover className="relative">
            <Popover.Button
                className="flex items-center space-x-2 px-3 py-2 rounded-md transition
               bg-transparent text-[var(--primary-foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]
               focus:outline-none focus:ring-0"
            >
                <Flag code={currentLang.flag} className="h-5 w-5" />
                <span>{currentLang.label}</span>
            </Popover.Button>

            <Popover.Panel
                className={`z-50 mt-2 min-w-full rounded-md shadow-lg ring-1 ring-black ring-opacity-5
        ${isMobile ? 'fixed left-4 bottom-20 w-40' : 'absolute'} 
        bg-[var(--foreground)] text-[var(--background)]`}
            >
                <div className="py-1">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => switchLanguage(lang.code)}
                            className="flex items-center w-full px-4 py-2 text-sm text-left
                           hover:bg-[var(--background)] hover:text-[var(--foreground)] transition"
                        >
                            <Flag code={lang.flag} className="h-5 w-5 mr-2" />
                            {lang.label}
                        </button>
                    ))}
                </div>
            </Popover.Panel>
        </Popover>
    );
}