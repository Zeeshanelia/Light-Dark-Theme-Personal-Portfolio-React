import { Download } from 'lucide-react';

export const AboutMe = () => {
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/images/OfferLetter.pdf';
        link.download = 'Developer.CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 text-gray-900 dark:text-white py-16 md:py-24 overflow-hidden transition-all duration-300">

            {/* Background pattern/effect */}
            <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900 opacity-30"></div>

            {/* Gradient accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-400/10 to-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* LEFT SIDE – IMAGE COMPOSITION */}
                <div className="relative flex justify-center lg:justify-end order-2 lg:order-1">
                    {/* Outer glow ring */}
                    <div className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-r from-green-400/20 via-emerald-500/20 to-teal-500/20 blur-xl animate-pulse"></div>

                    {/* Green circular background */}
                    <div className="absolute w-full h-full rounded-full bg-[radial-gradient(circle_at_center,#22c55e,transparent_60%)] dark:bg-[radial-gradient(circle_at_center,#10b981,transparent_60%)]" />

                    {/* IMAGE */}
                    <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden z-10 border-4 border-white/10 dark:border-gray-700/50 shadow-2xl shadow-green-500/20 dark:shadow-green-500/10">
                        <img
                            src="images/name55.png"
                            alt="Profile"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE – TEXT CONTENT */}
                <div className="relative order-1 lg:order-2">
                    {/* FADED BACKGROUND TEXT */}
                    <h2 className="absolute -top-4 -left-4 md:-top-6 md:-left-6 text-6xl md:text-8xl lg:text-9xl font-black text-gray-200/10 dark:text-gray-800/30 tracking-wider select-none">
                        ABOUT ME
                    </h2>

                    {/* Section label */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 dark:bg-green-500/5 border border-green-500/20 dark:border-green-500/10 mb-6">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <p className="uppercase tracking-widest text-sm font-medium text-green-600 dark:text-green-400">
                            About Me
                        </p>
                    </div>

                    {/* Main heading */}
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                        Who is <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-400 dark:to-emerald-500">Zeeshan Elia?</span>
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-8 max-w-lg">
                        A web developer passionate about clean code, modern design, user
                        experience, and building responsive, accessible, and
                        high-performing digital products. I am always eager to learn new technologies and improve my skills.
                    </p>

                    {/* STATS */}
                    <div className="grid grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
                        {[
                            { value: "60+", label: "Projects Completed" },
                            { value: "05+", label: "Industry Covered" },
                            { value: "02+", label: "Years Of Experience" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <h4 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-400 dark:to-emerald-500 mb-2">
                                    {stat.value}
                                </h4>
                                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <button
                        onClick={downloadCV}
                        className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-1"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <span className="relative flex items-center gap-3">
                            <Download className="w-5 h-5" />
                            Download CV
                            <span className="opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300">
                                <i className="ri-file-pdf-line text-lg"></i>
                            </span>
                        </span>
                    </button>

                    {/* Available Status */}
                    <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                                <div className="absolute top-1 left-1 w-1 h-1 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                Available for new challenges
                            </span>
                        </div>

                        <div className="hidden sm:block w-8 h-px bg-gradient-to-r from-green-500/50 to-transparent"></div>

                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                                Open to Opportunities
                            </span>
                            <i className="ri-arrow-right-up-line text-cyan-500"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};