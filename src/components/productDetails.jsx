import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/appContext";

const ProductDetail = () => {
  const { id } = useParams();
    const {products} = useContext(AppContext);
    const product = products.find((p) => p.id === parseInt(id));


  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-60 object-contain mb-4"
        />
        <h1 className="text-2xl font-bold text-center">{product.title}</h1>
        <p className="text-center text-gray-600 mt-2 capitalize">
          {product.category}
        </p>
        <p className="text-center text-green-600 font-bold text-xl mt-2">
          ₹{product.price}
        </p>
        <p className="text-sm text-gray-600 mt-4 text-center">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
