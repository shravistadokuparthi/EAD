import React from"react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

function Pagenation(){
    const data=[
        {name:"Shravista",age:19},
        {name:"Koustubh",age:13},
        {name:"Suesh",age:50},
        {name:"Subhadra",age:45},
        {name:"Bhagya",age:70},  
        {name:"Lakshmi",age:16},
        {name:"Veera",age:30},
        {name:"Rao",age:60},
    ];

    const columns=[
        {
            Header:"Name",
            accessor:"name"
        },
        {
            Header:"Age",
            accessor:"age"
        }
    ];
    return(
        <div>
            <ReactTable 
            data={data} 
            columns={columns} 
            defaultPageSize={3} 
            pageSizeOptions={[3,6,9]} />
        </div>
    );
}

export default Pagenation;