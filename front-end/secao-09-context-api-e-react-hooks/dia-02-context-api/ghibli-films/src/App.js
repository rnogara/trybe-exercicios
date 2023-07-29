import { Route, Routes } from 'react-router-dom';
import {  useContext, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import useFetch from './hooks/useFetch';
import AppContext from './context/AppContext';

function App() {
  const { setData } = useContext(AppContext);
  const [ loading, error, result, fetchData] = useFetch();

  useEffect(() => {
    fetchData('https://api-trybe-frontend.vercel.app/api/ghibli-animations');
  }, []);

  useEffect(() => {
    if (result) {
      setData(result);
    }
  }, [result]);

  if (loading) {return(<h1>Loading...</h1>)};
  if (error) {return global.alert('Something went wrong while acessing the data, plese return again later')};

  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route path="/favorites" element={ <Favorites /> } />
    </Routes>
  );
}

export default App;