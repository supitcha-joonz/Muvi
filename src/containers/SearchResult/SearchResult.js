import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import image from '../../img/moviebackground.jpg';
import logo from '../../img/logo.png';
import piture1 from '../../img/wakanda2.jpg';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useDispatch, useSelector } from "react-redux";
import * as movieActions from "../../redux/action/actionMovie";
import * as categoriesActions from "../../redux/action/actionCategory";
import * as collectionActions from "../../redux/action/actionCollection";
import { Link, useNavigate } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from 'react-router-dom';
import { InputBase } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { Formik } from 'formik';
import ReactPlaceholder from 'react-placeholder';
import SpeedDial from '@mui/material/SpeedDial';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useLocation } from "react-router-dom";

const SearchResult = (props) => {

    const [loading, setLoading] = useState(true);
    const movies = useSelector((state) => state.movies);
    const moviesList = movies.movies;
    const moviesListSearch = movies.keyword;
    const movieskeySearch = movies.keyword.keyword;

    const categories = useSelector((state) => state.categories);
    const categoriesList = categories.categories;
    const categoriesById = categories.category;

    const collections = useSelector((state) => state.collections);
    const collectionsList = collections.collections;

    const location = useLocation();
    const [text, setText] = useState(location.state && location.state.text ? location.state.text : "");

    let navigate = useNavigate();
    const { id, key } = useParams();
    let dispatch = useDispatch();


    useEffect(() => {
        dispatch(collectionActions.loadcollections());
        dispatch(movieActions.loadmovies());
        dispatch(categoriesActions.loadcategories());
        dispatch(categoriesActions.getGenreSingleMovies(id));
        dispatch(movieActions.searchMovie(key));

    }, []);



    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    console.log(moviesList);
    console.log(categoriesList);
    console.log(categoriesById);
    console.log(moviesListSearch);
    console.log(movieskeySearch);


    // useEffect(() => {
    //     if (moviesList) {
    //         if (moviesList) {
    //             setTimeout(() => {
    //                 setLoading(false);
    //             }, 1500);
    //         }
    //     }
    // }, [moviesList]);



    useEffect(() => {
        if (movieskeySearch) {
            if (movieskeySearch) {
                setTimeout(() => {
                    setLoading(false);
                }, 1500);
            }
        }
    }, [movieskeySearch]);



    useEffect(() => {
        if (moviesListSearch) {
            if (moviesListSearch) {
                setTimeout(() => {
                    setLoading(false);
                }, 1500);
            }
        }
    }, [moviesListSearch]);



    const externalImage =
        'http://image.tmdb.org/t/p/original';

    const placeholderImage =
        'https://i.pinimg.com/564x/8b/51/86/8b5186653e901ff9136637f9b38925f2.jpg'

    const onImageError = (e) => {
        e.target.src = placeholderImage
    }




    const styles = {
        header: {
            backgroundImage: `url(${image})`,
            height: '100%',
            display: "flex",
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat-y',
            backgroundSize: '250vh'

        },

        content: {
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
        },
        icon: {
            "& $active": {
                color: "pink"
            },
        },
        bgcontent: {
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(52, 52, 52, 0.5)'


        },
        multiLineEllipsis: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '3',
            WebkitBoxOrient: 'vertical',
        },
        image: {
            borderRadius: 100 / 10

        },
        loadingBar: {
            backgroundColor: 'black',
            color: "#424242",
            '& .MuiLinearProgress-bar': {
                backgroundColor: 'white'
            }
        },
        completedIcon: {}
    }

    const steps = [
        'Type keywords that you are looking for ',
        'Select the movie from our recommendations ',
        'Enjoy the movie',
    ];

    const stepperstyles = {
        icon: {
            color: "red",
        },
        completedIcon: {}
    }




    return (

        <Box style={styles.header}>
            <Box style={styles.content}>
                <Box style={styles.bgcontent}>

                    <Grid
                        container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="center"
                    // sx={{ height: "100vh" }}
                    // sx={{
                    //     position: 'absolute',
                    //     left: '50%',
                    //     top: '50%',
                    //     transform: 'translate(-50%, -50%)'
                    // }}
                    >


                        <Grid container spacing={1}>
                            {/* <Grid item xs={12} container
                                    direction="column"
                                    justifyContent="flex-start"
                                    alignItems="center">
                                    <Formik
                                        enableReinitialize
                                        initialValues={{
                                            title: ""
                                        }}
                                        onSubmit={(values) => {
                                            if (text) {
                                                const { state } = location;
                                                var data = {
                                                    "title": text,
                                                }
                                            }
                                        }}
                                    >
                                        {({
                                            values,
                                            handleSubmit,
                                            setFieldValue
                                        }) => (
                                            <form onSubmit={handleSubmit}>
                                                <Grid container justifyContent="center" spacing={1} sx={{ mt: 2 }}>
                                                    <Grid item xs={12}>
                                                        <Paper
                                                            sx={{
                                                                backgroundColor: "#000000",
                                                                borderRadius: 25,
                                                                display: "flex",
                                                                alignItems: "center",
                                                                width: 700,
                                                                height: 35,

                                                            }}
                                                            margin="dense"
                                                        >

                                                            <IconButton
                                                                aria-label="search" size="large" disabled sx={{ m: 1 }}>
                                                                <SearchIcon sx={{ color: "white" }} />
                                                            </IconButton>

                                                            <InputBase
                                                                label="Disabled"
                                                                defaultValue="Hello World"
                                                                disabled
                                                                autoFocus
                                                                fullWidth
                                                                onChange={(e) => {
                                                                    setText(e.target.value)
                                                                }}
                                                                placeholder="Search"
                                                                inputProps={{ "aria-label": "search google maps" }}
                                                                sx={{
                                                                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                                                    input: { color: "white", fontWeight: 600, ml: -2, mr: 2 },
                                                                }}
                                                                size="medium" />
                                                        </Paper>
                                                    </Grid>
                                                </Grid >
                                            </form>
                                        )}
                                    </Formik>
                                </Grid> */}
                            <Grid item xs={12} container
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                sx={{ mt: 5 }}>
                                <Paper elevation={1}
                                    sx={{
                                        backgroundColor: "#000000",
                                        borderRadius: 25,
                                        display: "flex",
                                        alignItems: "center",
                                        width: 700,
                                        height: 35,

                                    }} >
                                    <IconButton disabled aria-label="search" size="large" sx={{ m: 0.5 }}>
                                        <SearchIcon sx={{ color: "#616161" }} />
                                    </IconButton>
                                    <TextField
                                        value={movieskeySearch}
                                        autoFocus
                                        fullWidth
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        sx={{
                                            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                            input: { color: "#616161", fontWeight: 600, ml: -2, mr: 2 },
                                        }}/>
                                </Paper>
                            </Grid>
                        </Grid>

                        {loading ?
                            <Box sx={{ height: "100vh", width: '80%', mt: 5, backgroundColor: "tranparent", color: "black" }}>
                                <LinearProgress style={styles.loadingBar} color="inherit" />

                            </Box>
                            :


                            <Grid container
                                direction="column"
                                justifyContent="center"
                                alignItems="center"


                            >

                                {moviesListSearch.movies && moviesListSearch.movies && moviesListSearch.movies.length ? (

                                    <Grid container
                                        direction="column"
                                        justifyContent="center"
                                        alignItems="center"
                                        sx={{ height: "100%" }}
                                    >
                                        {moviesListSearch.movies && moviesListSearch.movies.map((item) => (



                                            <Grid
                                                container
                                                direction="column"
                                                sx={{
                                                    width: "70%",
                                                    height: 250,
                                                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                                                    mt: 10,
                                                    borderRadius: 2,
                                                    mb: 5,
                                                }}>

                                                <Grid container
                                                    justifyContent="center"
                                                    alignItems="center"
                                                    spacing={2}>




                                                    {externalImage !== null ?

                                                        <Grid item xs={5.5} >
                                                            <Box sx={{ mt: -8 }}>
                                                                <img style={styles.image} src={`${externalImage}${item.poster_path}` ? `${externalImage}${item.poster_path}` : placeholderImage} onError={onImageError} width="200" height="280" sx={{ borderRadius: 100 / 10 }} />


                                                            </Box>
                                                        </Grid>

                                                        : <Grid item xs={5.5} >
                                                            <Box sx={{ mt: -8 }}>
                                                                <img style={styles.image} src={"https://www.vacationstravel.com/wp-content/uploads/2020/06/no-image-placeholder-2.jpg"} width="200" height="280" sx={{ borderRadius: 100 / 10 }} />
                                                            </Box>
                                                        </Grid>

                                                    }



                                                    <Grid item xs={6} >
                                                        <Typography variant="h5" noWrap gutterBottom sx={{ color: "white", textAlign: "left", fontWeight: 600, mt: 4 }}>
                                                            {item.title}
                                                        </Typography>
                                                        <Stack direction="row" spacing={1} sx={{ mb: 1.5 }}>

                                                            {/* {categoriesById.genres && categoriesById.genres.map((cate) => (
                                                        <Chip label={cate.name} variant="outlined" nowrap sx={{ color: "black", backgroundColor: "white", fontWeight: 600, limit: 1, }} />
                                                    ))} */}


                                                            <Chip label={item.release_date} variant="outlined" nowrap sx={{ color: "black", backgroundColor: "white", fontWeight: 600, limit: 1, }} />

                                                        </Stack>
                                                        <Box sx={{ maxWidth: "90%" }}>
                                                            <Typography variant="subtitle2" sx={{ color: "white", textAlign: "left" }} style={styles.multiLineEllipsis} >
                                                                {item.overview}
                                                            </Typography>
                                                        </Box>
                                                        <Box
                                                            display="flex"
                                                            justifyContent="flex-end" sx={{ mr: 2 }}>
                                                            <IconButton onClick={() => navigate(`/description/${item.movie_id}`)} aria-label="detail" sx={{ justifyContent: "flex-end" }}>
                                                                <ArrowRightIcon
                                                                    //   to={{ pathname: `/description/${item.id}` }}
                                                                    sx={{
                                                                        justifyContent: "flex-end", fontSize: 40, color: "white",
                                                                        "&:hover": {
                                                                            color: "#F2BD00"
                                                                        },
                                                                    }} />
                                                            </IconButton>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                        ))}
                                    </Grid>
                                ) : moviesListSearch.movies && moviesListSearch.movies ? (
                                    <Grid
                                        container
                                        direction="column"
                                        justifyContent="center"
                                        alignItems="center"
                                        sx={{ height: "100vh" }}
                                    >
                                        <Typography variant="subtitle" noWrap sx={{ fontSize: 20, color: "#616161",fontWeight: 600 }}>
                                            {" - No search information available - "}
                                        </Typography>
                                    </Grid>

                                ) : null}

                            </Grid>
                        }



                    </Grid>





                </Box>
            </Box>
        </Box>
    )
}

export default SearchResult
