import './App.css';
import DrinkTable from './components/DrinkTable';
import React from 'react';
import { NonAlcoholicDrinks, VodkaDrinks, LiqueurDrinkns, GinDrinkns, Collins, RumDrinks } from './constants';
import { Routes, Route } from 'react-router-dom';
import RandomQuiz from './components/RandomQuiz';


function App() {
  const all = NonAlcoholicDrinks.concat(VodkaDrinks).concat(LiqueurDrinkns).concat(GinDrinkns).concat(RumDrinks)
  return (
    <>
         <Routes>
         <Route path="/" element={<DrinkTable drinkSet = {all} header={'ALL'}/>} />
          <Route path="/non-alcoholic" element={<DrinkTable drinkSet = {NonAlcoholicDrinks} header={'NON-ALCOHOLIC'}/>} />
          <Route path="/vodka" element={<DrinkTable drinkSet = {VodkaDrinks} header={'VODKA'}/>} />
          <Route path="/liqueur" element={<DrinkTable drinkSet = {LiqueurDrinkns} header={'LIQUEUR'}/>} />
          <Route path="/gin" element={<DrinkTable drinkSet = {GinDrinkns} header={'GIN'}/>} />
          <Route path="/collins" element={<DrinkTable drinkSet = {Collins} header={'Collins test'}/>} />
          <Route path="/rum" element={<DrinkTable drinkSet = {RumDrinks} header={'Rum'}/>} />
          <Route path="/quiz" element={<RandomQuiz drinkSet = {all} />} />
       </Routes>
    </>
  );
}

export default App;
