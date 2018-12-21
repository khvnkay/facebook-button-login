import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import {
  Card,
  Icon,
  Image,
  Reveal,
  Container,
  Label,
  Input,
  Header,
  Button,
  Rail,
  Segment,
  Dropdown
} from "semantic-ui-react";
import img from "../src/ll.jpg";
import Slider from "react-slick";
import OneImage from "./oneImge";
import _ from "lodash";
var tagOptions = [
  {
    text: "propmpong",
    value: "Important",
    image: { color: "purple" }
  },
  {
    text: "siam",
    value: "Important",
    label: { color: "purple", empty: true, circular: true }
  },
  {
    text: "victory moment",
    value: "Important",
    label: { color: "blue", empty: true, circular: true }
  },
  {
    text: "sapa",
    value: "Important",
    label: { color: "yellow", empty: true, circular: true }
  },
  {
    text: "chongnonsri",
    value: "Important",
    label: { color: "pink", empty: true, circular: true }
  }
];
class ImageComponents extends Component {
  contentCom = () => {
    return <div> "hello World" </div>;
  };

  render() {
    const settings = {
      className: "slider variable-width",
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <div>
        <h2>Variable width</h2>
        <Slider {...settings}>
          {_.map(tagOptions, v => {
            return (
              <div style={{ width: 160 }}>
                <OneImage text={v.text} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default ImageComponents;
