import ContentHeader from "./ContentHeader";
import WrapperDiv from "./WrapperDiv";

const PopularCause = () => {
  return (
    <>
      <WrapperDiv>
        <div className="grid justify-center gap-10 p-10">
          <div className="grid place-content-center">
            <ContentHeader
              className="grid text-center lg:w-[700px]"
              subTitle="CAUSES WE WANT TO ACHIEVE"
              title="Find The Popular Cause and Help You"
              content="At FinanceUp Services, we identify all the cause of not having a
            financial freedom so let us help you solve problems so that you can
            focus on your goals. We support your dream to come true."
            />
          </div>

          <div className="grid gap-10 lg:grid-flow-col">
            <CauseItem
              imgUrl="/img/cause/cause3.png"
              label="Investement"
              title="You see the result of Investment"
              content="To offer comprehensive financial planning and investment management
            services that address all aspects of our clients' financial lives.
            To build lasting relationships with our clients through
            transparency, integrity, and a dedication to their best interests."
              percentage="52%"
              amount="24,280"
              total="40,000"
              type="invested"
              extraLabel="people invested"
            />
            <CauseItem
              imgUrl="/img/cause/cause2.png"
              label="Education"
              title="You let your child go to School"
              content="To offer comprehensive financial planning and investment management
            services that address all aspects of our clients' financial lives.
            To build lasting relationships with our clients through
            transparency, integrity, and a dedication to their best interests."
              percentage="52%"
              amount="24,280"
              total="40,000"
              type="studied"
              extraLabel="people studied"
            />
            <CauseItem
              imgUrl="/img/cause/cause1.png"
              label="Food"
              title="Able to buy food for your everyday"
              content="To offer comprehensive financial planning and investment management
            services that address all aspects of our clients' financial lives.
            To build lasting relationships with our clients through
            transparency, integrity, and a dedication to their best interests."
              percentage="52%"
              amount="24,280"
              total="40,000"
              type="buy food"
              extraLabel="people can buy food"
            />
          </div>
        </div>
      </WrapperDiv>
    </>
  );
};

export default PopularCause;

type CauseItemProps = {
  imgUrl: string;
  label: string;
  title: string;
  content: string;
  type: string;
  percentage: string;
  amount: string;
  total: string;
  extraLabel: string;
};

const CauseItem = ({
  imgUrl,
  label,
  title,
  content,
  type,
  percentage,
  amount,
  total,
  extraLabel,
}: CauseItemProps) => {
  return (
    <>
      <div className="group grid w-full gap-5 rounded-b-xl pb-10 shadow-md duration-300 ease-in-out hover:scale-110">
        <div className="relative border-b-[7px] border-[#00715D]">
          <img
            src={imgUrl}
            alt=""
            className="h-[300px] w-full rounded-t-2xl object-cover"
          />
          <span className="absolute bottom-0 left-10 rounded-t-lg bg-[#00715D] px-3 py-1 text-white">
            {label}
          </span>
        </div>
        <div className="grid gap-5 px-5 text-gray-600">
          <h1 className="text-xl font-bold text-[#00715D] group-hover:text-[#018f75]">
            {title}
          </h1>
          <span className="text-md">{content}</span>
          <div>
            <span className="grid justify-center text-sm">
              {percentage} {extraLabel}
            </span>
            <div className="h-[8px] w-full rounded-lg bg-slate-200">
              <div className="h-full w-[52%] rounded-lg bg-[#FDD65B]"></div>
            </div>
            <div className="grid grid-cols-2 justify-evenly">
              <div className="grid w-[125px] grid-flow-col items-center">
                <span className="text-lg font-bold">{amount}</span>
                <span className="text-sm">{type}</span>
              </div>
              <span className="text-right text-lg font-bold">{total}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
