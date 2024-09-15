import { default as YellowButton } from "./Button";
import ContentHeader from "./ContentHeader";
import WrapperDiv from "./WrapperDiv";

const OurTeam = () => {
  return (
    <>
      <WrapperDiv>
        <div className="grid gap-10 pb-20 pt-10">
          <div className="grid items-center lg:grid-flow-col">
            <ContentHeader
              className="grid w-full text-center lg:text-left"
              subTitle="OUR EXPERT TEAM"
              title="Meet The Team Behind Our Success Story"
              content=""
            />
            <div className="grid place-content-center lg:place-content-end">
              <YellowButton className="px-6 py-4">
                View all Members
              </YellowButton>
            </div>
          </div>

          <div className="grid place-content-center gap-y-20 lg:grid-cols-4">
            <Advisor
              img_url="/img/advisor/advisor1.png"
              name="Alexander Great"
              job="Professional Adviser"
            />
            <Advisor
              img_url="/img/advisor/advisor2.png"
              name="Sophia Andres"
              job="Professional Adviser"
            />
            <Advisor
              img_url="/img/advisor/advisor4.png"
              name="Keith Martin"
              job="Professional Adviser"
            />
            <Advisor
              img_url="/img/advisor/advisor5.png"
              name="Lylia Cortes"
              job="Professional Adviser"
            />
          </div>
        </div>
      </WrapperDiv>
    </>
  );
};
export default OurTeam;

type AdvisorProps = {
  img_url: string;
  name: string;
  job: string;
};
const Advisor = ({ img_url, name, job }: AdvisorProps) => {
  return (
    <>
      <div className="group relative grid w-80 place-content-center duration-300 ease-in-out hover:scale-105">
        <img
          src={img_url}
          className="h-[400px] w-[300px] rounded-xl object-cover"
          alt=""
        />
        <div className="absolute -bottom-10 left-6 right-6 grid rounded-lg bg-[#F7F7F7] py-4 text-center group-hover:bg-[#00715D]">
          <span className="font-bold group-hover:text-yellow-400">{name}</span>
          <span className="text-sm group-hover:text-white">{job}</span>
        </div>
      </div>
    </>
  );
};
