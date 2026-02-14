"use client";

import { useState } from "react";
import { Card, CardBody, Input, Textarea, Button, Link } from "@heroui/react";
import { FiSend, FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/providers/LanguageProvider";

const socialContacts = [
    {
        name: "GitHub",
        icon: <FiGithub size={20} />,
        href: "https://github.com/Ruan-nascimento",
        label: "@Ruan-nascimento",
    },
    {
        name: "LinkedIn",
        icon: <FiLinkedin size={20} />,
        href: "https://www.linkedin.com/in/ruan-carlos-nascimento-07a146354/",
        label: "Ruan Carlos",
    },
    {
        name: "Instagram",
        icon: <FiInstagram size={20} />,
        href: "https://www.instagram.com/ruan_carlosrcn/",
        label: "@ruan_carlosrcn",
    },
];

export default function ContactSection() {
    const { t } = useLanguage();
    const [formState, setFormState] = useState({
        nome: "",
        mensagem: "",
    });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const phoneNumber = "5582991210862";
        const messageTemplate = t("contact.whatsapp.message");
        const formattedMessage = messageTemplate
            .replace("{name}", formState.nome)
            .replace("{message}", formState.mensagem);

        const text = encodeURIComponent(formattedMessage);
        window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
        setSent(true);
        setTimeout(() => setSent(false), 4000);
    };

    return (
        <section id="contato" className="section">
            <SectionHeading
                title={t("contact.title")}
                subtitle={t("contact.subtitle")}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Form */}
                <ScrollReveal variant="fadeLeft" delay={0.1}>
                    <Card className="glass-card border-zinc-800/50 bg-zinc-900/30">
                        <CardBody className="p-6">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <Input
                                    label={t("contact.form.name")}
                                    placeholder={t("contact.form.name.placeholder")}
                                    isRequired
                                    value={formState.nome}
                                    onValueChange={(v) =>
                                        setFormState((s) => ({ ...s, nome: v }))
                                    }
                                    classNames={{
                                        inputWrapper:
                                            "bg-zinc-800/50 border border-zinc-700/50 hover:border-sky-500/30 focus-within:border-sky-500/50",
                                        label: "text-zinc-400",
                                        input: "text-zinc-100",
                                    }}
                                />

                                <Textarea
                                    label={t("contact.form.message")}
                                    placeholder={t("contact.form.message.placeholder")}
                                    isRequired
                                    minRows={4}
                                    value={formState.mensagem}
                                    onValueChange={(v) =>
                                        setFormState((s) => ({ ...s, mensagem: v }))
                                    }
                                    classNames={{
                                        inputWrapper:
                                            "bg-zinc-800/50 border border-zinc-700/50 hover:border-sky-500/30 focus-within:border-sky-500/50",
                                        label: "text-zinc-400",
                                        input: "text-zinc-100",
                                    }}
                                />

                                <Button
                                    type="submit"
                                    size="lg"
                                    radius="full"
                                    isDisabled={sent}
                                    className="bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-shadow"
                                    startContent={sent ? <FiMail size={18} /> : <FiSend size={18} />}
                                >
                                    {sent ? t("contact.form.sent") : t("contact.form.submit")}
                                </Button>
                            </form>
                        </CardBody>
                    </Card>
                </ScrollReveal>

                {/* Social Card */}
                <ScrollReveal variant="fadeRight" delay={0.2}>
                    <Card className="glass-card border-zinc-800/50 bg-zinc-900/30 h-full">
                        <CardBody className="flex flex-col gap-6 p-6 justify-center">
                            <h3 className="text-xl font-semibold text-zinc-100">
                                {t("contact.social.title")}
                            </h3>
                            <p className="text-sm text-zinc-400">
                                {t("contact.social.description")}
                            </p>

                            <div className="flex flex-col gap-3">
                                {socialContacts.map((s) => (
                                    <Link
                                        key={s.name}
                                        href={s.href}
                                        isExternal
                                        className="flex items-center gap-4 rounded-xl bg-zinc-800/40 border border-zinc-700/30 px-4 py-3 text-zinc-300 transition-all duration-300 hover:border-sky-500/30 hover:bg-sky-500/5 hover:text-sky-300 group"
                                    >
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 transition-transform group-hover:scale-110">
                                            {s.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">{s.name}</p>
                                            <p className="text-xs text-zinc-500">{s.label}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </CardBody>
                    </Card>
                </ScrollReveal>
            </div>
        </section>
    );
}
