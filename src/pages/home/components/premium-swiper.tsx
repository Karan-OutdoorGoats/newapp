import React, { forwardRef, useImperativeHandle } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import ProductCard from "./product-card";
import { Grid, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "./styles/premium-swiper.styles.css";
import { useScreenSize } from "hooks/useScreenSize";

interface PremiumSwiperProps {
  openViewProduct: () => void;
}

type RefType = SwiperRef | null;

const PremiumSwiper = forwardRef<RefType, PremiumSwiperProps>((props, ref) => {
  const { openViewProduct } = props;
  const screenSize = useScreenSize();

  return (
    <Swiper
      ref={ref}
      slidesPerView={screenSize.width > 600 ? 3 : 2}
      spaceBetween={screenSize.width > 600 ? 10 : 10}
      slidesPerGroup={screenSize.width > 600 ? 3 : 2}
      pagination={{}}
      navigation={{
        nextEl: ".premium_row_arrow-right",
        prevEl: ".premium_row_arrow-left",
        enabled: true,
      }}
      grid={{
        rows: 1,
      }}
      modules={[Grid, Navigation]}
      className="premium_row_grid"
    >
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
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
  );
});

export default PremiumSwiper;
