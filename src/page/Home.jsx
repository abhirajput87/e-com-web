import React, { useContext } from "react";
import Spinner from "../components/Spinner";
import { AppContext } from "../context/appContext";
import Product from "../components/Product";

const Home = () => {
  const { loading, post } = useContext(AppContext);
  const { filteredProducts } = useContext(AppContext);

  return (
    <div className="">
      {loading ? (
        <Spinner />
      ) : post.length > 0 ? (
        <div className="max-w-6xl p-4 mx-auto space-y-10 space-x-5 grid-cols-3 grid-flow-row grid mt-4 ">
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product}/>
            
          ))}
        </div>
      ) : (
        <div className="">
          <span className="flex justify-center  h-100vh ">No data found</span>
        </div>
      )}
    </div>
  );
};

export default Home;
