export const Projects = () => {
  const projects = [
    {
      title: "Smart Financial Dashboard for Digital Management",
      desc: "A dynamic and interactive user interface for entering invoice details. Features include client and company details management, invoice tracking, and integration with backend systems like Firebase and Supabase for data persistence.",
      image: "images/proj1.jpg",
      sourceCode: "https://invoice-generator-react-app-with-ta.vercel.app/signup",
      tech: ["React JS", "Chart.js", "Supabase", "Tailwind CSS"],
    },
    {
      title: "E-Commerce App With Admin Analytics Panel",
      desc: "Modern and responsive e-commerce web application built with React and Vite. Includes product browsing, shopping cart, checkout process, and an advanced admin dashboard with real-time analytics for sales and customer insights.",
      image: "images/proj2.png",
      sourceCode: "https://ecommerce-store-react-vite.vercel.app/",
      tech: ["React JS", "Firebase", "Tailwind CSS", "Chart.js"],
    },
  ];

  return (
    <section className="relative w-full
      bg-gradient-to-br from-gray-50 via-white to-gray-100
      dark:from-gray-900 dark:via-gray-800 dark:to-purple-900
      text-gray-900 dark:text-white
      py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden
      transition-all duration-300">

      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-gray-100 dark:bg-grid-gray-900 opacity-30"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-green-400/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl"></div>

      {/* Background Watermark Text */}
      <h1 className="absolute top-16 md:top-20 left-1/2 -translate-x-1/2
        text-6xl md:text-8xl lg:text-[115px] font-black tracking-wider
        text-gray-200/30 dark:text-gray-800/20 select-none pointer-events-none z-0">
        PORTFOLIO
      </h1>

      <div className="relative max-w-7xl mx-auto z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 md:mb-20">
          <div className="mb-8 md:mb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
              bg-green-500/10 dark:bg-green-500/5 border border-green-500/20 dark:border-green-500/10 mb-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <p className="text-xs md:text-sm text-green-600 dark:text-green-400 font-medium uppercase tracking-wider">
                My Portfolio
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Let's Have A Look <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r
                from-green-500 to-emerald-600 dark:from-green-400 dark:to-emerald-500">
                At My Portfolio
              </span>
            </h2>
          </div>

          <button className="group relative inline-flex items-center gap-2
            bg-gradient-to-r from-green-500 to-emerald-600
            hover:from-green-600 hover:to-emerald-700
            text-white font-semibold px-6 py-3 rounded-full
            overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30">
            View All Projects
            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
          </button>
        </div>

        {/* Project Cards */}
        <div className="space-y-16 md:space-y-20">
          {projects.map((project, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div key={index} className={`relative group
                bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm
                border border-gray-200/50 dark:border-gray-700/50
                rounded-3xl p-6 md:p-8
                grid md:grid-cols-2 gap-8 md:gap-12
                hover:border-green-500/30 dark:hover:border-green-500/30
                transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 dark:hover:shadow-green-500/5
                ${isReverse ? "md:grid-flow-col-dense" : ""}`}>

                {/* Decorative corners */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-green-500/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-green-500/30 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Image */}
                <div className={`rounded-2xl overflow-hidden border border-gray-300/50 dark:border-gray-600/50 shadow-lg ${isReverse ? "md:col-start-2" : ""}`}>
                  <div className="relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-center ${isReverse ? "md:col-start-1 md:row-start-1" : ""}`}>
                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech}
                        className="px-3 py-1.5 text-xs md:text-sm rounded-full
                          bg-green-500/10 dark:bg-green-500/5
                          text-green-600 dark:text-green-400
                          border border-green-500/20 dark:border-green-500/10
                          font-medium hover:bg-green-500/20 dark:hover:bg-green-500/10
                          transition-colors duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 md:mb-8 max-w-lg">
                    {project.desc}
                  </p>

                  {/* View Project Link */}
                  <a href={project.sourceCode} target="_blank" rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-3
                      text-green-600 dark:text-green-400 font-semibold
                      hover:text-green-700 dark:hover:text-green-300
                      transition-colors duration-300 w-fit">
                    View Project
                    <span className="w-9 h-9 flex items-center justify-center
                      rounded-full bg-green-500/10 dark:bg-green-500/5
                      border border-green-500/20 dark:border-green-500/10
                      group-hover/link:bg-green-500/20 dark:group-hover/link:bg-green-500/10
                      group-hover/link:scale-110 transition-all duration-300">
                      <i className="ri-arrow-right-up-line text-lg group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300"></i>
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More Projects CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3
            bg-gray-100 dark:bg-gray-800/50
            rounded-full border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse delay-75"></div>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse delay-150"></div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              More projects coming soon...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
