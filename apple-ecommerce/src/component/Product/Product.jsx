import ProductDetails from "../ProductDetails/ProductDetails";
import "./Product.css";
import {Link} from 'react-router-dom'
function Product({ product }) {
  // const {color} = product.color
  return (
    <div className="product">
     <Link to={`/product/${product._id}`}>
      <img className="product-img" src={product.picture} alt="" />
     </Link>
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        {product.color.map((col,i) => (
          <button className="product-clr-btn"
          key={i}
            style={{
              backgroundColor: (col=== "yellow")?'#EADB5D':(col === "silver")?'#E3E4E5':(col=== "blue")?'#8EADBF':(col=== "pink")?'#E6D2CF':(col=== "purple")?'#BAB7D1':(col=== "red")?'#D66274':(col=== "red")?'#D66274':col,
            }}
          ></button>
        ))}
      </p>
      <h3>{product.name} <br /><span className="product-span">{product.subName ? product.subName:<div style={{ width: '100%', height: '2.2em' }}></div>}</span></h3>
      
      <h4>From {product.price}</h4>
      <button className="product-btn">Buy</button>
     
    </div>
  );
}

export default Product;
