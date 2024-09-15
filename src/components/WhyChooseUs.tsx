import { useEffect } from "react";
import { GiRoundStar } from "react-icons/gi";
import { Animate } from "./animation";
import ContentHeader from "./ContentHeader";
import WrapperDiv from "./WrapperDiv";

const WhyChooseUs = () => {
  useEffect(() => {
    Animate("showY", ".down-upY ");
    Animate("showY", ".up-downY ");
    Animate("showX", ".left-rightX ");
  }, []);
  return (
    <>
      <WrapperDiv className="bg-orange-50">
        <div className="grid gap-10 p-10 text-gray-500">
          <div className="grid place-content-start">
            <ContentHeader
              className="grid text-left text-black lg:w-[700px]"
              subTitle="WHY CHOOSE US"
              title="Come And Join With Us for A Better Life and Future"
              content=""
            />
          </div>
          <div className="grid gap-10 lg:grid-flow-col">
            <div className="grid place-content-center lg:hidden">
              <img src="/img/heart.png" alt="" className="w-[400px]" />
            </div>
            <span className="grid gap-5">
              Join us and discover our mission and vission, we help you
              assestment for all the. To offer comprehensive financial planning
              and investment management services that address all aspects of our
              clients' financial lives. To build lasting relationships with our
              clients through transparency, integrity, and a dedication to their
              best interests.
              <ul className="grid gap-5">
                <li className="card left-rightX grid grid-flow-col gap-5">
                  <HireItem
                    title="Our Mission"
                    content="To offer comprehensive financial planning and investment
                    management services that address all aspects of our clients'
                    financial lives. To build lasting relationships with our
                    clients through transparency, integrity, and a dedication to
                    their best interests."
                  />
                </li>
                <li className="card left-rightX grid grid-flow-col gap-5">
                  <HireItem
                    title="Our Vision"
                    content="To offer comprehensive financial planning and investment
                    management services that address all aspects of our clients'
                    financial lives. To build lasting relationships with our
                    clients through transparency, integrity, and a dedication to
                    their best interests."
                  />
                </li>
                <li className="card left-rightX grid grid-flow-col gap-5">
                  <HireItem
                    title="Our Mission"
                    content="To offer comprehensive financial planning and investment management
          services that address all aspects of our clients' financial lives. To
          build lasting relationships with our clients through transparency,
          integrity, and a dedication to their best interests."
                  />
                </li>
              </ul>
            </span>
            <div className="hidden place-content-center lg:grid">
              <img src="/img/heart.png" alt="" />
            </div>
          </div>
        </div>
      </WrapperDiv>
    </>
  );
};

export default WhyChooseUs;

type HiteItemProps = {
  title: string;
  content: string;
};

const HireItem = ({ title, content }: HiteItemProps) => {
  return (
    <>
      <div className="grid items-center text-5xl">
        <GiRoundStar className="text-[#FDD65B]" />
      </div>
      <div>
        <h1 className="text-xl font-bold text-black">{title}</h1>
        <span>{content}</span>
      </div>
    </>
  );
};
