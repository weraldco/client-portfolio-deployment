import { BsPiggyBank } from "react-icons/bs";
import { FaMoneyBillWheat } from "react-icons/fa6";
import { PiGraduationCap, PiGrains, PiHandCoins } from "react-icons/pi";
import ContentHeader from "./ContentHeader";
import WrapperDiv from "./WrapperDiv";

const ServicesSections = () => {
  return (
    <>
      <WrapperDiv className="bg-slate-50">
        <div className="grid gap-10 p-10">
          <div className="up-downY grid place-content-center">
            <ContentHeader
              className="grid text-center lg:w-[550px]"
              subTitle="OUR SERVICES"
              title="We Are Here To Help You"
              content="At FinanceUp Services, let us help you solve problems so that you can
          focus on your goals. We support your dream to come true."
            />
          </div>
          <div className="left-rightX grid items-center justify-center gap-5 lg:grid-flow-col">
            <ServicesItem
              title="Investment Planning"
              content="We help people to develop solutions for Financial Problems. Giving
            you a chance to have a freedom in your Investment."
            >
              <FaMoneyBillWheat />
            </ServicesItem>
            <ServicesItem
              title="Financial Planning"
              content="Assisting with tracking income and expenses to improve savings and spending habits."
            >
              <BsPiggyBank />
            </ServicesItem>
            <ServicesItem
              title="Retirement Planning"
              content="Helping you choose the right retirement accounts and contribution levels to meet your retirement goals."
            >
              <PiGraduationCap />
            </ServicesItem>
            <ServicesItem
              title="Retirement Planning"
              content="Helping you choose the right retirement accounts and contribution levels to meet your retirement goals."
            >
              <PiGrains />
            </ServicesItem>
            <ServicesItem
              title="Retirement Planning"
              content="Helping you choose the right retirement accounts and contribution levels to meet your retirement goals."
            >
              <PiHandCoins />
            </ServicesItem>
          </div>
        </div>
      </WrapperDiv>
    </>
  );
};

export default ServicesSections;

type ServicesItemProps = {
  children: React.ReactNode;
  title: string;
  content: string;
};

const ServicesItem = ({ children, title, content }: ServicesItemProps) => {
  return (
    <>
      <div className="card left-rightX group grid w-full items-center justify-center gap-10 rounded-xl bg-white p-5 text-gray-600 shadow-md lg:w-[225px]">
        <div className="grid justify-center text-7xl text-[#00715D] group-hover:text-[#018f75]">
          {children}
        </div>
        <div className="grid h-[150px]">
          <h1 className="text-center text-lg font-bold text-black group-hover:text-[#018f75]">
            {title}
          </h1>
          <span className="text-sm text-gray-600">{content}</span>
        </div>
      </div>
    </>
  );
};
