import React from "react";

const Searchbox = (props) => {
  return (
    <div className="search">
      <input type="text" onChange={props.search} placeholder="Search Recipe" />
    </div>
  );
};

export default Searchbox;
