import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';

const Api = () => {

    const [humans,setHumans] = useState([]);
    const url = "https://randomuser.me/api/?results=6";

    const axim = async()=>{
        try {
            const res = await axios.get(url);
            setHumans(res.data.results);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        axim()
    },[])
    useEffect(()=>{
        console.log(humans)
    },[humans])
  return (
    <div>
        <div className="container">
            <Card humans={humans}/>
        </div>
    </div>
  )
}

export default Api
