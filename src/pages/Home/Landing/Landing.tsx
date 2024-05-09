import roulette from "../../../assets/backgrounds/roulette.jpg";
import leprechaun from "../../../assets/backgrounds/leprechaun.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRankingStar} from "@fortawesome/free-solid-svg-icons";
import TopWinnersLine from "./TopWinnersLine.tsx";

const Landing = () => {
    return (
            <div  className={'flex justify-between pt-20 h-[40vh]'}>
                <div style={{
                    backgroundImage: `url(${roulette})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }} className={'p-12 w-7/12 rounded relative flex flex-col justify-between'}>
                    <div>
                        <h2 className={'text-4xl font-extrabold mb-4'}>Play, compete laso earn !</h2>
                        <p className={'text-gray-300 mb-8'}>choose a game, throw dice, spin drum and win real money
                            every
                            day.</p>
                    </div>
                    <button className="button shadow-lg shadow-red-500/30 hover:shadow-red-500/60">
                        <span className="button-text">Join now</span>
                    </button>

                    <img src={leprechaun} className={'absolute bottom-6 right-0 w-[38vh]'}/>
                </div>

                <div className={'w-4/12'}>
                    <div className={'text-xl mb-2'}> <FontAwesomeIcon icon={faRankingStar} className={'text-secondary-color mr-2'}/> Top <span className={'font-bold'}>winners</span></div>
                    <ul className={'h-[20vh] flex flex-col justify-between'}>
                       <TopWinnersLine/>
                       <TopWinnersLine/>
                       <TopWinnersLine/>
                       <TopWinnersLine/>
                    </ul>
                </div>
            </div>
    );
};

export default Landing;