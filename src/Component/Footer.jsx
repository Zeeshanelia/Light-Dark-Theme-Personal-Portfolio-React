export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-zinc-700 to-purple-800 text-white pt-12">
      {/* Top Heading */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/10 pb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s <span className="text-green-500">Connect</span> There
          </h2>

          <button className="mt-6 md:mt-0 flex items-center gap-2 rounded-full  px-6 py-3 text-black font-semibold bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-lg hover:shadow-green-100 transition">
            Hire Me Now
            <i className="ri-arrow-right-line text-lg" />
          </button>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-14">
          {/* Profile */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-green-500 text-black font-bold flex items-center justify-center">
                Z
              </span>
              <h3 className="text-xl font-semibold">
                Zeeshan Elia
              </h3>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              I am an experienced web designer with 6+ years in the
              field, collaborating with various companies and startups.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {[
                "ri-facebook-fill",
                "ri-twitter-x-line",
                "ri-instagram-line",
                "ri-github-fill",
                "ri-linkedin-fill",
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-green-500 text-black flex items-center justify-center hover:scale-110 hover:bg-green-400 transition"
                >
                  <i className={`${icon} text-lg`} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-green-500 font-semibold mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                "Home",
                "Services",
                "About Me",
                "Projects",
                "Contact Me",
                "Testimonials",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 hover:text-white cursor-pointer transition"
                >
                  <i className="ri-arrow-right-s-line text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-green-500 font-semibold mb-5">
              Contact
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <i className="ri-phone-fill text-green-500" />
                0123-456-789
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-global-line text-green-500" />
                www.example.com
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-mail-fill text-green-500" />
                example@gmail.com
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-fill text-green-500 mt-1" />
                <span>
                  2464 Royal Ln. Mesa,
                  <br />
                  New Jersey 45663
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-green-500 font-semibold mb-5">
              Get the latest Information
            </h4>

            <div className="flex items-center bg-white/5 border border-white/10 rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Email Here"
                className="bg-transparent px-5 py-3 w-full text-sm outline-none text-white placeholder-gray-500"
              />
              <button className="bg-green-500 px-4 py-3 text-black hover:bg-green-400 transition">
                <i className="ri-send-plane-fill text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-green-500 text-black">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm font-bold">
          <p>© Zeeshan Elia. All Rights Reserved</p>
          <p className="mt-2 md:mt-0">
            User Terms & Condition | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};
