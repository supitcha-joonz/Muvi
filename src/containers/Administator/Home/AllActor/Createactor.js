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
import * as Yup from "yup";
import Swal from "sweetalert2";
import * as actorActions from "../../../../redux/action/actionActor";
import { useDispatch, useSelector } from "react-redux";




const Createactor = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [filename, setFileName] = useState('')
    const [image, setImage] = useState(null)
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
                dispatch(actorActions.addActors(data)).then((resp) => {
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

    const loadData = () => {
        dispatch(actorActions.loadactors());
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

    const choosegender = [
        { id: "1", label: 'Male' },
        { id: "2", label: 'Female ' },
        { id: "0", label: 'Other ' },

    ];


    const styles = {
        header: {
            backgroundImage: `url(${image1})`,
            height: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat-y',
            backgroundSize: '250vh'
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
                        Formik
                        enableReinitialize
                        initialValues={{
                            fname: '',
                            faname: '',
                            mname: '',
                            birthday: '',
                            image: '',
                            gender: '',

                        }}
                        validationSchema={Yup.object().shape({
                            fname: Yup.string().required("Required"),
                            // description: Yup.string().required("Required"),
                        })}
                        onSubmit={(values) => {
                            var data = {
                                "id": 0,
                                "firstName": values.fname ? values.fname : "",
                                "middleName": values.mname ? values.mname : "",
                                "familyName": values.faname ? values.faname : "",
                                "birthday": values.birthday ? values.birthday : "",
                                "image": values.image ? values.image : null,
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

                            <Form onSubmit={handleSubmit}>

                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                // sx={{ mt: 20 }}
                                >
                                    <Grid item xs={12} sx={{ mt: 25, mb: 20 }}>
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

export default Createactor
