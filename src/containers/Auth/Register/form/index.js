import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

export const CarouselItem = ({ children }) => {
  return <div style={{margin:"0 10px"}}>{children}</div>;
};

export const Carousel = ({ children }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const carouselItems = React.Children.toArray(children);
  return (
    <CarouselView>
      <Slider {...settings}>{carouselItems.map((item) => item)}</Slider>
    </CarouselView>
  );
};
const CarouselView = styled.div``;
