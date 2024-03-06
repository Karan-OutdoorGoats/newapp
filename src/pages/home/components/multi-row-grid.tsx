import { useRef, useState } from "react";

import { Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

import BoxLeftIcon from "assets/svg/components/BoxLeftIcon";
import "./styles/multi-row-grid.styles.css";
import ProductCard from "./product-card";
import { images } from "utils/images";
import { useScreenSize } from "hooks/useScreenSize";

interface MultiRowGridProps {
  title: string;
  openViewProduct: () => void;
}

const MultiRowGrid = (props: MultiRowGridProps) => {
  const { title, openViewProduct } = props;
  const multiGridSwiperRef = useRef<SwiperRef | null>(null);
  const screenSize = useScreenSize();
  const [showNavigation, setShowNavigation] = useState({
    left: false,
    right: true,
  });

  return (
    <div className="px-2 md:px-10 md:my-5">
      <div className="flex flex-row items-center justify-between gap-4 h-[60px] md:h-[60px] ">
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
              multiGridSwiperRef.current?.swiper.slidePrev();
              multiGridSwiperRef.current?.swiper.isBeginning
                ? setShowNavigation({ left: false, right: true })
                : setShowNavigation({ left: true, right: true });
            }}
            className={` arrow  ${
              showNavigation.left
                ? "opacity-100 hover:cursor-pointer "
                : "opacity-40"
            } `}
          >
            <BoxLeftIcon className="size-[30px]  md:size-[40px] stroke-lightTextColor" />
          </div>
          <div
            onClick={() => {
              multiGridSwiperRef.current?.swiper.slideNext();
              multiGridSwiperRef.current?.swiper.isEnd
                ? setShowNavigation({ left: true, right: false })
                : setShowNavigation({ left: true, right: true });
            }}
            className={`   ${
              showNavigation.right
                ? "opacity-100 hover:cursor-pointer"
                : "opacity-40"
            } `}
          >
            <BoxLeftIcon className="size-[30px]  md:size-[40px] rotate-[180deg] stroke-lightTextColor" />
          </div>
        </div>
      </div>
      <div className="h-[780px] sm:h-[1020px]">
        <Swiper
          ref={multiGridSwiperRef}
          slidesPerView={screenSize.width > 600 ? 4 : 2}
          spaceBetween={screenSize.width > 600 ? 15 : 10}
          slidesPerGroup={screenSize.width > 600 ? 4 : 2}
          pagination={{}}
          navigation={{
            nextEl: ".multi_row_arrow-right",
            prevEl: ".multi_row_arrow-left",
            enabled: true,
          }}
          grid={{
            rows: 2,
            fill: "row",
          }}
          modules={[Grid, Navigation]}
          className="multi_row_grid"
        >
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ].map((i, index) => {
            return (
              <SwiperSlide>
                <ProductCard
                  openViewProduct={openViewProduct}
                  index={index}
                  len={20}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default MultiRowGrid;
