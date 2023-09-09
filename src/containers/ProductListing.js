import React,{useEffect} from 'react';
import {  useDispatch ,useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import axios from 'axios'
import ProductComponenet from './ProductComponent';

const ProductListing = () => {
    const products = useSelector(state => state)
    const dispetch = useDispatch()
    const fetchProducts = async ()=>{
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch(err=>{console.log(err)})
        dispetch(setProducts(response.data))
    }

    useEffect(()=>{
        fetchProducts()
    },[])
    
    // const product = useSelector(state=> state)
    console.log('products: ',products)
    return (
        <div className='ui grid container'>
            <ProductComponenet />
        </div>
    );
}

export default ProductListing;