import PageWrapper from "../../components/Common/PageWrapper.tsx";
import Landing from "./Landing/Landing.tsx";
import OurGames from "./OurGames/OurGames.tsx";
import DailyJackpots from "./DailyJackpots/DailyJackpots.tsx";

const HomePage = () => {
    return (
        <PageWrapper>
            <div className={'min-content-page-height px-12'}>
                <Landing/>

                <OurGames/>

                <DailyJackpots/>
            </div>
        </PageWrapper>
);
};

export default HomePage;
