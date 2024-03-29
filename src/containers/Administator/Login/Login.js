import React from 'react';
import Box from '@mui/material/Box';
import image from '../../../img/moviebackground.jpg';
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
import { autocompleteClasses } from '@mui/material';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import { Formik, Field, Form } from 'formik';
import * as Yup from "yup";

const Login = () => {


    const styles = {
        header: {
            backgroundImage: `url(${image})`,
            height: '100vh',
            display: "flex",
            backgroundColor: "black",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        },

        content: {
            height: '100%',
            width: '100%',
            display: "flex",
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
        },
        bgheader: {
            height: '50vh',
            width: '100%',
            display: "flex",
            backgroundImage: "linear-gradient(to bottom,transparent,black 40%)",
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute', //Here is the trick
            bottom: 0,
        },
        icon: {
            color: "white",
            "&$completedIcon": {
                color: "white"
            }
        },
        completedIcon: {}
    }

    const SignupSchema = Yup.object().shape({
        username: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        password: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required')
    });







    return (


        <Box style={styles.header}>
            <Box style={styles.content}>
                <Box style={styles.bgheader}>
                    <Box >
                        <Formik
                            enableReinitialize
                            initialValues={{
                                username: '',
                                password: '',
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={async (values) => {
                                await new Promise((r) => setTimeout(r, 500));
                                alert(JSON.stringify(values, null, 2));
                            }}

                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                setFieldValue,
                                resetForm,
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="flex-end"

                                    >
                                        <Grid container spacing={1} >
                                            <Grid container xs={12}>
                                                <Typography variant="h2" sx={{ color: "white", fontWeight: 600, textAlign: "left", mb: 5, ml: 6 }}>
                                                    Login
                                                </Typography>

                                            </Grid>
                                            <Grid item xs={12} container
                                                direction="row"
                                                justifyContent="center"
                                                alignItems="center"
                                                sx={{ mb: 3 }}
                                            >
                                                <Grid container spacing={2}>
                                                    <Grid item xs={4}>
                                                        <Typography variant="button" display="block" gutterBottom sx={{ color: "white", fontWeight: 600 }}>
                                                            USERNAME
                                                        </Typography>
                                                       
                                                    </Grid>
                                                    <Grid xs={7} >
                                                        <Paper fullWidth elevation={1}
                                                            sx={{
                                                                backgroundColor: "transparent",
                                                                borderRadius: 25,
                                                                display: "flex",
                                                                alignItems: "center",
                                                                height: 35,
                                                                mb: 1,
                                                                border: '3px solid white',

                                                            }} >
                                                            <TextField
                                                                id="username"
                                                                name="username"
                                                                type="username"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                fullWidth
                                                                value={values.username || ""}
                                                                error={
                                                                    touched.username && Boolean(errors.username)
                                                                }
                                                                size="medium"
                                                                InputProps={{
                                                                    disableUnderline: true,
                                                                }}
                                                                sx={{
                                                                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                                                    input: { color: "white", fontWeight: 600, ml: 2, mr: 2 },
                                                                }}

                                                            />
                                                            
                                                        </Paper>
                                                        {errors.username && touched.username ? (
                                                            <Typography sx={{color: "red"}}>{errors.username}</Typography>
                                                        ) : null}
                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                            <Grid item xs={12} container
                                                direction="row"
                                                justifyContent="center"
                                                alignItems="center" sx={{ mb: 5 }}>
                                                <Grid container spacing={2}>

                                                    <Grid item xs={4}>
                                                        <Typography variant="button" display="block" gutterBottom sx={{ color: "white", fontWeight: 600, textAlign: "center", }}>
                                                            PASSWORD
                                                        </Typography>
                                                    </Grid>
                                                    <Grid xs={7}>
                                                        <Paper fullWidth elevation={1}
                                                            sx={{
                                                                backgroundColor: "transparent",
                                                                borderRadius: 25,
                                                                display: "flex",
                                                                alignItems: "center",
                                                                height: 35,
                                                                mb: 1,
                                                                border: '3px solid white',

                                                            }} >
                                                            <TextField
                                                                id="password"
                                                                name="password"
                                                                type="password"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.password || ""}
                                                                fullWidth
                                                                size="medium"
                                                                InputProps={{
                                                                    disableUnderline: true,
                                                                }}
                                                                sx={{
                                                                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                                                    input: { color: "white", fontWeight: 600, ml: 2, mr: 2 },
                                                                }}

                                                            />
                                                        </Paper>
                                                        {errors.username && touched.username ? (
                                                            <Typography sx={{color: "red"}}>{errors.username}</Typography>
                                                        ) : null}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid xs={12}>
                                            <Button variant="contained" type="submit" sx={{
                                                bgcolor: "white", color: "black", width: "300px", borderRadius: 25, fontWeight: 600,
                                                "&:hover": {
                                                    backgroundColor: "#212121",
                                                    color: "white"
                                                },
                                            }}>
                                                Login
                                            </Button>

                                        </Grid>



                                    </Grid>
                                </form>
                            )}
                        </Formik>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default Login
