import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

class Category extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="col-2 category__wrapper">
        <Link
          to={{
            pathname: `/categories/${this.props.id}`,
            state: {
              categoryName: this.props.name,
            },
          }}
        >
          <div style={{ width: "220px" }}>
            <img
              src={this.props.url}
              alt={`Category ${this.props.name} image`}
              className="category__image"
            />
            <h3 className="category__title">{this.props.name}</h3>
          </div>
        </Link>
      </div>
    );
  }
}

export default Category;
