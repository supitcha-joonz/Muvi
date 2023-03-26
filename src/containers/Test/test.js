import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from "react-redux";
import { loadcategories } from '../../redux/action/actionCategory';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import { loadactors } from "../../redux/action/actionActor";
import { loadmovies } from '../../redux/action/actionMovie';
import { loadcollections } from '../../redux/action/actionCollection';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const Test = () => {

    const { categories } = useSelector(state => state.categories);
    const { actors } = useSelector(state => state.actors);
    const { movies } = useSelector(state => state.movies);
    const { collections } = useSelector(state => state.collections);
    const { users } = useSelector(state => state.collections);
    // const categoryList = categories.length;
    
    const categoryList = [
        {
            id: 1,
            name: "Apple",
            price: 25,
        },
        {
            id: 2,
            name: "Banana",
            price: 40
        },
        {
            id: 3,
            name: "Melon",
            price: 75
        }];
      

    let dispatch = useDispatch();


    useEffect(() => {
        dispatch(loadcategories());
        // dispatch(loadmovies());
        // dispatch(loadcollections());
    }, []);


    console.log(categoryList);

    return (
        <Box sx={{ width: '100%', maxWidth: 500 }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Id</StyledTableCell>
                            <StyledTableCell align="center">Name</StyledTableCell>
                            <StyledTableCell align="center">Price</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categoryList && categoryList.map((item) => (
                            <StyledTableRow key={item.id}>
                                <StyledTableCell component="th" scope="row" align="center">
                                    {item.id}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row" align="center">
                                    {item.name}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row" align="center">
                                    {item.price}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default Test


