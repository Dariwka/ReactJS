import React from "react";

const Searchbox = (props) => {
  return (
    <div>
      <input type="text" onChange={props.search} placeholder="Search Recipe" />
    </div>
  );
};

export default Searchbox;
