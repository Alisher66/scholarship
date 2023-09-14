import React from 'react';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Unstable_Grid2';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

function ScholarshipInfo() {
    return (
        <section className="info-content">
            <Container>
                <h3 className="info-content__title">Stipendiya turlari</h3>
                <p>O‘zbekiston Respublikasi Prezidentining davlat stipendiyasi</p>
                <span>Talabalarga tayinlash uchun belgilangan O‘zbekiston Respublikasi Prezidentining davlat stipendiyasi kvotasi (o‘n bitta) quyidagi ta’lim yo‘nalishlaridan har biri bo‘yicha bittadan stipendiya hisobidan bakalavriat va magistratura uchun alohida-alohida taqsimlanadi:</span>
                <Grid container spacing={3}>
                    <Grid xs={12} sm={4} lg={4} className="info-content__list">
                        <div><AddCircleOutlinedIcon /> madaniyat, san’at va sport;</div>
                        <div><AddCircleOutlinedIcon /> pedagogika</div>
                        <div><AddCircleOutlinedIcon /> huquq va xalqaro munosabatlar</div>
                        <div><AddCircleOutlinedIcon /> jurnalistika</div>
                    </Grid>
                    <Grid xs={12} sm={4} lg={4} className="info-content__list">
                        <div><AddCircleOutlinedIcon /> tabiiy fanlar;</div>
                        <div><AddCircleOutlinedIcon /> ijtimoiy-gumanitar va ijtimoiy fanlar;</div>
                        <div><AddCircleOutlinedIcon />sog‘liqni saqlash va ijtimoiy ta’minot;</div>
                        <div><AddCircleOutlinedIcon /> texnika va informatika;</div>
                    </Grid>
                    <Grid xs={12} sm={4} lg={4} className="info-content__list">
                        <div><AddCircleOutlinedIcon /> qishloq va suv xo‘jaligi;</div>
                        <div><AddCircleOutlinedIcon /> biznes va boshqaruv;</div>
                        <div><AddCircleOutlinedIcon />xorijiy tillar;</div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

export default ScholarshipInfo;