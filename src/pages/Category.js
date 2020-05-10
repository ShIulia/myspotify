import React from "react";
import { withRouter } from "react-router-dom";
import { Switch, Link, Route } from "react-router-dom";

class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  handleOnClick() {
    console.log(`${this.props.name} was clicked`);
  }

  render() {
    return <div onClick={() => this.handleOnClick()}>{this.props.name}</div>;
  }
}

export default withRouter(Category);
