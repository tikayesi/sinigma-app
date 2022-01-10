import React, {useEffect, useState} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import product from "../service/ProductService";

function ProductForm (props){
    let params = useParams();
    const [newId, setNewId] = useState(params.id ? product[params.id].id:"");
    const [newName, setNewName] = useState(params.id ? product[params.id].name:"");

    const navigate = useNavigate();

    const handleChangeId = (event) => {
        setNewId(event.target.value)
    }

    const handleChangeName = (event) => {
        setNewName(event.target.value)
    }

    const handleSubmit = (event) => {
        product.push({
            id : newId,
            name : newName
        })
        console.log(product);
        navigate("/products");
        event.preventDefault()
    }

    const handleUpdate = (event) => {
        product.map((val) => {
            if(val == product[params.id]){
                product[params.id] = {
                    id : newId,
                    name : newName
                }
            }
        })
        navigate("/products");
        event.preventDefault()
    }

        return(
            <div>
            <h2>Product Form</h2>
                <div className="form-group row">
                <label htmlFor="inputId" className="col-sm-2 col-form-label">Id</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" id="inputId" placeholder="Id"
                value={newId}
                onChange={e => handleChangeId(e)}/>
                </div>
            </div>
            <br></br>
            <div className="form-group row">
                <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" id="inputName" placeholder="Name"
                value={newName}
                onChange={e => handleChangeName(e)}/>
                </div>
            </div>
            <br></br>
            <Link to={"/products"}><button className="btn btn-warning">Cancel</button></Link> {' '}
            <input className="btn btn-primary" type="submit" value="Submit" onClick={(e) => params.id ? handleUpdate(e) : handleSubmit(e)}/> 
                    {/* <label>
                    Id:
                    <input type="text" name="id" value={newId}
                    onChange={e => handleChangeId(e)}/>
                    </label><br></br>
                    <label>
                    Name:
                    <input type="text" name="name" value={newName}
                    onChange={e => handleChangeName(e)}/>
                    </label>
                    <input type="submit" value="Submit" onClick={(e) => handleSubmit(e)}/> */}
            </div>
        )
    }

export default ProductForm;