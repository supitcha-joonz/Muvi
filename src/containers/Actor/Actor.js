import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import image from '../../img/duke.jpg';
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
import * as actorActions from "../../redux/action/actionActor";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import SpeedDial from '@mui/material/SpeedDial';
import { useNavigate } from 'react-router-dom';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Helmet } from "react-helmet";
import CircularProgress from '@mui/material/CircularProgress';
import Tooltip from '@mui/material/Tooltip';

const Actor = () => {

    const [loading, setLoading] = useState(true);
    const actors = useSelector((state) => state.actors);
    const actorsList = actors.actors;
    const actorById = actors.actor;
    const actorMovie = actors.movies;
    const { id } = useParams();
    const [visible, setvisible] = useState(3);

    let dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        dispatch(actorActions.getSingleActors(id, true));
        dispatch(actorActions.getSinglePopulalityActors(id));
    }, []);

    console.log(actorById);
    console.log(actorMovie);

    useEffect(() => {
        if (actorById) {
            if (actorById) {
                setTimeout(() => {
                    setLoading(false);
                }, 1500);
            }
        }
    }, [actorById]);

    useEffect(() => {
        if (actorMovie) {
            if (actorMovie) {
                setTimeout(() => {
                    setLoading(false);
                }, 1500);
            }
        }
    }, [actorMovie]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])





    const styles = {
        header: {
            height: '100%',
            display: "flex",
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat-y',
            backgroundSize: '250vh',

            // backgroundPosition: 'center',
            // backgroundRepeat: 'no-repeat',
            // backgroundSize: 'cover',
        },
        bgheader: {
            height: '100vh',
            width: "100%",
            display: "flex",
            backgroundImage: "linear-gradient(to left ,rgba(0, 0, 0, 0.95) 20% ,rgba(0, 0, 0, 0.5) 80% )",
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
            borderRadius: 100 / 10,
            backgroundImage: "linear-gradient(to bottom,transparent,black 100%)",

        },
        img: {
            backgroundColor: "linear-gradient(to top,transparent,black 100%)",
        },
        loadingBar: {
            backgroundColor: 'black',
            color: "white",
            '& .MuiLinearProgress-bar': {
                backgroundColor: 'white'
            }
        },
        loadingBar: {
            width: "10%",
            color: "#212121",
            '& .MuiLinearProgress-bar': {
                backgroundColor: 'white'
            },
            position: "absolute",
            left: '45%',
            top: "50%",
            transform: "translate(0px, -50%)",

        },
        loadercontainer: {
            width: "100%",
            height: "100vh",
            position: "fixed",
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zindex: 1,
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
        },
        completedIcon: {},
        imageList: {
            height: "170vh",
            width: "100%",
            justifyContent: 'end',
            backgroundImage: "black",
            backgroundColor: "black",
            alignItems: 'end',
            position: 'absolute', //Here is the trick
            bottom: -16,
        },
    }

    const placeholderImage =
        'https://i.pinimg.com/564x/e0/7f/5a/e07f5ad714eeb6903d3abe9af5ef44d8.jpg';

    const min = "min";

    const onImageError = (e) => {
        e.target.src = placeholderImage
    }
    const externalImage =
        'http://image.tmdb.org/t/p/original';
    const Poster =
        'https://www.vacationstravel.com/wp-content/uploads/2020/06/no-image-placeholder-2.jpg';

    function refreshPage() {
        window.location.reload(false);
    }



    return (

        <Box style={{
            height: '100%', width: "100%", backgroundColor: "black"
        }}>
            {!actorById.actor || (actorById.actor && !actorById.actor) ?
                <Box style={styles.loadercontainer}
                // sx={{
                //     height: "100vh", width: '80%', mt: 5, backgroundColor: "tranparent", color: "black",
                // }}
                >
                    <CircularProgress style={styles.loadingBar} sx={{ color: "black" }} />
                    {/* <CircularProgress style={styles.loadingBar}  color="inherit" /> */}
                    {/* <LinearProgress style={styles.loadingBar} color="inherit" /> */}


                </Box>
                :


                <Grid sx={{display: "flex"}}>

                    {
                        actorById.actor && actorById.actor.map((item) => (

                            <Box style={styles.header} >
                                <Helmet>
                                    <title>{item.firstName} {item.middleName ? item.middleName : ""} {item.familyName}</title>
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
                                    onClick={() => navigate(-1, {
                                        state: {
                                            refreshPage,

                                        }
                                    })}
                                    FabProps={{
                                        sx: {
                                            bgcolor: 'transparent',
                                            '&:hover': {
                                                bgcolor: 'white',
                                            }
                                        }
                                    }}
                                />



                                <Grid container xs={12} sx={{ mt: 1, width: "100%" }}>

                                    <ImageList
                                        sx={{ overflow: "hidden", width: "80%", height: "100vh" }}
                                        cols={1}
                                        style={styles.imageList}
                                    >

                                        <ImageListItem key={item.id}>
                                            <img
                                                src={`${externalImage}${item.profile_path}` ? `${externalImage}${item.profile_path}` : placeholderImage}
                                                onError={onImageError}
                                                loading="lazy"

                                            />
                                        </ImageListItem>
                                    </ImageList>

                                </Grid>



                                <Box style={styles.bgheader}>
                                    <Grid
                                        container
                                        direction="column"
                                        justifyContent="center"
                                        alignItems="flex-end"
                                        sx={{ mr: 5, mb: 3 }}
                                        xs={12}
                                    >
                                        <Stack direction="column" alignItems="flex-end" >
                                            <Typography variant="h1" gutterBottom sx={{ color: "white", fontWeight: 600, mt: 5 }}>
                                                {item.firstName}
                                            </Typography>
                                            <Typography variant="h2" gutterBottom sx={{ color: "white", fontWeight: 600, mt: -3 }}>
                                                {(item.middleName ? item.middleName : "")}
                                            </Typography>
                                            <Typography variant="h1" gutterBottom sx={{ color: "white", fontWeight: 600, mt: -2 }}>
                                                {item.familyName}
                                            </Typography>

                                        </Stack>



                                        <Box sx={{ width: "20%", height: "5px", background: 'linear-gradient(to left , #584C23, transparent)', mt: 5, mb: 3 }}>

                                        </Box>
                                        {/* <Box sx={{ width: "70%", height: "1px", background: 'linear-gradient(to right , #942617, black)', ml: 5, mr: 5, mt: 2 }}>

                                </Box> */}
                                        {actorMovie.movies && actorMovie.movies && actorMovie.movies.length ? (

                                            <Stack direction="row"
                                                justifyContent="flex-end"
                                                alignItems="flex-start" spacing={5} sx={{ mb: 1, width: "35%" }} >
                                                {
                                                    actorMovie.movies && actorMovie.movies.slice(0, visible).map((movieAct) => (
                                                        <Grid
                                                            container
                                                            direction="column"
                                                            justifyContent="flex-start"
                                                            alignItems="center"

                                                            onClick={() =>
                                                                navigate(`/description/${movieAct.movie_id}`, {
                                                                    state: {
                                                                        refreshPage,
                                                                    }
                                                                })}
                                                        >
                                                            <Tooltip title={movieAct.title}>
                                                                <Grid item  >
                                                                    <img style={styles.image} src={`${externalImage}${movieAct.poster_path}` ? `${externalImage}${movieAct.poster_path}` : placeholderImage} onError={onImageError} width="140" height="200"
                                                                    />
                                                                </Grid>
                                                            </Tooltip>

                                                            <Tooltip title={movieAct.title}>
                                                                <Grid item xs  >
                                                                    <Typography gutterBottom variant="caption" sx={{ color: "white", fontWeight: 600, mt: 2 }}>{movieAct.title}</Typography>
                                                                </Grid>
                                                            </Tooltip>
                                                        </Grid>

                                                    ))
                                                }
                                            </Stack>
                                        ) : actorMovie.movies && actorMovie.movies ? (

                                            <Grid
                                                container
                                                direction="column"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                            >
                                                <Typography variant="subtitle" sx={{ fontSize: 20, color: "#616161", fontWeight: 600 }}>
                                                    {" - No search information available - "}
                                                </Typography>
                                            </Grid>

                                        ) : null}

                                        {/* <Stack direction="row" spacing={5} sx={{ mb: 3, }}>
                                    <img style={styles.image} src={piture1} width="140" height="200" sx={{ borderRadius: 100 / 10 }} />
                                    <img style={styles.image} src={piture1} width="140" height="200" sx={{ borderRadius: 100 / 10 }} />
                                    <img style={styles.image} src={piture1} width="140" height="200" sx={{ borderRadius: 100 / 10 }} />

                                </Stack> */}

                                    </Grid>

                                </Box>

                            </Box>
                        ))

                    }
                </Grid>
            }

        </Box>
    )
}

export default Actor
