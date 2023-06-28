import ProductItem from "./ProductItem/ProductItem";
import "./style.css";

import { IMAGE_URL } from "../../constants/constants";

const data = [
	{
		id: 1,
		name: "Italy Pizza",
		price: 881,
		image: "pizza_1.png",
		description: "Extra cheese and toping",
		quantity: 2,
	},
	{
		id: 2,
		name: "Combo Plate",
		price: 887,
		image: "pizza_2.png",
		description: "Extra cheese and toping",
		quantity: 1,
	},
	{
		id: 3,
		name: "Spanish Rice",
		price: 981,
		image: "rice.png",
		description: "Extra garllic",
		quantity: 1,
	},
];

const CheckoutProductList = () => {
	return (
		<ul className="checkout-product-list">
			{data.map((product) => (
				<ProductItem
					key={product.id}
					name={product.name}
					price={product.price}
					image={`${IMAGE_URL}${product.image}`}
					description={product.description}
					quantity={product.quantity}
				/>
			))}
		</ul>
	);
};

export default CheckoutProductList;

// const aarray2 = [];

// for (let i = 0; i < 3; i++) {
// 	aarray2.push(React.createElement("li"));
// }

// React.createElement("ul", {}, [
// 	...aarray2,
// 	React.createElement("li"),
// 	React.createElement("li"),
// ]);
