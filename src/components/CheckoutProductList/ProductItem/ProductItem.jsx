import styles from "./style.module.scss";
import TrashIcon from "../../../assets/icons/Trash Can.svg";

const ProductItem = ({ price, quantity, description, name, image }) => {
	return (
		<li className={styles.productItem}>
			<img src={image} />
			<div>
				<h3>{name}</h3>
				<span>{description}</span>
			</div>
			<input type="number" value={quantity} />
			<span className={styles.price}>{price}€</span>
			<button className={styles.button}>
				<img src={TrashIcon} />
			</button>
		</li>
	);
};

export default ProductItem;
