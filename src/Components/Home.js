import React, { Component } from 'react';
import axios from "axios";

import RecipeList from "./Recipe/RecipeList"
// import Navbar from './Navbar/Navbar';

import './Home.css';

class Home extends Component {

    constructor() {
        super();
        this.state = ({
            data: []
        })
    }

    componentDidMount = () => {
        this.getData();
    }

    getData = () => {
        axios.get("http://localhost:5000/recipe/all").then(response => {
            this.setState({
                data: response.data
            })

        })
    }

    render() {
        return (
            <div>
                <div className="App-header">
                    <h1>Recipe List</h1>
                </div>
                <div className="App">
                    <div>
                        <RecipeList passFunc={this.getData} data={this.state.data} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;