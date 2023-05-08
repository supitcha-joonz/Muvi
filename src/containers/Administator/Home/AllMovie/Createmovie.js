import React, { useEffect, useState } from 'react';
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
import { Formik, Field, Form, replace } from 'formik';
import Autocomplete from '@mui/material/Autocomplete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from "react-router-dom";
import * as categoryActions from "../../../../redux/action/actionCategory";
import * as collectionActions from "../../../../redux/action/actionCollection";
import * as movieActions from "../../../../redux/action/actionMovie";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import Swal from "sweetalert2";
import * as actorActions from "../../../../redux/action/actionActor";



const Createmovie = () => {

    const [filename, setFileName] = useState('');
    const [image, setImage] = useState('');
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const convert2base64 = (e) => {
        console.log(e.target.files)
        const reader = new FileReader()
        reader.addEventListener('load', () => {
            setImage(reader.result)

        })
        reader.readAsDataURL(e.target.files[0])
    }

    console.log(image);

    // const convert2base64 = e => {
    //     const file = e.target.files[0];
    //     const reader = new FileReader();

    //     reader.onloadend = () => {
    //         setImage(reader.result.toString());
    //     };
    //     reader.readAsDataURL(file);
    // };

    const styles = {
        header: {
            backgroundImage: `url(${image1})`,
            height: '100%',
            display: "flex",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: "white"
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

    const categories = useSelector((state) => state.categories);
    const categoriesList = categories.categories;
    const collections = useSelector((state) => state.collections);
    const collectionsList = collections.collections;
    const actors = useSelector((state) => state.actors);
    const actorsList = actors.actors;



    useEffect(() => {
        dispatch(categoryActions.loadcategories());
        dispatch(collectionActions.loadcollections());
        dispatch(actorActions.loadactors());
    }, []);

    console.log(categoriesList);
    console.log(collectionsList);
    console.log(actorsList);

    const actionSave = (data) => {
        Swal.fire({
            title: "Do you want to save?",
            // text: "คุณต้องการเพิ่ม Knowledge ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText:
                "<div style='font-size:20px;font-family:ntlbold;font-weight:normal'>YES</div>",
            cancelButtonText:
                "<div style='font-size:20px;font-family:ntlbold;font-weight:normal'>NO</div>",
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                dispatch(movieActions.addMovies(data)).then((resp) => {
                    if (resp.data) {
                        Swal.fire({
                            icon: "success",
                            title: "บันทึกข้อมูลสำเร็จ",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        actionSuccess();
                    }
                })
            } else if (result.isDenied) {
                Swal.fire({
                    icon: "error",
                    title: "เกิดข้อผิดพลาด",
                });
            }
        })
    }

   

    const actionSuccess = () => {
        Swal.fire({
            icon: "success",
            title: "บันทึกข้อมูลสำเร็จ",
            showConfirmButton: false,
            timer: 1500,
        });
        setTimeout(() => {
        }, 500);
        setTimeout(() => {
            dispatch(movieActions.loadmovies());
            navigate({ pathname: "/allmovie" });
        }, 1500);
    }


    return (

        <Box style={styles.header}>
            <Box style={styles.content}>
                <Box style={styles.bgcontent}>
                    <Formik
                        Formik
                        enableReinitialize
                        initialValues={{
                            title: '',
                            collection: '',
                            categories: '',
                            timemovie: '',
                            release_date: "",
                            plot: '',
                            actor: '',
                            image: ""
                        }}
                        validationSchema={Yup.object().shape({
                            title: Yup.string().required("Required"),
                            // description: Yup.string().required("Required"),
                        })}
                        onSubmit={(values) => {
                            var data = {
                                "id": 0,
                                "title": values.title ? values.title : "",
                                "runtime": values.timemovie ? values.timemovie : 0,
                                "release_date": values.release_date ? values.release_date : "",
                                "collection": values.collection.collection_id ? values.collection.collection_id : 0,
                                "overview": values.plot ? values.plot : "",
                                "image": values.image ? values.image : null,
                                "actor_id": values.actor.id ? values.actor.id : 0,
                                "movie_id": 0,
                                "genre_id": values.categories.genre_id ? values.categories.genre_id : 0,
                            }
                            actionSave(data);
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
                            <Form onSubmit={handleSubmit}>

                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                // sx={{ mt: 20 }}
                                >

                                    <Grid item xs={12} sx={{ mt: 15, mb: 10 }}>
                                        {/* add data image ไม่เข้า */}
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

                                            {image ? (
                                                <Grid
                                                    container wrap="nowrap" spacing={1} direction="column"
                                                    sx={{ mt: 5 }}

                                                >
                                                    <Grid item xs={12} >
                                                        <img src={image} width={150} height={150} alt={filename} />
                                                    </Grid>
                                                    <Grid item xs={2} sx={{ ml: 2, mr: 2 }} >
                                                        <Tooltip title={filename}>
                                                            <Typography noWrap variant="overline" style={styles.multiLineEllipsis} sx={{
                                                                color: "whitesmoke",
                                                            }}>
                                                                {filename}
                                                            </Typography>
                                                        </Tooltip>;
                                                    </Grid>
                                                </Grid>
                                            ) : (

                                                <Grid
                                                    container
                                                    direction="column"
                                                    justifyContent="center"
                                                    alignItems="center"
                                                >
                                                    <input
                                                        id='image'
                                                        name='image'
                                                        type='file'
                                                        className='input-field'
                                                        accept='image/*'
                                                        hidden
                                                        onChange={(e, values) => {
                                                            setFieldValue("image", values);
                                                            convert2base64(e)
                                                        }
                                                        }
                                                        // onChange={convert2base64}
                                                        onBlur={handleBlur}
                                                        value={values.image || ""}
                                                    // onChange={({ target: { files } }) => {
                                                    //     files[0] && setFileName(files[0].name)
                                                    //     if (files) {
                                                    //         setImage(URL.createObjectURL(files[0]))
                                                    //     }
                                                    // }}
                                                    />
                                                    <Grid item xs={12}>
                                                        <CloudUploadIcon sx={{ color: "#eeeeee", fontSize: "8vh" }} />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography variant="overline" sx={{ color: "whitesmoke" }}>
                                                            Browse Files To Upload
                                                        </Typography>
                                                    </Grid>


                                                </Grid>

                                            )}

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
                                                    id='title'
                                                    type="text"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.title || ""}
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
                                                    id="collection"
                                                    name="collection"
                                                    options={collectionsList.collections ?
                                                        collectionsList.collections : []}
                                                    getOptionLabel={(option) =>
                                                        option.name ? option.name : ""
                                                    }
                                                    onChange={(e, values) => setFieldValue("collection", values)}
                                                    fullWidth
                                                    sx={{
                                                        "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                                        input: { color: "white", fontWeight: 600 },
                                                    }}
                                                    InputProps={{
                                                        disableUnderline: true,
                                                    }}
                                                    renderInput={(params) => <TextField name="collection" {...params} placeholder="Choose" />}
                                                />

                                            </Paper>
                                        </Grid>
                                        <Grid item xs={5}>
                                            <Typography variant="h6" display="block" gutterBottom sx={{ color: "white", fontWeight: 600, textAlign: "left" }}>
                                                CATEGORY
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={7}>
                                            {/* อยู่คนละ path กันเลยงงการ add เข้า  */}
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
                                                    name="categories"
                                                    options={categoriesList.genres ?
                                                        categoriesList.genres : []}
                                                    getOptionLabel={(option) =>
                                                        option.name ? option.name : ""
                                                    }
                                                    fullWidth
                                                    onChange={(e, values) => setFieldValue("categories", values)}
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
                                                    type="text"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.timemovie || ""}
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
                                                RELEASE DATE
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
                                                    id="release_date"
                                                    type="text"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.release_date || ""}
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
                                                    type="text"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.plot || ""}
                                                    rows={7}
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
                                        {/* อยู่คนละ path กันเลยงงการ add เข้า  */}
                                        <Grid item xs={7}>
                                            <Paper fullWidth elevation={1}
                                                sx={{
                                                    backgroundColor: "#4B4B4B",
                                                    borderRadius: 5,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    height: "15vh",

                                                }} >
                                                <Autocomplete
                                                    multiple
                                                    id="actor"
                                                    name="actor"
                                                    options={actorsList.actors ?
                                                        actorsList.actors : []}
                                                    getOptionLabel={(option) =>
                                                        option.firstName ? option.firstName : ""
                                                    }
                                                    limitTags={5}
                                                    filterSelectedOptions
                                                    fullWidth
                                                    sx={{
                                                        "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                                        input: { color: "white", fontWeight: 600 },
                                                    }}
                                                    InputProps={{
                                                        disableUnderline: true,
                                                    }}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            name="actor"
                                                            placeholder="Choose"
                                                        />
                                                    )}
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
                                            <Button onClick={() => navigate((-1), { replace: true })} variant="contained" sx={{
                                                bgcolor: "#b71c1c", border: '4px solid #b71c1c', color: "white", width: "25vh", borderRadius: 25, fontWeight: 600,
                                                "&:hover": {
                                                    backgroundColor: "#EA5455",
                                                    color: "black",

                                                },
                                            }}>
                                                Back
                                            </Button>
                                            <Button type='submit' variant="contained" sx={{
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
                        )}
                    </Formik>

                </Box>
            </Box>
        </Box>
    )
}

export default Createmovie
