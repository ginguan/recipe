import { Button } from "@mui/material";
import _, { forEach } from "lodash";
import React from 'react';
import { useState } from "react";
import { Drinks } from "../models/Drink";
import DrinkTable from "./DrinkTable";
import Header from "./Header";

const RandomQuiz = ({ drinkSet }: { drinkSet: Drinks[] }) => {

    const [drinkSetShuffle, setShuffle] = useState(_.shuffle(drinkSet).slice(0,4))
    const [showAnswer, setShowAnswer] = useState(false)
    return (
        <div>
            <Header logo={'QUIZ'}/>
            {drinkSetShuffle.map((member) => (
                <div style={{ paddingLeft: '45%', paddingTop: '30px', fontWeight: 'bold', fontSize: '20px' }}>
                    {member.name}
                </div>
            ))}
            <div style={{ paddingLeft: '45%', paddingTop: '30px', fontWeight: 'bold', fontSize: '20px' }}>
                <Button onClick={() => setShuffle(_.shuffle(drinkSet).slice(0,4))}>Shuffled</Button>
            </div>
            <div style={{ paddingLeft: '45%', paddingTop: '30px', fontWeight: 'bold', fontSize: '20px' }}>
                <Button onClick={() => setShowAnswer(!showAnswer)}>Answers</Button>
            </div>
            {showAnswer && 
            <DrinkTable drinkSet={drinkSetShuffle} header={''} isAnswer={true}/>}
        </div>)
};

export default RandomQuiz;
