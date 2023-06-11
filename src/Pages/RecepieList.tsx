import React,{useEffect,useState} from 'react'
import {Table,TableBody,TableHead,TableCell,TableRow} from '@mui/material'
import IRecepie from '../Models/IRecepie';
import RecepieServices from '../Services/Recepie.service';
import Recepie from '../Components/Recepie';
import {Link} from 'react-router-dom'

function RecepieList(){
    const [recepies,setRecepies]=useState<IRecepie[]>([])
    useEffect(()=>{
      fetchRecepies()
    },[])
    async function fetchRecepies(){
        try{


        const response:any = await RecepieServices.fetchRecepies()
        localStorage.setItem("cache",JSON.stringify(response.data))
        setRecepies(response.data)
        }
        catch (error){
            const c = JSON.parse(localStorage.getItem("cache")||"[]")
            setRecepies(c)
        }
    }
    function removeRecepie (id:number){
        RecepieServices.deleteRecepie(id).then(()=>fetchRecepies())
    }
    return (
        <>
            <Link to="/add">Add New</Link>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Content</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        recepies.map(recepie=>(
                            <Recepie
                                id={recepie.id}
                                title={recepie.title}
                                imageUrl={recepie.imageUrl}
                                content={recepie.content}
                                remove={removeRecepie}
                                key={recepie.id}/>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}

export default RecepieList;