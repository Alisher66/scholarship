import React from 'react';
import {ScholarshipData} from "../../constants/scholarshipsData";
import Item from "./Item";
function ItemList() {
    return (
       <>
           {ScholarshipData.map(data => {
              return <Item key={data.id} {...data}/>
           })}
       </>
    );
}

export default ItemList;