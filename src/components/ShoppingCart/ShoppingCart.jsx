import BackAction from "../BackAction/BackAction";
import CheckoutInfo from "../CheckoutInfo/CheckoutInfo";
import Payment from "../Payment/Payment";

import "./style.css";
import style from "../BackAction/style.module.scss";

const ShoppingCart = () => {
	return (
		<section className={`shopping-cart-container ${style.wrapper}`}>
			<div className="cart-info">
				<BackAction linkTo="/cart" title="Shopping Continue" />
				<CheckoutInfo></CheckoutInfo>
			</div>

			<Payment />
		</section>
	);
};

export default ShoppingCart;
