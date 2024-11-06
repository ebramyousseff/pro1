import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./styleall.css";
import { Link } from "react-router-dom";


function Singlepage() {
  const { productId } = useParams(); //This Fetch productId from URL params

  const[product,setProduct] = useState(null);


  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((responsee) => {
        setProduct(responsee.data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [productId]);


  if(!product){
     return <p>Loading.....</p>;
  }

  return (
    <>
      <div class="card card_singlepage">
        <img
          src={product.image}
          class="card-img-top"
          alt={product.title}
          title={product.title}
        />
        <div class="card-body">
          <hr />

          <h5 class="card-title">Product Id:{product.id} </h5>
          <hr />
          <h5 class="card-title">Name:{product.title} </h5>
          <hr />

          <h5 class="card-title">Price:${product.price} </h5>
          <hr />

          <h5 class="card-title">Rate:{product.rating.rate} </h5>
        </div>
        <Link to="/hompage" className="btn btn-danger">
          Return HomePage
        </Link>
      </div>
    </>
  );
}

export default Singlepage;