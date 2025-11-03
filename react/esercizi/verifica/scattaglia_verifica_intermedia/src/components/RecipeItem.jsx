
import React from 'react';

function RecipeItem({ recipe }) {
    return (
        <>
        <div>
            <h2>{recipe.name}</h2>
            <p>Tempo: {recipe.time}</p>
            <p>Difficolta': {recipe.difficulty}</p>
            <p>Porzioni: {recipe.servings}</p>
        </div>
        </>
    );
}

export default RecipeItem;
