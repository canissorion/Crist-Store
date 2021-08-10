import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import { Images } from "../../utils/images";
import "./Slider.scss";

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  background-color: pink;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
`;

const Slider = () => {
  return (
    <div className="container-fluid">
      <Carousel>
        <Item>
          <img src={Images.Slider01} alt="" className="carousel-image" />
        </Item>
        <Item>
          <img src={Images.Slider02} alt="" className="carousel-image" />
        </Item>
        <Item>
          <img src={Images.Slider03} alt="" className="carousel-image" />
        </Item>
      </Carousel>
    </div>
  );
};

export default Slider;
