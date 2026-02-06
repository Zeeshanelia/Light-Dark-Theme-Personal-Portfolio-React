import { GraduationCap, Briefcase, Calendar, Award, Code, Palette } from 'lucide-react';

export const Education = () => {
    return (
        <section
            className="
                bg-gradient-to-br from-gray-50 to-blue-50
                dark:from-gray-900 dark:to-purple-900
                text-gray-900 dark:text-gray-100
                transition-colors duration-300
                py-16 md:py-24
                overflow-hidden
                px-4 sm:px-6 lg:px-8
            "
        >
            <div className="max-w-7xl mx-auto relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_black_1px,_transparent_1px)] dark:bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:4rem_4rem]" />
                </div>

                {/* Header */}
                <div className="relative mb-16 md:mb-20 text-center z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                        bg-emerald-500/10
                        border border-emerald-500/20
                        backdrop-blur-sm mb-6">
                        <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                            My Journey
                        </p>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
                        EDUCATION & WORK
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl font-medium
                        text-gray-600 dark:text-gray-300
                        max-w-3xl mx-auto">
                        My Academic & Professional Journey
                    </p>
                </div>

                {/* Main content */}
                <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-10 z-10">

                    {[{
                        title: "Education",
                        subtitle: "Academic background",
                        icon: GraduationCap,
                        items: [
                            {
                                icon: Award,
                                title: "BZ University (PAK) Institute",
                                desc: "Bachelor Degree Holder",
                                date: "2014 - 2018"
                            },
                            {
                                icon: Code,
                                title: "Govt. College Montgomery",
                                desc: "Intermediate in Computer Science (ICS)",
                                date: "2010 – 2012"
                            }
                        ]
                    }, {
                        title: "Work & Skills",
                        subtitle: "Professional experience",
                        icon: Briefcase,
                        items: [
                            {
                                icon: Award,
                                title: "Cisco Networking",
                                desc: "Certified JavaScript Developer",
                                date: "VU-ITU-DTC-JSE1-2025"
                            },
                            {
                                icon: Palette,
                                title: "Self-Employed",
                                desc: "WordPress Web Designer",
                                date: "Feb 2021 - May 2022"
                            }
                        ]
                    }].map((card, idx) => (
                        <div key={idx}
                            className="
                                flex-1 group relative
                                bg-white/80 dark:bg-gray-800/80
                                backdrop-blur-sm
                                rounded-2xl
                                border border-gray-200 dark:border-gray-700
                                overflow-hidden
                                shadow-xl
                                hover:shadow-2xl hover:shadow-emerald-500/10
                                transition-all duration-300
                                hover:-translate-y-2
                            "
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-1.5
                                bg-gradient-to-b from-emerald-500 to-emerald-600" />

                            <div className="relative p-6 md:p-8 lg:p-10">
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-14 h-14 rounded-full
                                        bg-emerald-500/10
                                        border border-emerald-500/20
                                        flex items-center justify-center
                                        text-emerald-600 dark:text-emerald-400">
                                        <card.icon className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold">{card.title}</h2>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                            {card.subtitle}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-10">
                                    {card.items.map((item, i) => (
                                        <div key={i}
                                            className="relative pl-6
                                            before:absolute before:left-0 before:top-0 before:bottom-0
                                            before:w-0.5
                                            before:bg-gradient-to-b
                                            before:from-emerald-500/30 before:to-emerald-600/30">
                                            <div className="flex flex-col md:flex-row md:justify-between gap-3">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <item.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                                        <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
                                                    </div>
                                                    <p className="text-emerald-600 dark:text-emerald-400 text-lg font-semibold">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                                <span className="inline-flex items-center gap-2 px-4 py-2
                                                    bg-emerald-500/10
                                                    text-emerald-600 dark:text-emerald-400
                                                    rounded-full text-sm font-medium whitespace-nowrap">
                                                    <Calendar className="w-4 h-4" />
                                                    {item.date}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
