export const Hero = () => {
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/images/OfferLetter.pdf';
        link.download = 'Zeeshan_Elia_CV.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section
            id="hero"
            className="min-h-[calc(100vh-64px)] flex items-center py-8 md:py-16 px-4 sm:px-6 lg:px-8
                       transition-colors duration-300
                       bg-gradient-to-r from-gray-50 to-blue-50
                       dark:from-gray-900 dark:to-purple-900
                       text-gray-900 dark:text-gray-100"
        >
            <div className="max-w-7xl mx-auto w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                    {/* Left side - Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left space-y-6 md:space-y-8">
                        <div className="space-y-4">
                            <span className="text-lg md:text-xl text-emerald-600 dark:text-emerald-400
                                           font-medium tracking-wide">
                                Hello There! 👋
                            </span>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                <span className="text-emerald-600 dark:text-emerald-400 block md:inline">
                                    I'm Zeeshan Elia
                                </span>
                                <span className="block mt-2 text-gray-800 dark:text-gray-100">
                                    Full Stack Developer
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300
                                        leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Passionate about crafting modern web experiences that are both
                                visually stunning and intuitively functional. Based in Pakistan.
                            </p>
                        </div>

                        {/* Buttons Container */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <button
                                className="group relative px-8 py-3
                                         bg-gradient-to-r from-emerald-500 to-emerald-600
                                         dark:from-emerald-600 dark:to-emerald-700
                                         text-white font-semibold rounded-full
                                         hover:from-emerald-600 hover:to-emerald-700
                                         dark:hover:from-emerald-700 dark:hover:to-emerald-800
                                         transition-all duration-300
                                         shadow-lg hover:shadow-xl
                                         shadow-emerald-500/20 dark:shadow-emerald-500/30
                                         hover:-translate-y-1"
                            >
                                View My Work
                                <span className="absolute inset-0 rounded-full border-2
                                               border-emerald-400/30 dark:border-emerald-500/30
                                               group-hover:border-emerald-400/50
                                               dark:group-hover:border-emerald-500/50
                                               transition-all duration-300" />
                            </button>

                            <button
                                onClick={downloadCV}
                                className="group relative px-8 py-3
                                         bg-transparent
                                         border-2 border-emerald-500/50 dark:border-emerald-600/50
                                         text-emerald-600 dark:text-emerald-400 font-semibold
                                         rounded-full hover:bg-gradient-to-r
                                         hover:from-emerald-500/10 hover:to-emerald-600/10
                                         dark:hover:from-emerald-500/20 dark:hover:to-emerald-600/20
                                         transition-all duration-300
                                         hover:border-emerald-600 dark:hover:border-emerald-500
                                         hover:-translate-y-1"
                            >
                                Download CV
                                <span className="absolute inset-0 rounded-full
                                               bg-gradient-to-r from-emerald-500/5 to-emerald-600/5
                                               dark:from-emerald-500/10 dark:to-emerald-600/10
                                               opacity-0 group-hover:opacity-100 transition-opacity
                                               duration-300" />
                            </button>
                        </div>

                        {/* Stats or Quick Info */}
                        <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-8">
                            {[
                                { value: '2+', label: 'Years Experience' },
                                { value: '20+', label: 'Projects Completed' },
                                { value: '100%', label: 'Client Satisfaction' }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold
                                                  text-emerald-600 dark:text-emerald-400">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="lg:w-1/2 flex justify-center relative mt-8 lg:mt-0">
                        {/* Animated Background Glow - Light Mode */}
                        <div className="absolute w-64 h-64 md:w-[400px] md:h-[400px] rounded-full
                                      bg-gradient-to-r from-emerald-500/10 to-blue-500/10
                                      blur-3xl animate-pulse" />

                        {/* Animated Background Glow - Dark Mode */}
                        <div className="absolute w-72 h-72 md:w-[450px] md:h-[450px] rounded-full
                                      bg-gradient-to-r from-purple-500/5 to-emerald-500/5
                                      blur-2xl dark:from-purple-500/10 dark:to-emerald-500/10" />

                        {/* Image Container */}
                        <div className="relative z-10">
                            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full
                                          border-4 border-gray-200 dark:border-gray-700
                                          p-1 group shadow-2xl">
                                {/* Animated Border Effect */}
                                <div className="absolute inset-0 rounded-full border-2
                                              border-emerald-500/30 dark:border-emerald-500/50
                                              animate-spin-slow [animation-duration:8s]" />

                                {/* Main Image */}
                                <img
                                    src="/images/unnamed111.png"
                                    alt="Zeeshan Elia - Full Stack Developer"
                                    className="w-full h-full rounded-full object-cover
                                             border-4 border-white dark:border-gray-800
                                             group-hover:scale-105 transition-transform duration-500"
                                    loading="eager"
                                />

                                {/* Floating Elements */}
                                <div className="absolute -top-2 -right-2 w-12 h-12
                                              bg-emerald-500 dark:bg-emerald-600
                                              rounded-full flex items-center justify-center
                                              shadow-lg animate-bounce">
                                    <span className="text-2xl">🚀</span>
                                </div>
                                <div className="absolute -bottom-2 -left-2 w-10 h-10
                                              bg-blue-500 dark:bg-purple-600
                                              rounded-full flex items-center justify-center
                                              shadow-lg animate-bounce [animation-delay:1s]">
                                    <span className="text-xl">💻</span>
                                </div>
                            </div>

                            {/* Tech Stack Badges */}
                            <div className="mt-8 flex flex-wrap justify-center gap-3">
                                {['React', 'Node.js', 'Tailwind', 'MongoDB', 'TypeScript'].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2
                                                 bg-white/80 dark:bg-gray-800/80
                                                 backdrop-blur-sm rounded-full text-sm font-medium
                                                 border border-gray-300 dark:border-gray-600
                                                 text-gray-800 dark:text-gray-200
                                                 hover:bg-white dark:hover:bg-gray-700
                                                 transition-all duration-300 hover:scale-105
                                                 shadow-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};