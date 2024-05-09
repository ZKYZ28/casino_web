import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiceSix, faRightLong} from "@fortawesome/free-solid-svg-icons";
import GamePreview from "./GamePreview.tsx";
const OurGames = () => {
    return (
        <div className={'mt-20'}>
            <div className={'text-xl mb-4'}><FontAwesomeIcon icon={faDiceSix}
                                                             className={'text-secondary-color rotate-45 mr-2'}/> Our <span
                className={'font-bold'}>games</span></div>
            <div className={'flex justify-between mb-8'}>
                <ul className={'w-5/12 flex justify-between'}>
                    <li className={'font-semibold text-sm border-b-2 border-red-600'}>All Games</li>
                    <li className={'text-sm'}>Popular Games</li>
                    <li className={'text-sm'}>Live Games</li>
                    <li className={'text-sm'}>Favorites Games</li>
                </ul>
                <button
                    className="button shadow-lg background-third-color shadow-red-500/30 hover:shadow-red-500/60 flex justify-between items-center">
                    <span className="button-text">See All </span>
                    <FontAwesomeIcon icon={faRightLong}/>
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <GamePreview/>
                <GamePreview/>
                <GamePreview/>
                <GamePreview/>

                <GamePreview/>
                <GamePreview/>
                <GamePreview/>
                <GamePreview/>
            </div>
        </div>
    );
};

export default OurGames;