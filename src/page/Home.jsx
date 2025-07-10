import React, { useContext } from "react";
import Spinner from "../components/Spinner";
import { AppContext } from "../context/appContext";
import Product from "../components/Product";

const Home = () => {
  const { loading, post, filteredProducts } = useContext(AppContext);

  return (
    <div className="w-11/12 max-w-[1200px] mx-auto min-h-screen py-8">
      {/* Spinner while loading */}
      {loading ? (
        <div className="flex justify-center items-center h-[80vh]">
          <Spinner />
        </div>
      ) : post.length > 0 ? (
        // Product Grid
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      ) : (
        // No Data Fallback
        <div className="flex justify-center items-center h-[60vh]">
          <span className="text-2xl font-semibold text-gray-500">
            No data found
          </span>
        </div>
      )}
    </div>
  );
};

export default Home;
