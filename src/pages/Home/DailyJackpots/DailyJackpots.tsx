import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSackDollar} from "@fortawesome/free-solid-svg-icons";
import slots from "../../../assets/backgrounds/slots.webp";
import dailyJackpot from "../../../assets/backgrounds/daily-jackpot.png";

const DailyJackpots = () => {
    return (
        <div className={'mt-20'}>
            <div className={'text-xl mb-4'}><FontAwesomeIcon icon={faSackDollar}
                                                             className={'text-secondary-color mr-2'}/> Daily <span
                className={'font-bold'}>Jackpots</span></div>

            <div className="grid grid-cols-3 gap-4 h-96">
                <div className="col-span-1 flex">
                    <div className="flex flex-col flex-grow gap-4">
                        <div className="p-4 bg-gray-200 flex-grow">Premier élément</div>
                        <div className="p-4 bg-gray-200 flex-grow">Deuxième élément</div>
                    </div>
                </div>

                <div className="col-span-1">
                    <div className="h-full p-4 relative flex flex-col items-center justify-end" style={{
                        backgroundImage: `linear-gradient(to right, transparent, rgba(250, 37, 59, 1) 100%), url(${slots})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                        <img src={dailyJackpot} className={'absolute z-50 top-4 w-96'}/>

                        <div className={'h-1/2 relative z-40 flex flex-col justify-center items-center'}>
                            <span className={'text-5xl py-8 neon-font'}>01 : 23 : 53</span>
                            <span className={'text-3xl neon-font '}>532.92 €</span>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 flex">
                    <div className="flex flex-col flex-grow gap-4">
                        <div className="p-4 bg-gray-200 flex-grow">Premier élément</div>
                        <div className="p-4 bg-gray-200 flex-grow">Deuxième élément</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DailyJackpots;