import React from "react";
import { SwiperOptions } from "swiper";
import "./styles.scss";
export interface ISlidesSwiperProps extends SwiperOptions {
    listItems?: string[] | number[] | React.ReactNode[] | JSX.Element[];
    className?: string;
    currentValue?: number;
    showCutomForwardBack?: boolean;
    showCutomPaging?: boolean;
    customLabelBack?: string | React.ReactNode;
    customLabelForward?: string | React.ReactNode;
    onSelectedValue?: (val: number) => any;
}
declare const SlidesSwiper: React.FC<ISlidesSwiperProps>;
export default SlidesSwiper;
