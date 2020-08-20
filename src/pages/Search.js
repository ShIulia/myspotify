import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";

export default class Search extends React.Component {
  state = {
    searchValue: "",
    items: [],
  };

  handleOnChange(event) {
    this.setState({ searchValue: event.target.value });
  }

  handleSearch() {
    this.makeApiCall(this.state.searchValue);
  }

  makeApiCall(searchInput) {
    const token = localStorage.getItem("token");
    const parsedToken = JSON.parse(token);

    fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=artist`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${parsedToken.token}`,
      },
    }).then((result) => {
      console.log(result);
      return result.json();
    });
  }

  render() {
    return (
      <div>
        <Form inline>
          <FormControl
            name="text"
            type="text"
            placeholder="Search"
            onChange={(event) => this.handleOnChange(event)}
            value={this.state.searchValue}
          />
          <Button onClick={() => this.handleSearch()}>Search</Button>
        </Form>
        <div>{this.state.searchValue}</div>
      </div>
    );
  }
}
