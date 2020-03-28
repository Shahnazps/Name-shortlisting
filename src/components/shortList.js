import React, { Component } from "react";

export default ({ data, favourites }) => {
  //console.log("list of favourites ", props.favourites);
  //console.log(data);
  const namesList = favourites.map(id => {
    const { name, sex } = data[id];
    //console.log(name);
    return (
      <li key={id} className={sex}>
        {name}
      </li>
    );
  });
  return (
    <div className="favourites">
      <h4>Click on a name to shortlist it ...</h4>
      <ul>{namesList}</ul>
    </div>
  );
};
