"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
    return (
        <ScrollReveal className="mb-12 text-center lg:text-left">
            <h2 className="font-sora text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-3 text-base text-zinc-400 max-w-lg mx-auto lg:mx-0">
                    {subtitle}
                </p>
            )}
            <div className="mt-4 mx-auto lg:mx-0 h-1 w-16 rounded-full bg-gradient-to-r from-sky-400 to-sky-600" />
        </ScrollReveal>
    );
}
