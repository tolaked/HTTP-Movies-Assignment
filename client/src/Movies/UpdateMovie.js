import React,{useState} from "react";
import Axios from "axios";

const initialForm={
    title:"",
    director: "",
    metascore:'',
    stars: []
}

const UpdateMovie = () => {

    const [updatedMovie, setUpdatedMovie] = useState({})
    const [form,setForm] =useState(initialForm)

    const patchMovie =(id,{title,director,metascore,stars})=>{
        Axios.put(`http://localhost:5000/api/movies/${id}`,{title,director,metascore,stars})
    .then(res=>{
        setUpdatedMovie(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
}

  useEffect([]
  )
   
    

  return (
     <div>
         <form>
             <input type="text"
             value={}
             onChange={}
             name={}/><br/>

             <input type="text"
             value={}
             onChange={}
             name={}/>

             <input type="text"
             value={}
             onChange={}
             name={}/>
         </form>
     </div>
  )
};

export default UpdateMovie;
