import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as _ from "lodash";
import React, { useState } from 'react';
import { Review } from '../models/Drink';
import Header from './Header';

const Row = ({ row, setRows, rows }: { row: Review, setRows:any, rows: Review[]}) => {

    const [open, setOpen] = useState(false);
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
                    {row.question}
                </TableCell>
                <TableCell component="th" scope="row" style={{ fontWeight: 'bold', color: 'MidnightBlue' }}>
                    {row.section}
                </TableCell>
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
                                    
                                        <TableRow>
                                            <TableCell component="th" scope="row" style={{ color: 'Black' }} >
                                               <div style={{whiteSpace:'pre-line'}}>{row.answer}</div> 
                                            </TableCell>
                                            
                                        </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}


const ReviewTable = ({ drinkSet, header, isAnswer }: { drinkSet: Review[], header: String, isAnswer: Boolean }) => {
    const [rows, setRows] = useState(drinkSet)
    const [filteredDrinks, setFilteredDrinks] = useState(drinkSet);
    const [searchTerm, setSearchTerm] = useState('')
    const [sortDirect,setSortDirect] = useState('asc' as _.Many<boolean | "asc" | "desc">) 
    const sortArray = (question: keyof Review) => {
        setRows(_.orderBy(rows, question, sortDirect))
        setFilteredDrinks(_.orderBy(filteredDrinks, question, sortDirect))
        const newSort = sortDirect === 'asc' as _.Many<boolean | "asc" | "desc">? 'desc' as _.Many<boolean | "asc" | "desc"> :'asc' as _.Many<boolean | "asc" | "desc">
        setSortDirect(newSort)
    }

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchTerm(event.target.value);
        setFilteredDrinks(rows.filter(drink => (drink.question.toLowerCase().includes(event.target.value.toLowerCase())||(drink.section.toLowerCase().includes(event.target.value.toLowerCase())))))
    }
    return (
        
        <TableContainer>
                        
            {!isAnswer && <Header logo={header}/>}
            {!isAnswer &&<TextField onChange={(event)=>{handleSearch(event)}} style={{padding:'20px'}} placeholder='search' value={searchTerm}/>}
            <Table align='center' style={{ width: "80%", tableLayout:'auto'}} >
                <TableHead>
                    <TableRow>
                        <TableCell><Button onClick={() => {
                            setRows(drinkSet)
                            setFilteredDrinks(drinkSet)
                            setSearchTerm('')
                            }}>Reset</Button></TableCell>
                        <TableCell style={{ fontWeight: 'bold' }} sortDirection='asc'>Question<Button onClick={() => sortArray('question')}>^</Button></TableCell>
                        <TableCell style={{ fontWeight: 'bold' }} sortDirection='asc'>Section<Button onClick={() => sortArray('section')}>^</Button></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredDrinks.map((row) => (
                        <Row row={row} setRows={setRows} rows={filteredDrinks}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ReviewTable;
