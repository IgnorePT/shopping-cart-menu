import ProductItem from "./ProductItem/ProductItem";
import "./style.css";

import pizza1 from "../../assets/images/pizza_1.png";
import pizza2 from "../../assets/images/pizza_2.png";
import riceImg from "../../assets/images/rice.png";

const CheckoutProductList = () => {
	return (
		<ul className="checkout-product-list">
			<ProductItem
				name="Italy Pizza"
				price={881}
				image={pizza1}
				description="Extra cheese and toping"
				quantity={2}
			/>
			<ProductItem
				name="Combo Plate"
				price={887}
				image={pizza2}
				description="Extra cheese and toping"
				quantity={1}
			/>
			<ProductItem
				name="Spanish Rice"
				price={981}
				image={riceImg}
				description="Extra garllic"
				quantity={1}
			/>
		</ul>
	);
};

export default CheckoutProductList;
