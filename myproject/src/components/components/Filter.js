import React from "react";


function Filter({getSearchTitle }) {

    return (
    <div id="navbar">
    <div id="left" className="cursor"><h1>Movie app</h1></div>

    <div id="right">
        <form>
        <input
            type="text"
            placeholder="Enter the title"
            className="mr-sm-2"
            onChange={(e) => getSearchTitle(e.target.value)}
        />
        <button variant="outline-success" id="search">Search</button>
        </form>
    </div>
    </div>
);
}

export default Filter;