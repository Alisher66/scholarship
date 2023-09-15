import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Container from "@mui/material/Container";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Button from "@mui/material/Button";
function Media() {
    const handleClick = () => {
        window.location.href = "https://kjsst.uz/registratsiya.html";
    }
    return (
        <section className="media">
            <Container>
               <Grid container spacing={2}>
                   <Grid xs={12} lg={6}>
                       <iframe width="100%" height="100%" style={{borderRadius:"10px"}}
                               src="https://www.youtube.com/embed/HhaIMqzdHNY?si=gMbZMwQYFXO8DAgF"
                               title="YouTube video player" frameBorder="0"
                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                               allowFullScreen></iframe>
                   </Grid>
                   <Grid xs={12} sx={{p:"0 40px"}} lg={6}>
                       <h5 className="media__title">Tizimdan qanday foydalaniladi?</h5>
                       <p className="media__text">Tizimdan ro‘yxatdan o‘ting, yutuqlarni kiriting va ariza topshiring.</p>
                       <Button variant="contained" endIcon={<ArrowRightAltIcon/>} sx={{mb:"40px"}} onClick={handleClick}>
                           Ariza topshirish
                       </Button>
                   </Grid>
               </Grid>
            </Container>
        </section>
    );
}

export default Media;