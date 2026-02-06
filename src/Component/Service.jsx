import { ArrowRight, Eye, Palette, PenTool, Globe, Sparkles, CheckCircle } from 'lucide-react';

export const Service = () => {
  const services = [
    { title: "UI/UX Design", desc: "Designing intuitive, visually engaging user interfaces that enhance usability and deliver delightful digital experiences.", icon: <Palette className="w-6 h-6" />, features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"] },
    { title: "Application Design", desc: "Creating modern, scalable app designs with a seamless user journey tailored to your product and brand goals.", icon: <PenTool className="w-6 h-6" />, features: ["Chart Flow", "Admin Dashboard", "Interactive Prototypes"] },
    { title: "Website Design", desc: "Building responsive, high-performance websites that strengthen brand identity and drive user engagement.", icon: <Globe className="w-6 h-6" />, features: ["Mobile Responsive Design", "SEO Optimized", "Fast Loading", "Cross-Browser"] },
  ];

  return (
    <section id="services" className="relative py-16 md:py-24 overflow-hidden
        bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">

      <h1 className="absolute md:top-20 left-1/2 -translate-x-1/2 text-[60px] md:text-[160px]
                     font-extrabold text-gray-200 dark:text-white/10 tracking-widest select-none pointer-events-none">
        SERVICES
      </h1>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 md:mb-20 gap-6">
          <div className="flex-1">
            <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-green-500 dark:text-green-400" />
              My Specialization
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="text-green-600 dark:text-green-400">Services</span>{" "}
              <span className="text-gray-800 dark:text-gray-100">I Provide</span>
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600
                             text-white font-bold px-8 py-3 rounded-full hover:from-green-600 hover:to-emerald-700
                             transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 hover:gap-3 group">
            View All Services
            <Eye className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div key={index} className="group relative p-6 rounded-3xl
              bg-white dark:bg-zinc-800 border border-gray-200 dark:border-gray-700
              shadow-lg dark:shadow-black/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/5 to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-zinc-700
                              border border-green-200 dark:border-gray-600 flex items-center justify-center mb-4
                              group-hover:scale-110 transition-transform duration-300">
                <div className="text-green-600 dark:text-green-400">{item.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800 dark:text-white">{item.title}</h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{item.desc}</p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {item.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{f}</span>
                  </div>
                ))}
              </div>

              {/* Learn More */}
              <a href="#"
                 className="inline-flex items-center gap-2 font-medium text-green-600 dark:text-green-400
                            hover:text-green-700 dark:hover:text-green-300
                            group-hover:gap-3 transition-all duration-300">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
