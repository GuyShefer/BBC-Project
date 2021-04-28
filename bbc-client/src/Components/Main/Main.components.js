import React from "react";
import SearchBar from "./../SearchComponent/SearchBar";
import Activities from "./../SearchComponent/Activities";
import './main.css'

export default function Main() {
    return (
        <div>
            <div className="landingContainer">
                <div className="wrapper">
                    <SearchBar />
                </div>
            </div>
            <div className="landingContainer">
                <h1>Latest:</h1>

                <Activities />
            </div>

        </div>

    );
}
