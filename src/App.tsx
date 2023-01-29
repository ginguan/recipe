import { Route, Routes } from 'react-router-dom';
import './App.css';
import DrinkTable from './components/DrinkTable';
import RandomQuiz from './components/RandomQuiz';
import { BrandyDrinks, Collins, GinDrinkns, LiqueurDrinkns, NonAlcoholicDrinks, ReviewQuestion, RumDrinks, TequilaDrinks, VodkaDrinks, WhiskeyDrinks } from './constants';
import * as React from 'react';
import ReviewTable from './components/ReviewTable';

function App() {
  const all = [...NonAlcoholicDrinks,...VodkaDrinks,...LiqueurDrinkns,...GinDrinkns,...RumDrinks,...TequilaDrinks,...WhiskeyDrinks,...BrandyDrinks]
  const quiz = [...GinDrinkns,...RumDrinks,...TequilaDrinks,...WhiskeyDrinks,...BrandyDrinks]
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
          <Route path="/tequila" element={<DrinkTable drinkSet = {TequilaDrinks} header={'Tequila'} isAnswer={false}/>} />
          <Route path="/whiskey" element={<DrinkTable drinkSet = {WhiskeyDrinks} header={'Whiskey'} isAnswer={false}/>} />
          <Route path="/brandy" element={<DrinkTable drinkSet = {BrandyDrinks} header={'Brandy'} isAnswer={false}/>} />
          <Route path="/quiz" element={<RandomQuiz drinkSet = {quiz} />} />
          <Route path="/review" element={<ReviewTable drinkSet = {ReviewQuestion} header={'Review'} isAnswer={false} />} />
       </Routes>
    </>
  );
}

export default App;
