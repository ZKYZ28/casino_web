import { useState } from 'react';
import jackpotSound from '../../../assets/sounds/jackpot.mp3'

const images = [
    '/src/assets/backgrounds/leprechaun.png',
    '/src/assets/backgrounds/daily-jackpot.png',
    '/src/assets/backgrounds/leprechaun.png',
    '/src/assets/backgrounds/daily-jackpot.png',
    '/src/assets/backgrounds/leprechaun.png',
    '/src/assets/backgrounds/daily-jackpot.png',
];

const Carousel = () => {
    const [currentImageIndexes, setCurrentImageIndexes] = useState([0, 0, 0]);
    const [isSpinning, setIsSpinning] = useState(false);
    const [soundPlayed, setSoundPlayed] = useState(false);

    const spin = () => {
        setIsSpinning(true);
        let iterations = 0;
        const intervalId = setInterval(() => {
            setCurrentImageIndexes((prevIndexes) =>
                prevIndexes.map((prevIndex, i) => (prevIndex + 1) % images.length)
            );
            iterations++;
            if (iterations === 25) {
                clearInterval(intervalId);
                setIsSpinning(false);
            }
        }, 200);
        setTimeout(() => {
            clearInterval(intervalId);
            setIsSpinning(false);

            if (soundPlayed && currentImageIndexes.every(index => index === currentImageIndexes[0])) {
                const audio = new Audio(jackpotSound);
                audio.play();
            }
        }, 3000);
    };

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">

            <div className="flex space-x-4">
                {images.slice(0, 3).map((_image, index) => (
                    <div key={index} className={`carousel ${isSpinning ? 'spin' : ''}`}>
                        <img
                            src={images[currentImageIndexes[index]]}
                            className="w-20"
                        />
                    </div>
                ))}
            </div>

            <button onMouseDown={spin} onMouseUp={() => setIsSpinning(false)}>SPIN</button>
        </div>
    );
};

export default Carousel;
