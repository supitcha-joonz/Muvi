import React from 'react';
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

const SearchResult = () => {



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
            WebkitLineClamp: '4',
            WebkitBoxOrient: 'vertical',
        },
        image: {
            borderRadius: 100 / 10

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
                        justifyContent="center"
                        alignItems="center"
                    // sx={{
                    //     position: 'absolute',
                    //     left: '50%',
                    //     top: '50%',
                    //     transform: 'translate(-50%, -50%)'
                    // }}
                    >
                        <Grid container spacing={1}>
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
                                        fullWidth
                                        placeholder='Search'
                                        size="medium"
                                        InputProps={{
                                            disableUnderline: true,
                                        }}
                                        sx={{
                                            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                            input: { color: "#616161", fontWeight: 600, ml: -2, mr: 2 },
                                        }}

                                    />
                                </Paper>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            direction="column"
                            sx={{
                                width: "60%",
                                height: 250,
                                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                                mt: 10,
                                borderRadius: 2,
                                mb: 5
                            }}>
                            <Grid container
                                justifyContent="center"
                                alignItems="center"
                                spacing={2}>
                                <Grid item xs={4} >
                                    <Box sx={{ mt: -8 }}>
                                        <img style={styles.image} src={piture1} width="200" height="280" sx={{ borderRadius: 100 / 10 }} />
                                    </Box>
                                </Grid>
                                <Grid item xs={8} >
                                    <Typography variant="h6" gutterBottom sx={{ color: "white", textAlign: "left", fontWeight: 600, mt: 2 }}>
                                        Black Panther : Wakanda Forever
                                    </Typography>
                                    <Stack direction="row" spacing={1} sx={{ mb: 1.5 }}>
                                        <Chip label="ACTION" variant="outlined" sx={{ color: "black", backgroundColor: "white", fontWeight: 600 }} />
                                        <Chip label="2022" sx={{ color: "white" }} />
                                    </Stack>
                                    <Box sx={{ maxWidth: "90%" }}>
                                        <Typography variant="subtitle2" sx={{ color: "white", textAlign: "left" }} style={styles.multiLineEllipsis} >
                                            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                            blanditiis tenetur subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                            blanditiis tenetur subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                            blanditiis tenetur subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                            blanditiis tenetur
                                            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                            blanditiis tenetur subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                            blanditiis tenetur subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                            blanditiis tenetur subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                            blanditiis tenetur subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                            blanditiis tenetur subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                            blanditiis tenetur subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                            blanditiis tenetur subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                            blanditiis tenetur
                                        </Typography>
                                    </Box>
                                    <Box
                                        display="flex"
                                        justifyContent="flex-end" sx={{ mr: 2 }}>
                                        <IconButton aria-label="detail" sx={{ justifyContent: "flex-end" }}>
                                            <ArrowRightIcon sx={{
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




                    </Grid>




                </Box>
            </Box>
        </Box>
    )
}

export default SearchResult
