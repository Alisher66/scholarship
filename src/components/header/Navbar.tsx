import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import img2 from "../../assets/images/logo12.png"
import MenuItem from '@mui/material/MenuItem';

const pages = ['Yoriqnoma', 'Stipendiyalarga Nomzodlar', 'Hujjatlar talablari', "Ro'yhatdan o'tish"];

export default function ButtonAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const handleClick = () => {
        window.location.href = "https://kjsst.uz/registratsiya.html";
    }
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={{backgroundColor:"#fff", pt:"15px", pb:"15px"}}>
                <Toolbar sx={{justifyContent: "space-between"}}>
                    <Box>
                        <img src={img2} alt="logo" style={{width: "260px"}}/>
                    </Box>
                    <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            <ul className="menu-list">
                                <li className="menu-item">
                                    <a className="menu-link" href="https://kjsst.uz/yoriqnoma.html">Yoriqnoma</a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="https://kjsst.uz/stipendiyalarganomzodlar.html">Stipendiyalarga Nomzodlar</a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="https://kjsst.uz/Stipendiyalar-talablari.html">Hujjatlar talablari</a>
                                </li>
                                <li className="menu-item menu-item__subscribe">
                                    <Button size="small" variant="contained" onClick={handleClick}>Ro'yhatdan o'tish</Button>
                                </li>
                            </ul>

                        </Box>
                    </Box>
                    <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="default"
                            aria-label="menu"
                            sx={{mr: 2}}
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
