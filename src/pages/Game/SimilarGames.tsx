import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight, faDice} from "@fortawesome/free-solid-svg-icons";
import GamePreview from "../Home/OurGames/GamePreview.tsx";


const SimilarGames = () => {
    return (
        <div className={'mt-20'}>
            <div className={'flex justify-between mb-8'}>
                <div className={'text-xl mb-4'}><FontAwesomeIcon icon={faDice}
                                                                 className={'text-secondary-color mr-2'}/>
                    Similar
                    <span className={'font-bold'}> Games</span>
                </div>

                <div className={'flex'}>
                    <div
                        className={'background-secondary-color h-12 w-12 rounded mr-1 flex items-center justify-center'}>
                        <FontAwesomeIcon icon={faArrowLeft}/>
                    </div>

                    <div
                        className={'background-secondary-color h-12 w-12 rounded mr-1 flex items-center justify-center'}>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </div>

                    <button
                        className={'background-third-color h-12 flex justify-between items-center w-32 p-5 rounded ml-2 text-gray-400'}>
                        <span>See All</span>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </button>
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <GamePreview/>
                <GamePreview/>
                <GamePreview/>
                <GamePreview/>
            </div>
        </div>
    );
};

export default SimilarGames;
