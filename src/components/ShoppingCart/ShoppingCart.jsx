import BackAction from "../BackAction/BackAction";
import CheckoutInfo from "../CheckoutInfo/CheckoutInfo";
import Payment from "../Payment/Payment";

import "./style.css";
import style from "../BackAction/style.module.scss";
import { useEffect, useState } from "react";

// Se o existirem dados na resposta apresentar carrinho
// Caso não existam apresentar <h1>Não tens produtos no carrinho</h1>

const ShoppingCart = () => {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5173/api/data.json")
			.then((res) => res.json())
			.then((data) => {
				setCart(data);
			});
	}, []);

	console.log(cart);

	return (
		<section className={`shopping-cart-container ${style.wrapper}`}>
			<div className="cart-info">
				<BackAction linkTo="/cart" title="Shopping Continue" />
				{cart.length > 0 ? (
					<CheckoutInfo products={cart}></CheckoutInfo>
				) : (
					<h1>Não tens produtos no carrinho</h1>
				)}
			</div>

			<Payment />
		</section>
	);
};

export default ShoppingCart;
