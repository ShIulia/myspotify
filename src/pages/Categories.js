import React from "react";
import Category from "./Category";
import { withRouter } from "react-router-dom";
import { checkAndReturnToken } from "../utils";

class Categories extends React.Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    const token = checkAndReturnToken(this.props.history);

    if (token === null) {
      return;
    }

    fetch("https://api.spotify.com/v1/browse/categories", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        console.log(result);
        return result.json();
      })
      .then((data) => {
        const categories = data.categories.items.map((item) => {
          return {
            id: item.id,
            name: item.name,
            url: item.icons && item.icons.length > 0 ? item.icons[0].url : "",
          };
        });

        this.setState({
          categories: categories,
        });
      });
  }

  render() {
    return this.state.categories.map((category) => {
      return (
        <Category name={category.name} id={category.id} url={category.url} />
      );
    });
  }
}

export default withRouter(Categories);
