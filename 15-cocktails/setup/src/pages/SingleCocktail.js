import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../useFetch';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  let { id } = useParams();
  // get the drink by the custom hook useFetch
  let { loading, drinks } = useFetch(url, id);

  if (loading) {
    return <Loading />;
  }

  if (!drinks) {
    return <h2 class="section-title">no cocktail to display</h2>;
  }

  let drink = drinks[0];
  let { strDrink, strCategory, strAlcoholic, strGlass, strInstructions } =
    drink;

  // get any value of any ingredient key
  // then remove null values from array by filter
  let ingredients = Object.keys(drink)
    .map((key) => {
      if (key.includes('Ingredient')) {
        return drink[key];
      }
      return null;
    })
    .filter((ingredient) => ingredient !== null);

  return (
    <section className="section cocktail-section">
      <Link className="btn btn-primary" to="/">
        back home
      </Link>
      <h2 className="section-title">{strDrink}</h2>
      <div className="drink">
        <img
          src="https://www.thecocktaildb.com/images/media/drink/xrl66i1493068702.jpg"
          alt="{strDrink}"
        />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {strDrink}
          </p>
          <p>
            <span className="drink-data">category :</span> {strCategory}
          </p>
          <p>
            <span className="drink-data">info :</span> {strAlcoholic}
          </p>
          <p>
            <span className="drink-data">glass :</span> {strGlass}
          </p>
          <p>
            <span className="drink-data">instructons :</span> {strInstructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {ingredients.map((ingredient) => (
              <span key={ingredient} style={{ marginRight: '20px' }}>
                {ingredient}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
