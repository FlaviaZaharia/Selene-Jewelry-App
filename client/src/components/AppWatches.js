import {useSelector,useDispatch} from 'react-redux'
import {useEffect, useState} from 'react';
import { getProducts as listProducts } from "../actions/productActions";
import {ITEM} from "./ITEM"
const AppWatches=()=>{

    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;
  
    useEffect(() => {
      dispatch(listProducts());
    }, [dispatch]);
  
        return(
           <div> {products.filter((product)=>product.category==="Watches").map((product)=>
            <ITEM
            key={product._id}
            name={product.name}
            material={product.material}
            price={product.price}
            image={product.image}
            quantity={product.quantity}
            category={product.category}
            _id={product._id}/>
            )}</div>
        );
   
        
}
export default AppWatches;