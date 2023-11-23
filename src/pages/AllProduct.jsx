import React, { useState, useEffect } from "react";
import CardAdmin from "./CardAdmin";
import axios from "../config/axios";
export default function AllProduct() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("/product/getAllAdmin")
      .then((res) => setProduct(res.data.findProduct));
  }, [product]);
  return (
    <div className="flex flex-row">
      {product.map((el) => (
        <CardAdmin
          price={el.price}
          name={el.name}
          imageUrl={el.image}
          id={el.id}
        />
      ))}
    </div>
  );
}
