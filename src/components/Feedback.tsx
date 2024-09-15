import { BiSolidQuoteLeft } from "react-icons/bi";
import ContentHeader from "./ContentHeader";
import WrapperDiv from "./WrapperDiv";

const MembersFeedback = () => {
  return (
    <>
      <WrapperDiv>
        <div className="grid place-items-center p-10">
          <ContentHeader
            className="grid text-center lg:w-[700px]"
            subTitle="FEEDBACK FROM OUR MEMBERS"
            title="Our Goal is To Satisfied Our Member By Helping Them"
            content="At FinanceUp Services, we identify all the cause of not having a
            financial freedom so let us help you solve problems so that you can
            focus on your goals. We support your dream to come true."
          />

          <div className="grid gap-10 py-10 lg:grid-flow-col">
            <FeedbackItem />
            <FeedbackItem />
          </div>
        </div>
      </WrapperDiv>
    </>
  );
};

export default MembersFeedback;

const FeedbackItem = () => {
  return (
    <>
      <div className="card down-upY w-full items-center justify-start rounded-lg bg-slate-50 p-6 shadow-md lg:w-[400px]">
        <span className="text-gray-600">
          <BiSolidQuoteLeft />
          We like the services of FinanceUp, it secure my future in different
          level. Thanks to this services
        </span>
        <div className="grid grid-flow-col place-content-end gap-3">
          <div className="grid place-content-center">
            <img
              src="/img/member/member1.png"
              alt=""
              className="h-14 w-14 rounded-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold">Alodia Fine</h3>
            <span className="text-sm text-gray-600">Member</span>
          </div>
        </div>
      </div>
    </>
  );
};
