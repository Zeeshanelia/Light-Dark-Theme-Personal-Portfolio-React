import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) return savedTheme;
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'light';
    });

    // Apply theme globally when it changes
    useEffect(() => {
        const root = document.documentElement;
        const body = document.body;

        if (theme === 'dark') {
            root.classList.add('dark');
            body.classList.add('dark');
        } else {
            root.classList.remove('dark');
            body.classList.remove('dark');
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const menus = [
        { to: "home", icon: "ri-home-line", label: "Home" },
        { to: "services", icon: "ri-file-list-3-line", label: "Services" },
        { to: "about-me", icon: "ri-user-line", label: "About Me" },
        { to: "projects", icon: "ri-briefcase-line", label: "Projects" },
        { to: "testimonial", icon: "ri-chat-quote-line", label: "Testimonial" },
        { to: "contact-me", icon: "ri-mail-line", label: "Contact Me" },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 shadow-lg backdrop-blur-sm
                       bg-white/90 dark:bg-gray-900/90
                       transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="md:text-2xl font-bold text-green-600 dark:text-green-400 flex items-center gap-2">
                            <i className="ri-code-s-slash-line"></i>
                            <span className="inline-flex items-center justify-center
                               w-[26px] h-[28px] rounded-2xl
                               bg-gradient-to-t from-green-500 to-emerald-600 text-white font-bold
                               hover:shadow-xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-200">
                                Z
                            </span>
                            <span className="hidden sm:inline">eeshanElia</span>
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-2">
                            {menus.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={`/${item.to}`}
                                    end={item.to === "home"}
                                    className={({ isActive }) =>
                                        `inline-flex items-center px-3 py-2 rounded-lg font-medium gap-2 text-sm transition-all duration-300 ease-in-out ${isActive
                                            ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/30"
                                            : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                                        }`}
                                >
                                    <i className={item.icon}></i>
                                    <span>{item.label}</span>
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* Right side buttons */}
                    <div className="flex items-center gap-4">
                        {/* Theme toggle */}
                        <button
                            onClick={toggleTheme}
                            className="hidden sm:inline-flex items-center justify-center p-2 rounded-md
                                     text-gray-600 dark:text-gray-300
                                     hover:bg-gray-100 dark:hover:bg-gray-800
                                     transition-colors duration-300"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <i className="ri-sun-line text-xl"></i>
                            ) : (
                                <i className="ri-moon-line text-xl"></i>
                            )}
                        </button>

                        {/* Call to action button */}
                        <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg px-4 py-2 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300">
                            Let's Talk
                        </button>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md
                                   text-gray-600 dark:text-gray-400
                                   hover:bg-gray-100 dark:hover:bg-gray-800
                                   focus:outline-none focus:ring-2 focus:ring-green-500
                                   transition-colors duration-300"
                                aria-expanded={isMobileMenuOpen}
                                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}>
                                {isMobileMenuOpen ? (
                                    <i className="ri-close-line text-2xl"></i>
                                ) : (
                                    <i className="ri-menu-line text-2xl"></i>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                }`}>
                <div className="px-2 pt-2 pb-3 space-y-1
                              bg-white/95 dark:bg-gray-900/95
                              backdrop-blur-sm border-t border-gray-200 dark:border-gray-800">
                    {menus.map((item) => (
                        <NavLink
                            key={item.to}
                            to={`/${item.to}`}
                            end={item.to === "home"}
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                                `flex items-center px-4 py-3 rounded-md
                                 text-base font-medium gap-3 transition-all duration-200
                                 ${isActive
                                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                                }`
                            }>
                            <i className={item.icon}></i>
                            <span>{item.label}</span>
                        </NavLink>
                    ))}

                    {/* Theme toggle for mobile */}
                    <div className="pt-2 border-t border-gray-200 dark:border-gray-700 px-4">
                        <button
                            onClick={() => {
                                toggleTheme();
                                closeMobileMenu();
                            }}
                            className="flex items-center gap-3 px-4 py-3 rounded-md
                                     text-gray-600 dark:text-gray-300
                                     hover:bg-gray-100 dark:hover:bg-gray-800
                                     transition-colors w-full">
                            {theme === 'dark' ? (
                                <>
                                    <i className="ri-sun-line text-xl"></i>
                                    <span>Switch to Light Mode</span>
                                </>
                            ) : (
                                <>
                                    <i className="ri-moon-line text-xl"></i>
                                    <span>Switch to Dark Mode</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};