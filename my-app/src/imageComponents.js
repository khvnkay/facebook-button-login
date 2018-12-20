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
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500
    };
    return (
      <div>
        <h2>Variable width</h2>
        <Slider {...settings}>
          {_.map(tagOptions, v => {
            return (
              <Container padded>
                <OneImage text={v.text} />
              </Container>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default ImageComponents;
