import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import image1 from '../../../../img/moviebackground.jpg';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Formik, Field, Form } from 'formik';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Swal from "sweetalert2";
import * as collectionActions from "../../../../redux/action/actionCollection";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';



const Editcollection = (props) => {

    const [startDate, setStartDate] = useState(new Date());
    const [filename, setFileName] = useState('')
    const [image, setImage] = useState(null)
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const { id } = useParams();
    const [state, setState] = useState({});
    const collections = useSelector((state) => state.collections);
    const collectionById = collections.collection;
    const collection = collectionById.collections ? collectionById.collections[0] : []

    console.log(collectionById);

    useEffect(() => {
        dispatch(collectionActions.getSingleCollections(id));
    }, []);


    useEffect(() => {
        if (id) {
            if (collectionById) {
                setState({ ...collectionById });
            }
        } else {
            setState({ ...state })
        }
    }, [collectionById]);



    console.log(collectionById);



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

    const actionSave = (data) => {
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                dispatch(collectionActions.updateCollections(data, id)).then((resp) => {
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
            dispatch(collectionActions.loadcollections());
            navigate({ pathname: "/allcollection" });
        }, 1500);
    }



    return (

        <Box style={styles.header}>
            <Box style={styles.content}>
                <Box style={styles.bgcontent}>
                    <Formik
                        enableReinitialize
                        initialValues={collection ? collection : [] }
                        // initialValues={{
                        //     name: "",
                        // }}
                        validationSchema={Yup.object().shape({
                            name: Yup.string().required("Required"),
                            // description: Yup.string().required("Required"),
                        })}
                        onSubmit={(values) => {
                            var data = {
                                "id": values.id,
                                "name": values.name,
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
                                    sx={{
                                        position: 'absolute',
                                        left: '50%',
                                        top: '40%',
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                // sx={{ mt: 20 }}
                                >
                                    {/* <Grid item xs={12} sx={{ mt: 15, mb: 10 }}>
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

                                </Grid> */}
                                    <Grid container xs={8} spacing={5} sx={{ mt: 15, mb: 10 }}>

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
                                                    id='name'
                                                    name="name"
                                                    type="text"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.name || ""}
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
                                                Edit
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

export default Editcollection
