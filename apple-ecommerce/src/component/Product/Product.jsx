import ProductDetails from "../ProductDetails/ProductDetails";
import "./Product.css";
import {Link} from 'react-router-dom'
function Product({ product }) {
  // const {color} = product.color
  return (
    <div className="product">
     <Link to={`/product/${product._id}`}>
      <img src={product.picture} alt="" />
     </Link>
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        {product.color.map((col,i) => (
          <button
          key={i}
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: (col=== "yellow")?'#f1c40f':(col === "gray")?'#2ecc71':col,
              border: "none",
              outline: "none",
              borderRadius: "50%",
              marginRight: "5px",
            }}
          ></button>
        ))}
      </p>
      <h3>{product.name}</h3>
      <p>starts at: {product.price}</p>
      <button>Buy</button>
     
    </div>
  );
}

export default Product;
