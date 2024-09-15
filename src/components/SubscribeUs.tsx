import YellowButton from "./Button";
import ContentHeader from "./ContentHeader";
import WrapperDiv from "./WrapperDiv";

const SubscribeUs = () => {
  return (
    <>
      <WrapperDiv className="subscriber-section">
        <div className="grid gap-10 p-10">
          <div className="grid place-content-center">
            <ContentHeader
              className="grid text-center text-gray-50 lg:w-[700px]"
              subTitle="SUBSCRIBE TO US"
              title="Subscribe for Newsletter"
              content="Join us and discover our mission and vission, we help you assestment
            for all the. To offer comprehensive financial planning and
            investment management services that address all aspects of our
            clients' financial lives."
            />
          </div>
          <div className="grid w-full grid-flow-col place-content-center gap-4">
            <input
              type="text"
              placeholder="Email address"
              className="w-full rounded-lg p-4 lg:w-[300px]"
            />
            <YellowButton className="px-14 py-4">Subscribe</YellowButton>
          </div>
        </div>
      </WrapperDiv>
    </>
  );
};

export default SubscribeUs;
