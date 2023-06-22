import BackAction from "../BackAction/BackAction";
import CheckoutInfo from "../CheckoutInfo/CheckoutInfo";

import "./style.css";

const ShoppingCart = () => {
	return (
		<section className="shopping-cart-container">
			<div className="cart-info">
				<BackAction linkTo="/cart" title="Shopping Continue" />

				<CheckoutInfo></CheckoutInfo>
			</div>

			<div className="payment-info">Payment Info</div>
		</section>
	);
};

export default ShoppingCart;
