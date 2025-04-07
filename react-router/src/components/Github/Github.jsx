import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export default function GitHub(){

    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/Aditya7pandey`)
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
    return(
        <div className="text-center m-4 bg-gray-600 text-white text-3xl">Github followers :{data.followers} 
        <img src={data.avatar_url} alt="Git picture" /> 
        </div>
         
    )
}

export const GithubInfoLoader = async() =>{
    const response = await fetch(`https://api.github.com/users/Aditya7pandey`)
    return response.json()
}