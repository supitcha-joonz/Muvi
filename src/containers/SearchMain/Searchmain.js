import React from 'react';
import Box from '@mui/material/Box';
import image from '../../img/moviebackground.jpg';
import logo from '../../img/logo.png';
import { maxHeight } from '@mui/system';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

const Searchmain = () => {


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
            color: "white",
            "&$completedIcon": {
                color: "white"
            }
        },
        completedIcon: {}
    }

    const steps = [
        'Type keywords that you’re looking for  ',
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

                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
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
                            alignItems="center">
                            <Box sx={{ width: '50%' }}>
                                <Stepper style={styles.stepIcon} activeStep={-1} alternativeLabel>
                                    {steps.map((label) => (
                                        <Step key={label} >
                                            <StepLabel 
                                             sx={{color: "white", textColor: "white"}}
                                            >{label}</StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>
                            </Box>
                            <Typography variant="button" display="block" gutterBottom sx={{ color: "#656565" }}>
                                button text
                            </Typography>
                        </Grid>
                        <Grid item xs={12} container
                            direction="column"
                            justifyContent="center"
                            alignItems="center">
                            <Paper elevation={1}
                                sx={{
                                    backgroundColor: "#242424",
                                    borderRadius: 25,
                                    display: "flex",
                                    alignItems: "center",
                                    width: 700,
                                    height: 35,

                                }} >
                                <IconButton disabled aria-label="search" size="large" sx={{ m: 1 }}>
                                    <SearchIcon sx={{ color: "white" }} />
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
                                        input: { color: "white", fontWeight: 600, ml: -2, mr: 2 },
                                    }}

                                />
                            </Paper>
                        </Grid>
                    </Grid>


                </Grid>




            </Box>
        </Box>
    )
}

export default Searchmain
