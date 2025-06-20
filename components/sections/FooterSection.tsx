"use client";

import React from "react";
import Image from "next/image";
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok} from "react-icons/fa";
import {HiDocumentText} from "react-icons/hi";
import Link from "next/link";
import {useCookiePreferences} from "@/components/elements/CookiePreferenceContextProvider";
import {motion} from "framer-motion";

interface FooterDict {
    nav: {
        why: string;
        comparison: string;
        services: string;
        gallery: string;
        contact: string;
    };
    contact: {
        phoneNumber: string;
        email: string;
    };
}

export const FooterSection = ({dict}: { dict: FooterDict }) => {
    const currentYear = new Date().getFullYear();
    const {open} = useCookiePreferences();

    return (
        <footer className="w-full border-t border-gray-200 bg-white dark:bg-gray-900 px-4 sm:px-6 py-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                {/* Column 1: Logo */}
                <div>
                    <Image
                        src="/logo.png"
                        alt="IL Solar Logo"
                        width={160}
                        height={50}
                        className="h-auto w-auto"
                    />
                </div>

                {/* Column 2: Address Info */}
                <div>
                    <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-2">
                        {dict.nav.contact}
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Kronbergweg 28b</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">4407 Steyr</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Oberösterreich</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                        Tel.: {dict.contact.phoneNumber}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        Email:{" "}
                        <a href={`mailto:${dict.contact.email}`} className="underline hover:text-[var(--accent)]">
                            {dict.contact.email}
                        </a>
                    </p>
                </div>

                {/* Column 3: Navigation Links */}
                <div>
                    <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-2">
                        Navigation
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <li><Link href="#why" className="hover:underline">{dict.nav.why}</Link></li>
                        <li><Link href="#comparison" className="hover:underline">{dict.nav.comparison}</Link></li>
                        <li><Link href="#services" className="hover:underline">{dict.nav.services}</Link></li>
                        <li><Link href="#gallery" className="hover:underline">{dict.nav.gallery}</Link></li>
                        <li><Link href="#contact" className="hover:underline">{dict.nav.contact}</Link></li>
                        <li>
                            <Link
                                href="/agb.pdf"
                                className="flex items-center gap-1 font-semibold hover:underline"
                            >
                                <HiDocumentText className="w-4 h-4"/>
                                AGB
                            </Link>
                        </li>
                        <li className="mt-4">
                            <button
                                onClick={open}
                                className="underline hover:text-[var(--accent)] transition"
                            >
                                Cookie-Einstellungen
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Social Icons */}
                <div>
                    <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-2">
                        Folgen Sie uns
                    </h3>
                    <div className="flex gap-4 text-lg">
                        {[
                            {Icon: FaInstagram, href: "https://www.instagram.com/il_solar_1?igsh=MWxlMWdwbjdpMjNhdA=="},
                            {Icon: FaTiktok, href: "https://www.tiktok.com/@ilsolar1?_t=ZN-8xN0U4oQ4m2&_r=1"},
                        ].map(({Icon, href}, i) => (
                            <motion.a
                                key={i}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{scale: 1.2}}
                                className="text-gray-600 dark:text-gray-300 hover:text-[var(--accent)] transition"
                            >
                                <Icon/>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400">
                &copy; {currentYear} Ivan Lucic. Alle Rechte vorbehalten.
            </div>
        </footer>
    );
};