import {useRef, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createProduct, getProduct, updateproduct } from "../service/ProductService";

export const ProductFormBloc = () => {
    let params = useParams();
    const [newId, setNewId] = useState('');
    const [newName, setNewName] = useState('');
    const readable = params.id ? true : false;
    const navigate = useNavigate();
    let firstInit = useRef(true);

    const init = () => {
        if(params.id){
            if(firstInit.current){
            getProduct(params.id)
        .then(res => {
          setNewId(res.data.id);
          setNewName(res.data.name)
        })
        firstInit.current = false;
      }
    }
    }


    const handleChangeId = (event) => {
        setNewId(event.target.value)
    }

    const handleChangeName = (event) => {
        setNewName(event.target.value)
    }

    const handleSubmit = async (event) => {
        try{
           let res = await createProduct({ id : newId, name : newName });
            console.log(res);
            console.log(res.data);
          navigate("/products");
        } catch (error) {
          console.error(error);
        }
        event.preventDefault()
    }

    const handleUpdate = async (event) => {
        try{
            const res = await updateproduct( { id : newId, name : newName })
             console.log(res);
             console.log(res.data);
           navigate("/products");
         } catch (error) {
           console.error(error);
         }
        event.preventDefault()
    }

    return{
        newId,
        newName,
        readable,
        params,
        init,
        handleChangeId,
        handleChangeName,
        handleSubmit,
        handleUpdate
    }



}