import { useEffect } from "react";
import ContentHeader from "./ContentHeader";
import WrapperDiv from "./WrapperDiv";
import { Animate } from "./animation";

const ServicesDetails = () => {
  useEffect(() => {
    Animate("showY", ".down-upY ");
    Animate("showY", ".up-downY ");
  }, []);
  return (
    <>
      <WrapperDiv className="bg-orange-50">
        <div className="grid place-items-center gap-y-10 pb-10">
          <ContentHeader
            className="up-downY grid text-center lg:w-[550px]"
            subTitle="OUR SERVICES"
            title="We Are Here To Help You"
            content="At FinanceUp Services, let us help you solve problems so that you can
          focus on your goals. We support your dream to come true."
          />
          <div className="grid w-full gap-y-10 p-5 md:grid-cols-2">
            <ServicesItem
              className="card up-downY educational"
              title="Education Planning"
              content="Education planning involves preparing financially for the costs
            associated with education, whether it's for yourself, your children,
            or other dependents. Effective education planning involves a
            combination of setting realistic goals, choosing the right savings
            and investment options, and regularly reviewing and adjusting your
            plan as needed"
            />
            <ServicesItem
              className="card up-downY retirementplan"
              title="Retirement Planning"
              content="Retirement planning is a comprehensive process aimed at ensuring you have enough resources to live comfortably once you stop working. Effective retirement planning requires careful thought and ongoing management to ensure you’re financially prepared for retirement and can enjoy it as planned."
            />
            <ServicesItem
              className="card up-downY businessplan"
              title="Business Planning"
              content="Business planning is a critical process that involves outlining your business goals, strategies, and the means to achieve them. It encompasses everything from the initial idea to the operational and financial aspects of running a successful business. "
            />
            <ServicesItem
              className="card up-downY newhouse"
              title="Housing Planning"
              content="Housing planning involves strategizing about your current and future housing needs, balancing factors such as affordability, location, lifestyle, and long-term goals. "
            />
            <ServicesItem
              className="card up-downY health"
              title="Health Issurance Planning"
              content="Health insurance is designed to help cover the costs of medical care and protect you from high expenses associated with illness or injury."
            />
            <ServicesItem
              className="card up-downY investment"
              title="Investment Planning"
              content="nvestment planning is a strategic approach to managing your investments to achieve your financial goals. It involves assessing your financial situation, setting objectives, and creating a strategy to grow and manage your assets."
            />
          </div>
        </div>
      </WrapperDiv>
    </>
  );
};

export default ServicesDetails;

type ServicesItemProps = {
  className: string;
  title: string;
  content: string;
};

const ServicesItem = ({ className, title, content }: ServicesItemProps) => {
  return (
    <>
      <div
        className={`: h-[500px] rounded-2xl p-5 md:w-[400px] lg:h-[600px] lg:w-[600px] ${className}`}
      >
        <div className="rounded-lg bg-[#00715D] bg-opacity-50 p-5">
          <h1 className="text-xl font-bold text-white lg:text-2xl">{title}</h1>
          <span className="text-sm text-gray-200">{content}</span>
        </div>
      </div>
    </>
  );
};
