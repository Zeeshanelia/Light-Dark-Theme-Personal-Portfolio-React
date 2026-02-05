// import OfferLetter from '../../public/images/OfferLetter'

export const Hero = () => {

    const downloadCV = () => {
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = '/images/OfferLetter.pdf';  // Path to your PDF in public folder
        link.download = 'Developer.CV.pdf'; // Name for downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <section className="min-h-[calc(100vh-64px)] max-w-7xl mx-auto px-3 md:py-10 ">
            <div>

                <div className=" md:flex text-white">
                    {/* Left side - Text */}
                    <div className="md:w-1/2 px-6 md:py-4 py-14  flex flex-col md:justify-center md:gap-6 ">
                        <span className="md:text-xl mt-3">Hello There !</span>

                        <h1 className="md:text-5xl text-md font-bold space-x-2">
                            <span className="!text-green-600 text-white md:text-6xl text-2xl ">
                                This is me Zeeshan Elia </span>
                            <p> web developer based in Pak.</p>
                        </h1>

                        <p className="md:text-lg">
                            I am passionate about designing modern experiences that are both visually stunning and intuitive, and always strive to create Web Apps that delight and engage users.
                        </p>

                        <div className="flex  justify-evenly mt-2 px-2">
                            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white md:font-semibold  rounded-3xl md:px-3 px-2 py-1 hover:shadow-lg hover:shadow-green-100 transition">
                                View My Work
                            </button>
                            <button onClick={downloadCV} className="border hover:bg-gradient-to-r from-green-500 to-emerald-600 text-white md:font-semibold rounded-3xl md:px-3 px-2 py-1 hover:shadow-lg hover:shadow-green-100 transition">
                                Download CV
                            </button>
                        </div>
                    </div>

                    {/* Right side - Image */}



                    <div className="relative flex justify-center ">
                        <div className="absolute w-full h-full rounded-full
            bg-[radial-gradient(circle_at_center,#22c55e,transparent_60%)]" />

                        <div className="md:w-1/2 md:flex items-center justify-center z-10 mt-4 relative md:w-full md:h-full w-[320px] h-[320px]">
                            <img src="images/unnamed111.png" className="object-cover object-fit" />
                        </div>
                    </div>



                </div>
            </div>
        </section>
    )
}
