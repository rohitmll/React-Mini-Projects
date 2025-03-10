import React, { useEffect, useState } from "react";
import axios from "axios";

const url = "https://dummyjson.com/products";
function ProductList() {
  const [products, setProducts] = useState([]);
  const [addedItems,setAddItems] = useState([])

  const fetchProducts = async () => {
    try {
      const response = await axios.get(url);
      console.log(response);
      setProducts(response.data?.products);
    } catch (err) {
      if (err.response) {
        console.log("Error:", err.response.data);
      }
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  const addItem=(item)=>{
setAddItems((prevItem)=>[...prevItem,item])
  }

  const removeItem=(index)=>{
    setAddItems((prevItem)=>prevItem.filter((_,i)=>i !==index))
  }
  return (
    <>
      {products?.map((item) => (
        <div key={item.id} style={{margin:"10px"}}>
          <img src={item.images[0]} alt="image" width={400} height={400}/>
          <div>Title: {item.title}</div>
          <div>Description: {item.description}</div>
          <div>Price: ${item.price}</div>
          <button onClick={()=>addItem(item)}>Buy Now</button>
        </div>
      ))}
      <div>Cart</div>
      <ol>
      {addedItems?.map((item,i)=>(
            <li key={item.id}>
                <div>Title: {item.title}</div>
          {/* <div>Description: {item.description}</div> */}
          <div>Price: ${item.price}</div>
          <button onClick={()=>removeItem(i)}>Remove</button>

            </li>
        ))}
        </ol>
    </>
  );
}

export default ProductList;
