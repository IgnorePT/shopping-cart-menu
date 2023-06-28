import CheckoutProductList from "../CheckoutProductList/CheckoutProductList";
import styles from "./style.module.scss";

const CheckoutInfo = ({ products }) => {
	return (
		<div className={styles["checkout-product-info"]}>
			<div className={styles["head-checkout-info"]}>
				<h3>Shopping cart</h3>
				<p>You have 3 item in your cart</p>
			</div>

			<CheckoutProductList products={products} />
		</div>
	);
};

export default CheckoutInfo;
