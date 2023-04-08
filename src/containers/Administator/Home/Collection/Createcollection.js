import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import image1 from '../../../../img/moviebackground.jpg';
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
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from "react-router-dom";





const Createcollection = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [filename, setFileName] = useState('')
    const [image, setImage] = useState(null)
    let navigate = useNavigate();



    const styles = {
        header: {
            backgroundImage: `url(${image1})`,
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
        multiLineEllipsis: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
        },
        completedIcon: {}
    }




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
                                        onClick={() => document.querySelector(".input-field").click()}
                                        sx={{
                                            backgroundColor: "transparent",
                                            borderRadius: 5,
                                            display: "flex",
                                            alignItems: "center",
                                            height: "35vh",
                                            width: "30vh",
                                            border: "5px solid #4B4B4B",
                                            borderStyle: 'dashed',

                                        }} >
                                        <input
                                            type='file'
                                            name='photo'
                                            className='input-field'
                                            accept='image/*'
                                            hidden
                                            onChange={({ target: { files } }) => {
                                                files[0] && setFileName(files[0].name)
                                                if (files) {
                                                    setImage(URL.createObjectURL(files[0]))
                                                }
                                            }}
                                        />
                                        {image ?
                                            <Grid
                                                container wrap="nowrap" spacing={1}  direction="column"
                                                sx={{mt: 5}}

                                            >
                                                <Grid item xs={12} >
                                                    <img src={image} width={150} height={150} alt={filename} />
                                                </Grid>
                                                <Grid item xs={2} sx={{ml :2, mr: 2}} >
                                                    <Tooltip title={filename}>
                                                        <Typography noWrap variant="overline" style={styles.multiLineEllipsis} sx={{
                                                            color: "whitesmoke",
                                                        }}>
                                                            {filename}
                                                        </Typography>
                                                    </Tooltip>;
                                                </Grid>
                                            </Grid>
                                            :
                                            <>
                                                <Grid
                                                    container
                                                    direction="column"
                                                    justifyContent="center"
                                                    alignItems="center"
                                                >
                                                    <Grid item xs={12}>
                                                        <CloudUploadIcon sx={{ color: "#eeeeee", fontSize: "8vh" }} />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography variant="overline" sx={{ color: "whitesmoke" }}>
                                                            Browse Files To Upload
                                                        </Typography>
                                                    </Grid>


                                                </Grid>
                                            </>

                                        }

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
                                   <Grid container justifyContent="end"
                                    alignItems="center" xs={8} sx={{ mb: 10 }} >
                                    <Stack
                                        direction="row"
                                        justifyContent="end"
                                        alignItems="end"
                                        spacing={2}
                                    >
                                        <Button onClick={() => navigate((-1), {replace: true})} variant="contained" sx={{
                                            bgcolor: "#b71c1c", border: '4px solid #b71c1c', color: "white", width: "25vh", borderRadius: 25, fontWeight: 600,
                                            "&:hover": {
                                                backgroundColor: "#EA5455",
                                                color: "black",

                                            },
                                        }}>
                                            Back
                                        </Button>
                                        <Button onClick={() => navigate((-1), {replace: true})} variant="contained" sx={{
                                            bgcolor: "#1b5e20", border: '4px solid #1b5e20', color: "white", width: "25vh", borderRadius: 25, fontWeight: 600,
                                            "&:hover": {
                                                backgroundColor: "#94AF9F",
                                                color: "black",

                                            },
                                        }}>
                                            Create 
                                        </Button>

                                    </Stack>

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
