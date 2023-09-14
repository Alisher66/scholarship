import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import about_img from "../../assets/images/about-img.png"
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { TypeAnimation } from 'react-type-animation';

function About() {
    const handleClick = () => {
        window.location.href = "https://stipendiya.edu.uz/auth/one-id";
    }
    return (
        <section className="about">
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid xs={12} sm={6} lg={6}>
                        <Box className="about__content">
                            <h3 className="about__title">
                                <TypeAnimation
                                    sequence={[
                                        "Imom al-Buxoriy",
                                        1000,
                                        "Ibn Sino",
                                        1000,
                                        "Navoiy",
                                        1000,
                                    ]}
                                    speed={20}
                                    repeat={Infinity}
                                />
                                <br/>
                                stipendiyasi
                            </h3>

                            <p style={{marginBottom:"40px"}}>Talabalar va doktorantlar uchun davlat stipendiyalariga onlayn ariza yuborish portali
                            </p>
                            <Button
                                variant="contained"
                                endIcon={<ArrowRightAltIcon/>}
                                sx={{mb:"40px"}}
                                onClick={handleClick}
                            >
                                Ariza topshirish
                            </Button>
                            <Box className="about__counter">
                                <ul>
                                    <li className="about__counter-item">
                                        <span>1.923</span>
                                        Jami ro‘yhatdan o‘tganlar soni
                                    </li>
                                    <li className="about__counter-item">
                                        <span>1.239</span>
                                        Jami arizalar soni
                                    </li>
                                </ul>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={6} sm={6} lg={6} className="about_bg">
                        <img src={about_img} alt="about_img" className="about_img"/>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

export default About;