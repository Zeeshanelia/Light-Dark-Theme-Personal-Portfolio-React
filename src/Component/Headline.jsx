
import { useState, useEffect } from 'react';

export const Headline = () => {

    const phrases = [
        "Digital Innovation",
        "Creative Solutions",
        "Next-Gen Technology",
        "Future Ready"
    ];

    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(100);

    useEffect(() => {
        const currentPhrase = phrases[currentPhraseIndex];

        const timer = setTimeout(() => {
            if (!isDeleting && currentText !== currentPhrase) {
                // Typing
                setCurrentText(currentPhrase.substring(0, currentText.length + 1));
                setSpeed(100);
            } else if (isDeleting && currentText !== '') {
                // Deleting
                setCurrentText(currentPhrase.substring(0, currentText.length - 1));
                setSpeed(50);
            } else if (!isDeleting && currentText === currentPhrase) {
                // Pause at full text
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && currentText === '') {
                // Move to next phrase
                setIsDeleting(false);
                setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentPhraseIndex]);



    return (<>

        <div className=" bg-gradient-to-r from-zinc-700 to-purple-800 flex items-center justify-center">
            <div className="text-center p-8">
                <h1 className="text-4xl md:text-7xl font-bold text-white mb-4">
                    Leading in{' '}
                    <span className="text-yellow-300 border-r-4 border-yellow-300">
                        {currentText}
                    </span>
                </h1>
                <p className="text-xl text-emerald-100 mt-8">
                    Innovative approaches for modern businesses
                </p>
            </div>
        </div>


    </>)
}






// import { useState, useEffect } from 'react';
// export const Headline = () => {

//     const texts = [
//     "Create Amazing Designs",
//     "Build Modern Websites",
//     "Enhance User Experience",
//     "Power Your Applications"
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [fade, setFade] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(false);
//       setTimeout(() => {
//         setCurrentIndex((prev) => (prev + 1) % texts.length);
//         setFade(true);
//       }, 500);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);


//     return (<>

//        <div className="h-32 bg-gradient-to-r from-zinc-700 to-purple-800 flex items-center justify-center p-6">
//       <div className="text-center">
//         <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//           We Help You{' '}
//           <span className={`transition-all duration-500 ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} inline-block`}>
//             {texts[currentIndex]}
//           </span>
//         </h1>
//         <p className="text-xl text-blue-100 mt-6">
//           Professional solutions for your digital needs
//         </p>
//       </div>
//     </div>

//     </>)
// }