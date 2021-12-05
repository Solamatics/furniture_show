import defaultImage from "../assets/default-image.jpeg";
import "../App.css";

const Products = ({ name, image, price }) => {
    const url = image && image.url;
    const defaultPrice = 3.99
    return (
      <article className="product">
          <img src={url || defaultImage} alt={name} />
          <h3>{name}</h3>
          <p>${price || defaultPrice}</p>
      </article>
    );
}

export default Products
