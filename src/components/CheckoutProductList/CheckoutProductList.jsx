import ProductItem from "./ProductItem/ProductItem";
import styles from "./style.module.scss";

import { IMAGE_URL } from "../../constants/constants";

const CheckoutProductList = ({ products }) => {
	return (
		<ul className={styles["checkout-product-list"]}>
			{products.map((product) => (
				<ProductItem
					key={product.id}
					name={product.name}
					price={product.price}
					image={`${IMAGE_URL}${product.image}`}
					description={product.description}
					quantity={2}
				/>
			))}
		</ul>
	);
};

export default CheckoutProductList;
