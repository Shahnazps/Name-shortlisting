import React, { Component } from "react";
import NamesList from "./namesList";

class Sort extends Component {
  render() {
    const { data } = this.props;
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
    return (
      <div>
        {data
          .filter(name => name.sex == "girl")
          .map(filteredName => (
            <li>{filteredName}</li>
          ))}
      </div>
    );
  }
}

export default Sort;
