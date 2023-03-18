import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import image from '../../../../img/moviebackground.jpg';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Formik, Field, Form } from 'formik';
import Autocomplete from '@mui/material/Autocomplete';

const Createmovie = () => {

    const styles = {
        header: {
            backgroundImage: `url(${image})`,
            height: '100%',
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


    // const styles = {
    //     header: {
    //         backgroundImage: "linear-gradient(black 40%,#212121,#424242)",
    //         height: '190vh',
    //         display: "flex",
    //         backgroundPosition: 'center',
    //         backgroundRepeat: 'no-repeat',
    //         backgroundSize: 'cover'
    //     },

    //     content: {
    //         height: '100%',
    //         width: '100%',
    //         backgroundColor: 'rgba(0, 0, 0, 0.9)',
    //     },
    //     icon: {
    //         "& $active": {
    //             color: "pink"
    //         },
    //     },
    //     bgcontent: {
    //         height: '100%',
    //         width: '100%',
    //         backgroundColor: 'rgba(52, 52, 52, 0.5)'


    //     },
    //     multiLineEllipsis: {
    //         overflow: 'hidden',
    //         textOverflow: 'ellipsis',
    //         display: '-webkit-box',
    //         WebkitLineClamp: '4',
    //         WebkitBoxOrient: 'vertical',
    //     },
    //     image: {
    //         borderRadius: 100 / 10

    //     },
    //     completedIcon: {}
    // }

    const categories16 = [
        { label: 'Action' },
        { label: 'War ' },
        { label: 'Adventure ' },
        { label: 'Western' },
        { label: 'Comedy' },
        { label: "Drama" },
        { label: 'Erotic ' },
        { label: "Musical" },
        { label: "Romance" },
        { label: "Fantasy" },
        { label: "Science fiction" },
        { label: "Horror " },
        { label: "Mystery" },
        { label: "Animation" },
        { label: "Documentary " },
        { label: "Noir" }

    ];


    return (

        <Box style={styles.header}>
            <Box style={styles.content}>
                <Box style={styles.bgcontent}>
                    <Formik
                        initialValues={{
                            name: '',
                            part: '',
                            categories: '',
                            timemovie: '',
                            plot: '',
                            actor: '',
                        }}
                        onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            alert(JSON.stringify(values, null, 2));
                        }}
                    >
                        <Form>

                            <Grid
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                            // sx={{ mt: 20 }}
                            >
                                <Grid item xs={12} sx={{ mt: 15, mb: 10 }}>
                                    <Paper fullWidth elevation={1}
                                        sx={{
                                            backgroundColor: "#4B4B4B",
                                            borderRadius: 5,
                                            display: "flex",
                                            alignItems: "center",
                                            height: "35vh",
                                            width: "30vh"

                                        }} >
                                        <input
                                            type='file'
                                            name='photo'
                                            accept='image/*'
                                        />

                                    </Paper>

                                </Grid>
                                <Grid container xs={8} spacing={5} sx={{ mb: 10 }}>

                                    <Grid item xs={5}>
                                        <Typography variant="h6" display="block" gutterBottom sx={{ color: "white", fontWeight: 600, textAlign: "left" }}>
                                            MOVIE NAME
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Paper fullWidth elevation={1}
                                            sx={{
                                                backgroundColor: "#4B4B4B",
                                                borderRadius: 25,
                                                display: "flex",
                                                alignItems: "center",
                                                height: 35,

                                            }} >
                                            <TextField
                                                id='name'
                                                type="name"
                                                fullWidth
                                                size="medium"
                                                InputProps={{
                                                    disableUnderline: true,
                                                }}
                                                sx={{
                                                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                                    input: { color: "white", fontWeight: 600 },
                                                }}

                                            />
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography variant="h6" display="block" gutterBottom sx={{ color: "white", fontWeight: 600, textAlign: "left" }}>
                                            COLLECTION NAME
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Paper fullWidth elevation={1}
                                            sx={{
                                                backgroundColor: "#4B4B4B",
                                                borderRadius: 25,
                                                display: "flex",
                                                alignItems: "center",
                                                height: 35,

                                            }} >
                                            <Autocomplete
                                                id="part"
                                                options={categories16}
                                                fullWidth
                                                sx={{
                                                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                                    input: { color: "white", fontWeight: 600 },
                                                }}
                                                InputProps={{
                                                    disableUnderline: true,
                                                }}
                                                renderInput={(params) => <TextField {...params} placeholder="Choose" />}
                                            />

                                        </Paper>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography variant="h6" display="block" gutterBottom sx={{ color: "white", fontWeight: 600, textAlign: "left" }}>
                                            CATEGORY
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Paper fullWidth elevation={1}
                                            sx={{
                                                backgroundColor: "#4B4B4B",
                                                borderRadius: 25,
                                                display: "flex",
                                                alignItems: "center",
                                                height: 35,

                                            }} >
                                            <Autocomplete
                                                id="categories"
                                                options={categories16}
                                                fullWidth
                                                sx={{
                                                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                                    input: { color: "white", fontWeight: 600 },
                                                }}
                                                InputProps={{
                                                    disableUnderline: true,
                                                }}
                                                renderInput={(params) => <TextField {...params} placeholder="Choose" />}
                                            />
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography variant="h6" display="block" gutterBottom sx={{ color: "white", fontWeight: 600, textAlign: "left" }}>
                                            TIME
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Paper fullWidth elevation={1}
                                            sx={{
                                                backgroundColor: "#4B4B4B",
                                                borderRadius: 25,
                                                display: "flex",
                                                alignItems: "center",
                                                height: 35,

                                            }} >
                                            <TextField
                                                id="timemovie"
                                                type="number"
                                                fullWidth
                                                size="medium"
                                                InputProps={{
                                                    disableUnderline: true,
                                                }}
                                                sx={{
                                                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                                    input: { color: "white", fontWeight: 600 },
                                                }}

                                            />
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography variant="h6" display="block" gutterBottom sx={{ color: "white", fontWeight: 600, textAlign: "left" }}>
                                            PLOT
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Paper fullWidth elevation={1}
                                            sx={{
                                                backgroundColor: "#4B4B4B",
                                                borderRadius: 5,
                                                display: "flex",
                                                alignItems: "center",
                                                height: "27vh",

                                            }} >
                                            <TextField
                                                id='plot'
                                                multiline
                                                type="name"
                                                rows={10}
                                                fullWidth
                                                size="medium"
                                                InputProps={{
                                                    disableUnderline: true,
                                                    style: { color: "white", fontWeight: 600 }
                                                }}
                                                sx={{
                                                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                                    input: { color: "white", fontWeight: 600 },
                                                }}

                                            />
                                            {/* <TextField
                                                id="plot"
                                                type="name"
                                                multiline
                                                fullWidth
                                                rows={10}
                                                InputProps={{
                                                    disableUnderline: true,
                                                }}
                                                sx={{
                                                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                                    input: { color: "white", fontWeight: 600 },
                                                }}

                                            /> */}
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography variant="h6" display="block" gutterBottom sx={{ color: "white", fontWeight: 600, textAlign: "left" }}>
                                            ACTOR
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Paper fullWidth elevation={1}
                                            sx={{
                                                backgroundColor: "#4B4B4B",
                                                borderRadius: 25,
                                                display: "flex",
                                                alignItems: "center",
                                                height: 35,

                                            }} >
                                            <Autocomplete
                                                id="categories"
                                                options={categories16}
                                                fullWidth
                                                sx={{
                                                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                                    input: { color: "white", fontWeight: 600 },
                                                }}
                                                InputProps={{
                                                    disableUnderline: true,
                                                }}
                                                renderInput={(params) => <TextField {...params} placeholder="Choose" />}
                                            />
                                        </Paper>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent="center"
                                    alignItems="center" xs={8} sx={{ mb: 10 }} >
                                    <Button variant="contained" sx={{
                                        bgcolor: "transparent", border: '4px solid white', color: "white", width: "30vh", borderRadius: 25, fontWeight: 600,
                                        "&:hover": {
                                            backgroundColor: "white",
                                            color: "black",
                                            border: '4px solid white'

                                        },
                                    }}>
                                        Create movie
                                    </Button>

                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>

                </Box>
            </Box>
        </Box>
    )
}

export default Createmovie
