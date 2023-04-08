import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import image from '../../../../img/moviebackground.jpg';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import {
    DataGrid,
    GridLinkOperator,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
} from "@mui/x-data-grid";
import Link from '@mui/material/Link';
import AddIcon from '@mui/icons-material/Add';
import * as movieActions from "../../../../redux/action/actionMovie";
import * as categoryActions from "../../../../redux/action/actionCategory";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';







const Moviepage = () => {

    const movies = useSelector((state) => state.movies);
    const moviesList = movies.movies;
    const categories = useSelector((state) => state.categories);
    const categoriesList = categories.categories;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };


    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.loadmovies());
        dispatch(categoryActions.loadcategories());
    }, []);

    console.log(categoriesList);
    console.log(moviesList);

    const styles = {
        header: {
            backgroundImage: `url(${image})`,
            height: '150vh',
            display: "flex",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        },

        content: {
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
        },
        bgcontent: {
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        icon: {
            "& $active": {
                color: "pink"
            },
        },
        completedIcon: {}

    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'Title',
            headerName: 'First name',
            width: 150,
            editable: true,
        }
    ];

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



    const StyledGridOverlay = styled("div")(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        "& .ant-empty-img-1": {
            fill: theme.palette.mode === "light" ? "#aeb8c2" : "#262626",
        },
        "& .ant-empty-img-2": {
            fill: theme.palette.mode === "light" ? "#f5f5f7" : "#595959",
        },
        "& .ant-empty-img-3": {
            fill: theme.palette.mode === "light" ? "#dce0e6" : "#434343",
        },
        "& .ant-empty-img-4": {
            fill: theme.palette.mode === "light" ? "#fff" : "#1c1c1c",
        },
        "& .ant-empty-img-5": {
            fillOpacity: theme.palette.mode === "light" ? "0.8" : "0.08",
            fill: theme.palette.mode === "light" ? "#f5f5f5" : "#fff",
        },
    }));


    return (
        <Box style={styles.header}>
            <Box style={styles.content}>
                <Box style={styles.bgcontent}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                    >
                        <Box sx={{ m: 10 }}>
                        <Stack direction="row"
                                justifyContent="flex-start"
                                alignItems="start" spacing={2}
                                sx={{ alignItems: "start", mb: 2 }}>
                                <Grid sx={{mt: -1.5}}>
                                    <Link href="/adminhomepage" underline="none" >
                                        <ArrowLeftIcon sx={{ color: "#eeeeee", fontSize: "50px", bgcolor: "#212121", borderRadius: "50px" }} />
                                    </Link>
                                </Grid>
                                <Grid>
                                    <Typography variant="h5" sx={{ color: "whitesmoke", fontWeight: 600}}>
                                        All MOVIE
                                    </Typography></Grid>
                            </Stack>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="start" spacing={5}
                                sx={{ alignItems: "flex-start" }}>
                                <Grid>
                                    <Typography variant="h2" sx={{ color: "whitesmoke", fontWeight: 600 }}>
                                        {moviesList.movies ? moviesList.movies.length : 0}
                                    </Typography>
                                </Grid>
                                <Grid >
                                    <Typography variant="h5" sx={{ color: "whitesmoke", mt: 4 }}>
                                        Movie
                                    </Typography>
                                </Grid>


                            </Stack>
                            <Box sx={{ width: "80%", height: "1.5px", background: 'linear-gradient(to right , #942617, black)', ml: 5, mr: 5, mt: 5 }}></Box>
                            <Stack direction="row" justifyContent="flex-end"
                                alignItems="center" sx={{ mb: 3 }}>
                                <Link href="/createmovie" underline="none" >
                                    <IconButton sx={{
                                        backgroundColor: "#942617",
                                        "&:hover": {
                                            backgroundColor: '#4A140C',
                                            color: "black",

                                        },
                                    }} >
                                        <AddIcon sx={{ color: "#eeeeee", fontSize: "5vh" }} />
                                    </IconButton></Link>
                            </Stack>
                            <Box sx={{ height: 700, width: '100%' }}>
                            <TableContainer sx={{ maxHeight: 700, borderRadius: 5 }}>
                                    <Table sx={{ position: "sticky" }} >
                                        <TableHead sx={{ backgroundColor: "black" }}>
                                            <TableRow sx={{ backgroundColor: "black" }}>
                                                <TableCell sx={{ position: "sticky", top: 0, width: "150px", backgroundColor: 'white', color: "black", fontWeight: 600, fontSize: "16px", mb: 2 }} align="center">ID</TableCell>
                                                <TableCell sx={{ position: "sticky", top: 0, backgroundColor: 'white', color: "black", fontWeight: 600, fontSize: "16px", mb: 2 }} align="center">Name</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody sx={{ backgroundColor: "transparent", borderRadius: 5 }}>
                                            {moviesList.movies && moviesList.movies.map((item) => (
                                                <StyledTableRow key={item.id} sx={{ backgroundColor: "transparent", mb: 2, borderRadius: 5 }} >
                                                    <StyledTableCell sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)", color: "whitesmoke" }} component="th" scope="row" align="center">
                                                        {item.id}
                                                    </StyledTableCell>
                                                    <StyledTableCell sx={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', color: "whitesmoke" }} component="th" scope="row" align="center">
                                                        {item.original_title}
                                                    </StyledTableCell>
                                                </StyledTableRow>
                                            ))}

                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <TablePagination
                                    sx={{ position: "sticky", top: 0, bgcolor: "whitesmoke", borderRadius: 5, mt: 1, color: "black", fontWeight: 600 }}
                                    rowsPerPageOptions={[100, 500, 1000]}
                                    component="div"
                                    count={moviesList.movies ? moviesList.movies.length : 0}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />

                            </Box>
                        </Box>
                    </Grid>
                </Box>
            </Box>
        </Box>

    );
}

export default Moviepage
