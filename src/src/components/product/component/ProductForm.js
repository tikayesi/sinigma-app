import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { ProductFormBloc } from "../bloc/ProductFormBloc";

function ProductForm (){

    const {
      readable,
      init,
      formik
    } = ProductFormBloc();

    useEffect(() => {
      init()
    });


        return(
            <div>
            <h2>Product Form</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group row">
                <label htmlFor="inputId" className="col-sm-2 col-form-label">Id</label>
                <div className="col-sm-10">
                <input type="text" name="id" className="form-control" id="inputId" placeholder="Id"
                value={formik.values.id}
                onChange={formik.handleChange} readOnly={readable}/>
                </div>
            </div>
            <br></br>
            <div className="form-group row">
                <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                <input type="text" name="name" className="form-control" id="inputName" placeholder="Name"
                value={formik.values.name}
                onChange={formik.handleChange}/>
                 {formik.errors.name && formik.touched.name && (
            <p>{formik.errors.name}</p>)}
                </div>
            </div>
            <br></br>
            <Link to={"/products"}><button className="btn btn-warning">Cancel</button></Link> {' '}
            <input className="btn btn-primary" type="submit" value="Submit"/> 
            </form>
            </div>
        )
    }

export default ProductForm;