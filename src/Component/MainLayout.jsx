import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Headline } from './Headline'
import { Service } from './Service'
import { AboutMe } from './AboutMe'
import { Projects } from './Projects'
import { HeadlineSlider } from './HeadlineSlider'
import { Education } from "./Education"
import { PricesPlan } from './PricesPlan'
import { Testimonials } from './Testimonials'
import { Contact } from './Contact'
import { Footer } from './Footer'


export const MainLayout = () => {
    return (
        <div className="min-h-screen ">


            <main className="bg-white dark:bg-gray-900 text-black dark:text-gray-100 transition-colors duration-300"> {/* Adjust based on your navbar height */}

                <Nav />
                <Hero />
                <HeadlineSlider />
                <Service />
                <AboutMe />
                <Projects />
                <Headline />
                <Education />
                <PricesPlan />
                <Testimonials />
                < Contact />
                < Footer />
            </main>

            {/* Example footer with dark mode */}
            {/* <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8 mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-gray-600 dark:text-gray-400">
                        © {new Date().getFullYear()} Your Portfolio. All rights reserved.
                    </p>
                </div>
            </footer> */}
        </div>
    );
};