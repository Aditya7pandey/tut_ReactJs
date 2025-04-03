import React from "react";

function Colorbox({color,onClick}){
    return(
        <button onClick={()=> onClick(color)} className="rounded-lg h-15 w-15 mx-4 flex items-center justify-center " style={{backgroundColor:color}}>{color}</button>
    )
}

export default Colorbox