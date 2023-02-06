import React from 'react';
import Box from '@mui/material/Box';
import image from '../../img/posterblackpanther.png';
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

const Description = () => {

    const styles = {
        header: {
            backgroundImage: `url(${image})`,
            height: '100vh',
            width: "100%",
            display: "flex",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        },
        bgheader: {
            height: '60vh',
            width: '100%',
            display: "flex",
            backgroundImage: "linear-gradient(to bottom,transparent,black 100%)",
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
            height: '200vh', width: "100%", backgroundColor: "black"
        }}>

            <Box style={styles.header}>
                <Box style={styles.bgheader}>
                    <Grid container
                        direction="column"
                        justifyContent="center"
                        alignItems="start"
                        sx={{
                            position: 'absolute',
                            left: '50%',
                            top: '125%',
                            transform: 'translate(-50%, -40%)',
                        }}
                    >
                        <Grid container
                            direction="column"
                            justifyContent="center"
                            alignItems="start">

                            <Typography variant="h3" gutterBottom sx={{ color: "white", fontWeight: 600, ml: 5, mr: 5 }}>
                                Black Panter
                            </Typography>
                            <Typography variant="h1" gutterBottom sx={{ color: "white", fontWeight: 600, mt: -3, textAlign: "start", lineHeight: 1, ml: 5, mr: 5 }}>
                                Wakanda Forever
                            </Typography>
                            <Stack direction="row" spacing={1} sx={{ mb: 1.5, mt: -3, ml: 5, mr: 5 }}>
                                <Chip label="ACTION" variant="outlined" sx={{ color: "black", backgroundColor: "white", fontWeight: 600 }} />
                                <Chip label="145 min" sx={{ color: "white", fontWeight: 600 }} />
                                <Chip label="2022" sx={{ color: "white", fontWeight: 600 }} />
                            </Stack>
                            <Box sx={{ maxWidth: "95%", mt: 6, ml: 5, mr: 5 }}>
                                <Typography variant="subtitle2" sx={{ color: "white", textAlign: "left" }} style={styles.multiLineEllipsis} >
                                    T'Challa, king of Wakanda, is dying from an illness which his sister, Shuri, believes can be cured by the "heart-shaped herb".
                                    Shuri attempts to synthetically recreate the herb after it was destroyed by Killmonger,[N 1] but fails to do so before he succumbs.
                                    One year later, Wakanda is under pressure from other nations to share their vibranium, with some parties attempting to steal it by force.
                                    Queen Ramonda implores Shuri to continue her research on the heart-shaped herb, hoping to create a new Black Panther that will defend Wakanda,
                                    but she refuses due to her belief that the Black Panther is a figure of the past. In the Atlantic Ocean, the CIA and U.S.
                                    Navy SEALs utilize a vibranium-detecting machine to locate a potential vibranium deposit underwater.
                                    The expedition is attacked and killed by a group of blue-skinned water-breathing superhumans led by Namor,
                                    with the CIA believing Wakanda to be responsible. Namor confronts Ramonda and Shuri, easily bypassing Wakanda's advanced security.
                                    Blaming Wakanda for the vibranium race, he gives them an ultimatum: deliver him the scientist responsible for the vibranium-detecting machine,
                                    or he will attack Wakanda.
                                </Typography>
                            </Box>
                            <Typography variant="h5" gutterBottom sx={{ color: "white", fontWeight: 600, mt: 5, ml: 5, mr: 5 }}>
                                ACTOR
                            </Typography>

                            <Stack direction="row" spacing={2} sx={{ ml: 5, mr: 5 }}>
                                <Avatar alt="Remy Sharp" sx={{ width: 56, height: 56 }} src="/static/images/avatar/1.jpg" />
                                <Avatar alt="Travis Howard" sx={{ width: 56, height: 56 }} src="/static/images/avatar/2.jpg" />
                                <Avatar alt="Cindy Baker" sx={{ width: 56, height: 56 }} src="/static/images/avatar/3.jpg" />
                                <Avatar alt="Travis Howard" sx={{ width: 56, height: 56 }} src="/static/images/avatar/2.jpg" />
                                <Avatar alt="Cindy Baker" sx={{ width: 56, height: 56 }} src="/static/images/avatar/3.jpg" />
                            </Stack>

                            <Box sx={{width: "70%", height: "1px", background: 'linear-gradient(to right , #942617, black)',ml: 5, mr: 5 ,mt: 10}}>

                            </Box>

                            

                            <Typography variant="h5" gutterBottom sx={{ color: "white", fontWeight: 600, mt: 10, ml: 5, mr: 5 }}>
                                RECOMMENDATIONS
                            </Typography>

                            <Stack direction="row" spacing={5} sx={{ mt: 3, ml: 5, mr: 5 }}>
                                <img style={styles.image} src={piture1} width="200" height="280" sx={{ borderRadius: 100 / 10 }} />
                                <img style={styles.image} src={piture1} width="200" height="280" sx={{ borderRadius: 100 / 10 }} />
                                <img style={styles.image} src={piture1} width="200" height="280" sx={{ borderRadius: 100 / 10 }} />

                            </Stack>

                        </Grid>



                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default Description
