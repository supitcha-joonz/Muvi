import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import image from '../../../img/moviebackground.jpg';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";





const Adminhome = (props) => {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let navigate = useNavigate();
    const [menudata, setMenudata] = React.useState("Movie");

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const container = window !== undefined ? () => window().document.body : undefined;



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
            height: '70vh',
            width: '100%',
            display: "flex",
            backgroundImage: "linear-gradient(to bottom,transparent,black 60%)",
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


    return (
        <Box style={styles.header}>
            <Box style={styles.content}>
                <Box style={styles.bgheader}>

                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            position: 'absolute',
                            left: '50%',
                            top: '30%',
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Box>
                                    <Typography variant="h1" gutterBottom sx={{ color: "whitesmoke" }}>
                                        Welcome!
                                    </Typography>
                                </Box>

                            </Grid>
                            <Grid item xs={12} container
                                direction="column"
                                justifyContent="center"
                                alignItems="center">
                                <Box sx={{ width: '80%' }}>
                                    <Grid container direction="row"
                                        justifyContent="center"
                                        alignItems="center" spacing={3}>

                                        <Grid item xs={10} >
                                            <Stack direction="row" spacing={3}>
                                            <Button variant="contained"  onClick={() => navigate("/allmovie")} sx={{
                                                backgroundImage: "linear-gradient(to left,#454545 ,#212121 35%)",
                                                color: "whitesmoke",
                                                width: "100%",
                                                height: "70px",
                                                borderRadius: 3,
                                                fontWeight: 600,
                                                fontSize: "16px",
                                                "&:hover": {
                                                    backgroundImage: "linear-gradient(to left,#212121 ,#454545 35%)",
                                                    color: "whitesmoke",
                                                    fontSize: "20px"
                                                },
                                            }}>
                                                Movie
                                            </Button>
                                            <Button variant="contained" onClick={() => navigate("/allactor")}  sx={{
                                                backgroundImage: "linear-gradient(to left,#454545 ,#212121 35%)",
                                                color: "whitesmoke",
                                                width: "100%",
                                                height: "70px",
                                                borderRadius: 3,
                                                fontWeight: 600,
                                                fontSize: "16px",
                                                "&:hover": {
                                                    backgroundImage: "linear-gradient(to left,#212121 ,#454545 35%)",
                                                    color: "whitesmoke",
                                                    fontSize: "20px"
                                                },
                                            }}>
                                                Actor
                                            </Button>
                                            <Button variant="contained" onClick={() => navigate("/allcollection")}  sx={{
                                                backgroundImage: "linear-gradient(to left,#454545 ,#212121 35%)",
                                                color: "whitesmoke",
                                                width: "100%",
                                                height: "70px",
                                                borderRadius: 3,
                                                fontWeight: 600,
                                                fontSize: "16px",
                                                "&:hover": {
                                                    backgroundImage: "linear-gradient(to left,#212121 ,#454545 35%)",
                                                    color: "whitesmoke",
                                                    fontSize: "20px"
                                                },
                                            }}>
                                                Collection
                                            </Button>
                                            </Stack>
                                        </Grid>


                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>


                    </Grid>



                </Box>
            </Box>
        </Box>
    );
}

export default Adminhome
