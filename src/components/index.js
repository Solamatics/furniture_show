import { useState, useEffect } from "react";
import "../App.css";
import defaultImage from "../assets/default-image.jpeg";
import Products from './Products'

//products api to be consumed
const url = "https://course-api.com/react-prop-types-example";



const Index = () => {
  const [products, setProducts] = useState([]);
  

  const fetchData = async () => {
    const response = await fetch(url);
    const products = await response.json();
    // console.log(products);
    setProducts(products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <section className="products">
        {products.map((product) => {
          return <Products key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Index;
