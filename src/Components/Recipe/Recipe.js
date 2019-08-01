import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Recipe(props) {

    let handleSubmit = () => {

        let recipeToDelete = {
            _id: props._id
        }
        axios.delete(`http://localhost:5000/recipe/delete`, { data: recipeToDelete })
            .then(res => props.passFunc())
    }

    return (
        <div>
            <h4>{props.name}</h4>
            <button onClick={handleSubmit}>Delete</button>
            <button><Link to={props.name}>More</Link></button>
        </div>
    );
}

export default Recipe;
