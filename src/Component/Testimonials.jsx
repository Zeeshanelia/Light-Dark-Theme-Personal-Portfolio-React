import React from 'react';
import { Quote, Star, User } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const avatars = {
  leslie: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
  dianne: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
  alex: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
};

const testimonials = [
  {
    name: "Leslie Alexander",
    title: "CEO, Software Company",
    avatar: avatars.leslie,
    rating: 5,
    text: "Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    name: "Dianne Russell",
    title: "CEO, Plant Shop App",
    avatar: avatars.dianne,
    rating: 5,
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
  },
  {
    name: "Alex Johnson",
    title: "CTO, Tech Startup",
    avatar: avatars.alex,
    rating: 5,
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  customPaging: (i) => (
    <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-green-500 dark:hover:bg-green-500 transition-colors duration-300"></div>
  ),
  dotsClass: "slick-dots !bottom-[-40px]",
};

export const Testimonials = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 py-16 md:py-24 px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 dark:bg-green-500/5 border border-green-500/20 dark:border-green-500/10 mb-4">
            <User className="w-4 h-4 text-green-600 dark:text-green-400" />
            <p className="text-sm font-medium text-green-600 dark:text-green-400 uppercase tracking-wider">
              Client Testimonials
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Testimonials That
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-400 dark:to-emerald-500">
              Speak To My Results
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            What clients say about working with me and the results we achieved together.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-green-400/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tl from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl"></div>

          {/* Slider Container */}
          <div className="relative z-10">
            <Slider {...settings}>
              {testimonials.map((item, idx) => (
                <div key={idx} className="px-2 sm:px-4">
                  <div className="group relative bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 md:p-8 shadow-lg hover:shadow-xl hover:shadow-green-500/10 dark:hover:shadow-green-500/5 transition-all duration-500 hover:-translate-y-2">

                    {/* Quote icon decoration */}
                    <div className="absolute top-6 right-6 text-green-500/10 dark:text-green-500/5">
                      <Quote className="w-16 h-16" />
                    </div>

                    {/* Left border accent */}
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-green-500 to-emerald-600 rounded-l-2xl"></div>

                    {/* Avatar + Info */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="relative">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-sm">
                          <Quote className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {item.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-3">
                          {item.title}
                        </p>

                        {/* Stars */}
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 md:w-5 md:h-5 ${
                                i < item.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300 dark:text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Quote text */}
                    <div className="relative">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg italic pl-4 border-l-2 border-green-500/30">
                        "{item.text}"
                      </p>
                    </div>

                    {/* Bottom decoration */}
                    <div className="mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span>Verified Client</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Dots indicator text */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gray-100 dark:bg-gray-800/50 rounded-full border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse delay-75"></div>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse delay-150"></div>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                Swipe or use dots to navigate
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {[
            { value: "100%", label: "Client Satisfaction" },
            { value: "50+", label: "Projects Delivered" },
            { value: "95%", label: "On Time Delivery" },
            { value: "4.9", label: "Average Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-400 dark:to-emerald-500">
                {stat.value}
              </div>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};