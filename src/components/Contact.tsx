export function Contact() {
    return (
        <section className="relative w-full min-h-[50vh] bg-[#121212] py-32 px-6 md:px-12 z-20 flex flex-col items-center justify-center border-t border-white/10">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Let&apos;s build something together.</h2>
                <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                    I&apos;m currently available for new projects. Whether you have a mobile app idea or need a Flutter expert to join your team, I&apos;d love to hear from you.
                </p>

                <a
                    href="https://forms.gle/AwQcmw97KT9dTj4R9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-black font-semibold text-lg px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300"
                >
                    Say Hello
                </a>

                <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between w-full gap-8">
                    <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Nayeem Abdullah (Abid). All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        <SocialLink href="https://github.com/Nayeem-Abdullah-Abid" label="GitHub" />
                        <SocialLink href="https://www.linkedin.com/in/nayeem-abdullah-abid/" label="LinkedIn" />
                        <SocialLink href="https://www.facebook.com/hiyabiid" label="Facebook" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function SocialLink({ href, label }: { href: string; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-white transition-colors duration-200 text-sm font-medium uppercase tracking-wider"
        >
            {label}
        </a>
    );
}
