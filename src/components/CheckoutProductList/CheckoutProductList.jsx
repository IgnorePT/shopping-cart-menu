import ProductItem from "./ProductItem/ProductItem";
import styles from "./style.module.scss";

import { IMAGE_URL } from "../../constants/constants";

//Renderizaçao Condicional
//
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
