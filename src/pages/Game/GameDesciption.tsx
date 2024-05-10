import roulette from "../../assets/backgrounds/roulette.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faClover} from "@fortawesome/free-solid-svg-icons";


const GameDescription = () => {
    return (
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
    );
};

export default GameDescription;