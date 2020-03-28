import React, { Component } from "react";
import "./App.css";
import NamesList from "./components/namesList";
import Credit from "./components/credit";
import Search from "./components/search";
import ShortList from "./components/shortList";
import Sort from "./components/sort.js";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "hello",
      favourites: []
    };
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    });
  }

  addFavourite(id) {
    //console.log("id to add to fav", id);
    const favlist = this.state.favourites.concat([id]);
    this.setState({
      favourites: favlist
    });
  }

  render() {
    console.log(
      "filterText state from parent component ",
      this.state.filterText
    );
    return (
      <div>
        <Search
          filter={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <ShortList
            favourites={this.state.favourites}
            data={this.props.data}
          />
          <NamesList
            data={this.props.data}
            filterText={this.state.filterText}
            addFavourite={this.addFavourite.bind(this)}
          />
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
