import axios from 'axios'

const fetchRecepies = () =>{
    return axios.get('http://localhost:3000/recepies')
}

const getRecepieById = (id:string|undefined)=>{
    return axios.get('http://localhost:3000/recepies/'+id)
}

const addRecepie = (recepie:{title:string,imageUrl:string,content:string}) =>{
    return axios.post('http://localhost:3000/recepies',recepie)
}
const deleteRecepie =(id:number) => {
    return axios.delete('http://localhost:3000/recepies/'+id)
}

const RecepieServices = {
    fetchRecepies,
    getRecepieById,addRecepie,deleteRecepie
}
export default RecepieServices