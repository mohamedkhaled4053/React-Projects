import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
  let { loading, drinks } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {drinks.map((drink) => (
          <Cocktail key={drink.idDrink} drink={drink} />
        ))}
      </div>
    </section>
  );
};

export default CocktailList;
