import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from '../../productList'

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center text-white mt-20">
        <h2>Product not found</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-orange-600 text-black rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white font-sans px-6 md:px-16 py-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Product Image */}
      <div className="mb-8 flex justify-center">
        <div className="w-full max-w-2xl rounded-xl shadow-lg overflow-hidden">
        <img
         src={product.image}
         alt={product.name}
         className="w-full h-auto aspect-video object-cover transition-transform duration-300 hover:scale-105"
       />
        </div>
     </div>


        {/* Product Info */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-600">{product.name}</h1>
          <p className="text-xl font-semibold">{product.price}</p>
          <p className="text-gray-300 leading-relaxed">{product.description || "No description available."}</p>
        </div>

        {/* Add to Cart */}
        <div className="mt-10 text-center">
         <button className="rounded-full border-[1px] py-1 px-8 md:border-[2px] md:py-[5px] md:px-12 border-orange-600 hover:bg-orange-600 duration-300 hover:text-white transition">
              Contact
         </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
