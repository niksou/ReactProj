import React, {useEffect,useState} from 'react'
import {useParams,Link} from 'react-router-dom'
import RecepieServices from '../Services/Recepie.service'
import { Typography } from '@mui/material'

function RecepieView (){
    const {recepieId} = useParams()
    const [recepie,setRecepie]=useState<{ title: string, imageUrl: string, content: string }>({
        title:"",
        imageUrl:"",
        content:"",
    })
    useEffect(()=>{
        RecepieServices.getRecepieById(recepieId).then((response) => setRecepie(response.data))
    },[])
    return (
        <div>
            <Link to="/">Back</Link>
            <Typography variant="h4">Recepie Title: {recepie.title}</Typography>
            <img width='400px' src={recepie.imageUrl}/>
            <Typography variant="h5">Content: {recepie.content}</Typography>
        </div>
    )
}

export default RecepieView