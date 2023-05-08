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



const CreateGenreMovie = (props) => {

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

        
                    <Formik
                        Formik
                        enableReinitialize
                        initialValues={{
                            categories: '',
                        }}
                        validationSchema={Yup.object().shape({
                            title: Yup.string().required("Required"),
                            // description: Yup.string().required("Required"),
                        })}
                        onSubmit={(values) => {
                            var data = {
                                "id": 0,
                                "movie_id": values.categories.movie_id ? values.categories.movie_id : 0,
                                "genre_id": values.categories.genre_id ? values.categories.genre_id : 0,
                            }
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
                                        
                                        
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>

    )
}

export default CreateGenreMovie
