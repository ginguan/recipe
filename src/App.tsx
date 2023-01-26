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
         <Route path="/" element={<DrinkTable drinkSet = {all} header={'ALL'} isAnswer={false}/>} />
         <Route path="/All" element={<DrinkTable drinkSet = {all} header={'ALL'} isAnswer={false}/>} />
          <Route path="/non-alcoholic" element={<DrinkTable drinkSet = {NonAlcoholicDrinks} header={'NON-ALCOHOLIC'} isAnswer={false}/>} />
          <Route path="/vodka" element={<DrinkTable drinkSet = {VodkaDrinks} header={'VODKA'} isAnswer={false}/>} />
          <Route path="/liqueur" element={<DrinkTable drinkSet = {LiqueurDrinkns} header={'LIQUEUR'} isAnswer={false}/>} />
          <Route path="/gin" element={<DrinkTable drinkSet = {GinDrinkns} header={'GIN'} isAnswer={false}/>} />
          <Route path="/collins" element={<DrinkTable drinkSet = {Collins} header={'Collins test'} isAnswer={false}/>} />
          <Route path="/rum" element={<DrinkTable drinkSet = {RumDrinks} header={'Rum'} isAnswer={false}/>} />
          <Route path="/quiz" element={<RandomQuiz drinkSet = {all} />} />
          <Route path="/recipe/All" element={<DrinkTable drinkSet = {all} header={'ALL'} isAnswer={false}/>} />
          <Route path="/recipe/non-alcoholic" element={<DrinkTable drinkSet = {NonAlcoholicDrinks} header={'NON-ALCOHOLIC'} isAnswer={false}/>} />
          <Route path="/recipe/vodka" element={<DrinkTable drinkSet = {VodkaDrinks} header={'VODKA'} isAnswer={false}/>} />
          <Route path="/recipe/liqueur" element={<DrinkTable drinkSet = {LiqueurDrinkns} header={'LIQUEUR'} isAnswer={false}/>} />
          <Route path="/recipe/gin" element={<DrinkTable drinkSet = {GinDrinkns} header={'GIN'} isAnswer={false}/>} />
          <Route path="/recipe/collins" element={<DrinkTable drinkSet = {Collins} header={'Collins test'} isAnswer={false}/>} />
          <Route path="/recipe/rum" element={<DrinkTable drinkSet = {RumDrinks} header={'Rum'} isAnswer={false}/>} />
          <Route path="/recipe/quiz" element={<RandomQuiz drinkSet = {all} />} />
       </Routes>
    </>
  );
}

export default App;
