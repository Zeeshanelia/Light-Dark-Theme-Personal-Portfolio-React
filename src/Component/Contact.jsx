import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export const Contact = () => {
  return (
    <section
      className="
        relative py-16 md:py-24 lg:py-32 overflow-hidden
        bg-gradient-to-r from-gray-50 to-blue-50
        dark:from-gray-900 dark:to-purple-900
        text-gray-900 dark:text-gray-100
        transition-colors duration-300
        px-4 sm:px-6 lg:px-8
      "
    >
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Watermark */}
        <h1
          className="
            absolute top-12 md:top-20 left-1/2 -translate-x-1/2
            text-[60px] md:text-[120px] lg:text-[140px]
            font-extrabold tracking-wider
            text-emerald-600/5 dark:text-emerald-400/5
            select-none pointer-events-none z-0
          "
        >
          CONTACT
        </h1>

        {/* Header */}
        <div className="text-center mb-12 md:mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-500/8 border border-emerald-500/20 dark:border-emerald-500/15 mb-6 backdrop-blur-sm">
            <p className="text-sm font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Contact Me
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Let’s Talk For Your
            <span className="block text-emerald-600 dark:text-emerald-400 mt-2">
              Next Project
            </span>
          </h2>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Form */}
          <div className="lg:col-span-2 bg-white/70 dark:bg-gray-900/40 backdrop-blur-md rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-200/60 dark:border-gray-700/40 shadow-lg hover:shadow-xl hover:shadow-emerald-500/15 transition-all duration-300">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400 block mb-2">Your Name*</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="
                    w-full rounded-xl bg-white dark:bg-gray-800/60
                    border border-gray-300/60 dark:border-gray-600/50
                    px-5 py-4 text-gray-900 dark:text-gray-100
                    placeholder-gray-500 dark:placeholder-gray-400
                    focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20
                    transition-all duration-300
                  "
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400 block mb-2">Email*</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="
                    w-full rounded-xl bg-white dark:bg-gray-800/60
                    border border-gray-300/60 dark:border-gray-600/50
                    px-5 py-4 text-gray-900 dark:text-gray-100
                    placeholder-gray-500 dark:placeholder-gray-400
                    focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20
                    transition-all duration-300
                  "
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400 block mb-2">Phone*</label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="
                    w-full rounded-xl bg-white dark:bg-gray-800/60
                    border border-gray-300/60 dark:border-gray-600/50
                    px-5 py-4 text-gray-900 dark:text-gray-100
                    placeholder-gray-500 dark:placeholder-gray-400
                    focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20
                    transition-all duration-300
                  "
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400 block mb-2">I'm interested in*</label>
                <select
                  className="
                    w-full rounded-xl bg-white dark:bg-gray-800/60
                    border border-gray-300/60 dark:border-gray-600/50
                    px-5 py-4 text-gray-900 dark:text-gray-100
                    focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20
                    transition-all duration-300 appearance-none
                  "
                >
                  <option>Select</option>
                  <option>Web Development</option>
                  <option>UI / UX Design</option>
                  <option>Frontend Development</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400 block mb-2">Budget Range (USD)*</label>
                <select
                  className="
                    w-full rounded-xl bg-white dark:bg-gray-800/60
                    border border-gray-300/60 dark:border-gray-600/50
                    px-5 py-4 text-gray-900 dark:text-gray-100
                    focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20
                    transition-all duration-300 appearance-none
                  "
                >
                  <option>Select</option>
                  <option>$500 – $1000</option>
                  <option>$1000 – $5000</option>
                  <option>$5000+</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400 block mb-2">Country*</label>
                <select
                  className="
                    w-full rounded-xl bg-white dark:bg-gray-800/60
                    border border-gray-300/60 dark:border-gray-600/50
                    px-5 py-4 text-gray-900 dark:text-gray-100
                    focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20
                    transition-all duration-300 appearance-none
                  "
                >
                  <option>Select</option>
                  <option>Pakistan</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="text-sm text-gray-600 dark:text-gray-400 block mb-2">Your Message*</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="
                    w-full rounded-xl bg-white dark:bg-gray-800/60
                    border border-gray-300/60 dark:border-gray-600/50
                    px-5 py-4 text-gray-900 dark:text-gray-100
                    placeholder-gray-500 dark:placeholder-gray-400
                    focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20
                    transition-all duration-300 resize-none
                  "
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="
                    group relative w-full overflow-hidden
                    px-8 py-4 md:py-5 rounded-xl font-bold text-lg
                    bg-gradient-to-r from-emerald-500 to-emerald-600
                    dark:from-emerald-600 dark:to-emerald-700
                    text-white
                    hover:from-emerald-600 hover:to-emerald-700
                    dark:hover:from-emerald-700 dark:hover:to-emerald-800
                    transition-all duration-300
                    shadow-lg shadow-emerald-500/20 dark:shadow-emerald-500/30
                    hover:shadow-xl hover:shadow-emerald-500/30 dark:hover:shadow-emerald-500/40
                    hover:-translate-y-1
                  "
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* Info Card */}
          <div className="bg-white/70 dark:bg-gray-900/40 backdrop-blur-md rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-200/60 dark:border-gray-700/40 shadow-lg hover:shadow-xl hover:shadow-emerald-500/15 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-2">Address</h3>
                <p className="text-gray-700 dark:text-gray-300">Model Town - Block N, Lahore</p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-2">Contact</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Phone: 0123-456-789<br />
                  Email: example@gmail.com
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-2">Working Hours</h3>
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                  Mon to Fri: 10:00 to 08:00<br />
                  Sat to Sun: 10:00 to 06:00
                </p>
              </div>
            </div>

            {/* Social Block */}
            <div className="mt-8 md:mt-10">
              <h3 className="text-lg md:text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-4">Stay Connected</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-4">
                Follow for updates and inspiration
              </p>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="
                    p-3 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15
                    hover:bg-emerald-500/20 dark:hover:bg-emerald-500/25
                    text-emerald-600 dark:text-emerald-400
                    transition-all duration-300 hover:scale-110
                  "
                >
                  <FaFacebook size={22} />
                </a>
                <a
                  href="#"
                  className="
                    p-3 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15
                    hover:bg-emerald-500/20 dark:hover:bg-emerald-500/25
                    text-emerald-600 dark:text-emerald-400
                    transition-all duration-300 hover:scale-110
                  "
                >
                  <FaTwitter size={22} />
                </a>
                <a
                  href="#"
                  className="
                    p-3 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15
                    hover:bg-emerald-500/20 dark:hover:bg-emerald-500/25
                    text-emerald-600 dark:text-emerald-400
                    transition-all duration-300 hover:scale-110
                  "
                >
                  <FaInstagram size={22} />
                </a>
                <a
                  href="#"
                  className="
                    p-3 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15
                    hover:bg-emerald-500/20 dark:hover:bg-emerald-500/25
                    text-emerald-600 dark:text-emerald-400
                    transition-all duration-300 hover:scale-110
                  "
                >
                  <FaLinkedinIn size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};