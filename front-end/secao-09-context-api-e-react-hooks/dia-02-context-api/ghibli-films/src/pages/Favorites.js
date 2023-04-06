// src/pages/Favorites.js
import { useContext } from 'react';
import FilmCard from '../components/FilmCard';
import Header from '../components/Header';
import AppContext from '../context/AppContext';

export default function Favorites() {
  const { favorites } = useContext(AppContext);

  return (
    <>
      <Header />
      <main>
        <h1>Favorites</h1>
        <section>
          {favorites.map((film) => (
            <FilmCard
              key={ film.id }
              film={ film }
              isFavorite={ favorites.some((favorite) => favorite.id === film.id) }
            />
          ))}
        </section>
      </main>
    </>
  );
}