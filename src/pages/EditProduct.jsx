import { useNavigate, useParams } from "react-router-dom";
import axios from "../config/axios";
import React, { useEffect, useRef, useState } from "react";

export default function EditProduct() {
  const { productId } = useParams();
  const fileEl = useRef(null);
  const [input, setInput] = useState({
    id: productId,
    image: "",
    price: "",
    name: "",
    description: "",
  });
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/product/viewProductById/${productId}`)
      .then((res) => setInput(res?.data?.findProduct));
  }, []);

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      // formData.append("id", input.id);
      formData.append("image", input.image);
      formData.append("price", input.price);
      formData.append("name", input.name);
      formData.append("description", input.description);
      console.log("hello formdata");

      await axios.patch(`/product/editproduct/${productId}`, formData);
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(input);

  return (
    <div className=" flex flex-col w-full items-center">
      <div className="w-full ">
        <h1 className="text-2xl">Edit Product</h1>
      </div>
      <form
        className="flex flex-col w-[500px] gap-5"
        onSubmit={handleSubmitForm}
      >
        <img src={input.image} alt="" />
        <input
          type="file"
          ref={fileEl}
          onChange={(e) => {
            if (e.target.files[0]) {
              setInput({ ...input, image: e.target.files[0] });
            }
          }}
        />
        <input
          type="text"
          onChange={(e) => setInput({ ...input, name: e.target.value })}
          value={input.name}
          className="bg-gray-200 px-3 py-1.5 border border-gray-600 rounded-md"
          placeholder="Name-book"
        />
        <input
          type="text"
          onChange={(e) => setInput({ ...input, price: e.target.value })}
          className="bg-gray-200 px-3 py-1.5 border border-gray-600 rounded-md"
          placeholder="price"
          value={input.price}
        />
        <textarea
          onChange={(e) => setInput({ ...input, description: e.target.value })}
          className="resize rounded-md border border-gray-600 bg-gray-200 px-3"
          placeholder="Description"
          value={input.description}
        ></textarea>
        <div className="flex justify-center items-center">
          <button className="bg-green-600 text-white px-8 py-1.5 w-fit rounded-md ">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
