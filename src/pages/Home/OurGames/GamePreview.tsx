import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import roulette from "../../../assets/backgrounds/roulette.jpg";
import {NavLink} from "react-router-dom";

const GamePreview = () => {
    return (
        <NavLink to={"game"} className="relative p-6 rounded h-52 flex flex-col justify-end" style={{
            backgroundImage: `url(${roulette})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>

            <h3 className={'font-bold text-lg'}>Wheel</h3>
            <p className={'text-sm'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

            <button className={'absolute top-2 right-2 rounded-full background-secondary-color w-6 h-6'}>
                <FontAwesomeIcon icon={faStar}/>
            </button>
        </NavLink>
    );
};

export default GamePreview;