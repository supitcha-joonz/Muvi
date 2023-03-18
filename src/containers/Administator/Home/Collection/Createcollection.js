import React, { useState } from 'react';
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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';





const Createcollection = () => {

    const [startDate, setStartDate] = useState(new Date());



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

    const top100Films = [
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
                            collection: '',

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

                                    </Paper>

                                </Grid>
                                <Grid container xs={8} spacing={5} sx={{ mb: 10 }}>

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
                                            <TextField
                                                id='collection'
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
                                        Create Collection
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

export default Createcollection
