"use client";

import {motion} from "framer-motion";
import React, {useState} from "react";
import {Input} from "../ui/input";
import {cn} from "@/lib/utils";
import {SendHorizonal} from "lucide-react";
import {FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa";

export interface ContactDict {
    contact: {
        headline: string;
        phoneLabel?: string;
        phoneNumber: string;
        emailLabel?: string;
        email: string;
        firstname: string;
        lastname: string;
        message: string;
    };
}

export function ContactSection({dict}: { dict: ContactDict }) {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted", form);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000); // Hide message after 3s
    };

    return (
        <section
            id="contact"
            className="min-h-screen w-full flex flex-col items-center justify-center bg-[var(--primary)] text-[var(--primary-foreground)] px-4 sm:px-6 py-12 text-center transition-colors"
        >
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 uppercase">
                    {dict.contact.headline}
                </h2>
            </motion.div>

            <div className="w-full flex justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 w-full max-w-2xl"
                >
                    <div className="flex flex-col md:flex-row gap-4 w-full">
                        <LabelInputContainer>
                            <Input
                                id="firstName"
                                name="firstName"
                                type="text"
                                placeholder={dict.contact.firstname}
                                value={form.firstName}
                                onChange={handleChange}
                                required
                                className="bg-white border-b-2 border-[var(--accent)] text-[var(--primary)] placeholder:text-neutral-400 focus:outline-none focus:border-[var(--primary)]"
                            />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Input
                                id="lastName"
                                name="lastName"
                                type="text"
                                placeholder={dict.contact.lastname}
                                value={form.lastName}
                                onChange={handleChange}
                                required
                                className="bg-white border-b-2 border-[var(--accent)] text-[var(--primary)] placeholder:text-neutral-400 focus:outline-none focus:border-[var(--primary)]"
                            />
                        </LabelInputContainer>
                    </div>

                    <LabelInputContainer>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="bg-white border-b-2 border-[var(--accent)] text-[var(--primary)] placeholder:text-neutral-400 focus:outline-none focus:border-[var(--primary)]"
                        />
                    </LabelInputContainer>

                    <LabelInputContainer>
      <textarea
          id="message"
          name="message"
          placeholder={dict.contact.message}
          value={form.message}
          onChange={handleChange}
          rows={6}
          required
          className="w-full px-4 py-3 text-base rounded-md bg-white text-[var(--primary)]
        placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-none transition"
      />
                    </LabelInputContainer>

                    {submitted && (
                        <p className="text-green-200 font-medium">
                            Danke! Ihre Nachricht wurde gesendet.
                        </p>
                    )}

                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-6">
                        {/* Icons */}
                        <div className="flex items-center gap-6 text-white text-3xl">
                            {[{
                                icon: FaFacebookF, href: "https://facebook.com"
                            }, {
                                icon: FaInstagram, href: "https://instagram.com"
                            }, {
                                icon: FaLinkedinIn, href: "https://linkedin.com"
                            }].map(({icon: Icon, href}, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[var(--accent)] transition transform hover:scale-110"
                                >
                                    <Icon/>
                                </a>
                            ))}
                        </div>

                        {/* Button */}
                        <motion.button
                            type="submit"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            className="relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-[var(--accent)] to-orange-500 px-6 py-3 text-lg font-semibold text-white shadow-md transition-all duration-300"
                        >
                            Senden
                            <SendHorizonal className="ml-2 h-5 w-5"/>
                            <span className="absolute inset-0 rounded-lg ring-1 ring-white/10"/>
                        </motion.button>
                    </div>
                </form>
            </div>
        </section>
    );
}

const LabelInputContainer = ({
                                 children,
                                 className,
                             }: {
    children: React.ReactNode;
    className?: string;
}) => (
    <div className={cn("flex w-full flex-col", className)}>{children}</div>
);