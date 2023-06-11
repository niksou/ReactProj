import React from 'react'
import {Button,Typography,TableRow,TableCell} from '@mui/material'
import {useNavigate} from 'react-router-dom'

type RecepieType ={
    id:number,
    title:string,
    imageUrl:string,
    content:string,
    remove:(id:number)=>void,
}
function Recepie ({id,title,imageUrl,content,remove}:RecepieType){
    const navigate = useNavigate()
    return (
        <TableRow>
            <TableCell style={{width:'33%'}}>
                <Typography variant="button">
                    {title}
                </Typography>
            </TableCell>
            <TableCell style={{width:'33%'}}>
                <Typography variant="button">
                    <img width='400px' src={imageUrl}/>
                </Typography>
            </TableCell>
            <TableCell style={{width:'33%'}}>
                <Typography variant="button">
                    {content}
                </Typography>
            </TableCell>
            <TableCell>
                <Button size="small" variant="outlined" onClick={()=>navigate('/recepie/'+id)}>
                    Show Recepie
                </Button>
            </TableCell>
            <TableCell>
                <Button size="small" variant="outlined" onClick={()=>remove(id)}>
                    Delete
                </Button>
            </TableCell>
        </TableRow>
    )

}

export default Recepie