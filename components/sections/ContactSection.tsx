"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";

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

export function ContactSection({ dict }: { dict: ContactDict }) {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Example: send data to API
        console.log("Submitted", form);
        alert("Message sent!");
    };

    return (
        <section
            id="contact"
            className="min-h-screen w-full flex flex-col items-center justify-center bg-[var(--primary)] text-white px-4 sm:px-6 py-12 text-center transition-colors"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [20, -5, 0] }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-25 uppercase">
                    {dict.contact.headline}
                </h2>
            </motion.div>

            <div className="w-full max-w-4xl grid md:grid-cols-2 gap-10 text-left">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: [ -20, 5, 0 ] }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="space-y-6"
                >
                    <div>
                        <h3 className="text-xl font-semibold">{dict.contact.phoneLabel ?? "Phone"}</h3>
                        <p className="text-lg">{dict.contact.phoneNumber}</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">{dict.contact.emailLabel ?? "Email"}</h3>
                        <p className="text-lg">{dict.contact.email}</p>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: [ 20, -5, 0 ] }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-6"
                >
                    <div className="flex gap-4">
                        <input
                            type="text"
                            name="firstName"
                            placeholder={dict.contact.firstname}
                            value={form.firstName}
                            onChange={handleChange}
                            required
                            className="w-1/2 p-3 rounded bg-white text-black"
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder={dict.contact.lastname}
                            value={form.lastName}
                            onChange={handleChange}
                            required
                            className="w-1/2 p-3 rounded bg-white text-black"
                        />
                    </div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded bg-white text-black"
                    />
                    <textarea
                        name="message"
                        placeholder={dict.contact.message}
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="w-full p-3 rounded bg-white text-black resize-none"
                    />
                    <button
                        type="submit"
                        className="bg-[var(--accent)] hover:bg-opacity-80 text-white font-semibold py-3 px-6 rounded transition"
                    >
                        Send
                    </button>
                </motion.form>
            </div>
        </section>
    );
}