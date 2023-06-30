import CheckoutProductList from "../CheckoutProductList/CheckoutProductList";
import styles from "./style.module.scss";

const CheckoutInfo = ({ products }) => {
	const getTotalItemsCount = (products) => {
		let total = 0;

		//FOr
		// for (let i = 0; i < products.length; i++) {
		// 	total += products[i].quantity;
		// }

		//Reduce
		total = products.reduce((accumulator, currentValue) => {
			return currentValue.quantity + accumulator;
		}, 0);

		return total;
	};

	return (
		<div className={styles["checkout-product-info"]}>
			<div className={styles["head-checkout-info"]}>
				<h3>Shopping cart</h3>
				<p>You have {getTotalItemsCount(products)} item in your cart</p>
			</div>

			<CheckoutProductList products={products} />
		</div>
	);
};

export default CheckoutInfo;
