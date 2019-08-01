import React, { Component } from 'react';
import axios from "axios";

class RecipeForm extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleSubmit = event => {
        event.preventDefault();

        let post = {
            name: event.target[0].value,
            description: event.target[1].value,
            ingredients: event.target[2].value,
            image: event.target[3].value
        };

        axios.post(`http://localhost:5000/recipe/create`, post)
            .then(res => {
                this.props.passFunc();
                console.log("placeholder2")
            }
            )
    }

    render() {
        return (
            <div>
                <div className="App-header">
                    <h1>Create A Recipe</h1>
                </div>
                <div className="CreateForm">
                    <form onSubmit={this.handleSubmit}>
                        <label>Name:
                        <input type="text" name="name" />
                        </label>
                        <br />
                        <label>Description:
                        <input type="text" name="name" />
                        </label>
                        <br />
                        <label>Ingredients:
                        <input type="text" name="name" />
                        </label>
                        <br />
                        <label>Image:
                        <input type="text" name="name" />
                        </label>
                        <br />
                        <button type="submit">Post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default RecipeForm;