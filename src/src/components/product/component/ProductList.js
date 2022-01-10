import { Component } from "react";
import { Link } from "react-router-dom";
import product from "../service/ProductService";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

//https://www.codecheef.org/article/react-delete-confirmation-modal-code-example

class ProductList extends Component{

    constructor(props){
        super(props);
        this.state = {
            list : product
        }
    }

    handleDelete(e) {
        confirmAlert({
            title: 'Confirm to delete',
            // String interpolation
            message: `Are you sure to do this ${product[e.target.value].name}?`,
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    product.splice(e.target.value, 1);
                    this.setState({list : product})
                }
              },
              {
                label: 'No',
                onClick: () => {
                    this.setState({list : product})
                }
              }
            ]
          });
    // product.splice(e.target.value, 1);
    // this.setState({list : product})
    }


    render(){
        let listProduct = this.state.list.map((product, index) => {
            return <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td> <Link to={"form/" + index}><button type="button" className="btn btn-warning btn-sm">Update</button></Link> {' '}
                    <button value={index} onClick={(e) => this.handleDelete(e)} type="button" className="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
        })
        let id = "";
        return(
            <div>
                <h2>Product List</h2>
                {/* <Link to={id}>
                <button type="button" className="btn btn-success">Add Product</button>
                </Link>
                <Link to={"form"}>
                <button type="button" className="btn btn-success">Add Product</button>
                </Link> */}
                 <Link to={"form/" + id}>
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
}

export default ProductList;