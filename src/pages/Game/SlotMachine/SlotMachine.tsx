import { useState } from 'react';
import jackpotSound from '../../../assets/sounds/jackpot.mp3'
import './SlotMachine.css';

const images = [
    '/src/assets/imgs/fruits/FRUITPNG1.png',
    '/src/assets/imgs/fruits/FRUITPNG2.png',
    '/src/assets/imgs/fruits/FRUITPNG3.png',
    '/src/assets/imgs/fruits/FRUITPNG4.png',
    '/src/assets/imgs/fruits/FRUITPNG5.png',
    '/src/assets/imgs/fruits/FRUITPNG6.png',
    '/src/assets/imgs/fruits/FRUITPNG7.png',
    '/src/assets/imgs/fruits/FRUITPNG8.png',
    '/src/assets/imgs/fruits/FRUITPNG9.png',
    '/src/assets/imgs/fruits/FRUITPNG10.png',
    '/src/assets/imgs/fruits/FRUITPNG11.png',
    '/src/assets/imgs/fruits/FRUITPNG12.png',
];

const Carousel = () => {
    const [currentImageIndexes, setCurrentImageIndexes] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]);

    const [isSpinning, setIsSpinning] = useState(false);
    const [soundPlayed, setSoundPlayed] = useState(false);

    const spin = () => {
        setIsSpinning(true);
        const intervalId = setInterval(() => {
            setCurrentImageIndexes((prevIndexes) => {
                // Générer une nouvelle ligne pour la première ligne
                const newFirstRow = prevIndexes[0].map((_, colIndex) => Math.floor(Math.random() * images.length));
                return [
                    newFirstRow,
                    prevIndexes[0], // Ancienne première ligne devient la deuxième ligne
                    prevIndexes[1] // Ancienne deuxième ligne devient la troisième ligne
                ];
            });
        }, 1000);
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

            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="flex flex-col">
                    {currentImageIndexes.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex">
                            {row.map((index, colIndex) => (
                                <div key={colIndex} className={`carousel ${isSpinning ? 'spin' : ''}`}>
                                    <img
                                        src={images[index]}
                                        className={`w-20 h-20 background-primary-color border border-red-500 ${isSpinning ? 'slide-down' : ''}`}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <button onMouseDown={spin} onMouseUp={() => setIsSpinning(false)}>SPIN</button>
            </div>
        </div>
    );
};

export default Carousel;
