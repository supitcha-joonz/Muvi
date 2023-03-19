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
import image from '../../../img/moviebackground.jpg';
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
import Moviepage from './AllMovie/Moviepage';
import Actorpage from './AllActor/Actorpage';
import Collection from './Collection/Collection';


const drawerWidth = 225;


const Adminhome = (props) => {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [menudata, setMenudata] = React.useState("Movie");

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const drawer = (
        <div>
            <Toolbar />
            <List
                subheader={
                    <ListSubheader sx={{ backgroundColor: "transparent", mb: 5 }}>
                        <Typography variant="h4" gutterBottom sx={{ color: "whitesmoke" }}>
                            Welcome!
                        </Typography>
                    </ListSubheader>
                }
            >
                <ListItem onClick={() => setMenudata("Movie")} >
                    <ListItemButton sx={{
                        pl: 5,
                        borderRadius: '20px',
                        "&:hover": {
                            backgroundColor: "#212121",
                            color: "white",
                            borderRadius: '20px'
                        },
                    }}>
                        <ListItemIcon>
                            <LocalMoviesIcon sx={{ color: "#eeeeee" }} />
                        </ListItemIcon>
                        <ListItemText primary="Movie" />
                    </ListItemButton>
                </ListItem>
                <ListItem onClick={() => setMenudata("Actor")} >
                    <ListItemButton sx={{
                        pl: 5,
                        borderRadius: '20px',
                        "&:hover": {
                            backgroundColor: "#212121",
                            color: "white",
                            borderRadius: '20px'

                        },
                    }}>
                        <ListItemIcon>
                            <Person4Icon sx={{ color: "#eeeeee" }} />
                        </ListItemIcon>
                        <ListItemText primary="Actor" />
                    </ListItemButton>
                </ListItem>
                <ListItem onClick={() => setMenudata("Collection")} >
                    <ListItemButton sx={{
                        pl: 5,
                        borderRadius: '20px',
                        "&:hover": {
                            backgroundColor: "#212121",
                            color: "white",
                            borderRadius: '20px'
                        },
                    }}>
                        <ListItemIcon>
                            <CollectionsBookmarkIcon sx={{ color: "#eeeeee" }} />
                        </ListItemIcon>
                        <ListItemText primary="Collection" />
                        {/* {open ? <ExpandLess /> : <ExpandMore />} */}
                    </ListItemButton></ListItem>
                {/* <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                    </List>
                </Collapse> */}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const styles = {
        header: {
            backgroundImage: `url(${image})`,
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
        <Box style={styles.header}>
            <Box style={styles.content}>
                <Box style={styles.bgcontent}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="start"
                    >
                        <Box sx={{ display: 'flex', width: "100%", }}>
                            <CssBaseline />
                            <Box
                                component="nav"
                                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                                aria-label="mailbox folders"
                            >
                                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                                <Drawer
                                    container={container}
                                    variant="temporary"
                                    open={mobileOpen}
                                    onClose={handleDrawerToggle}
                                    ModalProps={{
                                        keepMounted: true, // Better open performance on mobile.
                                    }}
                                    sx={{
                                        display: { xs: 'block', sm: 'none' },
                                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                                    }}

                                >
                                    {drawer}
                                </Drawer>
                                <Drawer
                                    variant="permanent"
                                    sx={{
                                        display: { xs: 'none', sm: 'block' },
                                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                                    }}
                                    PaperProps={{
                                        sx: {
                                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                            color: "whitesmoke",
                                        }
                                    }}
                                >
                                    {drawer}
                                </Drawer>
                            </Box>
                            <Box
                                component="main"
                                sx={{ flexGrow: 1, mt: 1, ml: 5, mr: 5, mb: 2, width: { sm: `calc(100% - ${drawerWidth}px)` }, }}
                            >
                                <Toolbar />
                                {menudata == "Movie" && <Moviepage />}
                                {menudata == "Actor" && <Actorpage />}
                                {menudata == "Collection" && <Collection />}
                                {/* <Moviepage /> */}











                            </Box>
                        </Box>



                    </Grid>
                </Box>
            </Box>
        </Box>

    );
}

export default Adminhome
