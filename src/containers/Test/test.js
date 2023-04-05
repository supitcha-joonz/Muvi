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
import * as movieActions from "../../redux/action/actionMovie";
import TablePagination from '@mui/material/TablePagination';


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


    let dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);
    const categoriesList = categories.categories;
    const movies = useSelector((state) => state.movies);
    const moviesList = movies.movies;

    console.log(moviesList);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };



    useEffect(() => {
        dispatch(categoryActions.loadcategories());
        dispatch(movieActions.loadmovies());
    }, []);


    console.log(categoriesList);



    return (
        <Box sx={{ width: '100%', height: 700 ,overflow: 'hidden'}}>

            <TableContainer component={Paper} sx={{ maxHeight: 700  }}>
                <Table aria-label="customized table" >
                    <TableHead sx={{position: "sticky" }} >
                        <TableRow>
                            <StyledTableCell align="center">Name</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {categoriesList.genres && categoriesList.genres.map((item) => (
                            <StyledTableRow key={item.id}>
                                <StyledTableCell component="th" scope="row" align="center">
                                    {item.name}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))} */}

                        {moviesList.movies && moviesList.movies.map((item) => (
                            <StyledTableRow key={item.id}>
                                <StyledTableCell component="th" scope="row" align="center">
                                    {item.original_title}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}

                    </TableBody>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />

                </Table>
            </TableContainer>
        </Box>
    )
}

export default Test


