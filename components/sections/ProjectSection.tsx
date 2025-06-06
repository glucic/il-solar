"use client";

import Image from "next/image";
import {motion} from "framer-motion";
import Link from "next/link";
import React from "react";

interface ProjectsDict {
    projects: {
        headline: string;
        projects: Array<{
            title: string;
            address: string;
            area: string;
            image: string;
            alt?: string;
            link: string;
        }>;
    };
}

export function ProjectSection({dict}: { dict: ProjectsDict }) {
    return (
        <section
            id="projects"
            className="min-h-screen bg-white dark:bg-gray-900 py-20 px-4 sm:px-6 md:px-10 lg:px-16"
        >
            <div className="text-center mb-12 px-4">
                <h2 className="text-4xl sm:text-5xl md:text-6xl uppercase text-[var(--primary)] mb-4">
                    {dict.projects.headline}
                </h2>
            </div>

            <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
                {dict.projects.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: index * 0.2}}
                        viewport={{once: true}}
                        className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
                    >
                        {/* Image */}
                        <div className="relative h-64 w-full">
                            <Image
                                src={project.image}
                                alt={project.alt || project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <Link href={project.link} passHref
                                  className="text-2xl font-semibold text-[var(--primary)] hover:underline hover:opacity-90 transition-all block mb-1">
                                {project.title}
                            </Link>
                            {project.address && (
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">
                                    {project.address}
                                </p>
                            )}
                            <p className="text-lg font-semibold text-[var(--accent)]">
                                {project.area}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}