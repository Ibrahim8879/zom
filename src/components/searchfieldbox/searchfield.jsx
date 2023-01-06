import React from "react";
import "./searchfield.css";

export const Searchfieldarea = ({placeholder,handleonchange}) => (
    <input 
    className="search"
        type='Search' 
        placeholder={placeholder}
        onChange={handleonchange}
    />
);