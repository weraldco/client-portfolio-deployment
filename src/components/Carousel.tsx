import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { images } from "../ultils/img_data";

const Carousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const prevArrow = () => {
    setImgIndex(imgIndex === 0 ? images.length - 1 : imgIndex - 1);
  };
  const nextArrow = () => {
    setImgIndex(imgIndex === images.length - 1 ? 0 : imgIndex + 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex(imgIndex === 0 ? images.length - 1 : imgIndex - 1);
    }, 6000);

    return () => clearInterval(timer);
  }, [imgIndex]);
  return (
    <>
      <div className="relative h-full w-full bg-slate-500">
        <div className="flex h-full w-full overflow-hidden">
          {images.map(
            (image, index) =>
              imgIndex === index && (
                <div
                  key={image.url}
                  className={`block w-full object-cover lg:h-full translate-x-[${
                    -100 * imgIndex
                  }%] flex-shrink-0 flex-grow-0 duration-300 ease-in-out`}
                >
                  <img
                    src={image.url}
                    alt=""
                    className="image-slider zoom-in relative"
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 z-30 grid justify-center self-center py-20 text-center text-base text-white">
                    <div className="grid place-items-center lg:w-[700px]">
                      <span className="image-title text-3xl lg:text-6xl">
                        {image.title}
                      </span>
                      <span className="image-content text-xs lg:text-base">
                        {image.content}
                      </span>
                    </div>
                  </div>
                </div>
              ),
          )}
        </div>
        <IoIosArrowBack
          onClick={prevArrow}
          className="absolute left-5 top-[50%] z-50 rounded-full bg-[rgba(20,20,20,0.5)] bg-gray-600 p-1 text-4xl text-white transition-all hover:bg-black"
        />
        <IoIosArrowForward
          onClick={nextArrow}
          className="absolute right-5 top-[50%] z-50 rounded-full bg-[rgba(30,30,30,0.5)] p-1 text-4xl text-white transition-all hover:bg-black"
        />
      </div>
    </>
  );
};

export default Carousel;
