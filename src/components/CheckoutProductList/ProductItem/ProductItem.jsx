import "./style.css";
import TrashIcon from "../../../assets/icons/Trash Can.svg";

const ProductItem = ({ price, quantity, description, name, image }) => {
	return (
		<li className="product-item">
			<img src={image} />
			<div>
				<h3>{name}</h3>
				<span>{description}</span>
			</div>
			<input type="number" value={quantity} />
			<span className="price">{price}€</span>
			<button>
				<img src={TrashIcon} />
			</button>
		</li>
	);
};

export default ProductItem;
