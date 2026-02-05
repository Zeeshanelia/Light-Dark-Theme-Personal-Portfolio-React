import { Download, Award, Briefcase, Calendar, Sparkles, CheckCircle, Code, Palette, Zap, Users } from 'lucide-react';

export const AboutMe = () => {

    const downloadCV = () => {
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = '/images/OfferLetter.pdf';  // Path to your PDF in public folder
        link.download = 'Developer.CV.pdf'; // Name for downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <section className="relative bg-gradient-to-r from-zinc-700 to-purple-800  text-white  overflow-hidden">



            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-28 items-center">

                {/* LEFT SIDE – IMAGE COMPOSITION */}
                <div className="relative flex justify-center">

                    {/* GREEN CIRCULAR BACKGROUND */}
                    <div className="absolute w-full h-full rounded-full
            bg-[radial-gradient(circle_at_center,#22c55e,transparent_60%)]" />

                    {/* IMAGE */}
                    <div className="relative md:w-full md:h-full w-[320px] h-[320px] rounded-full overflow-hidden z-10">
                        <img
                            src="images/name55.png"
                            alt="Profile"
                            className="w-full h-full object-cover "
                        />
                    </div>
                </div>



                {/* RIGHT SIDE – TEXT CONTENT */}
                <div className="relative">

                    {/* FADED BACKGROUND TEXT */}
                    <h2 className="absolute -top-6 left-0 md:text-7xl text-5xl font-extrabold
            text-white/5 tracking-wide select-none">
                        ABOUT ME
                    </h2>

                    <p className="uppercase tracking-widest text-lg text-gray-400 mb-3">
                        About Me
                    </p>

                    <h3 className="text-3xl md:text-5xl font-bold mb-6">
                        Who is <span className="text-green-500">Zeeshan Elia ?</span>
                    </h3>

                    <p className="text-gray-400 leading-relaxed max-w-md md:mb-6 mb-4">
                        A web developer passionate about clean code, modern design, user
                        experience, and building responsive, accessible, and
                        high-performing digital products. I am always eager to learn new technologies and improve my skills. I am looking for a challenging position where I can use my skills to create innovative and engaging Web App.
                    </p>



                    {/* STATS */}
                    <div className="flex gap-12 md:mb-10 mb-4">
                        <div>
                            <h4 className="text-green-500 text-2xl font-bold">60+</h4>
                            <p className="text-xs text-gray-400">Projects Completed</p>
                        </div>

                        <div>
                            <h4 className="text-green-500 text-2xl font-bold">05+</h4>
                            <p className="text-xs text-gray-400">Industry Covered</p>
                        </div>

                        <div>
                            <h4 className="text-green-500 text-2xl font-bold">02+</h4>
                            <p className="text-xs text-gray-400">Years Of Experience</p>
                        </div>
                    </div>




                    {/* CTA Section */}

                    <button className=" group relative bg-gradient-to-r from-blue-600 via-cyan-800 to-purple-600 text-white md:font-bold  ml-18 md:px-10 md:py-5 rounded-full overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1">

                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600    opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer" />

                        <span onClick={downloadCV} className="relative flex items-center gap-3">
                            <Download className="ml-4 w-5 h-5" />
                            Download CV
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <i className="ri-file-pdf-line"></i>
                            </span>
                        </span>
                    </button>

                    {/* Available Status */}
                    <div className="mt-6 md:flex md:items-center gap-3 md:block hidden">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
                            <span className="text-sm text-gray-400">Available for new challenges</span>
                        </div>
                        <div className="w-8 h-px bg-gradient-to-r from-red-500 to-transparent" />
                        <span className="text-sm text-cyan-400">Open to Opportunities</span>
                    </div>






                </div>
            </div>
        </section>
    );
};
