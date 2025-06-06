// ProjectSection.tsx
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
    }
}

export function ProjectSection({dict}: { dict: ProjectsDict }) {
    return (
        <section
            id="projects"
            className="min-h-screen bg-white dark:bg-gray-900 py-28 px-8 sm:px-12 lg:px-24"
        >
            <div className="text-center px-4 mb-12">
                <h2 className="text-4xl sm:text-5xl md:text-6xl uppercase text-[var(--primary)] mb-6">
                    {dict.projects.headline}
                </h2>
            </div>

            <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">
                {dict.projects.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: index * 0.2}}
                        className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                    >
                        <div className="relative h-72 w-full">
                            <Image
                                src={project.image}
                                alt={project.alt || project.title}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="p-6">
                            <Link href={project.link}
                                  className="text-2xl font-semibold text-[var(--primary)] hover:underline hover:opacity-90 transition">
                                {project.title}
                            </Link>
                            {project.address && (
                                <p className="text-gray-700 dark:text-gray-300 mb-1 text-base">
                                    {project.address}
                                </p>
                            )}
                            <p className="text-[1.25rem] font-semibold text-[var(--accent)]">
                                {project.area}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}