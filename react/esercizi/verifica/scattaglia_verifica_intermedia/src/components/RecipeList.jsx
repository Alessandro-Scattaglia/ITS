import RecipeItem from './RecipeItem';

const DUMMY_RECIPES = [
  {
    id: 1,
    name: 'Spaghetti alla Carbonara',
    time: '20 min',
    difficulty: 'Facile',
    servings: 4,
  },
  {
    id: 2,
    name: 'Risotto ai Funghi',
    time: '30 min',
    difficulty: 'Media',
    servings: 4,
  },
  {
    id: 3,
    name: 'Tiramisù',
    time: '40 min',
    difficulty: 'Facile',
    servings: 6,
  },
  {
    id: 4,
    name: 'Lasagne al Ragù',
    time: '90 min',
    difficulty: 'Difficile',
    servings: 6,
  },
  {
    id: 5,
    name: 'Pizza Margherita',
    time: '120 min',
    difficulty: 'Media',
    servings: 4,
  },
];

function RecipeList() {
  return (
    <>
      <div className='recipe-list'>
        {DUMMY_RECIPES.map((recipe) => (
          <div key={recipe.id}>
            <h2>{recipe.name}</h2>
            <p>Tempo: {recipe.time}</p>
            <p>Difficolta' : {recipe.difficulty}</p>
            <p>Porzioni: {recipe.servings}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default RecipeList;
