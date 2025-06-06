"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        const radius = 100;
        const [visible, setVisible] = React.useState(false);

        const mouseX = useMotionValue(0);
        const mouseY = useMotionValue(0);

        function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
            const { currentTarget, clientX, clientY } = event;
            const { left, top } = currentTarget.getBoundingClientRect();
            mouseX.set(clientX - left);
            mouseY.set(clientY - top);
        }

        return (
            <motion.div
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
                          #3b82f6,
                          transparent 80%
                        )
                    `,
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
                className="group/input rounded-lg p-[2px] transition duration-300"
            >
                <input
                    type={type}
                    className={cn(
                        `flex h-12 w-full rounded-md border-none bg-white px-4 py-3 text-base
                         text-[var(--primary)] placeholder-[var(--primary)]
                         transition group-hover/input:shadow-none
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]
                         file:border-0 file:bg-transparent file:text-sm file:font-medium
                         disabled:cursor-not-allowed disabled:opacity-50
                         dark:bg-white dark:text-[var(--primary)] dark:placeholder-[var(--primary)]`,
                        className
                    )}
                    ref={ref}
                    {...props}
                />
            </motion.div>
        );
    }
);
Input.displayName = "Input";

export { Input };