import React from 'react';

// You can replace these with your actual image imports or URLs
const avatars = {
  leslie: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
  dianne: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
};

const testimonials = [
  {
    name: "Leslie Alexander",
    title: "CEO, Software Company",
    avatar: avatars.leslie,
    rating: 5,
    text: "Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.",
  },
  {
    name: "Dianne Russell",
    title: "CEO, Plant Shop App",
    avatar: avatars.dianne,
    rating: 5,
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi aliquid ex ea commodi consequatur?",
  },
  // You can add 2–4 more for carousel feel
];

export const Testimonials = ()=> {
  return (
    <section className="bg-gradient-to-r from-zinc-700 to-purple-800  px-5 md:px-14 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-green-500 uppercase tracking-wider font-medium mb-3">
            CLIENT TESTIMONIALS
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-bold">
            Testimonials That
            <br />
            <span className="text-green-500">Speaks To My Results</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={`
                relative bg-[#1a1a1a] rounded-2xl p-8
                border-l-4 border-green-500
                shadow-xl shadow-black/40
                transition-all duration-300
                hover:shadow-2xl hover:shadow-green-900/20
              `}
            >
              {/* Avatar + Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-green-600/40 flex-shrink-0">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{item.title}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-green-500 text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote text */}
              <p className="text-gray-300 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Dots (carousel hint) */}
        <div className="flex justify-center mt-6 gap-3">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="w-3 h-3 rounded-full bg-gray-700 hover:bg-gray-500 transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-gray-700 hover:bg-gray-500 transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-gray-700 hover:bg-gray-500 transition-colors"></div>
        </div>
      </div>
    </section>
  );
}