import { createContext, useState, useEffect } from "react";
import { products as localProducts } from "../data";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]); 

  // API se data fetch
  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPost(data);
    } catch (error) {
      console.log("Error while fetching data");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  // Local data from data.js
  useEffect(() => {
    setProducts(localProducts);
    setFilteredProducts(localProducts); 
  }, []);

  
  const filterHandler = (category) => {
    const filtered = products.filter((item) => item.category === category);
    setFilteredProducts(filtered);
  };

  
  const showAllHandler = () => {
    setFilteredProducts(products);
  };

  const value = {
    loading,
    post,
    isHovered,
    setIsHovered,
    products,
    filteredProducts,
    filterHandler,
    showAllHandler,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
