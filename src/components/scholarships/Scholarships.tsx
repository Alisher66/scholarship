import React from 'react';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';

import img1 from "../../assets/images/abuRayhonBeruniy.161723f.jpg"
import ItemList from "./ItemList";

function Scholarships() {
    const handleClick = () => {
        window.location.href = "https://lex.uz/docs/-1399382"
    }
    return (
        <section className="scholarship">
            <Container maxWidth="lg">
                <h3 className="scholarship__title">Nomdor davlat stipendiyalari</h3>
                <p className="scholarship__subtitle">O‘zbekiston Respublikasi davlat oliy ta’lim muassasalarida o‘qiyotgan talabalarga tayinlanadi.</p>
                <Grid container spacing={3}>
                    <ItemList />

                </Grid>
                <div className="scholarship__btn-box">
                    <Button variant="outlined" sx={{mb:"40px"}} onClick={handleClick}>
                        Batafsil ko‘rish
                    </Button>
                </div>
            </Container>
        </section>
    );
}

export default Scholarships;