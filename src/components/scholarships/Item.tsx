import React from 'react';
import img1 from "../../assets/images/abuRayhonBeruniy.161723f.jpg";
import Grid from "@mui/material/Unstable_Grid2";
import {ScholarshipModel} from "../../models";

function Item({id, name, description, img}: ScholarshipModel) {
    return (
        <Grid xs={12} lg={4} sm={6} >
            <div className="item">
                <img src={img} alt={name} />
                <div className="item__content">
                    <p className="item__title">{name}</p>
                    <p className="item__text">{description}
                    </p>
                </div>
            </div>
        </Grid>
    );
}

export default Item;