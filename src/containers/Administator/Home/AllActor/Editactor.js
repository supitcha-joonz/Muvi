import React, { useEffect, useState } from "react";
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
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from "react-router-dom";
import * as actorActions from "../../../../redux/action/actionActor";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import * as Yup from "yup";
import Swal from "sweetalert2";




const Editactor = () => {


    const [filename, setFileName] = useState('')
    const [image, setImage] = useState(null)
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const actors = useSelector((state) => state.actors);
    const { id } = useParams();
    const [state, setState] = useState({});
    const actorsById = actors.actor;

   
    useEffect(() => {
        dispatch(actorActions.getSingleActors(id));
    }, []);


    // useEffect(() => {
    //     if (id) {
    //         if (actorsById) {
    //             setState({ ...actorsById });
    //         }
    //     } else {
    //         setState({ ...state })
    //     }
    // }, [actorsById]);


    console.log(actorsById);


    const styles = {
        header: {
            backgroundImage: `url(${image1})`,
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
        multiLineEllipsis: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
        },
        completedIcon: {}
    }

    const convert2base64 = (e) => {
        console.log(e.target.files)
        const reader = new FileReader()
        reader.addEventListener('load', () => {
            setImage(reader.result)

        })
        reader.readAsDataURL(e.target.files[0])
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
                dispatch(actorActions.updateActors(data, id)).then((resp) => {
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
            dispatch(actorActions.loadactors());
            navigate({ pathname: "/allactor" });
        }, 1500);
    }




    return (

        <Box style={styles.header}>
            <Box style={styles.content}>
                <Box style={styles.bgcontent}>
                    <Formik
                        enableReinitialize
                        initialValues={actorsById ? actorsById : []}
                        // initialValues={{
                        //     fname: '',
                        //     faname: '',
                        //     mname: '',
                        //     birthday: '',
                        //     image: '',
                        //     gender: '',
                        // }}
                        validationSchema={Yup.object().shape({
                            fname: Yup.string().required("Required"),
                            // description: Yup.string().required("Required"),
                        })}
                        onSubmit={(values) => {
                            var data = {
                                "id": values.id,
                                "firstName": values.fname,
                                "middleName": values.mname,
                                "familyName": values.faname,
                                "birthday": values.birthday,
                                "image": values.image,
                                "gender": 0,
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

                            <form onSubmit={handleSubmit}>

                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                // sx={{ mt: 20 }}
                                >
                                    <Grid item xs={12} sx={{ mt: 25, mb: 20 }}>
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
                                                            convert2base64();
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
                                                FIRSTNAME
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
                                                    id='fname'
                                                    type="text"
                                                    name="fname"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.fname || ""}
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
                                                MIDDLE NAME
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
                                                    id='mname'
                                                    type="text"
                                                    name="mname"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.mname || ""}
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
                                                FAMILY NAME
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
                                                    id='faname'
                                                    type="text"
                                                    name="faname"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.faname || ""}
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
                                        {/* <Grid item xs={5}>
                                            <Typography variant="h6" display="block" gutterBottom sx={{ color: "white", fontWeight: 600, textAlign: "left" }}>
                                                Gender
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

                                                }}  >
                                                <Autocomplete
                                                    id="gender"
                                                    name="gender"
                                                    options={choosegender}
                                                    onChange={(e, values) => setFieldValue("gender", values)}
                                                    fullWidth
                                                    sx={{
                                                        "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                                        input: { color: "white", fontWeight: 600 },
                                                    }}
                                                    InputProps={{
                                                        disableUnderline: true,
                                                    }}
                                                    renderInput={(params) => <TextField name="gender" {...params} placeholder="Choose" />}
                                                />
                                            </Paper>
                                        </Grid> */}

                                        <Grid item xs={5}>
                                            <Typography variant="h6" display="block" gutterBottom sx={{ color: "white", fontWeight: 600, textAlign: "left" }}>
                                                BIRTHDAY
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
                                                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DemoContainer components={['DatePicker']}>
                                                        <DatePicker
                                                            id="birthday"
                                                            sx={{
                                                                mt: -0.7,
                                                                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                                                input: { color: "white", fontWeight: 600 },
                                                            }} />
                                                    </DemoContainer>
                                                </LocalizationProvider> */}
                                                <TextField
                                                    id='birthday'
                                                    type="text"
                                                    name="birthday"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.birthday || ""}
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
                                        alignItems="center" xs={8} sx={{ mb: 15 }} >
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
                            </form>
                        )}
                    </Formik>

                </Box>
            </Box>
        </Box>
    )
}

export default Editactor
