import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import image from '../../../../img/moviebackground.jpg';
import Grid from '@mui/material/Grid';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import Person4Icon from '@mui/icons-material/Person4';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import ListSubheader from '@mui/material/ListSubheader';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Link from '@mui/material/Link';
import AddIcon from '@mui/icons-material/Add';
import Createcollection from './Createcollection';


const drawerWidth = 225;


const Collection = (props) => {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };



    const styles = {
        header: {
            backgroundImage: `url(${image})`,
            height: '130vh',
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
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];



    return (
        <Box >
            <Box >
                <Box >
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                    >

                        <Stack direction="row"
                            justifyContent="flex-start"
                            alignItems="start"
                            sx={{ alignItems: "start", mb: 2 }}>
                            <Typography variant="h5" sx={{ color: "whitesmoke", fontWeight: 600 }}>
                                All Collection
                            </Typography>
                        </Stack>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="start" spacing={5}
                            sx={{ alignItems: "flex-start" }}>
                            <Grid>
                                <Typography variant="h2" sx={{ color: "whitesmoke", fontWeight: 600 }}>
                                    1.5k
                                </Typography>
                            </Grid>
                            <Grid >
                                <Typography variant="h5" sx={{ color: "whitesmoke", mt: 4 }}>
                                    Collection
                                </Typography>
                            </Grid>


                        </Stack>
                        <Box sx={{ width: "80%", height: "1.5px", background: 'linear-gradient(to right , #942617, black)', ml: 5, mr: 5, mt: 5}}></Box>
                        <Stack direction="row" justifyContent="flex-end"
                            alignItems="center" sx={{ mb: 3 }}>
                            <Link href="/createcollection" underline="none" >
                                <IconButton sx={{
                                    backgroundColor: "#942617",
                                    "&:hover": {
                                        backgroundColor: '#4A140C',
                                        color: "black",

                                    },
                                }} >
                                    <AddIcon sx={{ color: "#eeeeee", fontSize: "5vh" }} />
                                </IconButton></Link>
                        </Stack>


                        <Box sx={{ height: 630, width: '100%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: {
                                            pageSize: 5,
                                        },
                                    },
                                }}
                                pageSizeOptions={[5]}
                                checkboxSelection
                                disableRowSelectionOnClick
                                sx={{ width: "100%", backgroundColor: '#212121', color: "white" }}
                            />
                        </Box>
                        



                    </Grid>
                </Box>
            </Box>
        </Box>

    );
}

export default Collection
