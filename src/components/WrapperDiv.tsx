import { useLayoutEffect } from "react";
import { Animate } from "./animation";

type WrapperDivProps = {
  children: React.ReactNode;
  className?: string;
};
const WrapperDiv = ({ children, className }: WrapperDivProps) => {
  useLayoutEffect(() => {
    Animate("showY", ".down-upY ");
    Animate("showX", ".up-downY ");
  }, []);
  return (
    <div className={`grid place-content-center ${className}`}>
      <div className="w-full py-5 xl:w-[1280px]">{children}</div>
    </div>
  );
};
export default WrapperDiv;
