export const Footer = () => {
  return (
    <footer
      className="
        relative
        transition-colors duration-300
        bg-gradient-to-r from-gray-50 to-blue-50
        dark:from-gray-900 dark:to-purple-900
        text-gray-900 dark:text-gray-100
        pt-12 md:pt-16
        overflow-hidden
      "
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_gray_1px,_transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Top Heading */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200/60 dark:border-white/10 pb-8 md:pb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Let's{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                Connect
              </span>{" "}
              There
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm md:text-base">
              Ready to bring your ideas to life?
            </p>
          </div>

          <button
            className="
              group relative
              inline-flex items-center gap-3
              px-6 md:px-8 py-3 md:py-4
              text-white
              font-semibold rounded-full
              bg-gradient-to-r from-emerald-500 to-emerald-600
              dark:from-emerald-600 dark:to-emerald-700
              hover:from-emerald-600 hover:to-emerald-700
              dark:hover:from-emerald-700 dark:hover:to-emerald-800
              transition-all duration-300
              shadow-lg shadow-emerald-500/20
              hover:shadow-xl hover:shadow-emerald-500/30
              hover:-translate-y-1
            "
          >
            Hire Me Now
            <i className="ri-arrow-right-line text-lg group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 py-12 md:py-16">
          {/* Profile */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="
                  relative w-14 h-14 rounded-full
                  bg-gradient-to-br from-emerald-500 to-emerald-600
                  dark:from-emerald-600 dark:to-emerald-700
                  flex items-center justify-center
                  shadow-lg
                "
              >
                <span className="text-xl font-bold text-white">Z</span>
                <div className="absolute inset-0 rounded-full border-2 border-emerald-400/30 dark:border-emerald-500/30 animate-ping" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Zeeshan Elia</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-8">
              Experienced web developer with 2+ years in the field,
              collaborating with various companies and startups to deliver
              exceptional digital solutions.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: "ri-github-fill", color: "hover:bg-gray-800 dark:hover:bg-gray-700" },
                { icon: "ri-linkedin-fill", color: "hover:bg-blue-600 dark:hover:bg-blue-700" },
                { icon: "ri-twitter-x-line", color: "hover:bg-gray-800 dark:hover:bg-gray-700" },
                { icon: "ri-instagram-line", color: "hover:bg-pink-600 dark:hover:bg-pink-700" },
                { icon: "ri-facebook-fill", color: "hover:bg-blue-700 dark:hover:bg-blue-800" },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className={`
                    w-10 h-10 rounded-full
                    bg-white/80 dark:bg-gray-800/80
                    backdrop-blur-sm
                    border border-gray-300 dark:border-gray-600
                    flex items-center justify-center
                    text-gray-700 dark:text-gray-300
                    hover:text-white
                    hover:scale-110
                    transition-all duration-300
                    ${social.color}
                  `}
                >
                  <i className={`${social.icon} text-lg`} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-emerald-600 dark:text-emerald-400 font-semibold text-lg mb-6 flex items-center gap-2">
              <i className="ri-links-line" />
              Navigation
            </h4>
            <ul className="space-y-4">
              {["Home", "Services", "About Me", "Projects", "Contact Me", "Testimonials"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="
                        flex items-center gap-3
                        text-gray-700 dark:text-gray-300
                        hover:text-emerald-600 dark:hover:text-emerald-400
                        transition-colors duration-300
                        group
                      "
                    >
                      <i className="ri-arrow-right-s-line text-emerald-500/50 group-hover:translate-x-1 transition-all" />
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-emerald-600 dark:text-emerald-400 font-semibold text-lg mb-6 flex items-center gap-2">
              <i className="ri-contacts-line" />
              Contact
            </h4>

            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-3">
                <i className="ri-phone-fill text-emerald-500/50" />
                0123-456-789
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-global-line text-emerald-500/50" />
                www.zeeshanelia.com
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-mail-fill text-emerald-500/50" />
                contact@zeeshanelia.com
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-fill text-emerald-500/50 mt-1" />
                2464 Royal Ln. Mesa, New Jersey 45663
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-emerald-600 dark:text-emerald-400 font-semibold text-lg mb-6 flex items-center gap-2">
              <i className="ri-mail-send-line" />
              Newsletter
            </h4>

            <p className="text-gray-700 dark:text-gray-300 text-sm mb-6">
              Get the latest updates, tips, and exclusive content.
            </p>

            <div className="relative group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-600 rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 md:py-4 bg-transparent text-gray-900 dark:text-gray-100 placeholder:text-gray-400 outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all">
                <i className="ri-send-plane-fill text-lg" />
              </button>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-sm font-semibold">
          <p>© {new Date().getFullYear()} Zeeshan Elia. All Rights Reserved</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-white/80 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white/80 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-110 transition-all animate-bounce"
      >
        <i className="ri-arrow-up-line text-xl" />
      </button>
    </footer>
  );
};
