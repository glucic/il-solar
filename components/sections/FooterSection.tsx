"use client";

import React from "react";
import Image from "next/image";
import {FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import {HiDocumentText} from "react-icons/hi";
import Link from "next/link";
import {useCookiePreferences} from "@/components/elements/CookiePreferenceContextProvider";

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
        <footer className="w-full border-t border-gray-200 bg-white dark:bg-gray-900 px-4 sm:px-6 py-8">
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-6xl">
                    {/* Column 1: Logo */}
                    <div className="flex items-start md:items-start justify-start">
                        <Image
                            src="/logo.png"
                            alt="IL Solar Logo"
                            width={160}
                            height={50}
                            className="h-auto w-auto"
                        />
                    </div>

                    {/* Column 2: Address Info */}
                    <div className="text-left">
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
                            <a href={`mailto:${dict.contact.email}`} className="underline">
                                {dict.contact.email}
                            </a>
                        </p>
                    </div>

                    {/* Column 3: Navigation Links */}
                    <div className="text-left">
                        <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-2">
                            Navigation
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                            <li>
                                <Link href="#why" className="hover:underline">
                                    {dict.nav.why}
                                </Link>
                            </li>
                            <li>
                                <Link href="#comparison" className="hover:underline">
                                    {dict.nav.comparison}
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="hover:underline">
                                    {dict.nav.services}
                                </Link>
                            </li>
                            <li>
                                <Link href="#gallery" className="hover:underline">
                                    {dict.nav.gallery}
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="hover:underline">
                                    {dict.nav.contact}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/agb.pdf"
                                    className="flex items-center gap-1 font-semibold hover:underline"
                                >
                                    <HiDocumentText className="w-4 h-4"/>
                                    AGB
                                </Link>
                            </li>
                            <ul className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                                <li>
                                    <button onClick={open} className="underline hover:text-[var(--accent)] transition">
                                        Cookie-Einstellungen
                                    </button>
                                </li>
                            </ul>
                        </ul>
                    </div>

                    {/* Column 4: Social Icons */}
                    <div className="text-left">
                        <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-2">
                            Folgen Sie uns
                        </h3>
                        <div className="flex space-x-4 text-lg">
                            <Link
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-300 hover:text-[var(--accent)]"
                            >
                                <FaFacebookF/>
                            </Link>
                            <Link
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-300 hover:text-[var(--accent)]"
                            >
                                <FaInstagram/>
                            </Link>
                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-300 hover:text-[var(--accent)]"
                            >
                                <FaLinkedinIn/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                &copy; {currentYear} Ivan Lucic. Alle Rechte vorbehalten.
            </div>
        </footer>
    );
};