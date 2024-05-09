import PageWrapper from "../../components/Common/PageWrapper.tsx";
import roulette from '../../assets/backgrounds/roulette.jpg'
import leprechaun from '../../assets/backgrounds/leprechaun.png'

const HomePage = () => {
    return (
        <PageWrapper>
            <div className={'background-primary-color min-content-page-height px-12'}>
                <div  className={'flex justify-between pt-20'}>
                    <div style={{
                        backgroundImage: `url(${roulette})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }} className={'p-12 w-7/12 rounded relative h-[40vh] flex flex-col justify-between'}>
                        <div>
                            <h2 className={'text-4xl font-extrabold mb-4'}>Play, compete laso earn !</h2>
                            <p className={'text-gray-300 mb-8'}>choose a game, throw dice, spin drum and win real money
                                every
                                day.</p>
                        </div>
                        <button className="button">
                            <span className="button-text">Join now</span>
                        </button>

                        <img src={leprechaun} className={'absolute bottom-6 right-0 w-[45vh]'}/>
                    </div>

                    <div className={'p-6 w-4/12'}>
                        <div>Top winners</div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default HomePage;
