import React,{useState} from "react";

function Name(props){
    return <h1>My name is {props.name}.</h1>
}

function Student(){
    const [name,setName]=useState("Shravista");
    return(
        <div>
            <h1>List of Student</h1>
            <Name name={name} />
            <button onClick={()=>setName("Kostubh")}>Change Name</button>
        </div>
    );
}

export default Student;
