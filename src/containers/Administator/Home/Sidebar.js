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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';


const drawerWidth = 225;


const Sidebar = (props) => {

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
            </List>
        </div>
    );

    const SidebarData = [
        {
            title: "Movie",
            path: "/allmovie",
            icon: <LocalMoviesIcon sx={{ color: "#eeeeee" }} />
        },
        {
            title: "Actor",
            path: "/allactor",
            icon: <Person4Icon sx={{ color: "#eeeeee" }} />
        },
        {
            title: "Collection",
            path: "/allcollection",
            icon: <CollectionsBookmarkIcon sx={{ color: "#eeeeee" }} />
        }
    ]


    const styles = {
        header: {
            backgroundImage: `url(${image})`,
            height: '100vh',
            // height: '100%',
            display: "flex",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
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

                                />
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
                                        {SidebarData.map((item, i) => (
                                            <ListItem key={i}>
                                                <ListItemButton to={item.path}
                                                    sx={{
                                                        pl: 5,
                                                        borderRadius: '20px',
                                                        "&:hover": {
                                                            backgroundColor: "#212121",
                                                            color: "white",
                                                            borderRadius: '20px'
                                                        },
                                                    }}>
                                                    <ListItemIcon>
                                                        {item.icon}
                                                    </ListItemIcon>
                                                    <ListItemText primary={item.title} />
                                                </ListItemButton>
                                            </ListItem>
                                        ))}
                                    </List>

                                </Drawer>
                            </Box>
                            <Box
                                component="main"
                                sx={{ flexGrow: 1, mt: 1, ml: 5, mr: 5, mb: 2, width: { sm: `calc(100% - ${drawerWidth}px)` }, }}
                            >
                                <Toolbar />

                                {/* {menudata == "Movie" && <Moviepage />}
                                {menudata == "Actor" && <Actorpage />}
                                {menudata == "Collection" && <Collection />}  */}
                             










                            </Box>
                        </Box>



                    </Grid>
                </Box>
            </Box>
        </Box>

    );
}

export default Sidebar
