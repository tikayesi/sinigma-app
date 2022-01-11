import { useRef, useState } from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { deleteProduct, getProducts } from "../service/ProductService";


export const ProductListBloc = () => {
    const [list, setNewList] = useState([]);
    let firstInit = useRef(true);

    const init = async () => {
        if(firstInit.current){
            await getListProduct();
            firstInit.current = false
            }
    }
    

   const  handleDelete = (e) => {
        console.log(e);
        confirmAlert({
            title: 'Confirm to delete',
            message: `Are you sure to do this ${e.name}?`,
            buttons: [
              {
                label: 'Yes',
                onClick: async () => {
                    await deleteProduct(e.id)
                    await getListProduct();
                }
              },
              {
                label: 'No',
                onClick: async () => {
                    await getListProduct();
                }
              }
            ]
          });
    }

      async function getListProduct() {
        try {
          const response = await getProducts();
          setNewList(response.data.data)
        } catch (error) {
          console.error(error);
        }
      }

    return {
        list,
        init,
        handleDelete
    }

}