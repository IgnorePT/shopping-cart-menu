import CheckoutProductList from "../CheckoutProductList/CheckoutProductList";
import styles from "./style.module.scss";

const CheckoutInfo = ({ products }) => {
	const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
	return (
		<div className={styles["checkout-product-info"]}>
			<div className={styles["head-checkout-info"]}>
				<h3>Shopping cart</h3>
				<p>You have {products.length} item in your cart</p>
				<p>You have {totalPrice}€ in products</p>
			</div>

			<CheckoutProductList products={products} />
		</div>
	);
};

export default CheckoutInfo;
