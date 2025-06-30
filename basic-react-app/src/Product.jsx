
import './Product.css';

export default  function Product({title , price}) {
    
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5>{price}</h5>
        </div>
    );
}

