import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export const Contact = () => {
  return (
    <section className="relative bg-gradient-to-r
      from-zinc-200 to-purple-200
      dark:from-zinc-700 dark:to-purple-800
      text-zinc-900 dark:text-white py-6 overflow-hidden transition-colors duration-300">

      <div className="relative max-w-7xl mx-auto px-10">

        {/* Header */}
        <div className="text-center mb-4 relative">
          <span className="absolute inset-0 md:ml-20 flex items-center justify-center
            text-7xl md:text-9xl font-extrabold
            text-zinc-900/5 dark:text-white/5 pointer-events-none">
            CONTACT
          </span>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <p className="uppercase tracking-[0.3em] text-zinc-600 dark:text-gray-400">
              Contact Me
            </p>

            <h1 className="mt-8 text-3xl md:text-6xl font-extrabold leading-tight text-center md:text-left">
              Let’s Talk For{" "}
              <span className="text-green-600 dark:text-green-400">Your</span>
              <br />
              <span className="text-green-600 dark:text-green-400">
                Next Project
              </span>
            </h1>
          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Form */}
          <div className="lg:col-span-2 backdrop-blur-xl
            bg-white/60 dark:bg-zinc-800/40
            rounded-3xl p-3
            border border-black/10 dark:border-white/10
            shadow-xl transition-colors duration-300">

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Your Name*" placeholder="John Doe" />
              <Input label="Email*" placeholder="example@gmail.com" />
              <Input label="Phone*" placeholder="Enter phone number" />

              <Select label="I'm interested in*">
                <option>Select</option>
                <option>Web Development</option>
                <option>UI / UX Design</option>
                <option>Frontend Development</option>
              </Select>

              <Select label="Budget Range (USD)*">
                <option>Select</option>
                <option>$500 – $1000</option>
                <option>$1000 – $5000</option>
                <option>$5000+</option>
              </Select>

              <Select label="Country*">
                <option>Select</option>
                <option>Pakistan</option>
                <option>USA</option>
                <option>UK</option>
              </Select>

              <div className="md:col-span-2">
                <label className="text-sm text-zinc-600 dark:text-gray-400">
                  Your Message*
                </label>
                <textarea
                  rows="3"
                  placeholder="Tell me about your project..."
                  className="mt-2 w-full rounded-2xl
                    bg-white dark:bg-zinc-900/50
                    border border-black/10 dark:border-white/10
                    px-5 py-4
                    text-zinc-900 dark:text-white
                    placeholder-zinc-500 dark:placeholder-gray-400
                    focus:outline-none focus:border-green-500
                    focus:ring-2 focus:ring-green-500/20
                    transition resize-none"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-2xl
                    px-6 py-4 font-semibold
                    text-black dark:text-white
                    bg-gradient-to-r from-green-500 to-emerald-600
                    hover:shadow-lg hover:shadow-green-200 dark:hover:shadow-green-500/30
                    transition hover:scale-[1.02]">

                  <span className="relative z-10">
                    Send Message
                  </span>

                  <span className="absolute inset-0
                    bg-gradient-to-r from-green-400 to-green-600
                    opacity-0 group-hover:opacity-100 transition" />
                </button>
              </div>
            </form>
          </div>

          {/* Info Card */}
          <div className="relative backdrop-blur-xl
            bg-white/60 dark:bg-zinc-800/40
            rounded-3xl p-4
            border border-black/10 dark:border-white/10
            shadow-xl flex flex-col justify-between transition-colors duration-300">

            <div className="space-y-2">
              <InfoBlock title="Address" text="Model Town - Block N, Lhr" />
              <InfoBlock title="Contact" text="Phone: 0123-456-789 Email: example@gmail.com" />
              <InfoBlock title="Working Hours" text="Mon to Fri: 10:00 to 08:00 --- Sat to Sun : 10:00 to 06:00" />
            </div>

            {/* Accent */}
            <div className="group mt-3 md:mt-0 relative p-2 md:p-12 rounded-2xl
              bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500
              shadow-lg shadow-green-900/30 overflow-hidden">

              <div className="absolute inset-0
                bg-gradient-to-r from-green-600/20 to-teal-600/20
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <h3 className="text-lg md:text-2xl font-bold text-white mb-1">
                  Stay Connected
                </h3>
                <p className="text-green-100/90 text-sm md:text-base font-medium">
                  Follow us for updates and inspiration
                </p>

                <div className="flex items-center justify-center md:justify-end gap-4 md:gap-6 mt-2">
                  <Social icon={<FaFacebook size={22} />} />
                  <Social icon={<FaTwitter size={22} />} />
                  <Social icon={<FaInstagram size={22} />} />
                  <Social icon={<FaLinkedinIn size={22} />} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

/* Reusable Components */
const Input = ({ label, placeholder }) => (
  <div>
    <label className="text-sm text-zinc-600 dark:text-gray-400">{label}</label>
    <input
      placeholder={placeholder}
      className="mt-2 w-full rounded-2xl
        bg-white dark:bg-zinc-900/50
        border border-black/10 dark:border-white/10
        px-5 py-4
        text-zinc-900 dark:text-white
        placeholder-zinc-500 dark:placeholder-gray-400
        focus:outline-none focus:border-green-500
        focus:ring-2 focus:ring-green-500/20 transition"
    />
  </div>
);

const Select = ({ label, children }) => (
  <div>
    <label className="text-sm text-zinc-600 dark:text-gray-400">{label}</label>
    <select className="mt-2 w-full rounded-2xl
      bg-white dark:bg-zinc-900/50
      border border-black/10 dark:border-white/10
      px-5 py-4
      text-zinc-900 dark:text-white
      focus:outline-none focus:border-green-500
      focus:ring-2 focus:ring-green-500/20 transition">
      {children}
    </select>
  </div>
);

function InfoBlock({ title, text }) {
  return (
    <div>
      <h3 className="text-green-600 dark:text-green-400 font-semibold text-lg mb-2">{title}</h3>
      <p className="text-zinc-600 dark:text-gray-400 whitespace-pre-line leading-relaxed">{text}</p>
    </div>
  );
}

const Social = ({ icon }) => (
  <a className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110">
    <span className="text-white">{icon}</span>
  </a>
);
