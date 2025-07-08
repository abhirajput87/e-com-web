import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {

    const navigate =useNavigate();

  const clickProduct = () => {
    navigate(`/productDetails/${product.id}`);
  }


  if (!product) 
    return 
    <h2 className="text-center text-red-500">Product not found</h2>;
  
  return (
    <div onClick={clickProduct} className='shadow-[0px_-1px_100px_0px_#cbd5e0] cursor-pointer flex flex-col  p-4 mt-10 ml-5
    rounded-xl items-center justify-between opacity-100 hover:opacity-80 
    hover:shadow-[0px_-1px_100px_0px_#718096] hover:transition-transform duration-500'>
      <div key={product.id}>
        
          <img src={product.image} alt={product.title} className="h-56 object-contain mb-4" />
        
        <div className="flex gap-6">
          <h3 className="text-l font-light text-gray-800">{product.title.split(" ").slice(0,2).join(" ")}</h3>
          <div className='flex'>
            <p className="text-green-600 font-bold text-lg">₹{product.price}</p>
            {/* <p className="text-gray-500 font-thin text-sm">{product.category}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

