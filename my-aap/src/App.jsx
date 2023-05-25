import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Home from './components/Home';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Favorites from './components/Favorites';
import Description from './components/Description';
import Form from './components/Form';
import React from 'react';
import Basket from './components/basket/Basket';

export const AppContext = React.createContext({});

function App() {

  //хранение каких-то данных
  const [piano, setPiano] = useState ([])
  //для избранных товаров
  const [favorites, setFavorites] = useState ([])
  //для корзины
  const [overlayItems, setOverlayItems] = useState ([])
  useEffect (() => {

      async function axiosData() {
          const pianoData = await axios.get('https://645fde3cca2d89f7e74f6f9a.mockapi.io/Piano')
          const favoritesData = await axios.get('https://645fde3cca2d89f7e74f6f9a.mockapi.io/Form')
          const cartData = await axios.get('https://645fde3cca2d89f7e74f6f9a.mockapi.io/Form')
          setPiano(pianoData.data)
          setFavorites(favoritesData.data)
          setOverlayItems(cartData.data)
        }

        axiosData();
  },[])


    const deleteItems=(id)=> {
      axios.delete(`https://645fde3cca2d89f7e74f6f9a.mockapi.io/Cart/${id}`);
      setOverlayItems((objDelete)=> objDelete.filter(item => item.id!== id))
    }

    const isAdded=(myId)=> {
      return overlayItems.some((objIsAdded)=> objIsAdded.myId === myId)
    }
    const isFav=(myId)=> {
      return favorites.some((objIsFav)=> objIsFav.myId === myId)
    }

  return (
    <AppContext.Provider 
    value={
      {
        piano,
        setPiano,
        overlayItems,
        setOverlayItems,
        favorites,
        setFavorites,
        isFav,
        isAdded
      }
    }>
    <div>
        <Router>
          <Header/>
            <Routes>

              <Route path="/favorites" 
              element={
                <Favorites
                favorites={favorites}
                setFavorites={setFavorites}
                items={piano}
                overlayItems={overlayItems}
                setOverlayItems={setOverlayItems}
                />
              }/>
              <Route path="/" 
              element={
                <Home
                  item={piano}
                  overlayItems={overlayItems}
                  setOverlayItems={setOverlayItems}
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              }/>
              <Route path="/description" 
              element={
                <Description/>
              
              }/>
              <Route path="/form" 
              element={
                <Form/>
              }/>


              <Route path="/cart" 
              element={
                <Basket
                overlayProp={overlayItems}
                deleteItems={deleteItems}
                />
              }/>
          </Routes>
        </Router>
        <Footer/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
