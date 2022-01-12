import { useFormik } from "formik";
import {useRef, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createProduct, getProduct, updateproduct } from "../service/ProductService";
import * as Yup from "yup";

export const ProductFormBloc = () => {
    let params = useParams();
    const [newId, setNewId] = useState('');
    const [newName, setNewName] = useState('');
    const readable = params.id ? true : false;
    const navigate = useNavigate();
    let firstInit = useRef(true);

    const formik = useFormik({
      initialValues:{
          id: newId,
          name: newName
      },
      validationSchema : Yup.object({
          name: Yup.string().required("Required!").min(5, "minimum 5 character"),


      }),
      onSubmit: () => {
        if(params.id){
          handleUpdate()
        }else{
         handleSubmit()
        }
        }
  })

    const init = () => {
        if(params.id){
            if(firstInit.current){
            getProduct(params.id)
        .then(res => {
          formik.values.id = res.data.id;
          formik.values.name = res.data.name;
          
          setNewId(formik.values.id);
          setNewName(formik.values.name)
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
           let res = await createProduct({ id : formik.values.id, name : formik.values.name });
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
            const res = await updateproduct( { id : formik.values.id, name : formik.values.name })
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
        handleUpdate,
        formik
    }



}