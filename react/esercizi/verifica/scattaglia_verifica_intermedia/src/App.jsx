import Button from './components/Button';
import Container from './components/Container';
import RecipeList from './components/RecipeList';
import RegistrationForm from './components/RegistrationForm';


const gestisciClick = () => {
  alert('Il bottone è stato cliccato!!');
};


function App() {

  return <>
    <h2>1. Button</h2>
    <Button
      onClick={gestisciClick}
      title="Fai clic su di me e comparira' un allert "
    />
    <h2>2. Container</h2>
    <Container>
      <h4>prova1</h4>
      <p>prova2</p>

    </Container>

    <h2>3. RecipeList</h2>
    <RecipeList />
    <h2>4. Form</h2>
    <RegistrationForm />
  </>
}

export default App
