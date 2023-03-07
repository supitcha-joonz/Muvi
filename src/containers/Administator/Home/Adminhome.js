import React from 'react';
import image from '../../../img/moviebackground.jpg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';






const Adminhome = () => {


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



    return (
        <Box style={styles.header}>
            <Box style={styles.content}>
                <Box style={styles.bgcontent}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        


                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default Adminhome
