import { AccountCircle, Logout, ShoppingCart } from '@mui/icons-material';
import { Avatar, Badge, Dialog, DialogActions, DialogContent, Divider, IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Login from '../../features/Auth/components/Login';
import Register from '../../features/Auth/components/Register';
import { logout } from '../../features/Auth/userSlice';
import { cartItemsCountSelector } from '../../features/Cart/selector';
import './style.scss';

const MODE = {
    LOGIN: 'login',
    REGISTER: 'register',
}

export default function Header() {
    const loggedInUser = useSelector(state => state.user.current);
    const cartItemsCount = useSelector(cartItemsCountSelector);
    const isLoggedIn = !!loggedInUser.id;
    const history = useHistory();

    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);
    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUserClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        const action = logout();
        dispatch(action);
        window.location.reload();
        setAnchorEl(null);
    };

    const handleCartClick = () => {
        history.push('/cart');
    };

    const handlePageChange = () => {
        history.push('/user');
        setAnchorEl(null);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar className='header'>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link className="Menu-Btn" to="/">
                            <img src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Flogo-1.png?alt=media&token=78a5d73b-32c4-4380-84a4-ec80369abcb1" alt="" style={{ width: "100px", height: "100px" }} />
                        </Link>
                    </Typography>

                    <NavLink className="Menu-Btn" to='/products'>

                        <Button color="inherit">
                            SHOP
                        </Button>

                    </NavLink>

                    <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={handleCartClick}>

                        <Badge badgeContent={cartItemsCount} color="error">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>

                    {/* <Button color="inherit">
                        LOGIN
                    </Button> */}

                    {!isLoggedIn && (
                        <Button color="inherit" onClick={handleClickOpen}>
                            LOGIN
                        </Button>
                    )}

                    {isLoggedIn && (
                        <IconButton color="inherit" onClick={handleUserClick}>
                            <AccountCircle />
                        </IconButton>
                    )}


                </Toolbar>
            </AppBar>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handlePageChange}>
                    <Avatar /> Profile
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>

            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogContent>
                    {mode === MODE.REGISTER && (
                        <>
                            <Register closeDialog={handleClose} />

                            <Box textAlign="center">
                                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                                    Already have an account. Login here.
                                </Button>
                            </Box>
                        </>

                    )}

                    {/* <Login closeDialog={handleClose} /> */}

                    {mode === MODE.LOGIN && (
                        <>
                            <Login closeDialog={handleClose} />

                            <Box textAlign="center">
                                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                                    Don't have an account?
                                </Button>
                            </Box>
                        </>

                    )}


                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}