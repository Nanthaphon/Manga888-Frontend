import React, { useState, useEffect } from "react";
import CardAdmin from "./CardAdmin";
import axios from "../config/axios";
export default function AllProduct() {
  const [refresh, setRefresh] = useState(false);

  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("/product/getAllAdmin")
      .then((res) => setProduct(res?.data?.findProduct));
  }, [refresh]);

  const handleOnDelete = async (id) => {
    const deleteProduct = await axios.delete(`/product/deleteProduct/${id}`);
    if (deleteProduct) {
      setRefresh(!refresh);
    }
    console.log(deleteProduct);

    // setProduct(
    //   deleteProduct.filter((el) => {
    //     el.id !== deleteProduct?.data?.deleteProduct?.id;
    //   })
    // );
  };
  return (
    <div className="grid grid-cols-4">
      {product?.map((el) => (
        <CardAdmin
          price={el.price}
          name={el.name}
          imageUrl={el.image}
          id={el.id}
          setRefresh={setRefresh}
          refresh={refresh}
          handleOnDelete={handleOnDelete}
        />
      ))}
    </div>
  );
}
