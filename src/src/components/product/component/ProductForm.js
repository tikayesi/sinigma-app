import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { ProductFormBloc } from "../bloc/ProductFormBloc";

function ProductForm (){

    const {
      newId,
      newName,
      readable,
      params,
      init,
      handleChangeId,
      handleChangeName,
      handleSubmit,
      handleUpdate
    } = ProductFormBloc();

    useEffect(() => {
      init()
    });


        return(
            <div>
            <h2>Product Form</h2>
                <div className="form-group row">
                <label htmlFor="inputId" className="col-sm-2 col-form-label">Id</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" id="inputId" placeholder="Id"
                value={newId}
                onChange={e => handleChangeId(e)} readOnly={readable}/>
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
            </div>
        )
    }

export default ProductForm;