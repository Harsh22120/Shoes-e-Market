import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addCart }from '../redux/action'
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
// import Skeleton from 'react-loading-skeleton';

const Products = () => {
    const {id} = useParams();
    const [products, setProducts] = useState([]);
    const[loading, setloading] = useState(false);
    const dispatch = useDispatch();
    const addProduct = (products)=> {
        dispatch(addCart(products));
    }
    useEffect(() => {
        const getProducts = async () => {
            setloading(true);
            const response = await fetch('https://loaclhost:4000/api/product/${id}');
            setProducts(await response.json());
            setloading(false);
        }
        getProducts();

    },[]);

    // const Loading = () =>{
    //     return(
    //         <>
    //             {/* <div className='col-md-6'>
    //                 <Skeleton height={400} />
    //             </div>
    //             <div className='col-md-6' style={{lineHeight:2}}>
    //                 <Skeleton height={50} width={300}/>
    //                 <Skeleton height={75} />
    //                 <Skeleton height={25} width={150}/>
    //                 <Skeleton height={50} />
    //                 <Skeleton height={150} />
    //                 <Skeleton height={50} width={100} />
    //                 <Skeleton height={75} width={100} style={{marginLeft:6}}/>
    //             </div> */}
    //         </>
    //     )
    // }

    const ShowProducts = () => {
        return(
            <>
                <div className="col-md-6">
                    <img src={products.image} alt={products.title}
                    height="400px" width="400px" />
                </div>
                <div className='col-md-6'>
                    <h4 className='text-uppercase text-black-50'>
                        {products.category}
                    </h4>
                    <h1 className='display-5'>{products.tital}</h1>
                    <p className='lead fw-bolder'>
                        Rating {products.rating && products.rating.rate}
                        <i className='fa fa-star'></i>
                    </p>
                    <h3 className='dispplay-6 fw-blod my-4'>
                        $ {products.price}
                    </h3>
                    <p className='lead'>{products.description}</p>
                    <button className='btn btn-outline-dark px-4 py-2 onClick={()=>addProduct(product)}'>
                        Add to cart
                    </button>
                    <NavLink className='btn btn-dark'>
                        Go to cart
                    </NavLink>
                </div>
            </>
        );
    }
  return (
    <div>
        <div className='container py-5'>
            <div className='row py-4'>
                {loading? <loading /> : <ShowProducts />}
             </div>
        </div>
        
    </div>
  );
}

export default Products;