import React, { useState } from "react";
import {
  FaCheck,
  FaClock,
  FaCalendarAlt,
  FaCalendarDay,
  FaCalendarWeek,
  FaCalendar,
  FaCode,
  FaDesktop,
  FaPalette,
  FaSyncAlt,
  FaChartLine,
  FaShieldAlt,
  FaQuestionCircle,
  FaHandshake
} from "react-icons/fa";

/* =======================
   DATA
======================= */

// Engagement Plans
const engagementPlans = [
  {
    id: "hourly",
    name: "Hourly",
    price: "$50",
    period: "/Hour",
    tagline: "Perfect for quick fixes & prototypes",
    description:
      "Convert a single design (Figma, XD, PSD) into a responsive React page with Tailwind CSS.",
    bestFor: "Small tasks",
    features: [
      "1 page conversion",
      "Responsive on all devices",
      "Clean React + Tailwind code",
      "Source code ownership",
      "1 revision",
      "Delivery in 3 days",
    ],
    ctaText: "Start Project",
  },
  {
    id: "monthly",
    name: "Monthly",
    price: "$8,000",
    period: "/Month",
    isPopular: true,
    tagline: "Dedicated React developer",
    description:
      "Ongoing frontend development for startups and growing teams.",
    valueNote: "≈ 160 hrs at $50/hr",
    bestFor: "Ongoing work",
    features: [
      "Up to 3 pages",
      "Fully responsive",
      "Priority communication",
      "Content upload",
      "Clean architecture",
      "Source code ownership",
      "1 revision",
    ],
    ctaText: "Choose Monthly",
  },
  {
    id: "quarterly",
    name: "Quarterly",
    price: "$25,000",
    period: "/Quarter",
    tagline: "Enterprise-grade solution",
    description:
      "Full application development with admin panel & API integration.",
    bestFor: "Full products",
    features: [
      "6+ pages",
      "Admin panel",
      "API integration",
      "Performance optimization",
      "3 revisions",
      "Ongoing support",
      "Source code ownership",
    ],
    ctaText: "Go Premium",
  },
];

// Fixed Packages
const fixedPackages = [
  {
    id: "express",
    name: "Express",
    price: "$84",
    duration: "2 Days",
    bestFor: "Urgent fixes",
    features: [
      "1 responsive page",
      "Delivery in 48 hours",
      "Tailwind styling",
      "Source code included",
      "1 revision",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: "$225",
    duration: "7 Days",
    isPopular: true,
    bestFor: "Quality single page",
    features: [
      "1 premium page",
      "Advanced Tailwind UI",
      "Performance optimized",
      "2 revisions",
      "SEO-ready structure",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$1,100",
    duration: "10 Days",
    bestFor: "Small websites",
    features: [
      "2–3 pages",
      "Custom Tailwind system",
      "Cross-browser support",
      "3 revisions",
      "Documentation included",
    ],
  },
];

// FAQs
const faqs = [
  {
    q: "Do I own the source code?",
    a: "Yes. You get 100% ownership of the source code for all plans.",
  },
  {
    q: "What counts as a revision?",
    a: "UI tweaks, spacing, colors, or minor functional changes.",
  },
  {
    q: "Do you provide design?",
    a: "I convert your designs into code. UI/UX design can be added separately.",
  },
  {
    q: "Can I upgrade later?",
    a: "Yes, you can upgrade from fixed packages to engagement plans anytime.",
  },
  {
    q: "What about post-delivery support?",
    a: "Monthly & Quarterly plans include ongoing support.",
  },
];

/* =======================
   COMPONENT
======================= */

export const PricesPlan = () => {
  const [view, setView] = useState("engagement");
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  return (
    <section
      id="pricing"
      className="
        bg-white dark:bg-gray-900
        text-yellow-900 dark:text-red-100
        transition-colors duration-300
        py-16 md:py-24
        overflow-hidden
        px-4 sm:px-6 lg:px-8
      "
    >
      {/* Background Watermark */}
      <h1
        className="absolute top-20 left-1/2 -translate-x-1/2 text-[60px] md:text-[120px]
                 font-extrabold tracking-wider text-yellow-100/20 dark:text-red-100/10
                 select-none pointer-events-none z-0"
      >
        Pricing
      </h1>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 md:mb-20 gap-6">
          <div className="flex-1">
            <p className="text-sm text-yellow-700/70 dark:text-red-300/70 uppercase tracking-[0.2em] mb-3">
              See Which Plan Fits Your Needs
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Let's Have A Look At
              <span className="block text-yellow-600 dark:text-red-400 mt-2">
                Flexible Development Plans
              </span>
            </h2>
          </div>
        </div>

        {/* View Toggle */}
        <div className="text-center mb-12">
          <div className="relative inline-flex bg-yellow-50/50 dark:bg-red-950/20
                        rounded-2xl p-2 border border-yellow-200/50 dark:border-red-900/30
                        shadow-lg backdrop-blur-sm">
            {/* Animated background slide */}
            <div
              className={`absolute top-2 bottom-2 w-1/2
                        bg-gradient-to-r from-yellow-500 to-yellow-600 dark:from-red-500 dark:to-red-600
                        rounded-xl transition-all duration-500 ease-out shadow-lg
                        shadow-yellow-500/20 dark:shadow-red-500/20
                        ${view === "packages" ? "translate-x-full" : ""}`}
            />

            {/* Engagement Plans Button */}
            <button
              onClick={() => setView("engagement")}
              className={`relative z-10 px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300
                      ${view === "engagement"
                  ? "text-white"
                  : "text-yellow-800/70 dark:text-red-200/70 hover:text-yellow-900 dark:hover:text-red-100"
                }`}
            >
              <span className="flex items-center justify-center gap-2">
                <FaCalendarAlt />
                Engagement Plans
                {view === "engagement" && (
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                )}
              </span>
            </button>

            {/* Fixed Packages Button */}
            <button
              onClick={() => setView("packages")}
              className={`relative z-10 px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300
                      ${view === "packages"
                  ? "text-white"
                  : "text-yellow-800/70 dark:text-red-200/70 hover:text-yellow-900 dark:hover:text-red-100"
                }`}
            >
              <span className="flex items-center justify-center gap-2">
                <FaCalendarDay />
                Fixed Packages
                {view === "packages" && (
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                )}
              </span>
            </button>
          </div>

          {/* View Description */}
          <p className="mt-6 text-yellow-800/70 dark:text-red-200/70 max-w-md mx-auto">
            {view === "engagement"
              ? "Flexible, ongoing development with dedicated developer time"
              : "Fixed scope, fixed price, guaranteed delivery timeline"}
          </p>
        </div>

        {/* Engagement Plans */}
        {view === "engagement" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {engagementPlans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`
                  group relative rounded-2xl p-6 md:p-8 cursor-pointer
                  transition-all duration-300 border
                  ${selectedPlan === plan.id
                    ? "border-yellow-500 dark:border-red-400 shadow-xl shadow-yellow-500/10 dark:shadow-red-500/10"
                    : "border-yellow-200/50 dark:border-red-900/30 hover:border-yellow-400 dark:hover:border-red-500"
                  }
                  bg-yellow-50/30 dark:bg-red-950/10
                  hover:-translate-y-2
                `}
              >
                {/* Glow effect on selected */}
                {selectedPlan === plan.id && (
                  <div className="absolute inset-0 rounded-2xl
                                bg-gradient-to-br from-yellow-500/5 to-transparent
                                dark:from-red-500/5" />
                )}

                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    {plan.id === "hourly" && <FaClock className="text-yellow-600 dark:text-red-400" />}
                    {plan.id === "monthly" && <FaCalendarWeek className="text-yellow-600 dark:text-red-400" />}
                    {plan.id === "quarterly" && <FaCalendar className="text-yellow-600 dark:text-red-400" />}
                  </div>

                  <p className="text-yellow-600 dark:text-red-400 mb-4 font-medium">
                    {plan.tagline}
                  </p>

                  <p className="text-yellow-800/70 dark:text-red-200/70 text-sm mb-6">
                    {plan.description}
                  </p>

                  <div className="text-4xl md:text-5xl font-black mb-6">
                    {plan.price}
                    <span className="text-lg text-yellow-800/70 dark:text-red-200/70 ml-2">
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <FaCheck className="text-yellow-600 dark:text-red-400 mt-1 flex-shrink-0" />
                        <span className="text-yellow-900/90 dark:text-red-100/90">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button className="
                    w-full py-3 rounded-xl font-bold
                    bg-gradient-to-r from-yellow-500 to-yellow-600
                    dark:from-red-500 dark:to-red-600
                    text-white
                    hover:from-yellow-600 hover:to-yellow-700
                    dark:hover:from-red-600 dark:hover:to-red-700
                    transition-all duration-300
                    shadow-lg shadow-yellow-500/20 dark:shadow-red-500/20
                    hover:shadow-xl hover:shadow-yellow-500/30 dark:hover:shadow-red-500/30
                    flex items-center justify-center gap-2
                  ">
                    <FaHandshake />
                    {plan.ctaText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Fixed Packages */}
        {view === "packages" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {fixedPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="
                  group relative rounded-2xl p-6 md:p-8
                  border border-yellow-200/50 dark:border-red-900/30
                  bg-yellow-50/30 dark:bg-red-950/10
                  hover:-translate-y-2 transition-all duration-300
                  hover:border-yellow-400 dark:hover:border-red-500
                "
              >
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold">{pkg.name}</h3>
                    {pkg.id === "express" && <FaClock className="text-yellow-600 dark:text-red-400" />}
                    {pkg.id === "standard" && <FaDesktop className="text-yellow-600 dark:text-red-400" />}
                    {pkg.id === "pro" && <FaChartLine className="text-yellow-600 dark:text-red-400" />}
                  </div>

                  <p className="text-yellow-600 dark:text-red-400 mb-4 flex items-center gap-2">
                    <FaCalendarDay />
                    {pkg.duration}
                  </p>

                  <div className="text-4xl font-black mb-6 text-yellow-900 dark:text-red-100">
                    {pkg.price}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <FaCheck className="text-yellow-600 dark:text-red-400 mt-1 flex-shrink-0" />
                        <span className="text-yellow-900/90 dark:text-red-100/90">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button className="
                    w-full py-3 rounded-xl font-bold
                    bg-yellow-100/50 dark:bg-red-900/30
                    text-yellow-900 dark:text-red-100
                    border border-yellow-300/50 dark:border-red-800/40
                    hover:bg-yellow-200/50 dark:hover:bg-red-800/40
                    transition-all duration-300
                    flex items-center justify-center gap-2
                  ">
                    <FaHandshake />
                    Select Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Comparison Table */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <FaSyncAlt className="text-yellow-600 dark:text-red-400" />
            Plan Comparison
          </h3>

          <div className="overflow-x-auto rounded-xl border border-yellow-200/50 dark:border-red-900/30">
            <table className="w-full">
              <thead className="bg-yellow-50/30 dark:bg-red-950/10">
                <tr>
                  <th className="p-4 text-left font-semibold">Feature</th>
                  <th className="p-4">
                    <FaClock className="inline mr-2" />
                    Hourly
                  </th>
                  <th className="p-4 text-yellow-600 dark:text-red-400">
                    <FaCalendarWeek className="inline mr-2" />
                    Monthly
                  </th>
                  <th className="p-4">
                    <FaCalendar className="inline mr-2" />
                    Quarterly
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Pages", "1", "3", "6+"],
                  ["Responsive", <FaCheck className="inline text-yellow-600 dark:text-red-400" />, <FaCheck className="inline text-yellow-600 dark:text-red-400" />, <FaCheck className="inline text-yellow-600 dark:text-red-400" />],
                  ["Admin Panel", "—", "—", <FaDesktop className="inline text-yellow-600 dark:text-red-400" />],
                  ["API Integration", "—", "—", <FaCode className="inline text-yellow-600 dark:text-red-400" />],
                  ["Revisions", "1", "1", "3"],
                  ["Support", "—", <FaShieldAlt className="inline text-yellow-600 dark:text-red-400" />, <FaShieldAlt className="inline text-yellow-600 dark:text-red-400" />],
                ].map(([f, h, m, q], i) => (
                  <tr
                    key={i}
                    className="border-t border-yellow-200/30 dark:border-red-900/20 text-center even:bg-yellow-50/10 dark:even:bg-red-950/5"
                  >
                    <td className="p-4 text-left font-medium">{f}</td>
                    <td className="p-4">{h}</td>
                    <td className="p-4 text-yellow-600 dark:text-red-400 font-medium">{m}</td>
                    <td className="p-4">{q}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-10 text-center flex items-center justify-center gap-2">
            <FaQuestionCircle className="text-yellow-600 dark:text-red-400" />
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="
                  bg-yellow-50/30 dark:bg-red-950/10
                  border border-yellow-200/50 dark:border-red-900/30
                  rounded-xl p-6 hover:border-yellow-400/50 dark:hover:border-red-500/30
                  transition-all duration-300
                "
              >
                <div className="font-semibold mb-2 flex items-center gap-2 text-yellow-800 dark:text-red-100">
                  <FaQuestionCircle className="text-yellow-600 dark:text-red-400" />
                  {item.q}
                </div>
                <p className="text-yellow-800/70 dark:text-red-200/70 ml-6">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-yellow-800/70 dark:text-red-200/70 mb-6">
            Still unsure which plan fits your project?
          </p>
          <button className="
            px-8 py-3 rounded-xl font-bold
            bg-gradient-to-r from-yellow-500 to-yellow-600
            dark:from-red-500 dark:to-red-600
            text-white
            hover:from-yellow-600 hover:to-yellow-700
            dark:hover:from-red-600 dark:hover:to-red-700
            transition-all duration-300
            shadow-lg shadow-yellow-500/20 dark:shadow-red-500/20
            hover:shadow-xl hover:shadow-yellow-500/30 dark:hover:shadow-red-500/30
            flex items-center gap-2 mx-auto
          ">
            <FaHandshake />
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};