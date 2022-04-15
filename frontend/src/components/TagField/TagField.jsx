import React from "react";
import './TagField.css'

export default ({name, tag, onClick, selected}) => 
<div>
    <button name={name} onClick={onClick} className={`search-span ${selected ? 'search-span-selected': ''}`}>{tag}</button>
</div>