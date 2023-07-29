import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (film) => {
    const isAlreadyFavorite = favorites.find((favorite) => favorite.id === film.id);
    if (isAlreadyFavorite) {
      const newFavorites = favorites.filter((favorite) => favorite.id !== film.id);
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, film]);
    }
  };

  const values = {
    data,
    setData,
    favorites,
    setFavorites,
    toggleFavorite,
  };

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default AppProvider;
