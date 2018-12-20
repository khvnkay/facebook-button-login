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

class OneImage extends Component {
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
      <div
        style={{
          position: "relative",
          display: "inline-block",
          height: 300,
          width: 200
        }}
      >
        <Card>
          <Image
            height={300}
            width={200}
            color="teal"
            style={{ display: "block" }}
            src={img}
          />
        </Card>

        <Rail
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: " translate(-50%, -50% )"
          }}
          internal
          position={"center"}
        >
          <Header
            textAlign={"center"}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: " translate(-50%, -50% )",
              "text-align": "center",
              "font-weight": "bold"
            }}
            as="h3"
          >
            {this.props.text}
          </Header>
        </Rail>
      </div>
    );
  }
}

export default OneImage;
