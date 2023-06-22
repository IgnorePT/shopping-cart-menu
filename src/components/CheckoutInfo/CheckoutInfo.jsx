import CheckoutProductList from "../CheckoutProductList/CheckoutProductList";
import "./style.css";

const CheckoutInfo = () => {
	return (
		<div className="checkout-product-info">
			<div className="head-checkout-info">
				<h3>Shopping cart</h3>
				<p>You have 3 item in your cart</p>
			</div>

			<CheckoutProductList />
		</div>
	);
};

export default CheckoutInfo;
