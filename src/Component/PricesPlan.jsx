import React, { useState } from 'react';

const plans = [
  {
    id: "hourly",
    name: "Hourly",
    price: "$50",
    period: "/Hour",
    features: [
      "Lorem ipsum dolor sit amet",
      "Sed ut perspiciatis",
      "At vero eos et accusamus",
      "Vitae dicta sunt explicabo",
      "Veritatis et quasi architecto",
      "Beatae vitae dicta sunt",
      "Explicabo. Nemo enim",
      "Nemo enim ipsam voluptatem"
    ]
  },
  {
    id: "monthly",
    name: "Monthly",
    price: "$8000",
    period: "/Month",
    isPopular: true,
    features: [
      "Lorem ipsum dolor sit amet",
      "Sed ut perspiciatis",
      "At vero eos et accusamus",
      "Vitae dicta sunt explicabo",
      "Veritatis et quasi architecto",
      "Beatae vitae dicta sunt",
      "Explicabo. Nemo enim",
      "Nemo enim ipsam voluptatem"
    ]
  },
  {
    id: "quarterly",
    name: "Quarterly",
    price: "$25,000",
    period: "/Qtr",
    features: [
      "Lorem ipsum dolor sit amet",
      "Sed ut perspiciatis",
      "At vero eos et accusamus",
      "Vitae dicta sunt explicabo",
      "Veritatis et quasi architecto",
      "Beatae vitae dicta sunt",
      "Explicabo. Nemo enim",
      "Nemo enim ipsam voluptatem"
    ]
  }
];

export const PricesPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  return (
    <div className="min-h-screen bg-gradient-to-r from-zinc-700 to-purple-800 text-white md:py-16 py-6 px-6 md:px-22">
      {/* Header */}



      <div className="text-center relative mb-16">
        <h2 className="absolute -top-6 left-0 md:text-7xl text-5xl font-extrabold
            text-white/5 tracking-wide select-none">
          Pricing Table
        </h2>

        <p className="uppercase tracking-widest text-xs text-gray-400 mb-3">
          PRICING
        </p>

        <h3 className="text-4xl font-bold mb-6">
          My Pricing Model <span className="text-green-500">?</span>
        </h3>

        {/* <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-black font-semibold px-8 md:py-4 rounded-full text-lg transition-colors duration-300 shadow-lg shadow-green-900/30">
          Get Started
        </button> */}
      </div>



      {/* 3 Plan Toggle */}
      <div className="flex justify-center  mb-10">
        <div className="inline-flex rounded-full border border-gray-800 bg-gray-900 p-2">

          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`md:px-8 px-3 py-3 md:text-lg space-x-10 font-medium rounded-full transition-all duration-300
                 ${selectedPlan === plan.id ?
                  'bg-gradient-to-r from-green-500 to-emerald-600 text-black shadow-lg shadow-green-600/40'
                  :
                  'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
            >
              {plan.name}
            </button>
          ))}
        </div>
      </div>



      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`
              relative bg-gradient-to-b from-gray-900 to-black
              border rounded-3xl  lg:p-10
              transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-green-900/20
              group cursor-pointer
              ${selectedPlan === plan.id
                ? 'border-green-500/80 shadow-2xl shadow-green-900/30 scale-[1.03] md:scale-[1.05]'
                : 'border-gray-800'
              }
              ${plan.isPopular ? 'ring-2 ring-green-500/30' : ''}
            `}
            onClick={() => setSelectedPlan(plan.id)}>


            {/* Top badge / arrow */}
            <div className="absolute -top-4 right-8">
              <div className={`
                bg-gradient-to-r from-green-500 to-emerald-600
                text-black font-bold px-6 py-2 rounded-full
                shadow-lg shadow-green-600/40 transform -rotate-2
                group-hover:rotate-0 transition-transform duration-300
              `}>
                {plan.name}
                <span className="ml-1.5 inline-block group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            {/* Price */}
            <div className="mt-4  mb-10 text-center">
              <div className="text-6xl lg:text-6xl font-black tracking-tight">
                {plan.price}
                <span className="text-3xl lg:text-4xl font-bold text-green-400 ">
                  {plan.period}
                </span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-4 text-gray-300 text-lg">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Select Button */}
            <div className="mt-12">
              <button
                className={`
                  w-full py-4 px-6 rounded-xl font-bold text-lg
                  transition-all duration-300
                  ${selectedPlan === plan.id
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-black shadow-lg shadow-green-600/40'
                    : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
                  }
                `}
              >
                {selectedPlan === plan.id ? 'Selected Plan ✓' : 'Select Plan'}
              </button>
            </div>


          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="text-center mt-16 text-gray-400">
        <p>All prices are in USD. Cancel anytime.</p>
        <p className="mt-1 text-green-400">Contact us for custom enterprise pricing.</p>
      </div>
    </div>
  );
};