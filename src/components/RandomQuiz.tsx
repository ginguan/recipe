import { Button } from "@mui/material";
import _, { forEach } from "lodash";
import React from 'react';
import { useState } from "react";
import { Drinks } from "../models/Drink";
import DrinkTable from "./DrinkTable";
import Header from "./Header";
import TextField from '@mui/material/TextField';

const RandomQuiz = ({ drinkSet }: { drinkSet: Drinks[] }) => {

    const [drinkSetShuffle, setShuffle] = useState(_.shuffle(drinkSet).slice(0, 4))
    const [showAnswer, setShowAnswer] = useState(false)
    return (
        <div>
            <Header logo={'QUIZ'} />
            {drinkSetShuffle.map((member) => (
                <div style={{ paddingLeft: '45%', paddingTop: '30px', fontWeight: 'bold', fontSize: '20px' }}>
                    {member.name}
                </div>
            ))}
            <div style={{ paddingLeft: '45%', paddingTop: '30px', fontWeight: 'bold', fontSize: '20px' }}>
                <Button onClick={() => {
                    setShuffle(_.shuffle(drinkSet).slice(0, 4))
                    window.location.reload()
                }}>Shuffled</Button>
            </div>
            <div style={{ paddingLeft: '45%', paddingTop: '30px', fontWeight: 'bold', fontSize: '20px' }}>
                <Button onClick={() => setShowAnswer(!showAnswer)}>Answers</Button>
            </div>
            {showAnswer &&
                <DrinkTable drinkSet={drinkSetShuffle} header={''} isAnswer={true} />}
            <div style={{ paddingLeft: '20%' }}>
                {drinkSetShuffle.map((member) => (
                    <TextField label={member.name} color="secondary" style={{ padding: '10px' }} />
                ))}</div>
            <div style={{ paddingLeft: '20%', paddingTop: '10px' }}>
                {drinkSetShuffle.map((member) => (
                    <TextField
                        style={{ padding: '10px', maxWidth: '195px' }}
                        label="method"
                        multiline
                        rows={2}
                    />
                ))}
            </div>
            <div style={{ paddingLeft: '20%', paddingTop: '10px' }}>
                {drinkSetShuffle.map((member) => (
                    <TextField
                        style={{ padding: '10px', maxWidth: '195px' }}
                        label="ingredient"
                        multiline
                        rows={4}
                    />
                ))}
            </div>
        </div>)
};

export default RandomQuiz;
