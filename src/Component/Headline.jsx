import { useState, useEffect } from 'react';

export const Headline = () => {
    const phrases = [
        "Digital Innovation",
        "Creative Solutions",
        "Next-Gen Technology",
        "Future Ready",
        "User Experience",
        "Web Development"
    ];

    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(100);

    useEffect(() => {
        const currentPhrase = phrases[currentPhraseIndex];

        const timer = setTimeout(() => {
            if (!isDeleting && currentText !== currentPhrase) {
                // Typing
                setCurrentText(currentPhrase.substring(0, currentText.length + 1));
                setSpeed(100);
            } else if (isDeleting && currentText !== '') {
                // Deleting
                setCurrentText(currentPhrase.substring(0, currentText.length - 1));
                setSpeed(50);
            } else if (!isDeleting && currentText === currentPhrase) {
                // Pause at full text
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && currentText === '') {
                // Move to next phrase
                setIsDeleting(false);
                setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentPhraseIndex, phrases, speed]);

    return (
        <section className="
            bg-gradient-to-r from-gray-50 to-blue-50
            dark:from-gray-900 dark:to-purple-900
            text-gray-900 dark:text-gray-100
            transition-colors duration-300
            py-12 md:py-20
            overflow-hidden
            px-4 sm:px-6 lg:px-8
        ">
            <div className="max-w-7xl mx-auto text-center">
                {/* Main Typing Animation */}
                <div className="relative inline-block">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
                        <span className="block md:inline">
                            Leading in{' '}
                            <span className="
                                text-emerald-600 dark:text-emerald-400
                                border-r-2 md:border-r-4
                                border-emerald-500 dark:border-emerald-400
                                pr-1 md:pr-2
                                animate-pulse
                            ">
                                {currentText}
                            </span>
                        </span>
                    </h1>

                    {/* Cursor effect for empty text */}
                    {currentText === '' && (
                        <span className="
                            absolute ml-1
                            w-1 h-12 md:h-16
                            bg-emerald-500 dark:bg-emerald-400
                            animate-pulse
                        " />
                    )}
                </div>

                {/* Subtitle */}
                <p className="
                    text-lg md:text-2xl
                    text-gray-700 dark:text-gray-300
                    mt-6 md:mt-8
                    max-w-3xl mx-auto
                    leading-relaxed
                ">
                    Innovative approaches for modern businesses
                </p>

                {/* Animated Dots */}
                <div className="flex justify-center gap-2 mt-8 md:mt-12">
                    {phrases.map((_, index) => (
                        <div
                            key={index}
                            className={`
                                w-2 h-2 rounded-full transition-all duration-300
                                ${index === currentPhraseIndex
                                    ? 'bg-emerald-500 dark:bg-emerald-400 w-8'
                                    : 'bg-gray-300 dark:bg-gray-600'
                                }
                            `}
                        />
                    ))}
                </div>

                {/* Decorative Elements */}
                <div className="mt-12 md:mt-16 flex flex-col items-center gap-6">
                    <div className="flex items-center gap-4 w-full max-w-md">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
                        <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                            Expertise
                        </span>
                        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
                    </div>

                    {/* Quick Stats */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-4">
                        {[
                            { value: '100%', label: 'Quality Focus' },
                            { value: '24/7', label: 'Dedication' },
                            { value: '2+', label: 'Years Experience' },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="mt-12">
                    <button className="
                        group relative
                        px-8 py-3 md:px-10 md:py-4
                        bg-gradient-to-r from-emerald-500 to-emerald-600
                        dark:from-emerald-600 dark:to-emerald-700
                        text-white font-semibold rounded-full
                        hover:from-emerald-600 hover:to-emerald-700
                        dark:hover:from-emerald-700 dark:hover:to-emerald-800
                        transition-all duration-300
                        shadow-lg hover:shadow-xl
                        shadow-emerald-500/20 dark:shadow-emerald-500/30
                        hover:-translate-y-1
                    ">
                        <span className="relative flex items-center gap-2">
                            Start Your Project
                            <span className="
                                text-lg group-hover:translate-x-1
                                transition-transform duration-300
                            ">
                                →
                            </span>
                        </span>
                    </button>
                </div>
            </div>

            {/* Background Pattern */}
            <div className="
                absolute inset-0
                bg-[radial-gradient(circle_at_center,_transparent_1px,_transparent_1px)]
                bg-[size:4rem_4rem]
                opacity-5 dark:opacity-10
                pointer-events-none
            " />
        </section>
    );
};