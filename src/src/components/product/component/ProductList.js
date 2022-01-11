import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { ProductListBloc } from "../bloc/ProductListBloc";

//https://www.codecheef.org/article/react-delete-confirmation-modal-code-example

function ProductList() {

const {
    list,
    init,
    handleDelete
} = ProductListBloc()

    useEffect(() => {
        init()
    })
    
        let listProduct = "No Value"
        if(list.length !== 0 ){
        listProduct = list.map((product, index) => {
            return <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td> <Link to={`form/${product.id}`}><button type="button" className="btn btn-warning btn-sm">Update</button></Link> {' '}
                    <button value={product} onClick={() => handleDelete(product)} type="button" className="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
        })
    }else{
        listProduct =  <tr><td>No Value</td></tr>
    }
        return(
            <div>
                <h2>Product List</h2>
                 <Link to={"form"}>
                <button type="button" className="btn btn-success">Add Product</button>
                </Link>
               <table className="table table-striped">
                    <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Id</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {listProduct}
                    </tbody>
               </table>
            </div>
        )
    }

export default ProductList;