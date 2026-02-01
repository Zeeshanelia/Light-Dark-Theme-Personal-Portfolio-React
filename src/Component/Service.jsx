import { ArrowRight, Eye, Palette, PenTool, Globe, Sparkles, CheckCircle } from 'lucide-react';

export const Service = () => {

    return (

        <section className="relative  bg-gradient-to-r from-zinc-700 to-purple-800 text-white md:py-28 overflow-hidden">

            {/* BACKGROUND WATERMARK TEXT */}
            <h1 className="absolute md:top-20 left-1/2 -translate-x-1/2 md:text-[160px] text-[60px] font-extrabold text-white/5 tracking-widest select-none">
                SERVICES
            </h1>



            <div className="relative max-w-7xl mx-auto px-8">

                {/* HEADER */}
                <div className="flex items-center justify-between md:mb-20">
                    <div>
                        <p className="text-sm text-gray-400 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-green-500" />
                            My Specialization
                        </p>

                        <h2 className="text-5xl font-extrabold leading-tight">
                            <span className="text-green-500">Services</span>{" "}
                            <span className="text-white">I Provide</span>
                        </h2>
                    </div>

                    <button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-black font-bold px-8 py-3 rounded-full hover:bg-green-400 transition-all shadow-xl shadow-green-500/30 hover:gap-3 group">
                        View All Services
                        <Eye className="w-4 h-4 group-hover:scale-110 transition-transform " />
                    </button>
                </div>



                {/* CARDS */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-4">

                    {[
                        {
                            title: "UI/UX Design",
                            desc:
                                "Designing intuitive, visually engaging user interfaces that enhance usability and deliver delightful digital experiences.",
                            icon: <Palette className="w-6 h-6 text-green-500" />,
                            features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
                        },
                        {
                            title: "Application Design",
                            desc:
                                "Creating modern, scalable app designs with a seamless user journey tailored to your product and brand goals.",
                            icon: <PenTool className="w-6 h-6 text-green-500" />,
                            features: ["Mobile App Design", "iOS & Android", "Dashboard Design", "Interactive Prototypes"]
                        },
                        {
                            title: "Website Design",
                            desc:
                                "Building responsive, high-performance websites that strengthen brand identity and drive user engagement.",
                            icon: <Globe className="w-6 h-6 text-green-500" />,
                            features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross-Browser"]
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="p-4  relative group rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-950
              border border-white/10   hover:-translate-y-3 transition-all duration-300 shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:border-green-500/20">

                            {/* CARD GLOW */}
                            <div className="absolute inset-0 rounded-3xl bg-green-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

                            {/* TOP RIGHT DECORATIVE ELEMENT */}
                            <div className="absolute top-2 right-4 w-8 h-8 border-t border-r border-green-500/30 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                            <div className="relative">
                                {/* ICON CONTAINER */}
                                <div className="w-14 h-14 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-2xl mb-2 group-hover:bg-green-500/10 group-hover:border-green-500/30 transition-all duration-300">
                                    {item.icon}
                                </div>

                                <h3 className="text-2xl font-semibold mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed mb-4">
                                    {item.desc}
                                </p>



                                {/* FEATURES LIST */}
                                <div className=" mb-2">
                                    {item.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* LEARN MORE LINK */}
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-green-500 font-medium group-hover:gap-4 transition-all duration-300 hover:text-green-400">
                                    Learn More
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>



                {/* MOBILE CTA */}
                <div className="mt-12 text-center md:hidden">
                    <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-black font-bold px-10 py-4 rounded-full
            hover:bg-green-400 transition-all shadow-xl shadow-green-500/30 mx-auto">
                        View All Services
                        <Eye className="w-4 h-4" />
                    </button>
                </div>

                {/* BOTTOM DECORATIVE ELEMENT */}
                <div className="mt-12 text-xl flex flex-col items-center gap-6">
                    <div className="flex items-center gap-4 text-gray-400">
                        <div className="h-px w-20 bg-gradient-to-r from-transparent to-green-500/50" />
                        <span className="text-sm tracking-widest">EXPERTISE AREAS</span>
                        <div className="h-px w-20 bg-gradient-to-l from-transparent to-green-500/50" />
                    </div>
                    <p className="text-center text-gray-400 max-w-2xl">
                        Each project receives dedicated attention to detail, ensuring pixel-perfect execution
                        and exceptional user experiences.
                    </p>
                </div>

            </div>
        </section>
    );
};