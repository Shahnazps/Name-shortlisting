import React, { Component } from "react";
import NamesList from "./namesList";

class Sort extends Component {
  render() {
    const { data, filterText, addFavourite } = this.props;
    // const genderList = data.map(name => {
    //   return <li key="id">{name.sex}</li>;
    // });
    //const nameList = data.filter(name => (name.sex == "girl"){
    //     return(
    //         <li key={name.id}>{name.name}</li>
    //     )
    // });
    // const namesList = data.map(name => {
    //   return (
    //     <li key={name.id} className={name.sex} s>
    //       {name.name}
    //     </li>
    //   );
    // });

    const girllist = data.filter(name => {
      return name.sex === "girl";
    });

    const gNameList = girllist.map(name => {
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

    const boylist = data.filter(name => {
      return name.sex === "boy";
    });

    const bNameList = boylist.map(name => {
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
    return (
      <div>
        <h4>List of Girls Name</h4>
        <ul>{gNameList}</ul>
        <h4>List of Boys Name</h4>
        <ul>{bNameList}</ul>
      </div>
    );
  }
}

export default Sort;
