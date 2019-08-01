import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

import Home from "./Home"
import RecipeList from "./Recipe/RecipeList"
import RecipeForm from "./Recipe/RecipeForm"
import { RecipeCard } from "./Recipe/RecipeCard"


class Routes extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    getData = () => {
        axios.get("http://localhost:5000/recipe/all").then(response => {
            this.setState({
                data: response.data
            })

        })
    }

    componentDidMount() {
        this.getData();

    }

    render() {
        return (
            <div >
                <Router >
                    <div>
                        <ul>
                            <button><Link to="/">Home</Link></button>
                            <button><Link to="/RecipeForm">Create Recipe</Link></button>
                        </ul>
                        <Route exact path="/" component={Home} />
                        <Route path="/RecipeList" component={RecipeList} />
                        <div>
                            <Route path="/RecipeForm" render={(props) =>
                                <RecipeForm passFunc={this.getData} />} />
                        </div>

                        {this.state.data.map((item, index) => (
                            <div key={index}>

                                <Route path={"/" + item.name} render={(props) =>
                                    <RecipeCard passFunc={this.getData}
                                        description={item.description}
                                        ingredients={item.ingredients}
                                        name={item.name}
                                        image={item.image}
                                    />} />
                            </div>
                        ))}
                    </div>
                </Router>
            </div >
        )
    }
}

export default Routes;