"use client";

import { Card, CardBody, Avatar, Tooltip, Link } from "@heroui/react";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const socialLinks = [
    {
        name: "Instagram",
        href: "https://www.instagram.com/ruan_carlosrcn/",
        icon: <FiInstagram size={20} />,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ruan-carlos-nascimento-07a146354/",
        icon: <FiLinkedin size={20} />,
    },
    {
        name: "GitHub",
        href: "https://github.com/Ruan-nascimento",
        icon: <FiGithub size={20} />,
    },
];

export default function UserProfileCard() {
    return (
        <Card
            isBlurred
            className="w-full max-w-xs border border-white/10 bg-zinc-900/30 rounded-2xl shadow-2xl backdrop-blur-xl backdrop-saturate-150"
        >
            <CardBody className="flex flex-col items-center gap-5 py-8 px-6">
                {/* Avatar com glow */}
                <div className="group relative">
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-sky-400 to-sky-600 opacity-40 blur-md transition-all duration-500 group-hover:opacity-70 group-hover:blur-lg" />
                    <Avatar
                        color="primary"
                        src="/Eu.png"
                        showFallback
                        name="RC"
                        size="lg"
                        radius="full"
                        className="w-40 h-40 text-xl object-cover"
                    />
                </div>

                {/* Nome + subtítulo */}
                <div className="flex flex-col items-center gap-1 text-center">
                    <h2 className="font-sora text-2xl font-bold tracking-tight text-white">
                        Ruan Carlos
                    </h2>
                    <p className="text-sm text-zinc-400">
                        Desenvolvedor Full Stack
                    </p>
                </div>

                {/* Separador */}
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

                {/* Links sociais */}
                <div className="flex items-center gap-4">
                    {socialLinks.map((social) => (
                        <Tooltip
                            key={social.name}
                            content={social.name}
                            placement="bottom"
                            delay={200}
                            closeDelay={0}
                            classNames={{
                                content: "bg-zinc-800 text-sky-200 text-xs px-3 py-1.5 shadow-lg",
                            }}
                        >
                            <Link
                                href={social.href}
                                isExternal
                                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-zinc-400 transition-all duration-300 hover:scale-110 hover:bg-sky-500/15 hover:text-sky-300 hover:shadow-lg hover:shadow-sky-500/10"
                            >
                                {social.icon}
                            </Link>
                        </Tooltip>
                    ))}
                </div>
            </CardBody>
        </Card>
    );
}
