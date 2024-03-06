import { forwardRef, useImperativeHandle, useRef, useState } from "react";

import BoxLeftIcon from "assets/svg/components/BoxLeftIcon";
import SingleSwiper from "./single-swiper";
import { SwiperRef } from "swiper/react";

interface SingleRowGridProps {
  title: string;
  openViewProduct: () => void;
}

const SingleRowGrid = (props: SingleRowGridProps) => {
  const singleGridSwiperRef = useRef<SwiperRef | null>(null);
  const { title, openViewProduct } = props;
  const [showNavigation, setShowNavigation] = useState({
    left: false,
    right: true,
  });

  return (
    <div className="px-2 my-2 md:px-10 md:my-5">
      <div className="flex flex-row items-center justify-between gap-4 h-[40px]  md:h-[60px]">
        <div className=" flex-1 border-[1px] border-lightTextColor"></div>
        <h3 className="text-xl text-lightTextColor font-OG-Bold underline-offset-4">
          {title}
        </h3>
        <div className=" flex-1 border-[1px] border-lightTextColor"></div>
      </div>
      <div className="hidden mb-3 md:block">
        <div className="flex flex-row items-center justify-end gap-1 ">
          <div
            onClick={() => {
              singleGridSwiperRef.current?.swiper.slidePrev();
              singleGridSwiperRef.current?.swiper.isBeginning
                ? setShowNavigation({ left: false, right: true })
                : setShowNavigation({ left: true, right: true });
            }}
            className={` arrow  ${
              showNavigation.left
                ? "opacity-100 hover:cursor-pointer "
                : "opacity-40"
            } `}
          >
            <BoxLeftIcon className="size-[40px] stroke-lightTextColor" />
          </div>
          <div
            onClick={() => {
              singleGridSwiperRef.current?.swiper.slideNext();
              singleGridSwiperRef.current?.swiper.isEnd
                ? setShowNavigation({ left: true, right: false })
                : setShowNavigation({ left: true, right: true });
            }}
            className={`   ${
              showNavigation.right
                ? "opacity-100 hover:cursor-pointer"
                : "opacity-40"
            } `}
          >
            <BoxLeftIcon className="size-[40px] rotate-[180deg] stroke-lightTextColor" />
          </div>
        </div>
      </div>
      <SingleSwiper
        ref={singleGridSwiperRef}
        openViewProduct={openViewProduct}
      />
    </div>
  );
};
export default SingleRowGrid;
