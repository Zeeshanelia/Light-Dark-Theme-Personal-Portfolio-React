export const Hero = () => {
    return (
        <section className="min-h-[calc(100vh-64px)] max-w-7xl mx-auto px-6  py-2">
            <div>

                <div className=" md:flex text-white">
                    {/* Left side - Text */}
                    <div className="md:w-1/2 md:p-10 p-4  flex flex-col md:justify-center gap-6">
                        <span className="md:text-xl">Hello There !</span>

                        <h1 className="md:text-5xl text-xl font-bold space-x-2">
                            <span className="!text-green-600 text-white md:text-7xl text-2xl ">
                                This is me Zeeshan Elia </span>
                                <p> web developer based in Pak.</p>
                        </h1>

                        <p className="text-lg">
                            I am passionate about designing modern experiences that are both visually stunning and intuitive, and always strive to create Web Apps that delight and engage users.
                        </p>

                        <div className="flex gap-6 mt-4">
                            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-3xl px-3 py-2 hover:shadow-lg hover:shadow-green-100 transition">
                                View My Work
                            </button>
                            <button className="border hover:bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-3xl px-3 py-2 hover:shadow-lg hover:shadow-green-100 transition">
                                Download CV
                            </button>
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="md:w-1/2 md:flex items-center justify-center md:mt-0 mt-10">
                        <img src="images/unnamed1111.png" className="md:h-full  w-auto md:object-cover object-fit" />
                    </div>


                </div>
            </div>
        </section>
    )
}
