import { Component } from "react";
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { deleteProduct, getProducts } from "../service/ProductService";
import { connect } from "react-redux";
import { FETCH_COMPLETE } from "../reducer/Action";

//https://www.codecheef.org/article/react-delete-confirmation-modal-code-example

class ProductList extends Component{

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         list : []
    //     }
    // }

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
          //const { fetchComplete } = this.props
        try {
          const response = await getProducts();
          console.log("response data");
          console.log(response.data);
           this.props.fetchComplete(response.data)
         // this.setState({list: response.data.data})
        } catch (error) {
          console.error(error);
        }
      }


    render(){
        // pembuatan variable baru didalam render tidak diperboleh
        // karena membuat variable yang di asign berulang kali
        // untuk pembuatan variable yang diasign berulang kali, pada react harus menggunakan state
        // supaya jika data berubah maka hanya statenya saja yang dirender ulang
        // jika membuat variable baru, maka akan terender semua sehingga kurang efektif untuk kinerja react itu sendiri

        // let listProduct = "No Value"
        const {products} = this.props;
        // console.log("this props");
        // console.log(products);
        // if(products.length !== 0 ){
        //     console.log("kesana");
        // listProduct = products.map((product, index) => {
        //     console.log('product', product);
        //     return <tr key={product.id}>
        //         <td>{index + 1}</td>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td> <Link to={`form/${product.id}`}><button type="button" className="btn btn-warning btn-sm">Update</button></Link> {' '}
        //             <button value={product} onClick={() => this.handleDelete(product)} type="button" className="btn btn-danger btn-sm">Delete</button>
        //         </td>
        //     </tr>
        // })
    // }else{
    //     console.log("kesini");
    //     listProduct =  <tr><td>No Value</td></tr>
        
    // }
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
                        { 
                        products.length > 0 ?
                        products.map((product, index) => {
            console.log('product', product);
            return <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td> <Link to={`form/${product.id}`}><button type="button" className="btn btn-warning btn-sm">Update</button></Link> {' '}
                    <button value={product} onClick={() => this.handleDelete(product)} type="button" className="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
        }) : <tr><td>No Value</td></tr>
    }
                    </tbody>
               </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // line dibawah tidak diperbolehkan karena yang tercopy adalah storenya
    // lebih baik jika spesifik data mana yang akan diambil
    // return {...state}
    return { products: state.products,
    isLoading: state.isLoading}
  }

  function mapDispatchToProps(dispatch){
    return {
      fetchComplete: (payload) => dispatch({type: FETCH_COMPLETE, payload})
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);