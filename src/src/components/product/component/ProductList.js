import { Component } from "react";
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { deleteProduct, getProducts } from "../service/ProductService";

//https://www.codecheef.org/article/react-delete-confirmation-modal-code-example

class ProductList extends Component{

    constructor(props){
        super(props);
        this.state = {
            list : []
        }
    }

    componentDidMount(){
        this.getProduct()
    }
    

    handleDelete(e) {
        console.log(e);
        confirmAlert({
            title: 'Confirm to delete',
            // String interpolation
            message: `Are you sure to do this ${e.name}?`,
            buttons: [
              {
                label: 'Yes',
                onClick: async () => {
                    await deleteProduct(e.id)
                    this.getProduct();
                }
              },
              {
                label: 'No',
                onClick: () => {
                    this.getProduct();
                }
              }
            ]
          });
    }

      async getProduct() {
        try {
          const response = await getProducts();
          this.setState({list: response.data.data})
        } catch (error) {
          console.error(error);
        }
      }


    render(){
        let listProduct = "No Value"
        console.log(this.state.list);
        if(this.state.list.length !== 0 ){
            console.log("kesana");
        listProduct = this.state.list.map((product, index) => {
            return <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td> <Link to={`form/${product.id}`}><button type="button" className="btn btn-warning btn-sm">Update</button></Link> {' '}
                    <button value={product} onClick={() => this.handleDelete(product)} type="button" className="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
        })
    }else{
        console.log("kesini");
        listProduct =  <tr><td>No Value</td></tr>
        
    }
        let id = "";
        return(
            <div>
                <h2>Product List</h2>
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