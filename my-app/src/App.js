import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import ImageComponents from "./imageComponents";
class App extends Component {
  handleClick = () => {
    axios
      .post(
        "https://api.twitter.com/oauth/authenticate?oauth_token=NPcudxy0yU5T3tBzho7iCotZ3cnetKwcTIRlX0iwRl0",
        {
          firstName: "Fred",
          lastName: "Flintstone"
        }
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="App">
        <ImageComponents />
      </div>
    );
  }
}

export default App;
