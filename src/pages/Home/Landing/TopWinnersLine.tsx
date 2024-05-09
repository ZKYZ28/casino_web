import roulette from "../../../assets/backgrounds/roulette.jpg";

const TopWinnersLine = () => {
    return (
        <li className={'relative background-third-color rounded flex items-center justify-between w-full p-2 pr-8 my-4'}>
            <div className={'flex items-center'}>
                <img src={roulette} className={'rounded w-10 h-10'} />
                <div className={'ml-4 flex flex-col'}>
                    <span style={{fontSize : '0.8em'}}>François M.</span>
                    <span className={'text-secondary-color font-semibold'}>Poker</span>
                </div>
            </div>

            <div className={'flex flex-col items-end'}>
                <span style={{fontSize : '0.8em'}}>9:58</span>
                <span className={'font-bold'}>200 €</span>
            </div>

            <div className={'absolute top-4.5 -right-3 rounded-full background-secondary-color h-7 w-7 flex justify-center items-center'}>
                1
            </div>
        </li>
    );
};

export default TopWinnersLine;