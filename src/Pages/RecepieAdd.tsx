import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import RecepieServices from '../Services/Recepie.service';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


interface IRecepieForm {
    title:string,
    imageUrl:string,
    content:string
}
function RecepieAdd(){
    const [formData,setFormData] = useState<IRecepieForm>({
        title:"",
        imageUrl:"",
        content:"",
    })
    const navigate = useNavigate()
    function addRecepie (){
        RecepieServices.addRecepie(formData)
            .then((response)=>
            navigate('/'))
    }
    function handleChange(e:any){
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    return(
        <div>
            <TextField size="small" label="enter title..." name="title" variant="outlined" onChange={handleChange} />
            <TextField size="small" label="enter Image Url..." type="text" name="imageUrl" variant="outlined" onChange={handleChange} />
            <TextField size="small" label="enter content..." name="content" variant="outlined" onChange={handleChange} />
            <Button variant="contained" onClick={addRecepie}>הוספה</Button>
        </div>
    )
}
export default RecepieAdd
