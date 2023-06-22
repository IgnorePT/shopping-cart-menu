import ProductItem from "./ProductItem/ProductItem";
import "./style.css";
import Pizza1 from "../../assets/images/pizza_1.png";
import Pizza2 from "../../assets/images/pizza_2.png";
import Rice from "../../assets/images/rice.png";

const CheckoutProductList = () => {
	return (
		<ul className="checkout-product-list">
			<ProductItem
				name="Italy Pizza"
				price={881}
				image={Pizza1}
				description="Extra cheese and toping"
				quantity={2}
			/>
			<ProductItem
				name="Combo Plate"
				price={887}
				image={Pizza2}
				description="Extra cheese and toping"
				quantity={1}
			/>
			<ProductItem
				name="Spanish Rice"
				price={981}
				image={Rice}
				description="Extra garllic"
				quantity={1}
			/>
		</ul>
	);
};

export default CheckoutProductList;
