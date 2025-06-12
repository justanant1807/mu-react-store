import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
 

export default function Product() {

    const [products, setProducts] = useState([]);//used to help display the products 

    const fetchProducts = async () => {
    //const url = "https://gcet-node-app.vercel.app/products/all"  //API url to display products 
    const url = "http://localhost:8080/products"
    const res = await axios.get(url); //fetched data stored in the variable res

    //now to display 
    setProducts(res.data);
    console.log(res.data);

};

useEffect(() => {fetchProducts()},[])

  return ( <div>
        {products.map(product => (
            <li>{product.name}</li>
        ) ) }
        {/* doubt in the above line */}
        </div> 
  )
}
