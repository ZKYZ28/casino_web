import PageWrapper from "../../components/Common/PageWrapper.tsx";
import roulette from "../../assets/backgrounds/roulette.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClover, faCircleCheck, faDice, faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import GamePreview from "../Home/OurGames/GamePreview.tsx";

const GamePage = () => {
    return (
        <PageWrapper>
            <div className={'px-12'}>
                <div className={'flex justify-between h-[75vh] pt-20'}>
                    <div className={'w-8/12 background-third-color'}>

                    </div>

                    <div className={'w-3/12 flex flex-col justify-between'}>
                        <div>
                            <img src={roulette} className={'rounded'}/>
                            <div className={'text-2xl my-4'}><FontAwesomeIcon icon={faClover}
                                                                              className={'text-secondary-color rotate-45 mr-2'}/> Our <span
                                className={'font-bold'}>games</span></div>

                            <p className={'text-gray-300'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse nec dui in purus convallis iaculis ac eget erat. Aenean pellentesque ex et
                                rutrum rhoncus. Aliquam ultricies risus at euismod commodo. Morbi ut efficitur felis,
                                vitae volutpat mauris. Cras et vestibulum dui, id cursus dui. Vestibulum turpis est,
                                tincidunt non tempor ac, interdum ac orci. </p>
                        </div>

                        <div className="background-third-color flex flex-wrap rounded">
                            <div className="w-1/2 h-1/2 p-4">
                                <div className="bg-primary-color pb-full flex justify-between items-center">
                                    <span>Jaclpot</span>
                                    <FontAwesomeIcon icon={faCircleCheck} className={'text-green-500 mr-2'}/>
                                </div>
                            </div>
                            <div className="w-1/2 h-1/2 p-4">
                                <div className="bg-primary-color pb-full flex justify-between items-center">
                                    <span>Jaclpot</span>
                                    <FontAwesomeIcon icon={faCircleCheck} className={'text-green-500 mr-2'}/>
                                </div>
                            </div>
                            <div className="w-1/2 h-1/2 p-4">
                                <div className="bg-primary-color pb-full flex justify-between items-center">
                                    <span>Jaclpot</span>
                                    <FontAwesomeIcon icon={faCircleCheck} className={'text-green-500 mr-2'}/>
                                </div>
                            </div>
                            <div className="w-1/2 h-1/2 p-4">
                                <div className="bg-primary-color pb-full flex justify-between items-center">
                                    <span>Jaclpot</span>
                                    <FontAwesomeIcon icon={faCircleCheck} className={'text-green-500 mr-2'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'mt-20'}>
                    <div className={'flex justify-between mb-8'}>
                        <div className={'text-xl mb-4'}><FontAwesomeIcon icon={faDice}
                                                                         className={'text-secondary-color mr-2'}/>
                            Similar
                            <span className={'font-bold'}>games</span>
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
            </div>
        </PageWrapper>
    );
};

export default GamePage;
