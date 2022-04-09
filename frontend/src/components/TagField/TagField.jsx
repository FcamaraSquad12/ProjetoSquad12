import React from "react";
import './TagField.css'

export default ({tag, onClick}) => 
<div>
    <button name={tag} onClick={onClick} className="search-span">{tag}</button>
</div>