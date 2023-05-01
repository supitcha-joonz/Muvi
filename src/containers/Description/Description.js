import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import image from '../../img/posterblackpanther.png';
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
import * as collectionActions from "../../redux/action/actionCollection";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useNavigate } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';

const Description = () => {

    const movies = useSelector((state) => state.movies);
    const moviesList = movies.movies;
    const movieById = movies.movie;

    const { id } = useParams();
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);

    let dispatch = useDispatch();
    let navigate = useNavigate();


    console.log(movieById);

    useEffect(() => {
        dispatch(movieActions.getSingleMovies(id));
    }, []);


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




    const styles = {
        header: {
            backgroundImage: `url(${image})`,
            height: '100vh',
            width: "100%",
            display: "flex",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        },
        bgheader: {
            height: '60vh',
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
        loadingBar: {
            backgroundColor: 'black',
            color: "white",
            '& .MuiLinearProgress-bar': {
                backgroundColor: 'white'
            }
        },
        completedIcon: {}
    }

    return (

        <Box style={{
            height: '200vh', width: "100%", backgroundColor: "black"
        }}>

            <Box style={styles.header}>
                <Grid sx={{ mt: 2, ml: 2 }}>
                    <IconButton onClick={() => navigate(`/searchresult`)}>
                        <ArrowLeftIcon sx={{ color: "#eeeeee", fontSize: "50px", bgcolor: "#212121", borderRadius: "50px" }} />
                    </IconButton>
                </Grid>


                <Box style={styles.bgheader}>
                    {movieById.movie && movieById.movie.map((item) => (
                        <Grid container
                            direction="column"
                            justifyContent="center"
                            alignItems="start"
                            sx={{
                                position: 'absolute',
                                left: '50%',
                                top: '125%',
                                transform: 'translate(-50%, -40%)',
                            }}
                        >

                            {loading ? (
                                <Box sx={{ width: '100%',mt: -5,  backgroundColor: "black", justifyContent: "center" }}>
                                    <CircularProgress style={styles.loadingBar} color="inherit" />
                                </Box>
                            ) : (

                                <Grid container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="start">



                                    <Typography variant="h1" gutterBottom sx={{ color: "white", fontWeight: 600, ml: 5, mr: 5, mt: 5 }}>
                                        {item.original_title}
                                    </Typography>
                                    {/* <Typography variant="h1" gutterBottom sx={{ color: "white", fontWeight: 600, mt: -3, textAlign: "start", lineHeight: 1, ml: 5, mr: 5 }}>
                                    {item.name}
                                </Typography> */}
                                    <Stack direction="row" spacing={1} sx={{ mb: 1.5, mt: -2, ml: 5, mr: 5 }}>
                                        <Chip label="ACTION" variant="outlined" sx={{ color: "black", backgroundColor: "white", fontWeight: 600 }} />
                                        <Chip label={item.runtime} sx={{ color: "white", fontWeight: 600 }} />
                                        <Chip label={item.release_date} sx={{ color: "white", fontWeight: 600 }} />
                                    </Stack>
                                    <Box sx={{ maxWidth: "95%", mt: 4, ml: 5, mr: 5 }}>
                                        <Typography variant="subtitle2" sx={{ color: "white", textAlign: "left" }} style={styles.multiLineEllipsis} >
                                            {item.overview}
                                        </Typography>
                                    </Box>
                                    <Typography variant="h5" gutterBottom sx={{ color: "white", fontWeight: 600, mt: 5, ml: 5, mr: 5 }}>
                                        ACTOR
                                    </Typography>

                                    <Stack direction="row" spacing={2} sx={{ ml: 5, mr: 5 }}>
                                        <Avatar alt="Remy Sharp" sx={{ width: 56, height: 56 }} src="/static/images/avatar/1.jpg" />
                                        <Avatar alt="Travis Howard" sx={{ width: 56, height: 56 }} src="/static/images/avatar/2.jpg" />
                                        <Avatar alt="Cindy Baker" sx={{ width: 56, height: 56 }} src="/static/images/avatar/3.jpg" />
                                        <Avatar alt="Travis Howard" sx={{ width: 56, height: 56 }} src="/static/images/avatar/2.jpg" />
                                        <Avatar alt="Cindy Baker" sx={{ width: 56, height: 56 }} src="/static/images/avatar/3.jpg" />
                                    </Stack>

                                    <Box sx={{ width: "70%", height: "1px", background: 'linear-gradient(to right , #942617, black)', ml: 5, mr: 5, mt: 10 }}>

                                    </Box>



                                    <Typography variant="h5" gutterBottom sx={{ color: "white", fontWeight: 600, mt: 10, ml: 5, mr: 5 }}>
                                        RECOMMENDATIONS
                                    </Typography>

                                    <Stack direction="row" spacing={5} sx={{ mt: 3, ml: 5, mr: 5 }}>
                                        <img style={styles.image} src={piture1} width="200" height="280" sx={{ borderRadius: 100 / 10 }} />
                                        <img style={styles.image} src={piture1} width="200" height="280" sx={{ borderRadius: 100 / 10 }} />
                                        <img style={styles.image} src={piture1} width="200" height="280" sx={{ borderRadius: 100 / 10 }} />

                                    </Stack>

                                </Grid>


                            )}
                        </Grid>
                    ))}
                </Box>

            </Box>
        </Box>
    )
}

export default Description
