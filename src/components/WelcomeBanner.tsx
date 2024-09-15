import ContentHeader from "./ContentHeader";
import WrapperDiv from "./WrapperDiv";

const Banner = () => {
  return (
    <>
      <WrapperDiv className="">
        <div className="grid gap-10 p-10 md:grid-cols-2">
          <div className="grid gap-8">
            <ContentHeader
              className="grid text-center md:text-left"
              subTitle="WELCOME TO FINANCEUP, YOUR FINANCIAL ADVISOR"
              title="Helping Each Other Can Make World Better."
              content=" We help people manage and grow investment portfolio, including
            stocks, bonds, and mutual funds. We also create strategies to ensure
            you have enough savings and investments to retire comfortably,
            including managing retirement accounts"
            />

            <ul className="text-md grid list-none gap-3 pl-5 text-center text-gray-600 md:list-disc md:text-left">
              <li>Investment Management</li>
              <li>Retirement Planning</li>
              <li>Insurance Planning</li>
              <li>Debt Management</li>
            </ul>
            <div className="grid place-content-center md:place-content-start">
              <button className="mt-4 rounded-lg bg-[#00715D] px-10 py-5 text-sm font-bold text-white transition-all hover:bg-[#018f75] active:bg-[#017761]">
                Discover more
              </button>
            </div>
          </div>
          <div className="">
            <img src="/img/plantvest2.png" alt="" />
          </div>
        </div>
      </WrapperDiv>
    </>
  );
};

export default Banner;
