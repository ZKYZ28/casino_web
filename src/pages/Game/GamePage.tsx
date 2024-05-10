import PageWrapper from "../../components/Common/PageWrapper.tsx";
import GameDescription from "./GameDesciption.tsx";
import SimilarGames from "./SimilarGames.tsx";
import SlotMachine from "./SlotMachine/SlotMachine.tsx";

const GamePage = () => {
    return (
        <PageWrapper>
            <div className={'px-12'}>
                <div className={'flex justify-between h-[75vh] pt-20'}>
                    <div className={'w-8/12 background-third-color'}>
                     <SlotMachine />
                    </div>

                    <GameDescription />
                </div>

                <SimilarGames/>
            </div>

        </PageWrapper>
    );
};

export default GamePage;
