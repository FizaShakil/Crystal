import React from "react";
import Heading, { SubLine } from "../Reusable/Heading";
import products from "../../productList";
import { useNavigate } from "react-router-dom";

const Products = () => {
  
  const navigate = useNavigate()

  return (
    <section className="w-full px-6 md:px-20 pb-10 min-h-screen">
      <Heading head={'Our Products'}/>
       <SubLine line={'Explore the variety of our smart products'}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#302b26] rounded-xl shadow-md overflow-hidden hover:scale-105 transition transform duration-300"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-white">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-orange-600 text-lg font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
