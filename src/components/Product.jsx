import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const navigate = useNavigate();

  const clickProduct = () => {
    navigate(`/products/${product.id}`);
  };

  // Error handling: if product not found
  if (!product) {
    return (
      <h2 className="text-center text-red-500 font-semibold text-lg mt-4">
        Product not found
      </h2>
    );
  }

  return (
    <div
      onClick={clickProduct}
      className="cursor-pointer flex flex-col items-center justify-between 
        p-4 m-4 rounded-xl shadow-lg bg-white 
        hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
    >
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-56 w-full object-contain mb-4"
      />

      {/* Product Title & Price Section */}
      <div className="w-full px-2">
        {/* Title */}
        <h3 className="text-base font-medium text-gray-800 truncate mb-2">
          {product.title.split(" ").slice(0, 2).join(" ")}
        </h3>

        {/* Price */}
        <p className="text-green-600 font-bold text-lg">
          ₹{product.price}
        </p>
      </div>
    </div>
  );
};

export default Product;
