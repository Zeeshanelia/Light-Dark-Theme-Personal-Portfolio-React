import { Link } from "react-router-dom";

export const Nav = () => {
    const menus = [
        { to: "home", icon: "ri-home-line", label: "Home" },
        { to: "services", icon: "ri-file-list-3-line", label: "Services" },
        { to: "about-me", icon: "ri-user-line", label: "About Me" },
        { to: "projects", icon: "ri-briefcase-line", label: "Projects" },
        { to: "testimonial", icon: "ri-chat-quote-line", label: "Testimonial" },
        { to: "contact-me", icon: "ri-mail-line", label: "Contact Me" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 text-white shadow-lg backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0 flex items-center">
                        <h1 className="text-xl font-bold text-green-400">
                            <i className="ri-code-s-slash-line mr-2"></i>
                            Portfolio
                        </h1>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-2">
                            {menus.map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out gap-2
                                        ${isActive 
                                            ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/30" 
                                            : "text-gray-300 hover:bg-gray-800 hover:text-white hover:shadow-md"
                                        }`
                                    }
                                >
                                    <i className={item.icon}></i>
                                    <span>{item.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    
                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <i className="ri-menu-line text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Mobile Navigation */}
            <div className="md:hidden hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
                    {menus.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                `flex items-center px-3 py-3 rounded-md text-base font-medium gap-3 transition-colors
                                ${isActive 
                                    ? "bg-green-500 text-black" 
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                }`
                            }
                        >
                            <i className={item.icon}></i>
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};