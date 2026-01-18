import { useState } from 'react'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 pointer-events-none bg-gradient-to-b from-black/80 to-transparent">
                <div className="flex items-center gap-3 pointer-events-auto cursor-pointer group">
                    <div className="relative flex items-center justify-center w-10 h-10">
                        {/* Heartbeat SVG */}
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="w-full h-full text-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3 12H6L9 3L13 21L17 12H21"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="animate-pulse"
                            />
                        </svg>
                    </div>
                    <span className="text-xl font-bold tracking-tighter text-white/90 group-hover:text-purple-400 transition-colors">
                        كود بلس
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 pointer-events-auto">
                    {[
                        { label: 'الرئيسية', href: '#hero' },
                        { label: 'خدماتنا', href: '#services' },
                        { label: 'أعمالنا', href: '#work' },
                    ].map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-white/60 hover:text-purple-400 transition-colors duration-300"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Contact Button (Desktop) */}
                <a href="https://wa.me/message/K3AEW6WKCK37L1" target="_blank" rel="noopener noreferrer" className="hidden md:block pointer-events-auto px-5 py-2 bg-purple-600/80 hover:bg-purple-600 backdrop-blur-md border border-white/10 rounded-full text-white text-xs font-bold transition-all shadow-lg hover:shadow-purple-500/25">
                    تواصل معنا
                </a>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden pointer-events-auto p-2 text-white/80 hover:text-white transition-colors"
                    aria-label="Toggle Menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'} flex flex-col items-center justify-center gap-8`}>
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 text-white/50 hover:text-white"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                {[
                    { label: 'الرئيسية', href: '#hero' },
                    { label: 'خدماتنا', href: '#services' },
                    { label: 'أعمالنا', href: '#work' },
                ].map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-bold text-white hover:text-purple-400 transition-colors"
                    >
                        {item.label}
                    </a>
                ))}

                <a
                    href="https://wa.me/message/K3AEW6WKCK37L1"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="mt-4 px-8 py-3 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                >
                    تواصل معنا
                </a>
            </div>
        </>
    )
}
