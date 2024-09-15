import Carousel from "../components/Carousel";
import PopularCause from "../components/CauseAchievement";
import MembersFeedback from "../components/Feedback";
import ServicesSections from "../components/OurServices";
import OurTeam from "../components/OurTeam";
import { default as FrequetlyAskedQuestion } from "../components/RecentlyAskedQuestion";
import Banner from "../components/WelcomeBanner";
import WhyChooseUS from "../components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <div className="w-[100%]">
        <Carousel />
      </div>

      <Banner />
      <ServicesSections />
      <WhyChooseUS />
      <PopularCause />
      <OurTeam />
      <FrequetlyAskedQuestion />
      <MembersFeedback />
    </>
  );
};
export default Home;
