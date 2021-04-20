import React from "react";

const Searchbox = (props) => {
    return (
        <div>
            <input type="text" onChange={props.search} placeholder="Search Animals" />
        </div>
    );
};


export default Searchbox;
