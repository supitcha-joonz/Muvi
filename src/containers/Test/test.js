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
import * as categoryActions from "../../redux/action/actionCategory";
import * as collectionActions from "../../redux/action/actionCollection"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Chip from "@mui/material/Chip";
import axios from "axios";


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



    const categories = useSelector((state) => state.categories);
    const categoriesList = categories.categories;


    // const categoryList = 
    //     { "genres": [{ "id": 12, "name": "Adventure" }, { "id": 14, "name": "Fantasy" }, { "id": 16, "name": "Animation" }, { "id": 18, "name": "Drama" }, { "id": 27, "name": "Horror" }, { "id": 28, "name": "Action" }, { "id": 35, "name": "Comedy" }, { "id": 36, "name": "History" }, { "id": 37, "name": "Western" }, { "id": 53, "name": "Thriller" }, { "id": 80, "name": "Crime" }, { "id": 99, "name": "Documentary" }, { "id": 878, "name": "Science Fiction" }, { "id": 9648, "name": "Mystery" }, { "id": 10402, "name": "Music" }, { "id": 10749, "name": "Romance" }, { "id": 10751, "name": "Family" }, { "id": 10752, "name": "War" }, { "id": 10769, "name": "Foreign" }, { "id": 10770, "name": "TV Movie" }] }



    let dispatch = useDispatch();


    useEffect(() => {
        dispatch(categoryActions.loadcategories());
    }, []);


    console.log(categoriesList);


    return (
        <Box sx={{ width: '100%', maxWidth: 500 }}>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Name</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categoriesList.genres && categoriesList.genres.map((item) => (
                            <StyledTableRow key={item.id}>
                                <StyledTableCell component="th" scope="row" align="center">
                                    {item.name}
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


