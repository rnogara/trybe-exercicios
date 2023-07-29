import { useContext } from 'react';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import FilmCard from '../components/FilmCard';

export default function Home() {
  const { data, favorites } = useContext(AppContext);

  return (
    <>
      <Header />
      <main>
        <h1>Films</h1>
        <section>
          {data.map((film) => (
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