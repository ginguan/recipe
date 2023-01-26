import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { LiqueurDrinkns, NonAlcoholicDrinks, VodkaDrinks } from '../constants';
import { Drinks } from '../models/Drink';
import { Button, Typography } from '@mui/material';
import * as _ from "lodash";
import { useEffect } from 'react';

const Row = ({ row, setRows, rows }: { row: Drinks, setRows:any, rows: Drinks[]}) => {

    const [open, setOpen] = useState(false);
    const tryFillter=(tag: String)=>{
        // setRows(rows.filter((item)=>{item.tag === row.tag}))
        console.log('rows',rows, row.tag)
        const tagName = row.tag
        console.log('rows',rows.filter((item)=>{item.tag == tagName}))
    }
    return (

        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" style={{ fontWeight: 'bold', color: 'MidnightBlue' }}>
                    {row.name}
                </TableCell>
                <TableCell onClick={()=>tryFillter(row.tag)}>{row.tag}</TableCell>
                <TableCell >{row.glass}</TableCell>
                <TableCell >{row.method}</TableCell>
                <TableCell >{row.note}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingLeft: 130, paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            {/* <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography> */}
                            <Table align='center'>
                                <TableBody>
                                    {row.ingredients.map((ingredient) => (
                                        <TableRow>
                                            <TableCell width='30%' component="th" scope="row" style={{ color: 'ForestGreen' }} >
                                                {ingredient.measure}
                                            </TableCell>
                                            <TableCell align='left' style={{ color: 'ForestGreen' }}>{ingredient.ingredient}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}


const DrinkTable = ({ drinkSet, header }: { drinkSet: Drinks[], header: String }) => {
    const [rows, setRows] = useState(drinkSet)
    const sortArray = (tags: keyof Drinks) => {
        setRows(_.orderBy(rows, tags))
    }
    return (
        <TableContainer style={{paddingTop:'50px'}}>
            <Typography variant="h4" component="h2" style={{paddingLeft:'90px'}}>
                {header}
            </Typography>;
            <Table align='center' style={{ width: "80%", tableLayout: "auto" }} >
                <TableHead>
                    <TableRow>
                        <TableCell><Button onClick={() => setRows(drinkSet)}>Reset</Button></TableCell>
                        <TableCell style={{ fontWeight: 'bold' }} sortDirection='asc'>Drinks<Button onClick={() => sortArray('name')}>^</Button></TableCell>
                        <TableCell style={{ fontWeight: 'bold' }} sortDirection='asc'>Base<Button onClick={() => sortArray('tag')}>^</Button></TableCell>
                        <TableCell style={{ fontWeight: 'bold' }} sortDirection='asc'>Glasss<Button onClick={() => sortArray('glass')}>^</Button></TableCell>
                        <TableCell style={{ fontWeight: 'bold' }} sortDirection='asc'>Methods<Button onClick={() => sortArray('method')}>^</Button></TableCell>
                        <TableCell style={{ fontWeight: 'bold' }} sortDirection='asc'>Note<Button onClick={() => sortArray('note')}>^</Button></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row row={row} setRows={setRows} rows={rows}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DrinkTable;
