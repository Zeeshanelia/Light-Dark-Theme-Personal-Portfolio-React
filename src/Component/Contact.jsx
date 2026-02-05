export const Contact = () => {
  return (
    <section className="relative  bg-gradient-to-r from-zinc-700 to-purple-800 text-green  py-6 overflow-hidden">
      {/* Decorative glow */}


      <div className="relative max-w-7xl mx-auto px-10">
        {/* Header */}
        <div className="text-center mb-4 relative">
          <span className="absolute inset-0 md:ml-20 flex items-center justify-center text-7xl md:text-9xl font-extrabold text-white/5 pointer-events-none">
            CONTACT
          </span>



         <div className="flex">
            <p className="uppercase tracking-[0.3em] text-gray-500">
            Contact Me
          </p>
             <h1 className="mt-8 text-3xl md:text-6xl font-extrabold leading-tight">
            Let’s Talk For{" "}
            <span className="text-green-500">Your</span>
            <br />
            <span className="text-green-500">Next Project</span>
          </h1>
         </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  ">
          {/* Form */}
          <div className="lg:col-span-2 backdrop-blur-xl bg-white/5 rounded-3xl p-3 border border-white/10 shadow-xl">
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

              {/* Message */}
              <div className="md:col-span-2">
                <label className="text-sm text-gray-400">
                  Your Message*
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="mt-2 w-full rounded-2xl bg-black/40 border border-white/10 px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition resize-none"
                />
              </div>

              {/* Button */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-2xl  px-6 py-4 font-semibold text-black bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-lg hover:shadow-green-100 transition hover:scale-[1.02]"
                >
                  <span className="relative z-10">
                    Send Message
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition" />
                </button>
              </div>
            </form>
          </div>

          {/* Info Card */}
          <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl p-10 border border-white/10 shadow-xl flex flex-col justify-between">
            <div className="space-y-10">
              <InfoBlock
                title="Address"
                text="2464 Royal Ln. Mesa,
New Jersey 45663"
              />

              <InfoBlock
                title="Contact"
                text="Phone: 0123-456-789
Email: example@gmail.com"
              />

              <InfoBlock
                title="Working Hours"
                text="Mon–Fri: 10:00 – 08:00
Sat–Sun: 10:00 – 06:00"
              />
            </div>

            {/* Accent */}
            <div className="mt-12 h-24 rounded-2xl bg-gradient-to-r from-green-500 via-green-400 to-green-600 opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- Reusable Components ---------------- */

const Input = ({ label, placeholder }) => (
  <div>
    <label className="text-sm text-gray-400">
      {label}
    </label>
    <input
      placeholder={placeholder}
      className="mt-2 w-full rounded-2xl bg-black/40 border border-white/10 px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition"
    />
  </div>
);

const Select = ({ label, children }) => (
  <div>
    <label className="text-sm text-gray-400">
      {label}
    </label>
    <select className="mt-2 w-full rounded-2xl bg-black/40 border border-white/10 px-5 py-4 text-white focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition">
      {children}
    </select>
  </div>
);

function InfoBlock({ title, text }) {
  return (
    <div>
      <h3 className="text-green-500 font-semibold text-lg mb-2">
        {title}
      </h3>
      <p className="text-gray-400 whitespace-pre-line leading-relaxed">
        {text}
      </p>
    </div>
  );
}
