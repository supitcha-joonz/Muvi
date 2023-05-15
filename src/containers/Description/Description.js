import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import image from '../../img/moviebackground.jpg';
import logo from '../../img/logo.png';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import LooksOneRoundedIcon from '@mui/icons-material/LooksOneRounded';
import LooksTwoRoundedIcon from '@mui/icons-material/LooksTwoRounded';
import Looks3RoundedIcon from '@mui/icons-material/Looks3Rounded';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import piture1 from '../../img/wakanda2.jpg';
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import * as movieActions from "../../redux/action/actionMovie";
import * as categoryActions from "../../redux/action/actionCategory";
import * as collectionActions from "../../redux/action/actionCollection";
import * as castActions from "../../redux/action/actionCast";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useNavigate } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';
import AvatarGroup from '@mui/material/AvatarGroup';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { Image } from 'semantic-ui-react'
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import { Helmet } from "react-helmet";

const Description = () => {

    const movies = useSelector((state) => state.movies);
    const moviesList = movies.movies;
    const movieById = movies.movie;

    console.log(movieById);


    const casts = useSelector((state) => state.casts);
    const castsList = casts.casts;
    const castById = casts.cast;



    const categories = useSelector((state) => state.categories);
    const categoriesList = categories.categories;
    const categoriesById = categories.category;

    const collections = useSelector((state) => state.collections);
    const collectionsList = collections.collections;
    const collectionsById = collections.collection;


    const { id } = useParams();
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [visible, setvisible] = useState(18);

    const [expanded, setExpanded] = useState(false)

    const showMoreItems = () => {
        setvisible((prevValue) => prevValue + 6);
    }

    let dispatch = useDispatch();
    let navigate = useNavigate();

    console.log(castById);
    console.log(movieById.movie);
    console.log(categoriesById);
    console.log(collectionsById);

    useEffect(() => {
        dispatch(movieActions.getSingleMovies(id, true));
        dispatch(castActions.getCastSingleMovies(id));
        dispatch(categoryActions.getGenreSingleMovies(id));
    }, []);

    const externalImage =
        'http://image.tmdb.org/t/p/original';
    const Poster =
        'https://www.vacationstravel.com/wp-content/uploads/2020/06/no-image-placeholder-2.jpg';


    // if (collectionsById.collections && movieById.movie) {
    //     if (collectionsById.collections[0].collection_id !== movieById.movie[0].belongs_to_collection) {
    //         dispatch(collectionActions.getSingleCollections(movieById.movie[0].belongs_to_collection))
    //     }
    // } else {
    //     if (movieById.movie && Object.keys(collectionsById).length === 0 && movieById.movie[0].belongs_to_collection) {
    //         dispatch(collectionActions.getSingleCollections(movieById.movie[0].belongs_to_collection))
    //     }
    // }


    // useEffect(() => {
    //     if (id) {
    //         if (movieById) {
    //             setState({ ...movieById });
    //         }
    //     } else {
    //         setState({ ...state })
    //     }
    // }, [movieById]);

    useEffect(() => {
        if (movieById) {
            if (movieById) {
                setTimeout(() => {
                    setLoading(false);
                }, 1500);
            }
        }
    }, [movieById]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])




    const styles = {
        header: {
            height: '100vh',
        },
        bgheader: {
            height: '90vh',
            width: '100%',
            display: "flex",
            backgroundImage: "linear-gradient(to bottom,transparent,black 100%)",
            justifyContent: 'end',
            alignItems: 'end',
            position: 'absolute', //Here is the trick
            bottom: 0,
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
        image: {
            borderRadius: 100 / 10

        },
        img: {
            backgroundColor: "linear-gradient(to bottom,transparent,black 100%)",
        },

        loadingBar: {
            backgroundColor: 'black',
            color: "white",
            '& .MuiLinearProgress-bar': {
                backgroundColor: 'white'
            }
        },
        completedIcon: {},
        imageList: {
            height: "170vh",
            width: "100%",
            backgroundImage: "linear-gradient(to bottom,transparent,black 100%)",
            justifyContent: 'end',
            alignItems: 'end',
            position: 'absolute', //Here is the trick
            bottom: -14,
        },
        avatarSize: {
            height: 50,
            width: 50,

        }


    }

    const placeholderImage =
        'https://i.pinimg.com/564x/cf/e3/70/cfe3702f27b3f3939410f8b1b41a01a4.jpg';

    const min = "min";

    const onImageError = (e) => {
        e.target.src = placeholderImage
    }


    return (

        <Box sx={{ backgroundColor: "black", height: "200vh" }}>
            {
                movieById.movie && movieById.movie.map((item) => (

                    <Box style={styles.header} >
                        <Helmet>
                            <title>{item.title}</title>
                        </Helmet>
                        <SpeedDial
                            ariaLabel="SpeedDial basic example"
                            sx={{
                                position: 'absolute', top: 10,
                                left: 20, backgroundColor: "transparent"
                            }}
                            icon={<ArrowLeftIcon sx={{
                                color: "#eeeeee", fontSize: "60px", bgcolor: "#212121", '&:hover': {
                                    bgcolor: 'white', color: "black"
                                }, borderRadius: "50px"
                            }} />}
                            onClick={() => navigate(-1)}
                            FabProps={{
                                sx: {
                                    bgcolor: 'transparent',
                                    '&:hover': {
                                        bgcolor: 'white',
                                    }
                                }
                            }}
                        />

                        {/* <Box style={styles.header} sx={{ backgroundImage: `url(${externalImage}${item.poster_path})`   }}> */}

                        <Box style={styles.header}>
                            {/* <Grid sx={{ mt: 2, ml: 2 }}>
                        <IconButton onClick={() => navigate(-1)}>
                            <ArrowLeftIcon sx={{ color: "#eeeeee", fontSize: "50px", bgcolor: "#212121", borderRadius: "50px" }} />
                        </IconButton>
                    </Grid> */}


                            {/* <Grid sx={{ mt: 2, ml: 2 }}>
                <IconButton onClick={() => navigate(-1)}>
                    <ArrowLeftIcon sx={{ color: "#eeeeee", fontSize: "50px", bgcolor: "#212121", borderRadius: "50px" }} />
                </IconButton>
            </Grid> */}

                            {/* <Container maxWidth={false} disableGutters>
                <Box sx={{height: '100vh'}} >
                    <Image src={`${externalImage}${item.poster_path}` ? `${externalImage}${item.poster_path}` : placeholderImage}
                        onError={onImageError} size='massive' width="100%" height="100%"  />
                </Box>
            </Container> */}

                            <Grid container xs={12} sx={{ mt: -2, width: "100%" }}>

                                <ImageList
                                    sx={{ overflow: "hidden", width: "100%", }}
                                    cols={1}
                                    style={styles.imageList}
                                >

                                    <ImageListItem key={item.id}>
                                        <img
                                            src={`${externalImage}${item.poster_path}` ? `${externalImage}${item.poster_path}` : placeholderImage}
                                            onError={onImageError}
                                            loading="lazy"

                                        />
                                    </ImageListItem>
                                </ImageList>

                            </Grid>







                            <Box style={styles.bgheader}>

                                <Grid container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="start"
                                    sx={{
                                        position: 'absolute',
                                        left: '50%',
                                        top: '104%',
                                        transform: 'translate(-50%, -40%)',
                                    }}
                                >


                                    {loading ? (
                                        <Box sx={{ width: '100%', mt: -5, backgroundColor: "black", justifyContent: "center" }}>
                                            <CircularProgress style={styles.loadingBar} color="inherit" />
                                        </Box>
                                    ) : (

                                        <Grid container
                                            direction="column"
                                            justifyContent="center"
                                            alignItems="start">



                                            {/* <Typography variant="h1" gutterBottom sx={{ color: "white", fontWeight: 600, ml: 5, mr: 5, mt: 5 }}>
                            {item.original_title}
                        </Typography> */}

                                            {/* {collectionsById.collections && collectionsById.collections.map((coll) => (
                            <Typography variant="h4" gutterBottom sx={{ color: "white", fontWeight: 600, mt: -3, textAlign: "start", lineHeight: 1, ml: 5, mr: 5 }}>
                                {coll.name}
                            </Typography>
                        ))} */}

                                            {/* <Typography variant="h4" gutterBottom sx={{ color: "white", fontWeight: 600, mt: -3, textAlign: "start", lineHeight: 1, ml: 5, mr: 5 }}>
                            {item.belongs_to_collection}
                        </Typography> */}

                                            {item.collection_name !== null ?
                                                <Typography variant="h4" gutterBottom sx={{ color: "white", fontWeight: 600, mt: -3, textAlign: "start", lineHeight: 1, ml: 5, mr: 5 }}>
                                                    {item.collection_name}
                                                </Typography>
                                                : <Typography variant="h4" gutterBottom sx={{ color: "white", fontWeight: 600, mt: 3, textAlign: "start", lineHeight: 1, ml: 5, mr: 5 }}>
                                                    -
                                                </Typography>}


                                            <Typography variant="h1" gutterBottom sx={{ color: "white", fontWeight: 600, mt: -1, textAlign: "start", lineHeight: 1, ml: 5, mr: 5 }}>
                                                {item.title}
                                            </Typography>

                                            <Stack direction="row" spacing={1} sx={{ mb: 1.5, mt: -2, ml: 5, mr: 5 }}>
                                                {categoriesById.genres && categoriesById.genres.map((cate) => (
                                                    <Chip label={cate.name} variant="outlined" sx={{ color: "black", backgroundColor: "white", fontWeight: 600, limit: 1, }} />
                                                ))}
                                                <Chip label={`${item.runtime}  ${min}`} sx={{ color: "white", fontWeight: 600 }} />
                                                {/* <Chip label={item.runtime} sx={{ color: "white", fontWeight: 600 }} />
                                <Chip label="min" sx={{ color: "white", fontWeight: 600 }} /> */}
                                                <Chip label={item.release_date} sx={{ color: "white", fontWeight: 600 }} />
                                            </Stack>

                                            <Box sx={{ maxWidth: "95%", mt: 4, ml: 5, mr: 5 }}>
                                                <Typography variant="subtitle2" sx={{ color: "white", textAlign: "left" }} style={styles.multiLineEllipsis} >
                                                    {item.overview}
                                                </Typography>
                                            </Box>


                                            <Typography variant="h5" gutterBottom sx={{ color: "white", fontWeight: 600, mt: 10, ml: 5, mr: 5 }}>
                                                ACTOR
                                            </Typography>

                                            <Grid container
                                                direction="row"
                                                justifyContent="flex-start"
                                                alignItems="flex-start" xs={12}  >
                                                <Box

                                                    sx={{
                                                        display: 'flex',
                                                        flexWrap: 'wrap',
                                                        p: 1,
                                                        m: 3,
                                                    }}
                                                >
                                                    {/* {item.image_results && item.image_results.map((img) => (
                                            <Avatar key={img.id} alt={img.thumbnail} sx={{ width: 56, height: 56, mr: 2, mb: 2 }} src={img.thumbnail} />
                                        ))} */}
                                                    {castById.casts && castById.casts.slice(0, visible).map((castActor) => (
                                                        <Grid container
                                                            direction="row"
                                                            justifyContent="flex-start"
                                                            alignItems="flex-start" xs={2}  >
                                                            <Tooltip title={castActor.name}>
                                                                <Chip
                                                                    avatar={<Avatar alt={castActor.name} style={styles.avatarSize} src={`${externalImage}${castActor.profile_path}` ? `${externalImage}${castActor.profile_path}` : <PersonIcon />} />}
                                                                    label={castActor.name}
                                                                    sx={{ color: "whitesmoke", m: 2 }}
                                                                />
                                                                {/* <Avatar alt={castActor.name} sx={{ width: 56, height: 56, mr: 2, mb: 2 }} src={`${externalImage}${castActor.profile_path}` ? `${externalImage}${castActor.profile_path}` : <PersonIcon />} /> */}
                                                            </Tooltip>

                                                        </Grid>


                                                    ))}
                                                    {/* <Button onClick={showMoreItems} >
                                            {expanded ? null : 'See More...'} </Button> */}
                                                </Box>

                                            </Grid>

                                            <Box sx={{ width: "70%", height: "1px", background: 'linear-gradient(to right , #942617, black)', ml: 5, mr: 5, mt: 2 }}>

                                            </Box>






                                            {/* 
                        <Typography variant="h5" gutterBottom sx={{ color: "white", fontWeight: 600, mt: 10, ml: 5, mr: 5 }}>
                            RECOMMENDATIONS
                        </Typography>

                        <Stack direction="row" spacing={5} sx={{ mt: 3, ml: 5, mr: 5 }}>
                            <img style={styles.image} src={piture1} width="200" height="280" sx={{ borderRadius: 100 / 10 }} />
                            <img style={styles.image} src={piture1} width="200" height="280" sx={{ borderRadius: 100 / 10 }} />
                            <img style={styles.image} src={piture1} width="200" height="280" sx={{ borderRadius: 100 / 10 }} />

                        </Stack> */}

                                        </Grid>



                                    )}

                                </Grid>

                            </Box>



                        </Box>


    // </Box >


                ))
            }
        </Box >

    )
}

export default Description
