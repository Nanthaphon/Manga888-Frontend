import React, { useState } from "react";
import axios from "../config/axios";

export default function CreateProduct({ setMode }) {
  const [input, setInput] = useState({
    image: "",
    price: "",
    name: "",
    description: "",
  });

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in input) {
      formData.append(key, input[key]);
    }

    const newProduct = await axios.post("/product/create", formData);
    if (newProduct) {
      alert("Already upload");
    }
    console.log(newProduct, "products");
  };
  return (
    <div className=" flex flex-col w-full items-center">
      <div className="w-full ">
        <h1 className="text-2xl">Create product</h1>
      </div>
      <form
        className="flex flex-col w-[500px] gap-5"
        onSubmit={handleSubmitForm}
      >
        <input
          type="file"
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
        />
        <textarea
          onChange={(e) => setInput({ ...input, description: e.target.value })}
          className="resize rounded-md border border-gray-600 bg-gray-200 px-3"
          placeholder="Description"
        ></textarea>
        <div className="flex justify-center items-center">
          <button className="bg-green-600 text-white px-8 py-1.5 w-fit rounded-md ">
            CREATE
          </button>
        </div>
      </form>
    </div>
  );
}
