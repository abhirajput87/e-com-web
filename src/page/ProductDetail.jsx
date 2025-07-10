import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const ProductDetail = () => {
  const { id } = useParams();
  const { products, loading } = useContext(AppContext);
  const product = products.find((p) => p.id === parseInt(id));

  const navigate = useNavigate();
  <button onClick={() => navigate(-1)}>⬅ Back</button>;

  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ["S", "M", "L", "XL", "XXL"];
  // if (!product) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <Spinner />
  //     </div>
  //   );
  // }

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 px-4 py-6">
  {/* Image Section */}
  <div className="w-full lg:w-1/2">
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-contain rounded-lg shadow-md mb-6"
    />
    {/* Image: Responsive height, rounded and shadow for clean look */}
  </div>

  {/* Product Info Section */}
  <div className="w-full lg:w-1/2 space-y-4">
    {/* Title and Price Row */}
    <div className="flex justify-between items-center">
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
        {product.title.split(" ").slice(0, 2).join(" ")}
      </h1>
      <p className="text-xl sm:text-2xl font-bold text-blue-600">
        ${product.price}
      </p>
    </div>

    {/* Category */}
    <p className="text-sm sm:text-base text-gray-500 capitalize">
      {product.category}
    </p>

    {/* Size Selection Label */}
    <p className="mt-6 font-medium text-gray-700">Select Size:</p>

    {/* Size Buttons */}
    <div className="flex flex-wrap gap-3">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => setSelectedSize(size)}
          className={`w-20 py-2 rounded-lg border transition-all duration-200 font-semibold
          ${
            selectedSize === size
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-800 border-gray-300 hover:bg-blue-50"
          }`}
        >
          {size}
        </button>
      ))}
    </div>

    {/* Add to Cart Button */}
    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 mt-4">
      Add To Cart
    </button>

    {/* Description */}
    <p className="mt-4 font-thin">Description</p>
    <p className="text-sm text-gray-600 text-justify">
      {product.description}
    </p>
  </div>
</div>

      )}
    </div>
  );

  // return (
  //   <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
  //     <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
  //       <img
  //         src={product.image}
  //         alt={product.title}
  //         className="w-full h-60 object-contain mb-4"
  //       />
  //       <h1 className="text-2xl font-bold text-center">{product.title}</h1>
  //       <p className="text-center text-gray-600 mt-2 capitalize">
  //         {product.category}
  //       </p>
  //       <p className="text-center text-green-600 font-bold text-xl mt-2">
  //         ₹{product.price}
  //       </p>
  //       <p className="text-sm text-gray-600 mt-4 text-center">
  //         {product.description}
  //       </p>
  //     </div>
  //   </div>
  // );
};

export default ProductDetail;
