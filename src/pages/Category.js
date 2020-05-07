import React from "react";
import { withRouter } from "react-router-dom";
import { Switch, Link, Route } from "react-router-dom";

class Category extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    fetch("https://api.spotify.com/v1/browse/categories", {
      method: "POST",
      headers: new Headers({}),
    }).then((result) => {
      console.log(result);
    });
  }

  render() {
    console.log(this.props.match);
    return (
      <div>
        <ul>
          <li>
            <Link to="/categories/home">AT HOME</Link>
          </li>
          <li>
            <Link to="/categories/party">PARTY</Link>
          </li>
          <li>
            <Link to="/categories/decades">DECADES</Link>
          </li>
          <li>
            <Link to="/categories/focus">FOCUS</Link>
          </li>
          <li>
            <Link to="/categories/mood">MOOD</Link>
          </li>
          <li>
            <Link to="/categories/hiphop">HIP-HOP</Link>
          </li>
          <li>
            <Link to="/categories/electronic">ELECTRONIC</Link>
          </li>
          <li>
            <Link to="/categories/chill">CHILL</Link>
          </li>
          <li>
            <Link to="/categories/wellness">WELLNESS</Link>
          </li>
          <li>
            <Link to="/categories/workout">WORKOUT</Link>
          </li>
        </ul>

        {`Category page for ${
          this.props.match !== null ? this.props.match.params.id : "Unknown"
        } `}
      </div>
    );
  }
}

export default withRouter(Category);
