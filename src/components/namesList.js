import React, { Component } from "react";

class NamesList extends Component {
  state = {};
  render() {
    const { data, filterText, addFavourite } = this.props;
    //doubt 1
    const namesList = data.map(name => {
      return (
        <li
          key={name.id}
          className={name.sex}
          onClick={() => addFavourite(name.id)}
        >
          {name.name}
        </li>
      );
    });
    data.filter(name => {
      //remove name that donot match current filter text
      return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
    });

    return (
      <div>
        <p>filter name : {filterText}</p>
        <ul>{namesList}</ul>
      </div>
    );
  }
}

export default NamesList;
