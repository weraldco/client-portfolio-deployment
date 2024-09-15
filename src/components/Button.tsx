const YellowButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <button
        className={`grid items-center rounded-lg bg-[#FDD65B] text-sm transition-all hover:bg-yellow-300 active:bg-[#fdd85e] ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default YellowButton;
