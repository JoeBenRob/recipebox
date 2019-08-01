import React from 'react';
import { Table } from 'reactstrap';

import Recipe from './Recipe'

function RecipeList(props) {
    return (
        <div>
            <Table >
                <tbody>
                    {props.data.map((recipe, index) => (
                        <tr key={index}>
                            <td>
                                <Recipe passFunc={props.passFunc}
                                    name={recipe.name}
                                    description={recipe.description}
                                    ingredients={recipe.ingredients}
                                    image={recipe.image}
                                    _id={recipe._id}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div >
    );
}

export default RecipeList;