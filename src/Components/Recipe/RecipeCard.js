import React, { Component } from 'react';

export class RecipeCard extends Component {

    render() {
        return (
            < div className="formDiv" >
                <div className="App-header">
                    <h1>{this.props.name}</h1>
                </div>
                <p>Description: {this.props.description}</p>
                <p>Ingredients: {this.props.ingredients}</p>
                < img src={this.props.image} alt="error" ></img >
            </div >
        );
    }
}

export default RecipeCard;