import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import image from '../../img/duke.jpg';
import logo from '../../img/logo.png';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import LooksOneRoundedIcon from '@mui/icons-material/LooksOneRounded';
import LooksTwoRoundedIcon from '@mui/icons-material/LooksTwoRounded';
import Looks3RoundedIcon from '@mui/icons-material/Looks3Rounded';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import piture1 from '../../img/wakanda2.jpg';
import * as actorActions from "../../redux/action/actionActor";
import { useDispatch, useSelector } from "react-redux";

const Actor = () => {

    const actors = useSelector((state) => state.actors);
    const actorsList = actors.actors;

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(actorActions.loadactors());
    }, []);

    console.log(actorsList);





    const styles = {
        header: {
            backgroundImage: `url(${image})`,
            height: '100%',
            width: "50%",
            display: "flex",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        },
        bgheader: {
            height: '100vh',
            width: '100%',
            display: "flex",
            backgroundImage: "linear-gradient(to right,transparent,black 50%)",
            justifyContent: 'end',
            alignItems: 'end',
            position: 'absolute', //Here is the trick
            bottom: 0,
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
        image: {
            borderRadius: 100 / 10

        },
        completedIcon: {}
    }



    return (

        <Box style={{
            height: '100vh', width: "100%", backgroundColor: "black"
        }}>

            <Box style={styles.header}>
                <Box style={styles.bgheader}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-end"
                        sx={{ mr: 5, mb: 3 }}
                    >

                        {/* {actorsList.actors && actorsList.actors.map((item) => (
                            <StyledTableRow key={item.id} sx={{ backgroundColor: "transparent", mb: 2, borderRadius: 5 }} >
                                <StyledTableCell sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)", color: "whitesmoke" }} component="th" scope="row" align="center">
                                    {item.id}
                                </StyledTableCell>
                                <StyledTableCell sx={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', color: "whitesmoke" }} component="th" scope="row" align="center">
                                    {item.firstName}
                                </StyledTableCell>
                                <StyledTableCell sx={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', color: "whitesmoke" }} component="th" scope="row" align="center">
                                    {item.middleName ? item.middleName : "-"}
                                </StyledTableCell>
                                <StyledTableCell sx={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', color: "whitesmoke" }} component="th" scope="row" align="center">
                                    {item.familyName}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))} */}


                        <Typography variant="h1" gutterBottom sx={{ color: "white", fontWeight: 600 }}>
                            Winston
                        </Typography>
                        <Typography variant="h1" gutterBottom sx={{ color: "white", fontWeight: 600, mt: -5 }}>
                            Duke
                        </Typography>
                        <Chip label="1986-11-15, 36 years old" sx={{ color: "white", backgroundColor: "#584C23", fontWeight: 600, mt: -3, fontSize: "18px" }} />

                        <Box sx={{ width: "45%", height: "2px", background: 'linear-gradient(to left , #584C23, black)', mt: 10, mb: 3 }}>

                        </Box>

                        <Stack direction="row" spacing={5} sx={{ mb: 3, }}>
                            <img style={styles.image} src={piture1} width="140" height="200" sx={{ borderRadius: 100 / 10 }} />
                            <img style={styles.image} src={piture1} width="140" height="200" sx={{ borderRadius: 100 / 10 }} />
                            <img style={styles.image} src={piture1} width="140" height="200" sx={{ borderRadius: 100 / 10 }} />

                        </Stack>

                    </Grid>

                </Box>
            </Box>
        </Box>
    )
}

export default Actor
