import React from 'react';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';
import logo_img from '../../assets/images/logo.png';
import ResponsiveAppBar from "./Navbar";
import ButtonAppBar from "./Navbar";


function Header() {

    return (
        <header className="header">
            <Container maxWidth="lg">
                <ButtonAppBar />
                {/*<div className="header__inner">*/}
                {/*    <Box component="div" className="logo">*/}
                {/*        <img src={logo_img} alt="logo" className="logo_img"/>*/}
                {/*        <p className="logo_title">stipendiya.edu.uz</p>*/}
                {/*    </Box>*/}
                {/*    <Button variant="contained" onClick={handleClick}>ONE ID orqali kirish</Button>*/}
                {/*</div>*/}
            </Container>
        </header>
    );
}

export default Header;