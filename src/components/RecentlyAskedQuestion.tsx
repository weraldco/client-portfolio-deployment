import { BsFillHouseCheckFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { RiHealthBookFill } from "react-icons/ri";
import ContentHeader from "./ContentHeader";
import WrapperDiv from "./WrapperDiv";

const FrequetlyAskedQuestion = () => {
  return (
    <>
      <WrapperDiv className="bg-slate-50">
        <div className="grid lg:grid-cols-2">
          <div className="grid gap-10 px-5 py-10 text-center">
            <ContentHeader
              className="grid items-center text-center lg:text-left"
              subTitle="RECENTLY ASKED QUESTION"
              title="Frequently Asked Question"
              content=" At FinanceUp Services, we identify all the cause of not having a financial freedom so let us help you solve problems so that you can
            focus on your goals. We support your dream to come true."
            />
          </div>
          <div className="grid place-items-center gap-10 xl:grid-cols-2 xl:gap-10 xl:py-10">
            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-1">
              <CardMember count="2568" label="Enrolled Members">
                <FaUser />
              </CardMember>
              <CardMember count="1547" label="Studied">
                <PiStudentFill />
              </CardMember>
            </div>
            <div className="grid grid-cols-1 gap-10 pb-20 lg:grid-cols-2 xl:grid-cols-1">
              <CardMember count="3440" label="Insured Members">
                <RiHealthBookFill />
              </CardMember>
              <CardMember count="1330" label="Housing Loans">
                <BsFillHouseCheckFill />
              </CardMember>
            </div>
          </div>
        </div>
      </WrapperDiv>
    </>
  );
};

export default FrequetlyAskedQuestion;

type CardMemberProps = {
  count: string | number;
  label: string;
  children: React.ReactNode;
};
const CardMember = ({ count, label, children }: CardMemberProps) => {
  return (
    <>
      <div className="card up-downY grid h-[275px] w-[275px] justify-center rounded-lg bg-white py-5 text-center shadow-lg">
        <div className="grid place-content-center py-5 text-5xl text-[#00715D]">
          {children}
        </div>
        <h1 className="text-5xl font-bold">{count}</h1>
        <h3 className="text-sm text-gray-500">{label}</h3>
      </div>
    </>
  );
};
