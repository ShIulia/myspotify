import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";

export default class Search extends React.Component {
  state = {
    searchValue: "",
    items: [],
  };

  handleOnChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  handleSearch = () => {
    this.makeApiCall(this.state.searchValue);
  };

  makeApiCall = (searchInput) => {
    var searchUrl = `https://api.spotify.com/v1/search=${searchInput}`;
    fetch(searchUrl)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        this.setState({ items: jsonData.items });
      });
  };

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
        <div>Searching for:{this.state.searchValue}</div>
      </div>
    );
  }
}
