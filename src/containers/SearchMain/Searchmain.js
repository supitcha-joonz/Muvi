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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import * as movieActions from "../../redux/action/actionMovie";
import * as categoryActions from "../../redux/action/actionCategory";
import * as collectionActions from "../../redux/action/actionCollection";
import * as castActions from "../../redux/action/actionCast";
import { InputBase } from '@mui/material';
import { Formik } from 'formik';

const Searchmain = () => {

    let navigate = useNavigate();
    let dispatch = useDispatch();
    const [text, setText] = useState("");



    const styles = {
        header: {
            backgroundImage: `url(${image})`,
            height: '100vh',
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
                    {/* <Grid
                        container
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                    >
                        <IconButton onClick={() => navigate(`/login`)}>
                            <AccountCircleIcon sx={{ color: "#eeeeee", fontSize: "40px", bgcolor: "#212121", borderRadius: "50px" }} />
                        </IconButton>
                    </Grid> */}


                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            position: 'absolute',
                            left: '50%',
                            top: '40%',
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Box>
                                    <img src={logo} width="250" height="250" />
                                </Box>

                            </Grid>
                            <Grid item xs={12} container
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                sx={{ mt: -8 }}>
                                <Box sx={{ width: '50%' }}>
                                    <Grid container direction="row"
                                        justifyContent="center"
                                        alignItems="center" spacing={1}>
                                        <Grid item xs={2}>
                                            <IconButton sx={{ color: "#656565" }}>
                                                <LooksOneRoundedIcon />
                                            </IconButton>
                                        </Grid> <Grid item xs={2}>
                                            <Divider sx={{ bgcolor: "#656565" }} />
                                        </Grid>
                                        <Grid item xs={2}>
                                            <IconButton sx={{ color: "#656565" }}>
                                                <LooksTwoRoundedIcon />
                                            </IconButton>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Divider sx={{ bgcolor: "#656565" }} />
                                        </Grid>
                                        <Grid item xs={2}>
                                            <IconButton sx={{ color: "#656565" }}>
                                                <Looks3RoundedIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box sx={{ width: '50%' }}>
                                    <Grid container direction="row"
                                        justifyContent="center"
                                        alignItems="center" spacing={1}>
                                        <Grid item xs={4}>
                                            <Typography variant="caption" display="block" gutterBottom sx={{ color: "#656565" }}>
                                                Type keywords that you are looking for
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography variant="caption" display="block" gutterBottom sx={{ color: "#656565" }}>
                                                Select the movie from our recommendations
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography variant="caption" display="block" gutterBottom sx={{ color: "#656565" }}>
                                                Enjoy the movie
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item xs={12} container
                                direction="column"
                                justifyContent="center"
                                alignItems="center">
                                <Formik
                                    enableReinitialize
                                    initialValues={{
                                        name: ""
                                      }}
                                    onSubmit={(values) => {
                                        if (text) {
                                            navigate(`/searchresult/${text}`, {
                                                state: {
                                                    text: text,
                                                }
                                            });
                                        }
                                    }}
                                >
                                    {({
                                        handleSubmit,
                                    }) => (
                                        <form onSubmit={handleSubmit}>
                                            <Grid container justifyContent="center" spacing={1} sx={{ mt: 2 }}>
                                                <Grid item xs={12}>
                                                    <Paper
                                                        onSubmit={() => {
                                                            if (text) {
                                                                navigate(`/searchresult/${text}`, {
                                                                    state: {
                                                                        text: text,
                                                                    }
                                                                });
                                                            }
                                                        }}
                                                        sx={{
                                                            backgroundColor: "#242424",
                                                            borderRadius: 25,
                                                            display: "flex",
                                                            alignItems: "center",
                                                            width: 700,
                                                            height: 35,

                                                        }}
                                                        margin="dense"
                                                    >

                                                        <IconButton
                                                            aria-label="search" size="large" sx={{ m: 1 }}
                                                            type='submit'>
                                                            <SearchIcon sx={{ color: "white" }} />
                                                        </IconButton>

                                                        <InputBase
                                                            onChange={(e) => {
                                                                setText(e.target.value)
                                                            }}
                                                            autoFocus
                                                            fullWidth
                                                            placeholder="Search"
                                                            inputProps={{ "aria-label": "search google maps" }}
                                                            sx={{
                                                                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                                                input: { color: "#e0e0e0", fontWeight: 600, ml: -2, mr: 2 },
                                                            }}
                                                            size="medium" />
                                                    </Paper>
                                                </Grid>
                                            </Grid >
                                        </form>
                                    )}
                                </Formik>
                            </Grid>
                            {/* <Grid item xs={12} container
                                direction="column"
                                justifyContent="center"
                                alignItems="center">
                                <Paper elevation={1}
                                    // onSubmit={() => {
                                    //     if (text) {
                                    //         navigate(`/searchresult/${text}`, {
                                    //             state: {
                                    //                 text: text,
                                    //             }
                                    //         });
                                    //     }
                                    // }}
                                    sx={{
                                        backgroundColor: "#242424",
                                        borderRadius: 25,
                                        display: "flex",
                                        alignItems: "center",
                                        width: 700,
                                        height: 35,

                                    }} >
                                    <IconButton onClick={() => navigate(`/searchresult/${text}`)} aria-label="search" size="large" sx={{ m: 1 }}>
                                        <SearchIcon sx={{ color: "white" }} />
                                    </IconButton>
                                    <InputBase
                                        autoFocus
                                        onChange={(e) => {
                                            setText(e.target.value)
                                        }}
                                        fullWidth
                                        placeholder="Search"
                                        inputProps={{ "aria-label": "search google maps" }}
                                        sx={{
                                            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                            input: { color: "#616161", fontWeight: 600, ml: -2, mr: 2 },
                                        }}
                                        size="medium" />
                                </Paper>
                            </Grid> */}
                        </Grid>


                    </Grid>



                </Box>
            </Box>
        </Box>
    )
}

export default Searchmain
