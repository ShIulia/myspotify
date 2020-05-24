import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Link
          to={{
            pathname: `/playlists/${this.props.id}`,
            state: {
              categoryName: this.props.name,
            },
          }}
        >
          {this.props.name}
        </Link>
      </div>
    );
  }
}

//   componentdidMount() {
//     console.log(this.props);
//   }

//   handleOnClick() {
//     console.log(`${this.props.name} was clicked`);
//   }

//   render() {
//     <div>
//       <Link
//         to={{
//           pathname: `/playlist/${this.props.id}`,
//           state: {
//             categoryName: this.props.name;
//           }
//         }}
//       >
//         {this.props.name}
//       </Link>
//     </div>
//     );

//     // return <div onClick={() => this.handleOnClick()}>{this.props.name}</div>;
//   }
// }

export default Category;
