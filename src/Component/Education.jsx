// components/EducationWork.tsx
export const Education = () => {
  return (
    <>
      <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-[#0f0f0f] text-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 md:mb-20 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
              EDUCATION & WORK
            </h1>
            <p className="mt-4 text-2xl md:text-3xl font-medium text-gray-400">
              My Academic & Professional Journey
            </p>
          </div>

          {/* Main content - two cards side by side on lg+ */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Education Card */}
            <div className="flex-1 bg-[#1a1a1a] rounded-2xl border-l-4 border-l-green-500/70 overflow-hidden shadow-xl">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-10 rounded-full bg-green-600/20 flex items-center justify-center text-green-400 text-2xl font-bold">
                    E
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
                </div>

                <div className="space-y-10">
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="text-2xl font-bold text-white">Harmony Institute</h3>
                      <span className="px-5 py-1.5 bg-green-900/40 text-green-300 rounded-full text-sm font-medium whitespace-nowrap">
                        2012 – 2014
                      </span>
                    </div>
                    <p className="mt-1 text-green-400 text-lg font-semibold">
                      Master in Visual Arts
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="text-2xl font-bold text-white">Aurora Academy</h3>
                      <span className="px-5 py-1.5 bg-green-900/40 text-green-300 rounded-full text-sm font-medium whitespace-nowrap">
                        2008 – 2012
                      </span>
                    </div>
                    <p className="mt-1 text-green-400 text-lg font-semibold">
                      Bachelor in Visual Arts
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="text-2xl font-bold text-white">Crystalbrook</h3>
                      <span className="px-5 py-1.5 bg-green-900/40 text-green-300 rounded-full text-sm font-medium whitespace-nowrap">
                        1996 – 2008
                      </span>
                    </div>
                    <p className="mt-1 text-green-400 text-lg font-semibold">
                      High School
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Experience Card – kept mostly as before, just minor consistency tweaks */}
            <div className="flex-1 bg-[#1a1a1a] rounded-2xl border-l-4 border-l-green-500/70 overflow-hidden shadow-xl">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-10 rounded-full bg-green-600/20 flex items-center justify-center text-green-400 text-2xl font-bold">
                    W
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Work Experience</h2>
                </div>

                <div className="space-y-10">
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="text-2xl font-bold text-white">Insightancer</h3>
                      <span className="px-5 py-1.5 bg-green-900/40 text-green-300 rounded-full text-sm font-medium whitespace-nowrap">
                        2018 – 2024
                      </span>
                    </div>
                    <p className="mt-1 text-green-400 text-lg font-semibold">
                      Senior Product Designer
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="text-2xl font-bold text-white">Self-Employed</h3>
                      <span className="px-5 py-1.5 bg-green-900/40 text-green-300 rounded-full text-sm font-medium whitespace-nowrap">
                        2016 – 2018
                      </span>
                    </div>
                    <p className="mt-1 text-green-400 text-lg font-semibold">
                      Visual Artist
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="text-2xl font-bold text-white">KG Graphics Studio</h3>
                      <span className="px-5 py-1.5 bg-green-900/40 text-green-300 rounded-full text-sm font-medium whitespace-nowrap">
                        2014 – 2016
                      </span>
                    </div>
                    <p className="mt-1 text-green-400 text-lg font-semibold">
                      Web Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};