export const Projects = () => {

  const projects = [
    {
      title: "Smart Financial Dashboard for Digital Management",
      desc: "A modern, user-friendly dashboard for tracking income, expenses, analytics, and card details with quick transfer and activity summaries.",
      image: "/dashboard-preview.png",
      tech: ["React JS", "Tailwind CSS", "Chart.js"],
    },
    {
      title: "E-Commerce Admin Analytics Panel",
      desc: "Advanced admin dashboard with sales, orders, and customer insights using real-time analytics.",
      image: "/dashboard-preview.png",
      tech: ["React JS", "Tailwind CSS", "Recharts"],
    },
    {
      title: "SaaS Project Management Platform",
      desc: "Task and team management platform with clean UX, role-based access, and performance focus.",
      image: "/dashboard-preview.png",
      tech: ["React JS", "Tailwind CSS", "Framer Motion"],
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-r from-zinc-700 to-purple-800 py-24 px-20 overflow-hidden">

      {/* Background Text */}
      <h1 className="absolute top-20 left-1/2 -translate-x-1/2 text-[80px] md:text-[115px] font-extrabold tracking-wider text-white/5 select-none pointer-events-none z-0">
        PORTFOLIO
      </h1>

      <div className="relative max-w-7xl mx-auto z-10">

        {/* Header */}
        <div className="flex items-start justify-between mb-20">
          <div>
            <p className="text-sm text-zinc-400 mb-2">My Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Let’s Have A Look <br />
              <span className="text-green-400">At My Portfolio</span>
            </h2>
          </div>

          <button className="hidden md:block px-6 py-2 rounded-full bg-green-500 text-black font-semibold hover:bg-green-400 transition">
            View All Projects
          </button>
        </div>

        {/* Project Cards */}
        <div className="space-y-24">
          {projects.map((project, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`relative bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 grid md:grid-cols-2 gap-10 ${
                  isReverse ? "md:grid-flow-col-dense" : ""
                }`}
              >

                {/* Image */}
                <div
                  className={`rounded-xl overflow-hidden bg-zinc-800 ${
                    isReverse ? "md:col-start-2" : ""
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">

                  {/* Tech Pills */}
                  <div className="flex gap-3 mb-6 flex-wrap">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1 text-sm rounded-full bg-green-500/15 text-green-400 border border-green-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-5 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed mb-8 max-w-xl">
                    {project.desc}
                  </p>

                  {/* CTA */}
                  <button className="group flex items-center gap-3 text-green-400 font-semibold w-fit">
                    View Project
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500/10 border border-green-500/30 group-hover:bg-green-500/20 transition">
                      →
                    </span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
