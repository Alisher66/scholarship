import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Box from "@mui/material/Box";
import logo_img from '../../assets/images/logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneIcon from '@mui/icons-material/Phone';
import img2 from "../../assets/images/logo12.png"

function Footer() {
    return (
        <section className="footer">
            <Container maxWidth="lg">
                <Grid container spacing={2} className="footer__top">
                    <Grid xs={12} lg={5}>
                        <Box component="div" className="logo">
                            <img src={img2} alt="logo" className="logo_img" width="260px"/>
                        </Box>
                        {/*<p className="footer__text">Portalda eʼlon qilingan materiallardan nusxa koʻchirish, tarqatish*/}
                        {/*    va boshqa shakllarda foydalanish faqat tahririyat yozma roziligi bilan amalga oshirilishi*/}
                        {/*    mumkin.</p>*/}
                    </Grid>
                    <Grid container xs={12}  lg={7}>
                        <Grid xs={12} sm={6} lg={6}>
                            <h6>Biz ijtimoiy tarmoqlarda</h6>
                            <ul className="social-list">
                                <li className="social-list__item">
                                    <a href="https://www.instagram.com/nammqiuz/">
                                        <InstagramIcon/>
                                        <span>Instagram</span>
                                    </a>
                                </li>
                                <li className="social-list__item">
                                    <a href="https://t.me/nammqiuz">
                                        <TelegramIcon/>
                                        <span>Telegram</span>
                                    </a>
                                </li>
                                <li className="social-list__item">
                                    <a href="https://www.nammqi.uz/">
                                        <FacebookIcon/>
                                        <span>Facebook</span>
                                    </a>
                                </li>
                                {/*<li className="social-list__item">*/}
                                {/*    <a href="http://youtube.com/c/eduuz">*/}
                                {/*        <YouTubeIcon/>*/}
                                {/*        <span>YouTube</span>*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                            </ul>
                        </Grid>
                        <Grid xs={12} sm={6} lg={6}>
                            <h6>Bog’lanish</h6>
                            <ul className="contact-list">
                                <li className="contact-list__item">
                                    <a href="tel:1006">
                                        <PhoneIcon/>
                                        <span>Ishonch telefoni: 1006</span>
                                    </a>
                                </li>
                                <li className="contact-list__item">
                                    <a href="tel:+998692341430">
                                        <PhoneIcon/>
                                        <span> +998 (69) 234-14-30</span>
                                    </a>
                                </li>
                                {/*<li className="contact-list__item">*/}
                                {/*    <a href="https://t.me/stipendiya_edu_yordambot">*/}
                                {/*        <TelegramIcon/>*/}
                                {/*        <span> Telegram bot</span>*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                            </ul>
                        </Grid>
                    </Grid>
                </Grid>
                <div className="footer__bottom">
                    <p>2023 © kjsst.uz</p>
                    <a href="https://kjsst.uz/">
                        © Namangan Muhandisliq Qurilish instituti
                    </a>
                </div>
            </Container>
        </section>
    );
}

export default Footer;