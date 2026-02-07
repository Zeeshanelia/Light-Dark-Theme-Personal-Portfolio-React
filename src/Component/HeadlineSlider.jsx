export const HeadlineSlider = () => {
    const tags = [
        "React.js", "Redux-Toolkit", "Tailwind CSS", "Bootstrap Css", "Node.js",
        "Css3", "JavaScript", "Html", "Redux Toolkit", "Zustand",
        "Framer Motion", "Git & GitHub", "Firebase", "Vite", "SupaBase",
    ];

    return (
        <section className="relative overflow-hidden py-4
                          transition-colors duration-300
                          bg-gradient-to-r from-gray-100 to-blue-50
                          dark:from-gray-900 dark:to-purple-900
                          text-gray-900 dark:text-gray-100">



            {/* Top Border Decoration */}
            <div className="absolute top-0 left-0 right-0 h-px
                          bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent
                          dark:via-emerald-500/50" />



            {/* Bottom Border Decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-px
                          bg-gradient-to-r from-transparent via-purple-500/30 to-transparent
                          dark:via-purple-500/50" />



            {/* Container */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="text-center mb-6 md:mb-14">
                    <h2 className="text-xl md:text-3xl font-bold mb-3
                                  text-gray-800 dark:text-gray-100">
                        <span className="text-emerald-600 dark:text-emerald-400">
                            Technologies
                        </span> I Work With
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                        Modern tools and frameworks for building exceptional web experiences
                    </p>
                </div>



                {/* Slider Container */}
                <div className="relative overflow-hidden ">
                    {/* Mask Gradients - Prevent overflow */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 md:w-22
                                  bg-gradient-to-r from-gray-100 dark:from-gray-900 to-transparent
                                  z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24
                                  bg-gradient-to-l from-gray-100 dark:from-gray-900 to-transparent
                                  z-10 pointer-events-none" />

                    {/* First Slider - Left to Right */}
                    <div className="flex mb-4">
                        <div className="flex animate-slide-left gap-3 md:gap-6">
                            {[...tags.slice(0, 10), ...tags.slice(0, 10)].map((tag, index) => (
                                <div
                                    key={`left-${index}`}
                                    className="group relative px-4 md:px-5 py-2 md:py-2.5 rounded-full
                                             bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
                                             border border-emerald-500/20 dark:border-emerald-500/30
                                             shadow-md hover:shadow-lg
                                             shadow-emerald-500/10 dark:shadow-emerald-500/20
                                             hover:border-emerald-500/40 dark:hover:border-emerald-500/50
                                             transition-all duration-300 whitespace-nowrap
                                             hover:-translate-y-1"
                                >
                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 rounded-full
                                                  bg-gradient-to-r from-emerald-500/5 to-transparent
                                                  dark:from-emerald-500/10 opacity-0
                                                  group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Tag Content */}
                                    <span className="relative text-sm md:text-base font-medium
                                                   text-emerald-600 dark:text-emerald-400
                                                   group-hover:text-emerald-700 dark:group-hover:text-emerald-300">
                                        {tag}
                                    </span>

                                    {/* Icon */}
                                    {/* <span className="absolute -top-1 -right-1 w-5 h-5
                                                   bg-emerald-500 dark:bg-emerald-600
                                                   rounded-full flex items-center justify-center
                                                   text-xs text-white opacity-0 group-hover:opacity-100
                                                   transition-opacity duration-300 shadow-sm">
                                        →
                                    </span> */}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Second Slider - Right to Left (Different Timing) */}
                    <div className="flex">
                        <div className="flex animate-slide-right gap-3 md:gap-4">
                            {[...tags.slice(10), ...tags.slice(10)].map((tag, index) => (
                                <div
                                    key={`right-${index}`}
                                    className="group relative px-4 md:px-5 py-2 md:py-2.5 rounded-full
                                             bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
                                             border border-purple-500/20 dark:border-purple-500/30
                                             shadow-md hover:shadow-lg
                                             shadow-purple-500/10 dark:shadow-purple-500/20
                                             hover:border-purple-500/40 dark:hover:border-purple-500/50
                                             transition-all duration-300 whitespace-nowrap
                                             hover:-translate-y-1"
                                >
                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 rounded-full
                                                  bg-gradient-to-r from-purple-500/5 to-transparent
                                                  dark:from-purple-500/10 opacity-0
                                                  group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Tag Content */}
                                    <span className="relative text-sm md:text-base font-medium
                                                   text-purple-600 dark:text-purple-400
                                                   group-hover:text-purple-700 dark:group-hover:text-purple-300">
                                        {tag}
                                    </span>

                                    {/* Icon */}
                                    {/* <span className="absolute -top-1 -right-1 w-5 h-5
                                                   bg-purple-500 dark:bg-purple-600
                                                   rounded-full flex items-center justify-center
                                                   text-xs text-white opacity-0 group-hover:opacity-100
                                                   transition-opacity duration-300 shadow-sm">
                                        ⚡
                                    </span> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Decorative Dots
                <div className="flex justify-center gap-2 mt-4 md:mt-6">
                    {[1, 2, 3].map((dot) => (
                        <div
                            key={dot}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${dot === 2
                                    ? 'bg-emerald-500 dark:bg-emerald-400'
                                    : 'bg-gray-300 dark:bg-gray-600'
                                }`}
                        />
                    ))}
                </div> */}

                {/* Call to Action */}
                <div className="text-center mt-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Continuously learning and adapting to new technologies
                    </p>
                </div>
            </div>
        </section>
    );
};