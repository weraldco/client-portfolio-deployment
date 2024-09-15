import { ComponentClass } from "react";

type ContentHeaderProps = {
  className: ComponentClass | string;
  subTitle: string;
  title: string;
  content: string;
};

const ContentHeader = ({
  className,
  subTitle,
  title,
  content,
}: ContentHeaderProps) => {
  return (
    <>
      <div className={`${className}`}>
        <h3 className="mb-5 text-sm font-bold text-gray-500 lg:text-base">
          {subTitle}
        </h3>
        <h1 className="mb-5 text-3xl font-bold lg:text-5xl">{title}</h1>
        <span className="text-sm text-gray-600 lg:text-base">{content}</span>
      </div>
    </>
  );
};

export default ContentHeader;
